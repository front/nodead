var async = require('async'),
    redis = require('redis'),
    db = redis.createClient();

var ads = require('../testdata.json');

async.series({
  // Insert test ads into the 'ad' hashtable.
  import: function (callback) {
    var multi = db.multi();

    for (ad in ads) {
      for (prop in ads[ad]){
        multi.hmset('ad:' + ad.id, prop, ads[ad][prop], function (err, replies) {});
      }
    }

    multi.exec(callback);
  },

  // Index ads.
  index: function (callback) {
    var multi = db.multi();

    ads.forEach(function (ad) {
      multi.sadd('index:' + ad.category, ad.id);
    });

    multi.exec(callback);
  }
}, function done (err, results) {
  if (err) console.log('Error: ' + err);
  // console.log('Imported: ' + results.import.length);
  console.log('Indexed: ' + results.index.length);
  process.exit(err ? 1 : 0);
});
