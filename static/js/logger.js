$(function () {
  var socket = io.connect();
  
  // Identify this connection with the server.
  socket.on('connect', function () {
    socket.emit('identify', {
      role: 'logger',
      ads: 0
    });
  });

  // Retrieve settings.
  var settings;
  socket.once('settings', function (data) {
    settings = data;
  });

  // Retrieve ads.
  socket.on('ads', function (data) {
    constructCategoriesList(data);
  });

  function constructCategoriesList(data){
    $('ul#categories').remove();
    $('.content').append('<ul class="list" id="categories"></ul>');

    for (var i = 0, l = data.categories.length, seeded = 0; i < l; i++){
      var category = data.categories[i];

      // Color coding.
      if (category.score >= settings.likePromote) {
        category.status = 'promoted';
      }
      else if (category.score <= settings.likeExclude) {
        category.status = 'excluded';
      }
      else if (i > 0 && data.categories[0].score >= settings.likePromote && seeded < settings.likeSeed) {
        category.status = 'seeded';
        seeded++;
      }
      else {
        category.status = 'inactive';
      }

      $('ul#categories').append('<li class="' + category.status + '"><a href="#">' + category.name + '<span class="chevron"></span><span class="count">'+category.score+'</span></a></li>' );
    }
  }
});
