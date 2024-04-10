$(document).ready(function () {
  $(".my-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".footer-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
