var socketio = require('socket.io');

var utils = require('./utils'),
    db = require('./db'),
    ads = require('./ads');

exports.init = function (server, cookieParser) {
  var io = socketio.listen(server);

    socket.emit('ad', data);
  io.set('log level', 1);

  io.sockets.on('connection', function (socket) {
    // Store user's session ID.
    socket.getSid(cookieParser, function (err, sid) {
      if (err) return console.log(err);
      socket.sid = sid;
      console.log(sid + ' connected');
    });

    connection.call(this, socket);
  });

  return io;
}

var connection = function (socket) {

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