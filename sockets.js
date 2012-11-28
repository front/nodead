var utils = require('./utils'),
    db = require('./db'),
    ads = require('./ads');

exports.connection = function (socket) {
  socket.get('sid', function (err, sid) {
    if (err) return console.log(err);
    console.log(sid + ' connected');
  });

  // Send the first ad to the client.
  ads.getByProfile(1, socket, function (err, data) {
    if (err) return console.log(err);
    socket.emit('ad', data);
  });

  // User likes an ad.
  socket.on('like', function (data) {
    // First load the ad and user's session ID.
    utils.async.parallel({
      ad: ads.load.bind(ads, data.id),
      sid: socket.get.bind(socket, 'sid')
    },
    function (err, results) {
      if (err) return console.log(err);

      var ad = results.ad, sid = results.sid;

      // Increment user's love for the category.
      db.zincrby('user:' + sid + ':categories', 1, ad.category, function (err, score) {
        if (err) return console.log(err);

        console.log(sid + ' on ' + ad.category + ': ' + score + ' (like after ' + Math.floor(data.timeOnAd/1000) + ' seconds)');

        // Return new ads for this user.
        ads.getByProfile(3, socket, function (err, data) {
          if (err) return console.log(err);
          socket.emit('ad', data);
        });
      });
    });
  });

  // User dislikes an ad.
  socket.on('dislike', function (data) {
    // First load the ad and user's session ID.
    utils.async.parallel({
      ad: ads.load.bind(ads, data.id),
      sid: socket.get.bind(socket, 'sid')
    },
    function (err, results) {
      if (err) return console.log(err);

      var ad = results.ad, sid = results.sid;

      // Decrement user's love for the category. Or increment hate, if you like.
      db.zincrby('user:' + sid + ':categories', -1, ad.category, function (err, score) {
        if (err) return console.log(err);

        console.log(sid + ' on ' + ad.category + ': ' + score + ' (dislike after ' + Math.floor(data.timeOnAd/1000) + ' seconds)');

        // Return new ads for this user.
        ads.getByProfile(3, socket, function (err, data) {
          if (err) return console.log(err);
          socket.emit('ad', data);
        });
      });
    })
  });

  // User wants more ads.
  socket.on('next', function (data) {
    ads.getByProfile(3, socket, function (err, ad) {
      if (err) return console.log(err);
      socket.emit('ad', ad);
    });
  });

  socket.on('gender', function (name) {
    socket.set('gender', name);
  });

  // If a client clicks a facebook like, increase he's like of that category by 10
  socket.on('facebook-like', function (data){
    console.log(data);
    socket.get('sid', function (err, sid) {
      if (err) return console.log(err);
      db.zincrby('user:' + sid + ':categories', 10, data.category, function (err, score) {
        if (err) return console.log(err);
        console.log(sid + ' on ' + data.category + ': ' + score + ' (like after ' + Math.floor(data.timeOnAd/1000) + ' seconds)');
      });
    });
  });
};