var http = require('http'),
    express = require('express'),
    path = require('path'),
    async = require('async'),
    socketio = require('socket.io'),
    redis = require('redis'),
    RedisStore = require('connect-redis')(express);

var app = express();

var db = redis.createClient();

var testAds = require('./testdata.json');

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
  // Store the client's session ID on connection.
  cookieParser(socket.handshake, {}, function (err) {
    var sid = socket.handshake.signedCookies['connect.sid'];
    socket.set('sid', sid);
    console.log(sid + ' connected');
  });

  // Send the first ad to the client.
  socket.emit('ad', testAds[1]);

  // Like an ad.
  socket.on('like', function (data) {
    console.log("User seems to really like item " + data.id + " so much that he stayed on it for " + data.timeOnAd/1000 + " seconds");

    var ad = testAds[data.id];

    socket.get('sid', function (err, sid) {
      if (err) return;
      db.zincrby('user:' + sid, 1, ad.category, function (err, score) {
        console.log(sid + ' liking ' + ad.category + ': ' + score);
      });
    })
  });

  // Dislike an ad.
  socket.on('dislike', function (data) {
    console.log("Yikes, user seems to really hate item " + data.id + " so much that he stayed on it for " + data.timeOnAd/1000 + " seconds");

    var ad = testAds[data.id];

    socket.get('sid', function (err, sid) {
      if (err) return;
      db.zincrby('user:' + sid, -1, ad.category, function (err, score) {
        console.log(sid + ' liking ' + ad.category + ': ' + score);
      });
    })
  });

  // Get the next ad.
  socket.on('next', function (data) {
    async.waterfall([
      function getSid (callback) {
        socket.get('sid', callback);
      },
      function getLikedCategories (sid, callback) {
        var args = ['user:' + sid, '+inf', '-inf', 'limit', 0, 2];
        db.zrevrangebyscore(args, callback);
      },
      function getAdsFromCategories (categories, callback) {
        var args = [];
        categories.forEach(function (category) {
          args.push('index:' + category);
        });
        db.sunion(args, callback);
      },
      function getRandomAd (ads, callback) {
        var id = ads[Math.floor(Math.random() * ads.length)];
        callback(null, id);
      }
    ],
    function done (err, id) {
      if (err) return;
      var ad = testAds[id];
      socket.emit('ad', ad);
    });
  });
});

//redis.debug_mode = true;
db.on("error", function (err) {
  console.log("Error " + err);
});
