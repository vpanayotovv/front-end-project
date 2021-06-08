$(function(){

    $(window).on('load', function () {
        $('.preloader').fadeOut();
        $('#preloader').delay(450).fadeOut('slow');
        $('body').delay(450).css({ 'overflow': 'visible' });
    });

});