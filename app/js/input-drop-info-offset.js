// var distance = $(".container").offset().left;
// $('.hero__text').css('margin-left', distance + 15);

// $(window).resize(function () {
//   var distance = $(".container").offset().left;
//   $('.hero__text').css('margin-left', distance + 15);
// });


$(document).ready(function () {
  
  $(".dropdown-info__hidden-text").each(function (index) {
    let offset = ($(window).width() - ($(this).offset().left + $(this).outerWidth()));
    if (offset <=0 ) {
      $(this).addClass('offset-right')
    }
  });

});