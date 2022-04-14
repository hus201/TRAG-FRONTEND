$(document).ready(function(){
    $('.slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow:3,
    rtl:true,
    responsive: [
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            centerMode: true, 
            slidesToShow:3
        }
        },
        {
        breakpoint: 480,
        settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1
        }
        }
    ]
    });
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        useTransform: true,
        infinite:true,
        rtl:true,

      });
      $('.nav-slider').slick({
        slidesToShow: 4,
        slidesToScroll:1,
        arrows:false,
        centerMode:false,
        
        asNavFor: '.main-slider',
        focusOnSelect: true,
        verticalSwiping:true,
        vertical:true,
        responsive: [
            {breakpoint: 768,
                settings:{
                    verticalSwiping:false,
                    vertical:false,
                    arrows:true,
                }
            },
  
        ],


      });
      

});