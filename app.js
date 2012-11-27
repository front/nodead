var http = require('http'),
    express = require('express'),
    path = require('path'),
    socketio = require('socket.io'),
    RedisStore = require('connect-redis')(express);

var app = express();

var utils = require('./utils'),
    db = require('./db'),
    routes = require('./routes'),
    sockets = require('./sockets');

// Sessions.
var sessionSecret = 'the cake is a lie',
    sessionStore = new RedisStore({ client: db }),
    cookieParser = express.cookieParser(sessionSecret);

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.static(path.join(__dirname, 'static')));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(cookieParser);
  app.use(express.session({ store: sessionStore, secret: sessionSecret }));
  app.use(app.router);
});

app.configure('development', function() {
  app.use(express.errorHandler());
});

// Routes.
utils.each(routes, function (callback, path) {
  app.get(path, callback);
});

var server = http.createServer(app),
    io = socketio.listen(server);

// Start up the engine.
server.listen(app.get('port'));

// Listen for socket connections.
io.set('log level', 1);
io.sockets.on('connection', function (socket) {
  // Store the client's session ID.
  cookieParser(socket.handshake, {}, function (err) {
    socket.set('sid', socket.handshake.signedCookies['connect.sid']);
  });


//redis.debug_mode = true;
db.on("error", function (err) {
  console.log("Error " + err);
  // Delegate to connection handler.
  sockets.connection(socket);
});
