var http = require('http'),
    express = require('express'),
    path = require('path'),
    RedisStore = require('connect-redis')(express);

var utils = require('./utils'),
    db = require('./db'),
    routes = require('./routes'),
    sockets = require('./sockets');

// Session handling.
var sessionSecret = 'the cake is a lie',
    sessionStore = new RedisStore({ client: db }),
    cookieParser = express.cookieParser(sessionSecret);

var app = express();

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

// Start up the engine.
var server = http.createServer(app);
server.listen(app.get('port'));
sockets.init(server, cookieParser);
