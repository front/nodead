$(function () {

	$('div#facebook_emitter').on('click', function(){
    socket.emit('facebook-like', {"category": "travel"});
	});
});