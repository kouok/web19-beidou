window.onload = function() {
    // 转换公式
    (function() {
        var w = document.documentElement.getBoundingClientRect().width;
        var bili = w / 7.5;
        document.documentElement.style.fontSize = bili + "px";
    })()

    // 轮播图
    TouchSlide({
        slideCell: "#slideBox",
        titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell: ".bd ul",
        effect: "leftLoop",
        autoPage: true, //自动分页
        autoPlay: true //自动播放
    });


    // tab切换页
    TouchSlide({ slideCell: "#leftTabBox" });

    //二级菜单
    var san = document.querySelector(".san");
    var model = document.querySelector(".model");
    var black=document.querySelector(".black");
    var flag=true;
    san.onclick=function() {
        if (flag) {
            model.style.display="block";
            black.style.display="block";
            flag=false;
        }else{
            model.style.display="none";
            black.style.display="none";
            flag=true;
        }
        
    }

    


}