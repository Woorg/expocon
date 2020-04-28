module.exports = function aboutSlider () {

    let $aboutSlider = $('.about__slider');

    if( $aboutSlider.length > 0 ) {

      $aboutSlider.slick({
        slidesToScroll: 1,
        dots: false,
        mobileFirst: true,
        // infinite: false,
        loop: true,
        lazyLoad: 'ondemand',
        // fade: true,
        speed: 300,
        focusOnSelect: true,
        waitForAnimate: false,
        adaptiveHeight: false,
        // arrows: false,
        // appendDots: $('.exhibition__dots'),
        prevArrow: '.about__nav-arrow_back',
        nextArrow: '.about__nav-arrow_next',

        responsive: [
          {
            breakpoint: 1,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });


    }

}

