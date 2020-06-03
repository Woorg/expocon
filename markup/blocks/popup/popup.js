function popup () {

  const $popupTrigger = $('.open-popup');

   if ($popupTrigger.length > 0) {

       $popupTrigger.magnificPopup({
        type: 'inline'
      });

   }

}


module.exports = popup;