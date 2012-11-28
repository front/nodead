$(function () {
  var socket = io.connect();
  var current;
  socket.on('ad', function (data) {
    console.log(data);

   var newListEl =  '<li class="ad"><h2>' + data.ad.title + '</h2><img src="' + data.ad.img + '"><span class="slide-text">← Slide me</span></li>';
    $("ul#ads").append(newListEl);
    $('ul#ads li:first').remove();

    current = data.ad;
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

 document.querySelector('#man-toggle')
  .addEventListener('toggle', function(e){
    if (e.detail.isActive){
      socket.emit('gender', 'men');
    } else {
      socket.emit('gender', 'both');
    }
  });
});
