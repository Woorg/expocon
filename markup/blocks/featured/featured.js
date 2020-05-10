function featuredSlider () {
  const $featuredSlider = $('.featured_theme_general .featured__slider'),
    $featuredSliderSecond = $('.featured_theme_small .featured__slider');

  if ($featuredSlider.length > 0) {
    $featuredSlider.slick({
      mobileFirst: true,
      adaptiveHeight: true,
      dots: true,
      appendDots: $('.featured_theme_general .featured__dots'),
      prevArrow: '.featured_theme_general .featured__arrow_back',
      nextArrow: '.featured_theme_general .featured__arrow_next',
      accessibility: false,
      // centerMode: true,
      // centerPadding: 0,
      focusOnSelect: true,
      responsive: [{
          breakpoint: 1,
          settings: {
            rows: 2,
            slidesPerRow: 1,
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            rows: 1,
            slidesPerRow: 1,
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        }
      ]
    });

  }

  if ($featuredSliderSecond.length > 0) {
    $featuredSliderSecond.slick({
      mobileFirst: true,
      adaptiveHeight: true,
      dots: true,
      appendDots: $('.featured_theme_small .featured__dots'),
      prevArrow: '.featured_theme_small .featured__arrow_back',
      nextArrow: '.featured_theme_small .featured__arrow_next',
      accessibility: false,
      // centerMode: true,
      // centerPadding: 0,
      focusOnSelect: true,
      responsive: [{
          breakpoint: 1,
          settings: {
            rows: 2,
            slidesPerRow: 1,
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            rows: 1,
            slidesPerRow: 1,
            slidesToShow: 5,
            slidesToScroll: 5,
          }
        }
      ]
    });

  }


}


module.exports = featuredSlider;