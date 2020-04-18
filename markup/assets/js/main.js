import svg4everybody from 'svg4everybody';
import exhibitionSlider from '../../blocks/exhibition/exhibition';
import aboutSlider from '../../blocks/about/about';


// import levelsSlider from '../../blocks/levels/levels';
// import paymentSlider from '../../blocks/payment/payment';
// import faq from '../../blocks/faq/faq';


// import $ from 'jquery';
// import slick from 'slick-carousel';


(function ($) {

  svg4everybody();

  let styles = [
    'padding: 2px 9px',
    'background: #2948ff',
    'color: #fff',
    'display: inline-block',
    'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 1.56',
    'text-align: left',
    'font-size: 16px',
    'font-weight: 400'
  ].join(';');

  console.log('%c developed by igor gorlov https://igrlv.ru' , styles);


  /*
    Lazyload images
  */


  let lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
    load_delay: 50,
    use_native: false
  });


  if (lazyLoadInstance) {
    lazyLoadInstance.update();
  }


  $(function() {


    let $hButton = $('.h-user__button');
    let $hList = $('.h-user__list');

    $hButton.on('click', function () {
      console.log('click');
      $hList.toggleClass('h-user__list_active');


    });

    $(document).on('click', function(e) {
      if (!$(e.target).closest('.h-user__button').length) {
        $hList.removeClass('h-user__list_active');
      }
    });


    $('.nav__button').on('click', function (e) {
      e.preventDefault()

      $('.header__nav').toggleClass('nav_active');

    });


    $(document).on('click', function(e) {
      if (!$(e.target).closest('.nav__button').length) {
        $('.header__nav').removeClass('nav_active');
      }
    });



    $('.catalog__category').on( 'click', function (e) {
      e.preventDefault();
      console.log(e);
      let offsetLeft = e.pageX;
      let offsetRight = (($('.catalog__bottom').outerWidth() - e.pageX) - 60);

      console.log(offsetLeft);
      console.log( $('.catalog__bottom').outerWidth() );

      // $(this).prev().toggleClass('catalog__sub_active');

      $(this).toggleClass('catalog__category_active');
      $(this).siblings().removeClass('catalog__category_active');
      $(this).prev('.catalog__sub').toggleClass('catalog__sub_active');
      $(this).siblings().prev('.catalog__sub').removeClass('catalog__sub_active');

      // $(this).find('.catalog__sub').css('left', (offsetLeft + 60) + 'px');

      // if( ($('.catalog__bottom').outerWidth() / 2) < 585 ) {
      //   $(this).find('.catalog__sub-triangle').css('right', + 'auto');
      //   $(this).find('.catalog__sub-triangle').css('left', (offsetLeft) + 'px');

      // } else {
      //   $(this).find('.catalog__sub').css('left', 'auto');
      //   $(this).find('.catalog__sub').css('right', (offsetRight) + 'px');
      // }


    });





    // Sliders

    exhibitionSlider();
    aboutSlider();




  });




})(jQuery);
