$(function () {
    var ascensor = $('#ascensorBuilding').ascensor({ loop: "increment", direction: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0]] });
    var ascensorInstance = $('#ascensorBuilding').data('ascensor');
    $(".links-to-floor li").click(function (event, index) {
        ascensorInstance.scrollToFloor($(this).index());
    });
    $(".links-to-floor li:eq(" + ascensor.data("current-floor") + ")").addClass("selected");

    ascensor.on("scrollStart", function (event, floor) {
        $(".links-to-floor li").removeClass("selected");
        $(".links-to-floor li:eq(" + floor.to + ")").addClass("selected");
    });
    $(".prev").click(function () {
        ascensorInstance.prev();
    });
    $(".next").click(function () {
        ascensorInstance.next();
    });
    //点击首页服务
    $(".home-service").click(function (event, index) {
        ascensorInstance.scrollToFloor(2)
    });
    //点击首页about
    $(".home-about").click(function (event, index) {
        ascensorInstance.scrollToFloor(1)
    });
    //点击首页解决方案
    $(".home-solution").click(function (event, index) {
        ascensorInstance.scrollToFloor(3)
    });
    //点击首页blog
    $(".home-blog").click(function (event, index) {
        ascensorInstance.scrollToFloor(4)
    });
    //点击首页联系我们
    $(".home-contact").click(function (event, index) {
        ascensorInstance.scrollToFloor(5)
    });


    $(".live-tile").liveTile({ "speed": 750 });
    $('#scrollbar1').tinyscrollbar();
    intiMarT(); //让内容居中
    function intiMarT() {
        $winH = $(window).height();
        $conH = $(".dev-homecon").height();
        $(".dev-homecon").css("margin-top", ($winH - $conH) / 2);
        $(".prev-next-links").css("top", ($winH - $conH) / 2);
        $(".viewport").css("width", $(".dev-solucon-out").width() - 20);
    }

    $(window).resize(function () {
        intiMarT();
    })
})
