$(document).ready(function(){
    var mainSwiper = new Swiper(".main_swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
          },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      var sw = 0;
      $('.btn_pause').click(function(){
        if(sw==0){
          $('.btn_pause').addClass('on');
          mainSwiper.autoplay.stop();
          sw = 1;
        }else{
          $('.btn_pause').removeClass('on');
          mainSwiper.autoplay.start();
          sw = 0;
        }
      });

      var footerSwiper = new Swiper(".footer_swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".footer_swiper_btn_next",
          prevEl: ".footer_swiper_btn_prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          953: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1279: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        },
      });

      $('.depth_2 > li').mouseenter(function(e) {
          $(this).children('.depth_3').stop().slideDown();
      });
      $('.depth_2 > li').mouseleave(function(e) {
        $(this).children('.depth_3').stop().slideUp();
      });
      $('.open_menu_btn').click(function(){
        $('.response_menu').addClass('open_res_menu');
      })
      $('.close_btn').click(function(){
        $('.response_menu').removeClass('open_res_menu');
      })
      
})