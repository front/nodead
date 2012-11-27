$(function () {
  var socket = io.connect();
  var current;
  socket.on('ad', function (data) {
    console.log(data);

   var newListEl =  '<li class="ad"><h2>' + data.title + '</h2><img src="' + data.img + '"><span class="slide-text">← Slide me</span></li>';
    $("ul").append(newListEl);
    $('ul li:first').remove();

    current = data;
    current.timeStart = new Date().getTime();
    console.log('current:');
    console.log(current);


  });

  $('#like').on('click', function () {
    var timeOnAd = new Date().getTime() - current.timeStart;
    socket.emit('like', {"id": current.id, "timeOnAd": timeOnAd});
    // $('ul li:first').remove();

  });

  $('#dislike').on('click', function () {
    var timeOnAd = new Date().getTime() - current.timeStart;
    socket.emit('dislike', {"id": current.id, "timeOnAd": timeOnAd});
  });
});
