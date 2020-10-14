(function () {
    var w = window.innerWidth;
    var bili = w / 7.5;
    document.documentElement.style.fontSize = bili + "px";
})();

TouchSlide({
    slideCell: "#slideBox",
    titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
    mainCell: ".bd ul",
    effect: "leftLoop",
    autoPage: true, //自动分页
    autoPlay: true //自动播放
});


$(".tab_header a").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
    $(".contorl button").last().attr("disabled",false).addClass("contorl_on");
    $(".contorl button").first().attr("disabled",true).removeClass("contorl_on");;
    $(".tab_menu").css("right",0)
    $(".tab_body .tab_menu").eq($(this).index()).show().siblings().hide()
})

var wid=$(".tab_menu").width()

// 左
$(".contorl button").first().click(function () {
    for(var i=0;i<$(".tab_menu").length;i++){
        if($(".tab_menu").eq(i).css("display")=="block"){
            $(".tab_menu").eq(i).animate({right:0})
        }
    }
    $(this).siblings().attr("disabled",false).addClass("contorl_on");;
    $(this).attr("disabled",true).removeClass("contorl_on");
})

// 右

$(".contorl button").last().click(function () {
    for(var i=0;i<$(".tab_menu").length;i++){
        if($(".tab_menu").eq(i).css("display")=="block"){
            $(".tab_menu").eq(i).animate({right:wid/2-20})
        }
    }
    $(this).siblings().attr("disabled",false).addClass("contorl_on");;
    $(this).attr("disabled",true).removeClass("contorl_on");
})
$(".icon-caidan").click(function(){
    $(".er_menu").fadeIn()
})
$(".close").click(function(){
    $(this).parent().fadeOut()
})
$(".er_menu ul li").click(function(){
    $(this).addClass("menu_content_on").siblings().removeClass("menu_content_on")
})
$(".er_menu").css("height",Number(document.documentElement.offsetHeight)+"px")