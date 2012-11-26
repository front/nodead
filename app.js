// Modules.
var http = require('http'),
    connect = require('connect'),
    express = require('express'),
    path = require('path'),
    socketio = require('socket.io'),
    SessionSockets = require('session.socket.io'),
    redis = require('node-redis'),
    RedisStore = require('connect-redis')(express);

var app = express();

var db = redis.createClient();

var sessionStore = new RedisStore({ client: db }),
    cookieParser = express.cookieParser('your secret here');

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(cookieParser);
  app.use(express.session({ store: sessionStore, secret: 'your secret here' }));
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'static')));
});

app.configure('development', function() {
  app.use(express.errorHandler());
});

var routes = require('./routes');
app.get('/', routes.index);

var server = http.createServer(app),
    io = socketio.listen(server),
    sessionSockets = new SessionSockets(io, sessionStore, cookieParser);

// Start up the engine.
server.listen(app.get('port'));
sessionSockets.on('connection', function (err, socket, session) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(session);
  });
});
