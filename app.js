// Modules.
var http = require('http'),
    connect = require('connect'),
    express = require('express'),
    path = require('path'),
    socketio = require('socket.io'),
    redis = require('node-redis'),
    RedisStore = require('connect-redis')(express);

var app = express();

var db = redis.createClient();

// Sessions.
var sessionSecret = 'the cake is a lie',
    sessionStore = new RedisStore({ client: db }),
    cookieParser = express.cookieParser(sessionSecret);

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(cookieParser);
  app.use(express.session({ store: sessionStore, secret: sessionSecret }));
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'static')));
});

app.configure('development', function() {
  app.use(express.errorHandler());
});

var routes = require('./routes');
app.get('/', routes.index);

var server = http.createServer(app),
    io = socketio.listen(server);

// Start up the engine.
server.listen(app.get('port'));

io.sockets.on('connection', function (socket) {
  // Store the client's session ID.
  cookieParser(socket.handshake, {}, function (err) {
    var sid = socket.handshake.signedCookies['connect.sid'];
    socket.set('cookie', sid);
  });

  socket.emit('news', { hello: 'world' });

  socket.on('my other event', function (data) {
    console.log(data);
  });
});
