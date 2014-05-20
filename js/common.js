$(function() {
    $('img[lazy-src]:visible').imglazyload({fadeIn:true});
    $( 'img[lazy-src]' ).one( 'lazyload', function(){
        $(this).imglazyload({fadeIn:true});
    });
    //$().find('img').trigger('lazyload');
});
