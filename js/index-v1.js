/**
 * Created with JetBrains PhpStorm.
 * User: black
 * Date: 14-5-14
 * Time: 下午10:20
 * To change this template use File | Settings | File Templates.
 */
/** - update:2014-03-18 16:24:17 - **/
(function(b, c) {
    var a = b.koreaDocterFed = {};
    a.docterInit = function() {
        var d = c(".busan-tab");
        d.each(function() {
            var g = c(this), e = g.find("li"), f = g.siblings(".busan-tab_cont").find(".busan-tab-item");
            e.each(function() {
                var h = c(this), i = h.index();
                h.mouseenter(function() {
                    e.removeClass("current");
                    h.addClass("current");
                    f.hide();
                    f.eq(i).show()
                })
            })
        });
        c(".jcarousel").jcarousel({wrap: "circular"}).jcarouselAutoscroll({interval: 3000,autostart: true});
        c(".jcarousel1").jcarousel({wrap: "circular"}).jcarouselAutoscroll({interval: 3000,autostart: true});
        c(".jcarousel-pagination").on("jcarouselpagination:active", "a", function() {
            c(this).addClass("active")
        }).on("jcarouselpagination:inactive", "a", function() {
                c(this).removeClass("active")
            }).jcarouselPagination()
    };
    a.picTitHoverFun = function() {
        c(".busan-rcont").find("li").hover(function() {
            c(this).find(".pic span").stop(true, true).fadeIn()
        }, function() {
            c(this).find(".pic span").stop(true, true).fadeOut()
        })
    };
    a.docterFun = function() {
        var d = this;
        d.docterInit();
        c(".J_tab").tab({event: "mouseenter",auto: true,speeds: 5000});
        c(".gallerypic").b5mGalleryPic({maction: "mouseover"})
    }
})(window, jQuery);
