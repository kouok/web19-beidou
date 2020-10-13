
	//顶部搜索栏的显示隐藏
	$(function(){

	
	function show(father,son,mark){
		father.bind("touchstart",function(e){
			son.show();
			mark.show();
			e.stopPropagation();
		})

		$("html,body").bind("touchmove",function(){
			son.fadeOut(400);
			mark.fadeOut(400);
			return false;
		})
	}
	show($(".query"),$(".search"),$("#mask"));
	show($(".task"),$(".taskList"),$("#mask"))
	})

	// tbs切换
    $(function(){
		$.fn.tabsToggle=function(opt){
			var ele = this;
			var hdLi = ele.find(".hd").children().children();
			var bdLi = ele.find(".bd>div");
			console.log(bdLi)
			//默认配置
			var defaultOpt = {
				tabsCell:ele,
				titleCell:hdLi,
				mainCell:bdLi,
				// effect:fadeIn,
			}
			var option = $.extend(defaultOpt,opt);

			hdLi.bind("click",function(){
				var index = $(this).index();
				$(this).addClass("on").siblings().removeClass("on");
				bdLi.eq(index).addClass("current").siblings().removeClass("current");
			})

		}
    });


	//上下文滚动
	$(function(){
		//1文字轮播(2-5页中间)开始

	$(".news_li li").eq(0).clone(true).appendTo($(".news_li"));//克隆第一个放到最后(实现无缝滚动)
    var liHeight = $(".news .box").height();//一个li的高度
    
	//获取li的总高度再减去一个li的高度(再减一个Li是因为克隆了多出了一个Li的高度)
    var totalHeight = ($(".news_li li").length *  $(".news_li li").eq(0).height()) -liHeight;
    // console.log(totalHeight);
	$(".news_li").height(totalHeight);//给ul赋值高度
	var index = 0;
	var autoTimer = 0;//全局变量目的实现左右点击同步
	var clickEndFlag = true; //设置每张走完才能再点击

	function tab(){
		$(".news_li").animate({
			top: -index * liHeight
		},400,function(){
			clickEndFlag = true;//图片走完才会true
			if(index == $(".news_li li").length -1) {
				$(".news_li").css({top:0});
				index = 0;
			}
		})
	}

	function next() {
		index++;
		if(index > $(".news_li li").length - 1) {//判断index为最后一个Li时index为0
			index = 0;
		}
		tab();
	}
	function prev() {
		index--;
		if(index < 0) {
			index = $(".news_li li").size() - 2;//因为index的0 == 第一个Li，减二是因为一开始就克隆了一个LI在尾部也就是多出了一个Li，减二也就是_index = Li的长度减二
			$(".news_li").css("top",- ($(".news_li li").size() -1) * liHeight);//当_index为-1时执行这条，也就是走到li的最后一个
		}
		tab();
	}
    });



    

