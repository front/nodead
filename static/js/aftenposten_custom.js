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
      var el = $('<img>').attr('src', ad.img);
      $('#ad' + i).fadeOut().html(el).fadeIn();
    });
  });

	$('div#facebook_emitter').css("cursor", "pointer");

	$('div#facebook_emitter').on('click', function() {
    socket.emit('facebook-like', {
      category: "travel"
    });
	});
});
