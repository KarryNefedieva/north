$(document).ready(function(){

  $('.main_screen__gamb').click(function(){
    $(".main_block").addClass("open");
    $('.main_block').removeClass('close');
  });

  $('.main_nav__close').click(function(){
    $('.main_block').addClass('close');
    $('.main_block').removeClass('open');
  });

  // $('.contacts__filial_name_fin').click(function(){
  //   $('#modal_finland').addClass('modal__filial');
  // });
  // console.log(document.querySelector('your-class'));
   $('.legend__text_block').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
   });

   var w = $( window ).width(); // Получаем ширину окна

    if (w <= 300) { // Если ширина окна меньше, либо равна 600
      console.log(1);
      $('.feedback_autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    } else {
      console.log(2);
      $('.feedback_autoplay').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    }





$("#filial__link").click(function(){
    $("#filial__address").addClass("filial__open");
    $("#filial__link").addClass("contacts__filial_name--black");
    $("#filial__fin").addClass("contacts__filial--open");
    // $("#Fin__click").addClass("contacts__filial_name--black");
  });

});











