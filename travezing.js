console.log("hello")

$('.slick-slider').slick({
  dots: true,
  infinite: true,
  autoplay:true,
  appendDots: $('.slick-slider-dots'),
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:"",
  nextArrow:"",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
