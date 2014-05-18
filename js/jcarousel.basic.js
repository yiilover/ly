/**
 * Created with JetBrains PhpStorm.
 * User: lscm
 * Date: 14-5-16
 * Time: 下午2:29
 * To change this template use File | Settings | File Templates.
 */
(function($) {
    $(function() {
        $('.jcarousel').jcarousel({wrap: 'circular'})
            .jcarouselAutoscroll({
                interval: 3000,
                autostart: true
            });
        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();

        $('.j-hot').jcarousel();

        $('.j-hot-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.j-hot-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });
    });
})(jQuery);
