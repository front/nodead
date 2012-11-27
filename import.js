var utils = require('./utils'),
    db = require('./db');

var ads = require('../testdata.json');

utils.async.series({
  // Insert test ads into the 'ad' hashtable.
  import: function (callback) {
    var multi = db.multi();

    for (var id in ads) {
      var ad = ads[id];

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

    for (var id in ads) {
      var ad = ads[id];
      multi.sadd('index:all', id);
      multi.sadd('index:category:' + ad.category, id);
      multi.sadd('index:gender:' + ad.gender, id);
    }

    multi.exec(callback);
  }
}, function done (err, results) {
  if (err) console.log('Error: ' + err);

  console.log('Ads: ' + results.import.length);
  console.log('Indexes: ' + results.index.length);

  process.exit(err ? 1 : 0);
});
