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

    if (w <= 768) { // Если ширина окна меньше, либо равна 600
      console.log(1);
      $('.feedback_autoplay').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    } else {
      console.log(2);
      $('.feedback_autoplay').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    }





$("#filial__link--finland").click(function(){
    $(".contacts__modal_bgc").removeClass("close");
    $("#modal_finland").removeClass("close");
    $(".contacts__container").addClass("contacts__container--bgc");
  });

$("#filial__link--norv").click(function(){
    $(".contacts__modal_bgc").removeClass("close");
    $("#modal_norv").removeClass("close");
    $(".contacts__container").addClass("contacts__container--bgc");
  });

$("#filial__link--yak").click(function(){
    $(".contacts__modal_bgc").removeClass("close");
    $("#modal_yak").removeClass("close");
    $(".contacts__container").addClass("contacts__container--bgc");
  });

$("#filial__link--Alaska").click(function(){
    $(".contacts__modal_bgc").removeClass("close");
    $("#modal_Alaska").removeClass("close");
    $(".contacts__container").addClass("contacts__container--bgc");
  });

$("#filial__link--Iceland").click(function(){
    $(".contacts__modal_bgc").removeClass("close");
    $("#modal_Iceland").removeClass("close");
    $(".contacts__container").addClass("contacts__container--bgc");
  });

$("#filial__link--Murm").click(function(){
    $(".contacts__modal_bgc").removeClass("close");
    $("#modal_Murm").removeClass("close");
    $(".contacts__container").addClass("contacts__container--bgc");
  });


$(".contacts__modal-close").click(function(){
    $(".contacts__modal_bgc").addClass("close");
    $(".contacts__modal_window").addClass("close");
    $(".contacts__container").removeClass("contacts__container--bgc");
  });





$("#price__categories--norv").click(function(){
    $(".price__categories_item--active").addClass("price__categories_item");
    $(".price__categories_item--active").removeClass("price__categories_item--active");
    $("#price__categories--norv").addClass("price__categories_item--active");

    $(".price__full_list--active").addClass("price__full_list");
    $(".price__full_list--active").removeClass("price__full_list--active");
    $("#price__full_list--norv").addClass("price__full_list--active");


     var w = $( window ).width(); // Получаем ширину окна
    if (w <= 768) { // Если ширина окна меньше, либо равна 600
      console.log(1);
    $(".price__list--active_mobile").addClass("price__list--mobile");
    $(".price__list--active_mobile").removeClass("price__list--active_mobile");
    $(".price__list--active").addClass("price__list");
    $(".price__list--active").removeClass("price__list--active");
    $("#price_norv--mobile").removeClass("price__list--mobile");
    $("#price_norv--mobile").addClass("price__list--active_mobile");
    $("#price_norv--hd").addClass("price__list--active");
    $("#price_norv--hd").removeClass("price__list");

    $(".price__full_list--active_mobile").addClass("price__full_list--mobile");
    $(".price__full_list--active_mobile").removeClass("price__full_list--active_mobile");
    $(".price__full_list--active").addClass("price__full_list");
    $(".price__full_list--active").removeClass("price__full_list--active");
    $("#price__full_list--norv_mobile").removeClass("price__full_list--mobile");
    $("#price__full_list--norv_mobile").addClass("price__full_list--active_mobile");
    $("#price__full_list--norv").addClass("price__full_list--active");
    $("#price__full_list--norv").removeClass("price__full_list");



    } else {
      console.log(2);
    $(".price__list--active").addClass("price__list");
    $(".price__list--active").removeClass("price__list--active");
    $(".price__list--active_mobile").addClass("price__list--mobile");
    $(".price__list--active-mobile").removeClass("price__list--active_mobile");
    $("#price_norv--hd").removeClass("price__list");
    $("#price_norv--hd").addClass("price__list--active");
    $("#price_norv--mobile").addClass("price__list--active_mobile");
    $("#price_norv--mobile").removeClass("price__list--mobile");

    $(".price__full_list--active").addClass("price__full_list");
    $(".price__full_list--active").removeClass("price__full_list--active");
    $(".price__full_list--active_mobile").addClass("price__list--mobile");
    $(".price__full_list--active_mobile").removeClass("price__full_list--active_mobile");
    $("#price__full_list--norv").removeClass("price__full_list");
    $("#price__full_list--norv").addClass("price__full_list--active");
    $("#price__full_list--norv_mobile").addClass("price__full_list--active_mobile");
    $("#price__full_list--norv_mobile").removeClass("price__full_list--mobile");
    }

  });


$("#price__categories--finland").click(function(){
    $(".price__categories_item--active").addClass("price__categories_item");
    $(".price__categories_item--active").removeClass("price__categories_item--active");
    $("#price__categories--finland").addClass("price__categories_item--active");

    $(".price__full_list--active").addClass("price__full_list");
    $(".price__full_list--active").removeClass("price__full_list--active");
    $("#price__full_list--finland").addClass("price__full_list--active");

    var w = $( window ).width(); // Получаем ширину окна
    if (w <= 768) { // Если ширина окна меньше, либо равна 600
      console.log(1);
    $(".price__list--active_mobile").addClass("price__list--mobile");
    $(".price__list--active_mobile").removeClass("price__list--active_mobile");
    $(".price__list--active").addClass("price__list");
    $(".price__list--active").removeClass("price__list--active");
    $("#price_finland--mobile").removeClass("price__list--mobile");
    $("#price_finland--mobile").addClass("price__list--active_mobile");
    $("#price_finland--hd").addClass("price__list--active");
    $("#price_finland--hd").removeClass("price__list");

    $(".price__full_list--active_mobile").addClass("price__full_list--mobile");
    $(".price__full_list--active_mobile").removeClass("price__full_list--active_mobile");
    $(".price__full_list--active").addClass("price__full_list");
    $(".price__full_list--active").removeClass("price__full_list--active");
    $("#price__full_list--finland_mobile").removeClass("price__full_list--mobile");
    $("#price__full_list--finland_mobile").addClass("price__full_list--active_mobile");
    $("#price__full_list--finland").addClass("price__full_list--active");
    $("#price__full_list--finland").removeClass("price__full_list");
    } else {
      console.log(2);
    $(".price__list--active").addClass("price__list");
    $(".price__list--active").removeClass("price__list--active");
    $(".price__list--active_mobile").addClass("price__list--mobile");
    $(".price__list--active-mobile").removeClass("price__list--active_mobile");
    $("#price_finland--hd").removeClass("price__list");
    $("#price_finland--hd").addClass("price__list--active");
    $("#price_finland--mobile").addClass("price__list--active_mobile");
    $("#price_finland--mobile").removeClass("price__list--mobile");

    $(".price__full_list--active").addClass("price__full_list");
    $(".price__full_list--active").removeClass("price__full_list--active");
    $(".price__full_list--active_mobile").addClass("price__list--mobile");
    $(".price__full_list--active_mobile").removeClass("price__full_list--active_mobile");
    $("#price__full_list--finland").removeClass("price__full_list");
    $("#price__full_list--finland").addClass("price__full_list--active");
    $("#price__full_list--finland_mobile").addClass("price__full_list--active_mobile");
    $("#price__full_list--finland_mobile").removeClass("price__full_list--mobile");
    }


  });

$("#price__categories--yak").click(function(){
    $(".price__categories_item--active").addClass("price__categories_item");
    $(".price__categories_item--active").removeClass("price__categories_item--active");
    $("#price__categories--yak").addClass("price__categories_item--active");

    $(".price__full_list--active").addClass("price__full_list");
    $(".price__full_list--active").removeClass("price__full_list--active");
    $("#price__full_list--yak").addClass("price__full_list--active")

     var w = $( window ).width(); // Получаем ширину окна
    if (w <= 768) { // Если ширина окна меньше, либо равна 600
      console.log(1);
    $(".price__list--active_mobile").addClass("price__list--mobile");
    $(".price__list--active_mobile").removeClass("price__list--active_mobile");
    $(".price__list--active").addClass("price__list");
    $(".price__list--active").removeClass("price__list--active");
    $("#price_yak--mobile").removeClass("price__list--mobile");
    $("#price_yak--mobile").addClass("price__list--active_mobile");
    $("#price_yak--hd").addClass("price__list--active");
    $("#price_yak--hd").removeClass("price__list");

     $(".price__full_list--active_mobile").addClass("price__full_list--mobile");
    $(".price__full_list--active_mobile").removeClass("price__full_list--active_mobile");
    $(".price__full_list--active").addClass("price__full_list");
    $(".price__full_list--active").removeClass("price__full_list--active");
    $("#price__full_list--yak_mobile").removeClass("price__full_list--mobile");
    $("#price__full_list--yak_mobile").addClass("price__full_list--active_mobile");
    $("#price__full_list--yak").addClass("price__full_list--active");
    $("#price__full_list--yak").removeClass("price__full_list");
    } else {
      console.log(2);
    $(".price__list--active").addClass("price__list");
    $(".price__list--active").removeClass("price__list--active");
    $(".price__list--active_mobile").addClass("price__list--mobile");
    $(".price__list--active-mobile").removeClass("price__list--active_mobile");
    $("#price_yak--hd").removeClass("price__list");
    $("#price_yak--hd").addClass("price__list--active");
    $("#price_yak--mobile").addClass("price__list--active_mobile");
    $("#price_yak--mobile").removeClass("price__list--mobile");

    $(".price__full_list--active").addClass("price__full_list");
    $(".price__full_list--active").removeClass("price__full_list--active");
    $(".price__full_list--active_mobile").addClass("price__list--mobile");
    $(".price__full_list--active_mobile").removeClass("price__full_list--active_mobile");
    $("#price__full_list--yak").removeClass("price__full_list");
    $("#price__full_list--yak").addClass("price__full_list--active");
    $("#price__full_list--yak_mobile").addClass("price__full_list--active_mobile");
    $("#price__full_list--yak_mobile").removeClass("price__full_list--mobile");
    }
  });

$("#price__categories--Alaska").click(function(){
    $(".price__categories_item--active").addClass("price__categories_item");
    $(".price__categories_item--active").removeClass("price__categories_item--active");
    $("#price__categories--Alaska").addClass("price__categories_item--active");

    $(".price__full_list--active").addClass("price__full_list");
    $(".price__full_list--active").removeClass("price__full_list--active");
    $("#price__full_list--Alaska").addClass("price__full_list--active")


    var w = $( window ).width(); // Получаем ширину окна
    if (w <= 768) { // Если ширина окна меньше, либо равна 600
      console.log(1);
    $(".price__list--active_mobile").addClass("price__list--mobile");
    $(".price__list--active_mobile").removeClass("price__list--active_mobile");
    $(".price__list--active").addClass("price__list");
    $(".price__list--active").removeClass("price__list--active");
    $("#price_Alaska--mobile").removeClass("price__list--mobile");
    $("#price_Alaska--mobile").addClass("price__list--active_mobile");
    $("#price_Alaska--hd").addClass("price__list--active");
    $("#price_Alaska--hd").removeClass("price__list");

    $(".price__full_list--active_mobile").addClass("price__full_list--mobile");
    $(".price__full_list--active_mobile").removeClass("price__full_list--active_mobile");
    $(".price__full_list--active").addClass("price__full_list");
    $(".price__full_list--active").removeClass("price__full_list--active");
    $("#price__full_list--Alaska_mobile").removeClass("price__full_list--mobile");
    $("#price__full_list--Alaska_mobile").addClass("price__full_list--active_mobile");
    $("#price__full_list--Alaska").addClass("price__full_list--active");
    $("#price__full_list--Alaska").removeClass("price__full_list");
    } else {
      console.log(2);
    $(".price__list--active").addClass("price__list");
    $(".price__list--active").removeClass("price__list--active");
    $(".price__list--active_mobile").addClass("price__list--mobile");
    $(".price__list--active-mobile").removeClass("price__list--active_mobile");
    $("#price_Alaska--hd").removeClass("price__list");
    $("#price_Alaska--hd").addClass("price__list--active");
    $("#price_Alaska--mobile").addClass("price__list--active_mobile");
    $("#price_Alaska--mobile").removeClass("price__list--mobile");

    $(".price__full_list--active").addClass("price__full_list");
    $(".price__full_list--active").removeClass("price__full_list--active");
    $(".price__full_list--active_mobile").addClass("price__list--mobile");
    $(".price__full_list--active_mobile").removeClass("price__full_list--active_mobile");
    $("#price__full_list--Alaska").removeClass("price__full_list");
    $("#price__full_list--Alaska").addClass("price__full_list--active");
    $("#price__full_list--Alaska_mobile").addClass("price__full_list--active_mobile");
    $("#price__full_list--Alaska_mobile").removeClass("price__full_list--mobile");
    }
  });

$("#price__categories--Iceland").click(function(){
    $(".price__categories_item--active").addClass("price__categories_item");
    $(".price__categories_item--active").removeClass("price__categories_item--active");
    $("#price__categories--Iceland").addClass("price__categories_item--active");

    $(".price__full_list--active").addClass("price__full_list");
    $(".price__full_list--active").removeClass("price__full_list--active");
    $("#price__full_list--Iceland").addClass("price__full_list--active")

var w = $( window ).width(); // Получаем ширину окна
    if (w <= 768) { // Если ширина окна меньше, либо равна 600
      console.log(1);
    $(".price__list--active_mobile").addClass("price__list--mobile");
    $(".price__list--active_mobile").removeClass("price__list--active_mobile");
    $(".price__list--active").addClass("price__list");
    $(".price__list--active").removeClass("price__list--active");
    $("#price_Iceland--mobile").removeClass("price__list--mobile");
    $("#price_Iceland--mobile").addClass("price__list--active_mobile");
    $("#price_Iceland--hd").addClass("price__list--active");
    $("#price_Iceland--hd").removeClass("price__list");

    $(".price__full_list--active_mobile").addClass("price__full_list--mobile");
    $(".price__full_list--active_mobile").removeClass("price__full_list--active_mobile");
    $(".price__full_list--active").addClass("price__full_list");
    $(".price__full_list--active").removeClass("price__full_list--active");
    $("#price__full_list--Iceland_mobile").removeClass("price__full_list--mobile");
    $("#price__full_list--Iceland_mobile").addClass("price__full_list--active_mobile");
    $("#price__full_list--Iceland").addClass("price__full_list--active");
    $("#price__full_list--Iceland").removeClass("price__full_list");
    } else {
      console.log(2);
    $(".price__list--active").addClass("price__list");
    $(".price__list--active").removeClass("price__list--active");
    $(".price__list--active_mobile").addClass("price__list--mobile");
    $(".price__list--active-mobile").removeClass("price__list--active_mobile");
    $("#price_Iceland--hd").removeClass("price__list");
    $("#price_Iceland--hd").addClass("price__list--active");
    $("#price_Iceland--mobile").addClass("price__list--active_mobile");
    $("#price_Iceland--mobile").removeClass("price__list--mobile");

    $(".price__full_list--active").addClass("price__full_list");
    $(".price__full_list--active").removeClass("price__full_list--active");
    $(".price__full_list--active_mobile").addClass("price__list--mobile");
    $(".price__full_list--active_mobile").removeClass("price__full_list--active_mobile");
    $("#price__full_list--Iceland").removeClass("price__full_list");
    $("#price__full_list--Iceland").addClass("price__full_list--active");
    $("#price__full_list--Iceland_mobile").addClass("price__full_list--active_mobile");
    $("#price__full_list--Iceland_mobile").removeClass("price__full_list--mobile");
    }
  });

$("#price__categories--Murm").click(function(){
    $(".price__categories_item--active").addClass("price__categories_item");
    $(".price__categories_item--active").removeClass("price__categories_item--active");
    $("#price__categories--Murm").addClass("price__categories_item--active");

    $(".price__full_list--active").addClass("price__full_list");
    $(".price__full_list--active").removeClass("price__full_list--active");
    $("#price__full_list--Murm").addClass("price__full_list--active")

    var w = $( window ).width(); // Получаем ширину окна
    if (w <= 768) { // Если ширина окна меньше, либо равна 600
      console.log(1);
    $(".price__list--active_mobile").addClass("price__list--mobile");
    $(".price__list--active_mobile").removeClass("price__list--active_mobile");
    $(".price__list--active").addClass("price__list");
    $(".price__list--active").removeClass("price__list--active");
    $("#price_Murm--mobile").removeClass("price__list--mobile");
    $("#price_Murm--mobile").addClass("price__list--active_mobile");
    $("#price_Murm--hd").addClass("price__list--active");
    $("#price_Murm--hd").removeClass("price__list");

    $(".price__full_list--active_mobile").addClass("price__full_list--mobile");
    $(".price__full_list--active_mobile").removeClass("price__full_list--active_mobile");
    $(".price__full_list--active").addClass("price__full_list");
    $(".price__full_list--active").removeClass("price__full_list--active");
    $("#price__full_list--Murm_mobile").removeClass("price__full_list--mobile");
    $("#price__full_list--Murm_mobile").addClass("price__full_list--active_mobile");
    $("#price__full_list--Murm").addClass("price__full_list--active");
    $("#price__full_list--Murm").removeClass("price__full_list");
    } else {
      console.log(2);
    $(".price__list--active").addClass("price__list");
    $(".price__list--active").removeClass("price__list--active");
    $(".price__list--active_mobile").addClass("price__list--mobile");
    $(".price__list--active-mobile").removeClass("price__list--active_mobile");
    $("#price_Murm--hd").removeClass("price__list");
    $("#price_Murm--hd").addClass("price__list--active");
    $("#price_Murm--mobile").addClass("price__list--active_mobile");
    $("#price_Murm--mobile").removeClass("price__list--mobile");

    $(".price__full_list--active").addClass("price__full_list");
    $(".price__full_list--active").removeClass("price__full_list--active");
    $(".price__full_list--active_mobile").addClass("price__list--mobile");
    $(".price__full_list--active_mobile").removeClass("price__full_list--active_mobile");
    $("#price__full_list--Murm").removeClass("price__full_list");
    $("#price__full_list--Murm").addClass("price__full_list--active");
    $("#price__full_list--Murm_mobile").addClass("price__full_list--active_mobile");
    $("#price__full_list--Murm_mobile").removeClass("price__full_list--mobile");
    }
  });



   // $('.price__list').slick({

   // });


});













