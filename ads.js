var utils = require('./utils'),
    db = require('./db');

// The test data.
var testdata = require('./testdata.json');

var settings = {
  minimum: 3 // Minimum amount of likes before showing ads of that type
};

var ads = module.exports = {};

// Loads an ad by its ID.
ads.load = function (id, callback) {
  callback(null, testdata[id]);
};

// Returns a random ad.
ads.getRandom = function (callback) {
  db.srandmember(set, callback);
};

// Returns an ad matching the user's profile.
ads.getByProfile = function (socket, callback) {
  socket.get('sid', function (err, sid) {
    var userSet = 'user:' + sid + ':ads';

    utils.async.waterfall([
      // Get user's liked/disliked categories (ordered by score).
      function getUsersCategories (callback) {
        var args = ['user:' + sid + ':categories', '+inf', settings.minimum, 'withscores'];
        db.zrevrangebyscore(args, callback);
      },

      // Create user's set of ads from liked categories, if any.
      function createUserSet (result, callback) {
        if (result.length) {
          var args = [userSet];

          for (var i = 0, len = result.length / 2; i < len; i++) {
            var item = result.splice(0, 2);
            var category = item[0];
            var score = item[1];
            args.push('index:category:' + category);
          }

          db.sunionstore(args, callback);
        }
        else {
          // Let the following task know the user hasn't liked any categories.
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

      // Get a random ad from the set (user's set, gender's index or all ads).
      function getRandomAd (set, callback) {
        db.srandmember(set, callback);
      }
    ],

    // Return results to callback.
    function (err, id) {
      if (err) {
        callback(err);
      }
      else {
        ads.load(id, callback);
      }
    });
  });
};
