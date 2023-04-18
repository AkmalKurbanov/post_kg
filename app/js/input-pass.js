$('.input-eye--on').on('click', function(){
  $(this).parent().find('input').attr("type","text");
  $(this).hide();
  $('.input-eye--off').show()
});
$('.input-eye--off').on('click', function(){
  $(this).parent().find('input').attr("type","password");
  $(this).hide();
  $('.input-eye--on').show()
});