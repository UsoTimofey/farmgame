$(document).ready(function(){
    $('[data-modal=promo]').on('click', function() {
        $('.overlay, #promo').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #promo').fadeOut('slow');
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    new WOW().init();
});