$('.select-js').on('click', function () {
  $(this).toggleClass('open');
  $('.select-js').not(this).removeClass('open')
});

$('.input__select-option').on('click', function () {
  $('.select-js').removeClass('open')
  let optionVal = $(this).attr('data-val');
  $(this).parent().parent().find('.input__select-selected span').text(optionVal);
});

jQuery(function ($) {
  $(document).mouseup(function (e) {
    var div = $(".select-js");
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      div.removeClass('open');
    }
  });
});