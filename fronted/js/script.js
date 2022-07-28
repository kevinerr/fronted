$(function() {
    carrouselInit($(".carrousel1"));
    carrouselInit($(".carrousel2"));

    $(".nav-1 a").each(function(index, element) {
        $(this).click(function() {
            var top = $(this).attr("data-top");
            navanimate("." + top);
        });
    });
})

function carrouselInit(obj) {
    var img_list = obj.find(".carrousel-content a");
    obj.find(".prev").click(function() {
        img_list.eq(0).appendTo(obj.find(".carrousel-content"));
        img_list = obj.find(".carrousel-content a");
    })

    obj.find(".next").click(function() {
        img_list.eq(img_list.length - 1).prependTo(obj.find(".carrousel-content"));
        img_list = obj.find(".carrousel-content a");
    })
}

//导航跳转动画函数
function navanimate(obj) {
    var offset = $(obj).offset().top -170;
    $("html,body").animate({
        scrollTop: offset
    }, 400);
}