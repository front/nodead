var utils = require('./utils'),
    db = require('./db');

// The test data.
var testdata = require('./testdata.json');

var ads = module.exports = {};

ads.settings = {
  threshold: 3 // Minimum amount of likes before showing ads of that type
};

// Loads an ad by its ID.
ads.load = function (id, callback) {
  callback(null, testdata[id]);
};

// Returns the specified number of random ads (defaults to 1).
ads.getRandom = function (set, amount, callback) {
  if (utils.isFunction(amount)) {
    callback = amount;
    amount = 1;
  }

  db.srandmember(set, amount, callback);
};

// Returns a user's liked/disliked categories (ordered by score).
ads.getUsersCategories = function (sid, threshold, callback) {
  if (utils.isFunction(threshold)) {
    callback = threshold;
    threshold = null;
  }

  var args = ['user:' + sid + ':categories', '+inf', '-inf', 'withscores'];

  db.zrevrangebyscore(args, function (err, results) {
    var categories = [];

    if (results.length) {
      for (var i = 0, len = results.length / 2; i < len; i++) {
        var item = results.splice(0, 2);

        if (!utils.isNumber(threshold) || item[1] >= threshold) {
          categories.push({ name: item[0], score: parseInt(item[1], 10) });
        }
      }
    }

    callback(err, categories);
  });
};

// Returns the specified amount of ads matching the user's profile.
ads.getByProfile = function (amount, socket, callback) {
  var self = this;

  socket.get('sid', function (err, sid) {
    var userSet = 'user:' + sid + ':ads';

    utils.async.waterfall([
      self.getUsersCategories.bind(self, sid, self.settings.threshold),

      // Create user's set of ads from liked categories, if any.
      function createUserSet (categories, callback) {
        if (categories.length) {
          // Destination set.
          var args = [userSet];

          categories.forEach(function (category) {
            args.push('index:category:' + category.name);
          });

          // Store a union of ads from categories into user's set.
          db.sunionstore(args, callback);
        }
        else {
          // Let the next task know the user hasn't liked any categories enough.
          callback(null, 0);
        }
      },

      // Filter the user's set by gender, if specified.
      function filterByGender (result, callback) {
        socket.get('gender', function (err, gender) {
          if (!gender) {
            // No gender has been set, so go to next task. If user has liked
            // categories, pass user's set. Otherwise, pass index of all ads.
            callback(null, result ? userSet : 'index:all');
          }
          else {
            var genderIndex = 'index:gender:' + gender;

            if (result) {
              // The user has liked some categories, so filter the user's set by
              // intersecting with the gender's index. Pass the resulting user's
              // set to the next task as the set to get a random ad from.
              db.sinterstore(userSet, userSet, genderIndex, function (err, result) {
                callback(err, userSet);
              });
            }
            else {
              // No categories have been liked, so pass the gender's index to
              // the as next task as the set to get a random ad from.
              callback(null, genderIndex);
            }
          }
        });
      },

      // Get random ads from the set (user's set, gender's index or all ads).
      function getRandomAd (set, callback) {
        self.getRandom(set, amount, callback);
      }
    ],

    // Return results to callback. Output:
    // {
    //   ads: [{…}, {…}, …],
    //   categories: [{…}, {…}, …]
    // }
    function (err, ids) {
      if (err) {
        callback(err);
      }
      else {
        // Load ads and categories in parallel.
        var tasks = [self.getUsersCategories.bind(self, sid)];
        ids.forEach(function (id) {
          tasks.push(self.load.bind(self, id));
        });

        utils.async.parallel(tasks, function (err, results) {
          // First item is categories, the rest are ads.
          var categories = results.shift();

          var data = {
            ads: results,
            categories: categories
          };

          callback(err, data);
        });
      }
    });
  });
};
