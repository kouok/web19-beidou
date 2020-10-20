window.onload=function(){

	// 页内导航
	(function(){
		var navMore=document.getElementById("navMore");
		var dropMenu=document.querySelector("header .dropMenu");
		var dropMenuBG=document.querySelector(".dropMenuBG");


		navMore.addEventListener("click",function(){
			dropMenu.style.display="block";
			dropMenuBG.style.display="block";
			setTimeout(function(){
				dropMenu.id="menuSlide";
				dropMenuBG.id="dropMenuBGfade";
			})
		});

		dropMenuBG.addEventListener("click",function(){
			dropMenu.id="";
			dropMenuBG.id="";
			
			setTimeout(function(){
				dropMenu.style.display="none";
				dropMenuBG.style.display="none";
			},500)
		});

		

	})();

	// 轮播图
	TouchSlide({ 
        slideCell:"#banner",
        titCell:".navBtns", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell:".bannerList", 
        effect:"leftLoop", 
        autoPage:true,//自动分页
        autoPlay:true //自动播放
    });
    



    // 热点新闻
    (function(){
    	var list=document.querySelectorAll(".news ul li");
    	var index=0;
    	list[index].firstElementChild.id="newsShow";
    	var timer=setInterval(function(){
    		index++;
    		if(index>=list.length){
    			index=0;
    		}
    		for(var i=0;i<list.length;i++){
    			list[i].style.display="none";
    			// setTimeout(function(){
	    		// 	list[i].firstElementChild.id="";
	    		// },100)
    			list[i].firstElementChild.id="";
    		}
    		list[index].style.display="block";
    		setTimeout(function(){
    			list[index].firstElementChild.id="newsShow";
    		},200)
    		
    	},3000)
    })();


    // 产品tab页内嵌轮播图
    TouchSlide({ 
        slideCell:"#proBanner1",        
        mainCell:".bannerList1", 
        effect:"leftLoop",
        pnLoop:false,
        // autoPlay:true //自动播放
    });
    TouchSlide({ 
        slideCell:"#proBanner2",        
        mainCell:".bannerList2", 
        effect:"leftLoop",
        pnLoop:false,
        // autoPlay:true //自动播放
    });
    TouchSlide({ 
        slideCell:"#proBanner3",        
        mainCell:".bannerList3", 
        effect:"leftLoop",
        pnLoop:false,
        // autoPlay:true //自动播放
    });


        // 产品tab切换页
    (function(){

    	var box=document.querySelector(".proTabs");
    	var btn=box.querySelectorAll(".tabsBtn>section");
    	var list=box.querySelectorAll(".tabsList>section");
    	list[0].className="posir tabShow";
    	for(var i=0;i<btn.length;i++){
    		btn[i].setAttribute("index",i);
    		// 通过JS在插件引用之后隐藏tab页面，不然插件无法读取数据
    		list[i].style.display="none";
    		btn[i].addEventListener("click",function(){
    			for(var j=0;j<btn.length;j++){
    				btn[j].firstElementChild.className="";
    				list[j].className="posir";
    				list[j].style.display="none";
    			}
    			this.firstElementChild.className="on";
    			var index=this.getAttribute("index");
				list[index].style.display="block";
				setTimeout(function(){
					list[index].className="posir tabShow";
				},100);
    		})
    	}
    	// 通过JS在插件引用之后隐藏tab页面，并使第一页显示，不然插件无法读取数据
    	list[0].style.display="block";

    })();


};