/* 首页JS */
window.onload = function () {
    // 点击搜索按钮出现搜索框和遮罩层
    $("#search").click(function () {
        $("#open1").show();
        $("#mask").show();
        return false;
    })

    // 点击遮罩层，搜索框和菜单选项消失
    $("#mask").click(function () {
        $("#open1").hide();
        $("#open2").hide();
        $("#mask").hide();
        return false;
    })

    // 点击菜单按钮出现菜单选项和遮罩层
    $("#menu").click(function () {
        $("#open2").show();
        $("#mask").show();
        return false;
    })

    // 搜索框的获焦和失焦事件
    searchInput("ipt");

    function searchInput(Id, defaultText, defaultColor, inputColor) {
        // 获取搜索条的输入框的Id
        var ipt = document.getElementById(Id);
        // 可以设置搜索框的默认文本
        var defaultText = ipt.value;
        // 没有触发事件时，默认文本的颜色为灰色
        ipt.style.color = defaultColor;
        // 没有设置默认文本颜色时，默认文本颜色为灰色
        if (defaultColor == undefined) {
            defaultColor = "gray";
        }
        // 没有用户输入的文本颜色时，输入框文本颜色为黑色
        if (inputColor == undefined) {
            inputColor = "black";
        }
        // 绑定事件：输入框获得焦点
        ipt.onfocus = function () {
            // 获得焦点时，文本如果为默认文本
            if (this.value == defaultText) {
                // 清空当前默认文本
                ipt.value = "";
                // 用户输入的文本的颜色为黑色
                ipt.style.color = inputColor;
            }
        }
        // 绑定事件：输入框失去焦点
        ipt.onblur = function () {
            // 失去焦点时，如果输入框的文本为空
            if (this.value == "") {
                // 说明用户没有输入文本，恢复默认文本
                ipt.value = defaultText;
                // 默认文本的颜色为灰色
                ipt.style.color = defaultColor;
            }
        }
    }

    // tab切换页
    tab("tab-title", "tab-pal");

    function tab(titleId, palId, event, on) {
        // 获取面板标题的父级
        var title = document.getElementById(titleId);
        // 获取所有面板标题
        var palTitles = title.children;
        // 获取面板父级
        var pal = document.getElementById(palId);
        // 获取所有面板
        var pals = pal.children;
        // 没有设置触发事件的类型时，默认为点击事件
        if (event == undefined) {
            event = "onclick";
        }
        // 没有设置高亮显示的类时，默认类名为"on"
        if (on == undefined) {
            on = "on";
        }
        for (var i = 0; i < palTitles.length; i++) {
            // 给每个面板标题绑定编号
            palTitles[i].index = i;
            // 给每个面板标题绑定响应函数
            palTitles[i][event] = function () {
                // 设置面板标题样式的切换
                for (var j = 0; j < palTitles.length; j++) {
                    // 先清除所有面板标题的样式
                    palTitles[j].className = "";
                }
                // 给当前点击触发事件的面板标题添加样式
                this.className = on;
                // 设置面板的切换
                for (var x = 0; x < pals.length; x++) {
                    // 先将所有面板隐藏
                    pals[x].style.display = "none";
                }
                // 显示当前触发事件的面板标题对应的面板
                pals[this.index].style.display = "block";
            }
        }
    }

    // 列表轮播
    slide("#left", "#right","#myslide1");
    slide("#left2", "#right2","#myslide2");
    slide("#left3", "#right3","#myslide3");

    function slide(left, right,myslide) {
        var flag = 0;
        // 点击左按钮
        $(left).on("click", function () {
            flag--;
            $(right).css("background", "url(../image/right.png)")
            $(right).css("background-size", "0.31rem 0.88rem")
            if (flag <= 0) {
                flag = 0;
                $(this).css("background", "url(../image/left.png)")
                $(this).css("background-size", "0.31rem 0.88rem")
            }
            console.log($(myslide).find(".slide-content").eq(flag))
            $(myslide).find(".slide-content")
            $(myslide).find(".slide-content").eq(flag).fadeIn().siblings(".slide-content").hide();
        })
        // 点击右按钮
        $(right).on("click", function () {
            flag++;
            $(left).css("background", "url(../image/left2.png)")
            $(left).css("background-size", "0.31rem 0.88rem")
            if (flag >= 2) {
                flag = 2;
                $(this).css("background", "url(../image/right2.png)")
                $(this).css("background-size", "0.31rem 0.88rem")
            }
            $(myslide).find(".slide-content").eq(flag).fadeIn().siblings(".slide-content").hide();
        })
    }

    // 热点新闻的自动切换
    hotnews();

    function hotnews() {
        var index = 0;
        setInterval(function () {
            index++;
            if (index >= 10) {
                index = 0
            }
            $(".content span").eq(index).fadeIn().siblings().hide();
        }, 1000)
    }
}