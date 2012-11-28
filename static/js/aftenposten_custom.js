$(function () {


  var socket = io.connect();
	$('div#facebook_emitter').css("cursor", "pointer");

	$('div#facebook_emitter').on('click', function(){
    socket.emit('facebook-like', {"category": "travel"});
	});
});