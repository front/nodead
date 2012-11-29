var socketio = require('socket.io'),
    io;

var utils = require('./utils'),
    db = require('./db'),
    ads = require('./ads');

exports.init = function (server, cookieParser) {
  io = socketio.listen(server);

  io.set('log level', 1);

  io.sockets.on('connection', function (socket) {
    // Shortcut to MemoryStore's data for synchronous access.
    socket.data = socket.store.data;

    // Store user's session ID.
    socket.getSid(cookieParser, function (err, sid) {
      if (err) return console.log(err);
      socket.data.sid = sid;
    });

    connection.call(this, socket);
  });

  return io;
}

var connection = function (socket) {
  // Pass settings on to the client.
  socket.emit('settings', ads.settings);

  // Join the room for the socket's session.
  socket.join(socket.data.sid);

  // Client identifies with the server.
  socket.on('identify', function (data) {
    // Store data about the client.
    utils.defaults(socket.data, data);
    socket.data.id = socket.data.sid.substr(0, 10) + ':' + socket.data.role + ':' + socket.id.substr(0, 5);

    // Log the connection.
    console.log(socket.data.id + ' connected');

    // Send the first ads to the client.
    socket.sendAds(socket);
  });

  // User likes an ad.
  socket.on('like', function (data) {
    data.direction = 1;
    ads.updateScore(socket, data, function (err, category) {
      if (err) return console.log(err);
      console.log(socket.data.id + ' on ' + category.name + ': ' + category.score + ' (like after ' + Math.floor(data.time / 1000) + ' seconds)');
      socket.sendAds();
    });
  });

  // User doesn't like an ad.
  socket.on('dislike', function (data) {
    data.direction = -1;
    ads.updateScore(socket, data, function (err, category) {
      if (err) return console.log(err);
      console.log(socket.data.id + ' on ' + category.name + ': ' + category.score + ' (dislike after ' + Math.floor(data.time / 1000) + ' seconds)');
      socket.sendAds();
    });
  });

  // User can't get enough of those ads.
  socket.on('next', function (data) {
    socket.sendAds();
  });

  // User regrets decisions.
  socket.on('reset', function (data) {
    ads.resetScore(socket, data, function (err, category) {
      if (err) return console.log(err);
      console.log(socket.data.id + ' ' + category.name + ': ' + category.score + ' (reset)');
      socket.sendAds();
    });
  });

  // User has changed gender. (Say what now??)
  socket.on('gender', function (gender) {
    socket.data.gender = gender;
  });

  // Client disconnected.
  socket.on('disconnect', function () {
    console.log(socket.data.id + ' disconnected');
  });
}

// Returns the socket client's session ID from Express.
socketio.Socket.prototype.getSid = function (cookieParser, callback) {
  var self = this;
  cookieParser(self.handshake, {}, function (err) {
    callback(err, self.handshake.signedCookies['connect.sid']);
  });
}

// Emits new ads to the specified socket. Defaults to the session's connections.
socketio.Socket.prototype.sendAds = function (socket) {
  var self = this, clients, count = 0;

  // If no sockets were specified, use the session's socket connections.
  if (utils.isUndefined(socket)) {
    socket = io.sockets.in(self.data.sid);

    // Get the number of ads required by the session's clients.
    var clients = io.sockets.clients(self.data.sid);
    for (var i = clients.length; i--;) {
      count += clients[i].data.ads;
    }
  }
  else {
    clients = [socket];
    count = socket.data.ads;
  }

  // Get ads for the clients based on the socket's profile.
  ads.getByProfile(self, count, function (err, data) {
    if (err) return console.log(err);

    // Send to each client the number of ads that it specified when identifying.
    for (var i = clients.length; i--;) {
      var client = clients[i], output = {};

      if (client.data.role === 'logger') {
        output.categories = data.categories;
      }
      else {
        output.ads = data.ads.splice(0, client.data.ads);
      }

      client.emit('ads', output);
    }
  });
};

// Broadcast data to all sockets connected using the socket's session.
socketio.Socket.prototype.sessBroadcast = function (ev, data) {
  io.sockets.in(this.data.sid).emit(ev, data);
};
