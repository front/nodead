$(function () {
  var socket = io.connect();
  
  // Holds data for current shown ad
  var current;

  // Identify this connection with the server.
  socket.on('connect', function () {
    socket.emit('identify', {
      role: 'master',
      ads: 1
    });
  });

  socket.on('ads', function (data) {
    var el = constructNewAdElement(data);
    $('ul#ads').html(el);

    current = data.ads[0];
    current.timeStart = new Date().getTime();
  });
  
  $('.slider').on('slide',function(){
    var timeOnAd = new Date().getTime() - current.timeStart;
    socket.emit('like', {
      type: 'normal',
      id: current.id,
      time: timeOnAd
    });
  });

  $('#like').on('click', function () {
    var timeOnAd = new Date().getTime() - current.timeStart;
    socket.emit('like', {
      type: 'normal',
      id: current.id,
      time: timeOnAd
    });
  });

  $('#dislike').on('click', function () {
    var timeOnAd = new Date().getTime() - current.timeStart;
    socket.emit('dislike', {
      type: 'normal',
      id: current.id,
      time: timeOnAd
    });
  });

  document.querySelector('#man-toggle')
  .addEventListener('toggle', function(e){
    if (e.detail.isActive){
      socket.emit('gender', 'men');
    } else {
      socket.emit('gender', 'both');
    }
  });

  function constructNewAdElement(data){
    var el = $('<li>', { class: 'ad' });
    el.append('<h2>' + data.ads[0].title + '</h2>');
    el.append('<img src="' + data.ads[0].img + '">');
    el.append('<span class="slide-text">← Slide me</span>');
    return el;
  }
});
