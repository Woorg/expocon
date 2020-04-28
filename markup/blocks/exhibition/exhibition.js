module.exports = function exhibitionSlider () {

    const $exhibitionSlider = $('.exhibition_first .exhibition__slider');
    const $exhibitionSecondarySlider = $('.exhibition_secondary .exhibition__slider');


    if( $exhibitionSlider.length > 0 ) {

      $exhibitionSlider.slick({
        slidesToScroll: 1,
        dots: true,
        mobileFirst: true,
        // infinite: false,
        loop: true,
        lazyLoad: 'ondemand',
        fade: true,
        speed: 300,
        focusOnSelect: true,
        waitForAnimate: false,
        accessibility:false,

        // arrows: false,
        appendDots: $('.exhibition_first .exhibition__dots'),
        prevArrow: '.exhibition_first .exhibition__arrow_back',
        nextArrow: '.exhibition_first .exhibition__arrow_next',

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


      $('.exhibition_first .exhibition__thumbs').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        mobileFirst: true,
        adaptiveHeight: true,
        asNavFor: '.exhibition_first .exhibition__slider',
        dots: false,
        arrows: false,
        accessibility: false,
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




    if( $exhibitionSecondarySlider.length > 0 ) {

      $exhibitionSecondarySlider.slick({
        slidesToScroll: 1,
        dots: true,
        mobileFirst: true,
        // infinite: false,
        loop: true,
        lazyLoad: 'ondemand',
        fade: true,
        speed: 300,
        focusOnSelect: true,
        waitForAnimate: false,

        accessibility: false,
        // arrows: false,
        appendDots: $('.exhibition_secondary .exhibition__dots'),
        prevArrow: '.exhibition_secondary .exhibition__arrow_back',
        nextArrow: '.exhibition_secondary .exhibition__arrow_next',

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


      $( '.exhibition_secondary .exhibition__thumbs' ).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        adaptiveHeight: true,
        asNavFor: '.exhibition_secondary .exhibition__slider',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        accessibility: false,
        responsive: [
          {
            breakpoint: 1,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
            }
          }
        ]
      });


    }


}

