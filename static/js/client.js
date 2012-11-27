$(function () {
  var socket = io.connect();
  var current;
  socket.on('ads', function (data) {
    console.log(data);

   var newListEl =  '<li class="ad"><img src="' + data.Img + '"><span class="slide-text">← Slide me</span></li>';
    $("ul").append(newListEl);
    $('ul li:first').remove();

    current = data;


  });

  $('#like').on('click', function () {
    socket.emit('like', current.id);
    console.log("like" + current.id);
    // $('ul li:first').remove();

  });

  $('#dislike').on('click', function () {
    socket.emit('dislike', current.id);
  });
});
