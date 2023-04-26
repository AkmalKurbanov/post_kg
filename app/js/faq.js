$('.faq__item').on('click', function () {
  $(this).find('.faq__item-answer').slideToggle();
  $(this).toggleClass('open');
});


if (window.matchMedia('(max-width: 991px)').matches) {
  
  $('.question-accordion').on('click', function () {
    $('.faq__col .tabs ').slideToggle();
  });

} 