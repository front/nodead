var socketio = require('socket.io');

var utils = require('./utils'),
    db = require('./db'),
    ads = require('./ads');

exports.init = function (server, cookieParser) {
  var io = socketio.listen(server);

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
  // Pass settings on to the client.
  socket.emit('settings', ads.settings);

  // Send the first ad to the client.
  socket.emitAds(socket);

  // Join the room for this user session.
  socket.join(socket.sid);

  // User likes an ad.
  socket.on('like', function (data) {
    ads.updateScore(socket, data.id, 1, function (err, category) {
      if (err) return console.log(err);
      console.log(socket.sid + ' on ' + category.name + ': ' + category.score + ' (like after ' + Math.floor(data.timeOnAd / 1000) + ' seconds)');
      socket.emitAds();
    });
  });

  // User doesn't like an ad.
  socket.on('dislike', function (data) {
    ads.updateScore(socket, data.id, -1, function (err, category) {
      if (err) return console.log(err);
      console.log(socket.sid + ' on ' + category.name + ': ' + category.score + ' (dislike after ' + Math.floor(data.timeOnAd / 1000) + ' seconds)');
      socket.emitAds();
    });
  });

  // If client clicks a facebook like, increase he's like of that category by 10
  socket.on('facebook-like', function (data){
    console.log(data);
    if (err) return console.log(err);
    db.zincrby('user:' + socket.sid + ':categories', 10, data.category, function (err, score) {
      if (err) return console.log(err);
      console.log(socket.sid + ' on ' + data.category + ': ' + score + ' (like after ' + Math.floor(data.timeOnAd/1000) + ' seconds)');
    });
  });

  // User can't get enough of those ads.
  socket.on('next', function (data) {
    socket.emitAds();
  });

  // User has changed gender. (Say what now??)
  socket.on('gender', function (gender) {
    socket.gender = gender;
  });

  socket.on('disconnect', function () {
    console.log(socket.sid + ' disconnected');
  });
}

// Returns the socket client's session ID from Express.
socketio.Socket.prototype.getSid = function (cookieParser, callback) {
  var socket = this;
  cookieParser(socket.handshake, {}, function (err) {
    callback(err, socket.handshake.signedCookies['connect.sid']);
  });
}

// Emits new ads for this socket connection.
socketio.Socket.prototype.emitAds = function (recipients) {
  var socket = this;

  if (utils.isUndefined(recipients)) {
    recipients = socket.in(socket.sid);
  }

  // TODO Not working, recipients should be array of clients connected to room.
  var count = utils.isArray(recipients) ? recipients.length : 1;

  ads.getByProfile(socket, count, function (err, data) {
    if (err) return console.log(err);
    recipients.emit('ads', data);
  });
};
