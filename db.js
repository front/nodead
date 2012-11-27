var redis = require('redis');

var db = module.exports = redis.createClient();

db.on('error', function (err) {
  console.log('Error ' + err);
});

//redis.debug_mode = true;
