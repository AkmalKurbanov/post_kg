$(document).on('click', '.count-plus', function () {
  $(this).prev().find('.counter').val(+$(this).prev().find('.counter').val() + 1);
  if ($(this).prev().find('.counter').val() > 1) {
    $(this).parent().find('.count-minus').removeClass('disabled');
  }
});
$(document).on('click', '.count-minus', function () {
  if ($(this).next().find('.counter').val() <= 2) {
    $(this).addClass('disabled');
    $(this).next().find('.counter').val(+$(this).next().find('.counter').val() - 1);
  } else if ($(this).next().find('.counter').val() >= 2) {
    $(this).next().find('.counter').val(+$(this).next().find('.counter').val() - 1);
  }
});