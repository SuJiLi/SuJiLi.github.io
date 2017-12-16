$(function(){
    $('.con').fullpage({
        anchors:['page1','page2','page3'],
        menu:'#menu',
        verticalCentered:false,
    });

    $(window).resize(function () {
       autoScrolling();
    });
    function autoScrolling() {
        var $ww=$(window).width();
        if($ww<1024){
            $.fn.fullpage.setAutoScrolling(false);
        }else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    }
    autoScrolling();
});

$(document).ready({

});