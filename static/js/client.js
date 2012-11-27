$(function () {
  var socket = io.connect();

  // Current ad bein watched
  var current;

  // Handle new incoming ad
  socket.on('ad', function (data) {
    var newListEl =  '<li class="ad"><h2>' + data.title + '</h2><img src="' + data.img + '"><span class="slide-text">← Slide me</span></li>';
    $("ul#ads").append(newListEl);
    $('ul#ads li:first').remove();

    current = data;
    current.timeStart = new Date().getTime();
  });

  // Handle likes and dislikes from user
  $('#like').on('click', function () {
    var timeOnAd = new Date().getTime() - current.timeStart;
    socket.emit('like', {"id": current.id, "timeOnAd": timeOnAd});
    socket.emit('next');
  });

  $('#dislike').on('click', function () {
    var timeOnAd = new Date().getTime() - current.timeStart;
    socket.emit('dislike', {"id": current.id, "timeOnAd": timeOnAd});
    socket.emit('next');
  });

  // Emit gender preference on toggle
  document.querySelector('#man-toggle')
  .addEventListener('toggle', function(e){
    if (e.detail.isActive){
      socket.emit('set gender', 'men');
    } else {
      socket.emit('set gender', 'women');
    }
  });
});
