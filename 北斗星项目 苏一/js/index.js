$('.carousel').carousel({
  interval: 2000
});

// 产品tab切换

$(".btn_menu>div").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	$(".btn_body>div").eq($(this).index()).show().siblings().hide();
	// $("#tabd1>ul").eq($(this).index()).show().siblings().hide();
});


	$('.bottom_content')[0].style.left = "0%";
			var startX = '',disX ='';
			$('.top_menu').on('click','.common',function(){
				var index = $(this).index();
				$('.bottom_content').css('left','-' + index * 100 + '%');
				$('.top_menu .common').eq(index).addClass('liactive').siblings().removeClass('liactive')
			});
			$('.bottom_content').on('touchstart','.body_1',function(e){
				startX = e.originalEvent.changedTouches[0].clientX;
			});
			$('.bottom_content').on('touchmove','.body_1',function(e){
				e.stopPropagation()
			})
			$('.bottom_content').on('touchend','.body_1',function(e){
				disX = e.originalEvent.changedTouches[0].clientX - startX;
				var leftNum = parseInt($('.bottom_content')[0].style.left);
				if(disX > 0 && disX > 100) {
					if(leftNum <= -100) {
						$('.bottom_content')[0].style.left = leftNum + 100 + "%";
						var order = -parseInt($('.bottom_content')[0].style.left)/100;
						$('.top_menu .common').eq(order).addClass('liactive').siblings().removeClass('liactive')
					}
				} else if(disX < 0 && disX < -100) {
					if(leftNum >= -200) {
						$('.bottom_content')[0].style.left = leftNum - 100 + "%";
						var order = (-parseInt($('.bottom_content')[0].style.left))/100;
						$('.top_menu .common').eq(order).addClass('liactive').siblings().removeClass('liactive')
					}
				}
			})
			
			// 隐藏菜单
			// $("body").on('click','.menu',function(){
			// 	$(".fixed").toggle();
			// })
			
			$(".menu").click(function(){
				$(".fixed").toggle();
				// $(".fixed_body").toggle();
				$(".fixed_body").slideToggle();
				
			});
			
			$(".fixed").click(function(){
				$(this).toggle();
				// $(".fixed_body").toggle();
				$(".fixed_body").slideToggle();
			})