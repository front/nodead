$(function () {
  var socket = io.connect();

  socket.on('ads', function (data) {
    console.log(data);
  });

  $('#like').on('click', function () {
    socket.emit('like', 'very nice');
  });

  $('#dislike').on('click', function () {
    socket.emit('dislike', 'not nice');
  });
});
