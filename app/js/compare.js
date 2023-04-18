$(document).ready(function () {

  (function ($) {
    $('.tab .tabs').addClass('active').find('.swiper-wrapper .swiper-slide.swiper-slide-active .compare__slider-tab').addClass('current');

    $('.tab .compare__slider-tab a').click(function (g) {
      var tab = $(this).closest('.tab'),
        index = $(this).closest('.swiper-slide').index();

      tab.find('.swiper-slide .compare__slider-tab').removeClass('current');
      $(this).closest('.swiper-slide .compare__slider-tab').addClass('current');

      tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').hide();
      tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').show();

      g.preventDefault();
    });
  })(jQuery);

});