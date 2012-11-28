var utils = require('./utils'),
    db = require('./db'),
    ads = require('./ads');

exports.connection = function (socket) {
  socket.get('sid', function (err, sid) {
    console.log(sid + ' connected');
  });

  // Send the first ad to the client.
  ads.getByProfile(socket, function (err, data) {
    socket.emit('ad', data);
  });

  // User likes an ad.
  socket.on('like', function (data) {
    // First load the ad and user's session ID.
    utils.async.series({
      ad: ads.load.bind(ads, data.id),
      sid: socket.get.bind(socket, 'sid')
    },
    function (err, results) {
      var ad = results.ad, sid = results.sid;

      // Increment user's love for the category.
      db.zincrby('user:' + sid + ':categories', 1, ad.category, function (err, score) {
        console.log(sid + ' on ' + ad.category + ': ' + score + ' (like after ' + Math.floor(data.timeOnAd/1000) + ' seconds)');

        // Return a new ad for this user.
        ads.getByProfile(socket, function (err, data) {
          socket.emit('ad', data);
        });
      });
    });
  });

  // User dislikes an ad.
  socket.on('dislike', function (data) {
    // First load the ad and user's session ID.
    utils.async.series({
      ad: ads.load.bind(ads, data.id),
      sid: socket.get.bind(socket, 'sid')
    },
    function (err, results) {
      var ad = results.ad, sid = results.sid;

      // Decrement user's love for the category. Or increment hate, if you like.
      db.zincrby('user:' + sid + ':categories', -1, ad.category, function (err, score) {
        console.log(sid + ' on ' + ad.category + ': ' + score + ' (dislike after ' + Math.floor(data.timeOnAd/1000) + ' seconds)');

        // Return a new ad for this user.
        ads.getByProfile(socket, function (err, data) {
          socket.emit('ad', data);
        });
      });
    })
  });

  // User wants another ad.
  socket.on('next', function (data) {
    ads.getByProfile(socket, function (err, ad) {
      socket.emit('ad', ad);
    });
  });

  socket.on('gender', function (name) {
    socket.set('gender', name, function () {});
  });
};
