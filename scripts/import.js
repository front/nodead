var async = require('async'),
    redis = require('redis'),
    db = redis.createClient();

var testAds = require('../testdata.json');

async.series({
  // Insert test ads into the 'ad' hashtable.
  import: function (callback) {
    var multi = db.multi();

    for (var id in testAds) {
      var ad = testAds[id];

      var args = ['ad:' + id];

      var propertyNames = Object.getOwnPropertyNames(ad);
      propertyNames.forEach(function (name) {
        args.push(name);
        args.push(ad[name]);
      });

      multi.hmset(args);
    }

    multi.exec(callback);
  },

  // Index ads.
  index: function (callback) {
    var multi = db.multi();

    for (var id in testAds) {
      var ad = testAds[id];
      multi.sadd('index:' + ad.category, id);
    }

    multi.exec(callback);
  }
}, function done (err, results) {
  if (err) console.log('Error: ' + err);
  console.log('Imported: ' + results.import.length);
  console.log('Indexed: ' + results.index.length);
  process.exit(err ? 1 : 0);
});
