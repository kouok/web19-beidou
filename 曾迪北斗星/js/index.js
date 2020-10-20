// 切换
$(function name(params) {
    function tab(params) {
        var index = 0
        var w = $(".aa").width()
        $(".dianji a").click(function name(params) {
            // 点击反馈
            var index = $(this).index()
            $(this).addClass("dibiank").siblings().removeClass("dibiank")
            // 控制面板
            var juli = -w * index + "px"
            $(".odiv").animate({ left: juli })
        })
        // 下一张
        $(".jiantou1").click(function name(params) {
            index++
            
            if (index >= 2) {
                index=2
               
            }
            console.log(index);
            var juli = -w * index + "px"
            $(".odiv").animate({ left: juli })
            // 让点击拉栏跟着区块走
            $(".dianji a").eq(index).addClass("dibiank").siblings().removeClass("dibiank")
        })
        // 上一张
        $(".jiantou2").click(function name(params) {
            index--

            if (index < 1) {
                index = 0

            }
            console.log(index);
            var juli = -w * index + "px"
            $(".odiv").animate({ left: juli })
              // 让点击拉栏跟着区块走
            $(".dianji a").eq(index).addClass("dibiank").siblings().removeClass("dibiank")
        })
       
    }
    tab()
    $(".caidan").click(function name(params) {

            $(".xiala").slideToggle(400)   

    })
})
