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

var redisClient = redis.createClient(6397, '127.0.0.1');

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
