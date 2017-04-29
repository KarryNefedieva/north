

$(document).ready(function(){

  $('.main_screen__gamb').click(function(){
    $(".main_block").addClass("open");
    $('.main_block').removeClass('close');
  });

   $('.main_nav__close').click(function(){
    $('.main_block').addClass('close');
    $('.main_block').removeClass('open');
 });

    $('.contacts__filial_name_fin').click(function(){
    $('#modal_finland').addClass('modal__filial');
 });





  });

// $(document).ready(function(){
//   $('.your-class').slick({
//     setting-name: setting-value
//   });
// });




