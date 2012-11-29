$(function () {
  var socket = io.connect();

  // Identify this connection with the server.
  socket.on('connect', function () {
    socket.emit('identify', {
      role: 'slave',
      ads: 3
    });
  });

  socket.on('ads', function (data) {
    $.each(data.ads, function (i, ad) {
      $('#ad' + i + ' img').fadeOut().attr('src', ad.img).fadeIn();
    });
  });

	$('div#facebook_emitter')
    .css('cursor', 'pointer')
    .on('click', function () {
      socket.emit('like', {
        type: 'facebook',
        category: 'travel'
      });
	});
});
