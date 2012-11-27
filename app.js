var http = require('http'),
    express = require('express'),
    path = require('path'),
    socketio = require('socket.io'),
    redis = require('redis'),
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

  // Sending the first ad to the client
db.hgetall("ad:1", function (err, obj) {
  socket.emit('new_ad', obj.toString());
});

  socket.on('like', function (data) {
    console.log(data);
  });

  socket.on('dislike', function (data) {
    console.log(data);
  });
});
redis.debug_mode = true;
db.on("error", function (err) {
  console.log("Error " + err);
});

// Import test ads
var testAds = require('./testdata.json');

// Insert test ads into the 'ad' hashtable
for (ad in testAds) {
  for(prop in testAds[ad]){
    db.hmset("ad:"+ad, prop, testAds[ad][prop]);  
  }
}

