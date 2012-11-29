var utils = require('./utils'),
    db = require('./db');

var testdata = require('./testdata.json');

var ads = module.exports = {};

ads.settings = {
  likePromote: 3, // Likes at or above this value will promote a category
  likeExclude: -3, // Likes at or below this value will exclude a category
  likeSeed: 1 // Number of categories to be seeded with promoted categories
};

// Loads an ad by its ID, could be a database lookup.
ads.load = function (id, callback) {
  callback(null, testdata[id]);
};

// Updates a user's like/dislike score of an ad's category.
ads.updateScore = function (socket, id, points, callback) {
  var self = this;
  self.load(id, function (err, ad) {
    if (err) return callback(err);
    db.zincrby('user:' + socket.data.sid + ':categories', points, ad.category, function (err, score) {
      callback(err, { name: ad.category, score: score });
    });
  });
}

// Returns the specified number of random ads from the specified set.
ads.getRandom = function (count, set, callback) {
  var self = this;

  if (utils.isFunction(set)) {
    callback = set;
    set = 'index:all';
  }

  db.srandmember(set, count, function (err, ids) {
    var tasks = [];

    // Asynchronously load the returned ads in parallel.
    ids.forEach(function (id) {
      tasks.push(self.load.bind(self, id));
    });

    utils.async.parallel(tasks, callback);
  });
};

// Returns the user's liked/disliked categories with scores, sorted descending.
ads.getUsersCategories = function (socket, callback) {
  var args = ['user:' + socket.data.sid + ':categories', '+inf', '-inf', 'withscores'];

  db.zrevrangebyscore(args, function (err, results) {
    var categories = [];

    // Transform redis result to an object structure.
    if (results.length) {
      for (var i = 0, len = results.length / 2; i < len; i++) {
        var item = results.splice(0, 2);
        categories.push({
          name: item[0],
          score: parseInt(item[1], 10)
        });
      }
    }

    callback(err, categories);
  });
};

// Returns the specified amount of ads based on the user's profile.
ads.getByProfile = function (socket, count, callback) {
  var self = this;

  var userSet = 'user:' + socket.data.sid + ':ads';

  // Get user's liked/disliked categories.
  self.getUsersCategories(socket, function (err, categories) {
    utils.async.waterfall([
      // Create user's set of ads from liked categories, if any.
      function createUserSet (callback) {
        // The destination is the first argument.
        var args = [userSet];

        // User has at least one category with enough likes to be promoted.
        if (categories.length && categories[0].score >= self.settings.likePromote) {
          // Get promoted + any seeded categories. The categories array is
          // sorted by score, descending.
          for (var i = 0, l = categories.length, seeded = 0; i < l; i++) {
            var category = categories[i];

            // Stop after correct number of seeded categories have been added.
            if (category.score < self.settings.likePromote) {
              seeded++;
              if (seeded > self.settings.likeSeed || category.score <= self.settings.likeExclude) {
                break;
              }
            }

            args.push('index:category:' + category.name);
          }

          db.sunionstore(args, callback);
        }
        else {
          // User has no promoted categories, so base selection on all ads.
          args.push('index:all');

          // Filter out ads from categories with a score below exclusion level.
          for (var i = categories.length; i-- && categories[i].score <= self.settings.likeExclude;) {
            args.push('index:category:' + categories[i].name);
          }

          db.sdiffstore(args, callback);
        }
      },

      // Filter the user's set by gender, if specified.
      function genderFilter (result, callback) {
        // If previous task resulted in no ads, base the next steps on all ads.
        var set = result ? userSet : 'index:all';

        // Filter the user's set by intersecting with the gender's index.
        if (socket.data.gender) {
          db.sinterstore(userSet, set, 'index:gender:' + socket.data.gender, function (err, result) {
            callback(err, userSet);
          });
        }
        else {
          // No gender has been set, so skip to the next task.
          callback(null, set);
        }
      },

      // Get specified number of ids randomly from the set (user's or all).
      function getRandomAds (set, callback) {
        self.getRandom(count, set, callback);
      }
    ],

    // Return resulting ads together with the user's categories.
    function (err, ads) {
      if (err) {
        callback(err);
      }
      else {
        var data = {
          ads: utils.shuffle(ads),
          categories: categories
        };

        callback(null, data);
      }
    });

  });
};
