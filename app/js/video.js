$('.advantages__mobile-video').on('click', function () {
  $('.video-js').addClass('play');
  $('body').addClass('no-scroll');
});

$('.close').on('click', function () {
  $('.video-js').removeClass('play');

  $('#video-promo').get(0).play();
  $('#video-promo').get(0).pause();
  $('#video-promo').get(0).currentTime = 0;
});