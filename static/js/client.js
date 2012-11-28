$(function () {
  var socket = io.connect();
  
  // Holds data for current shown ad
  var current;

  socket.on('ad', function (data) {
    var el = constructNewAdElement(data);
    addNewListElement(el);

    current = data.ad;
    current.timeStart = new Date().getTime();
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

  function constructNewAdElement(data){
    var el = $('<li>',{ 
      class:"ad"});
    el.append( '<h2>' + data.ad.title + '</h2>');
el.append('<img src="' + data.ad.img + '">');
el.append('<span class="slide-text">← Slide me</span>');
 //   return '<li class="ad"><h2>' + data.ad.title + '</h2><img src="' + data.ad.img + '"><span class="slide-text">← Slide me</span></li>';
 return el;
  }

  function addNewListElement(el){
    $("ul#ads").append(el);
    $('ul#ads li:first').remove();
  }

});
