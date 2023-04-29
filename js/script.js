$(document).ready(function(){
    $('[data-modal=promo]').on('click', function() {
        $('.overlay, #promo').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #promo').fadeOut('slow');
    });
});