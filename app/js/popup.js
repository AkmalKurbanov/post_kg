$('.prohibited-goods-js').on('click', function(){
  $('.popup-window-wrap').addClass('open');
  $('body').addClass('no-scroll');
});

$('.call-back-js').on('click', function(){
  $('.call-back').addClass('open');
  $('body').addClass('no-scroll');
});

$('.close').on('click', function () {
  $('.popup-window-wrap').removeClass('open');
  $('.call-back').removeClass('open');
  $('body').removeClass('no-scroll');
});



