



function calc() {
  let priceForKg = $('.input__select-selected-price').attr('data-selectedprice');
  let weight = $('#weight').val();
  let weightConvert = (weight * 1000)
  let formula = (priceForKg * weightConvert / 1000)
  let total = formula
  let exchangeRatesKg = $('.input__select-selected-price').attr('data-exchangeRatesKg');
  let convert = formula * exchangeRatesKg
  
  $('.calculator__total-sum').text(total.toFixed(2))
  $('.convert-kg').text(convert.toFixed(2))
}

calc();



$(".calculator__calculator input").keyup(function () {
  calc();
});


$(".calculator__calculator input").on('keyup keydown change', function () {
  calc();
});


$('.input__select-option').on('click', function () {
  let priceForKg = $(this).attr('data-price');
  $('.input__select-selected-price').attr('data-selectedprice', priceForKg);
  calc();
});