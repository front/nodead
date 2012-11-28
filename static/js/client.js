$(function () {
  var socket = io.connect();
  
  // Holds data for current shown ad
  var current;

  socket.on('ad', function (data) {
    console.log(data);
    var el = constructNewAdElement(data);
    addNewListElement(el);
    constructCategoriesList(data);

    current = data.ads[0];
    current.timeStart = new Date().getTime();
  });
  
  $('.slider').on('slide',function(){
    var timeOnAd = new Date().getTime() - current.timeStart;
    socket.emit('like', {"id": current.id, "timeOnAd": timeOnAd});
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
    console.log(data.ads[0]);
    var el = $('<li>',{ 
      class:"ad"});
    el.append( '<h2>' + data.ads[0].title + '</h2>');
    el.append('<img src="' + data.ads[0].img + '">');
    el.append('<span class="slide-text">← Slide me</span>');
    return el;
  }

  function addNewListElement(el){
    $("ul#ads").append(el);
    $('ul#ads li:first').remove();
  }
  function constructCategoriesList(data){
    $('ul#categories').remove();
    $('.content').append('<ul class="list" id="categories"></ul>');
    for (var i = 0; i<data.categories.length; i++){
      $('ul#categories').append('<li><a href="#">' + data.categories[i].name + '<span class="chevron"></span><span class="count">'+data.categories[i].score+'</span></a></li>' );
    }
  }
});
