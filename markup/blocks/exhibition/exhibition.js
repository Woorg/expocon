module.exports = function exhibitionSlider () {

    let $exhibitionSlider = $('.exhibition__slider');

    if( $exhibitionSlider.length > 0 ) {

      $exhibitionSlider.slick({
        slidesToScroll: 1,
        dots: true,
        mobileFirst: true,
        // infinite: false,
        loop: true,
        lazyLoad: 'ondemand',
        speed: 300,
        focusOnSelect: true,
        waitForAnimate: false,
        // arrows: false,
        appendDots: $('.exhibition__dots'),
        prevArrow: '.exhibition__arrow_back',
        nextArrow: '.exhibition__arrow_next',

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


      $('.exhibition__thumbs').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        mobileFirst: true,
        adaptiveHeight: true,
        asNavFor: '.exhibition__slider',
        dots: false,
        arrows: false,
        // centerMode: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
            }
          }
        ]
      });




    }

}

