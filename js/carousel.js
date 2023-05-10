

$('.carousel_list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1600,
    speed:500,
  prevArrow: ' <div class=" news_btn slider_btn slider_prev "><img class="news_indicator" src="./images/prev.png" alt="" width="16"></div>',
  nextArrow: '<div class=" news_btn slider_btn slider_next "><img class="news_indicator" src="./images/next.png" alt="" width="16" ></div>',
  responsive: [
  {
    breakpoint: 1400,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
    arrows:true,
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      centerMode: true,
  centerPadding: '0px',
    }
  }
  
  ]
  });

  