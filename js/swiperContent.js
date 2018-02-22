window.onload=function(){
var imgSrc=[
	"images/p1_02.png",
	"images/p1_04.png",
	"images/p1_05.png",
	"images/p1_06.png",
	"images/p1-t1_02.png",
	"images/p2_03.png",
	"images/p2_04.png",
	"images/p1-1.JPG",
	"images/p1-2.JPG"
	];
preloadimages(imgSrc).done(function(images){
	setTimeout(function(){
		var str='<div class="wrap" style="margin-bottom: 0.5rem;margin-top:5.5rem">'
	    	+'	<img class="animated fadeInDown" style="animation-delay: 0.5s;" src="images/p1-t1_02.png"/>'
	    	+'</div>'
	    	+'<div class="wrap" style="">'
    		+'<img class="animated fadeInDown" style="animation-delay: 1.5s;" src="images/p1_02.png"/>'
    		+'</div>'
    		+'<div class="wrap" style="">'
    		+'<img class="animated fadeInDown" style="animation-delay: 2.3s;" src="images/p1_04.png"/>'
    		+'</div>'
    		+'<div class="wrap" style="">'
    		+'<img class="animated fadeInDown" style="animation-delay: 3.1s;" src="images/p1_05.png"/>'
    		+'</div>'
    		+'<div class="wrap" style="">'
    		+'<img class="animated fadeInDown" style="animation-delay: 3.9s;" src="images/p1_06.png"/>'
    		+'</div>';
   			$(".slide1").html(str);
	},200)
});
function preloadimages(arr){
    var newimages=[],
    loadedimages=0;
    var sumNum=arr.length,
    	loadlength=0;
    var postaction=function(){};
    var arr=(typeof arr!="object")? [arr] : arr  //确保参数总是数组
    function imgloadpost(){
    	loadedimages++;
    	if(loadedimages==arr.length){
    		postaction(newimages);
    	}
    }
    for (var i=0; i<arr.length; i++){
        newimages[i]=new Image();
        newimages[i].src=arr[i];
        newimages[i].onload=function(){
        	imgloadpost();
        }
    }
    return { //此处返回一个空白对象的done方法
        done:function(f){
            postaction=f || postaction
        }
    }
}
var swiper = new Swiper('.swiper-container-v', {
  	direction: 'vertical',
  	autoplay:10000,
  	speed:500,
  	autoplayStopOnLast : true,
  	autoplayDisableOnInteraction : false,
   	onSlideChangeEnd:function(swiper){
   		if(swiper.activeIndex+''==0){
   			var str='<div class="wrap" style="margin-bottom: 0.5rem;margin-top:5.5rem">'
	    	+'	<img class="animated fadeInDown" style="animation-delay: 0.5s;" src="images/p1-t1_02.png"/>'
	    	+'</div>'
	    	+'<div class="wrap" style="">'
    		+'<img class="animated fadeInDown" style="animation-delay: 1.5s;" src="images/p1_02.png"/>'
    		+'</div>'
    		+'<div class="wrap" style="">'
    		+'<img class="animated fadeInDown" style="animation-delay: 2.3s;" src="images/p1_04.png"/>'
    		+'</div>'
    		+'<div class="wrap" style="">'
    		+'<img class="animated fadeInDown" style="animation-delay: 3.1s;" src="images/p1_05.png"/>'
    		+'</div>'
    		+'<div class="wrap" style="">'
    		+'<img class="animated fadeInDown" style="animation-delay: 3.9s;" src="images/p1_06.png"/>'
    		+'</div>';
   			$(".slide1").html(str);
   		}else{
   			$(".slide1").html(" ")
   		}
   		//page2
   		if(swiper.activeIndex+''==1){
   			var str='<div class="magictime vanishIn swiper-container swiper-container-h" style="width:6.72rem;height:5.32rem;margin-bottom: 0.5rem;margin-top:3.5rem">'
				+'<div class="swiper-wrapper">'
					+'<div class="swiper-slide" style="background:transparent"><img src="images/p1-1.JPG"/></div>'
					+'<div class="swiper-slide" style="background:transparent"><img src="images/p1-2.JPG"/></div>'
				+'</div>'
				+'<div class="swiper-pagination"></div>'
			+'</div>'
			+'<div class="swiper-button-prev swiper-button-white"></div>'
			+'<div class="swiper-button-next swiper-button-white"></div>'
    		+'<div class="wrap" style="">'
    			+'<img class="animated fadeInDown" style="animation-delay: 1.1s;" src="images/p2_03.png"/>'
    		+'</div>'
    		+'<div class="wrap" style="">'
    			+'<img class="animated fadeInDown" style="animation-delay: 2.1s;" src="images/p2_04.png"/>'
    		+'</div>';
   			$(".slide2").html(str)
   			swiperH();
   			var imgSrc=[
   				"images/p2-1.JPG",
				"images/p2-2.JPG",
				"images/p3-1.JPG",
				"images/p3-2.JPG",
				"images/p4-1.JPG",
				"images/p4-2.JPG",
				"images/p3_03.png",
				"images/p4_03.png",
				"images/p4_04.png",
				"images/p5_04.png",
				];
			preloadimages(imgSrc);
   		}else{
   			$(".slide2").html(" ")
   		}
   		//page3
   		if(swiper.activeIndex+''==2){
   			var str='<div class="magictime vanishIn swiper-container swiper-container-h" style="width:6.72rem;;height:5.32rem;margin-bottom: 0.5rem;margin-top:3.5rem">'
				+'<div class="swiper-wrapper">'
					+'<div class="swiper-slide" style="background:transparent"><img src="images/p2-1.JPG"/></div>'
					+'<div class="swiper-slide" style="background:transparent"><img src="images/p2-2.JPG"/></div>'
				+'</div>'
				+'<div class="swiper-pagination"></div>'
			+'</div>'
			+'<div class="swiper-button-prev swiper-button-white"></div>'
			+'<div class="swiper-button-next swiper-button-white"></div>'
    		+'<div class="wrap" style="">'
    			+'<img class="animated fadeInDown" style="animation-delay: 1.1s;" src="images/p3_03.png"/>'
    		+'</div>';
  			$(".slide3").html(str)
  			swiperH();
  			var imgSrc=[
				"images/p5-1.JPG",
				"images/p5-2.JPG",
				"images/p6-1.JPG",
				"images/p6-2.JPG",
				"images/p6_03.png",
				"images/p7_02.png",
				"images/p8_02.png",
				"images/p8_03.png",
				"images/p8_04.png",
				"images/p8-btn_02.png"
				];
			preloadimages(imgSrc);
   		}else{
   			$(".slide3").html(" ")
   		}
   		//page4
		if(swiper.activeIndex+''==3){
   			var str='<div class="magictime vanishIn swiper-container swiper-container-h" style="width:6.72rem;height:5.32rem;margin-bottom: 0.5rem;margin-top:3.5rem">'
				+'<div class="swiper-wrapper">'
					+'<div class="swiper-slide" style="background:transparent"><img src="images/p3-1.JPG"/></div>'
					+'<div class="swiper-slide" style="background:transparent"><img src="images/p3-2.JPG"/></div>'
				+'</div>'
				+'<div class="swiper-pagination"></div>'
			+'</div>'
			+'<div class="swiper-button-prev swiper-button-white"></div>'
    				+'<div class="swiper-button-next swiper-button-white"></div>'
    		+'<div class="wrap" style="">'
    			+'<img class="animated fadeInDown" style="animation-delay: 1.1s;" src="images/p4_03.png"/>'
    		+'</div>'
    		+'<div class="wrap" style="">'
    			+'<img class="animated fadeInDown" style="animation-delay: 2.1s;" src="images/p4_04.png"/>'
    		+'</div>';
  			$(".slide4").html(str)
  			swiperH()
   		}else{
   			$(".slide4").html(" ")
   		}
//   	page5
		if(swiper.activeIndex+''==4){
   			var str='<div class="magictime vanishIn swiper-container swiper-container-h" style="width:6.72rem;height:5.32rem;margin-bottom: 0.5rem;margin-top:3.5rem">'
				+'<div class="swiper-wrapper">'
					+'<div class="swiper-slide" style="background:transparent"><img src="images/p4-1.JPG"/></div>'
					+'<div class="swiper-slide" style="background:transparent"><img src="images/p4-2.JPG"/></div>'
				+'</div>'
				+'<div class="swiper-pagination"></div>'
			+'</div>'
			+'<div class="swiper-button-prev swiper-button-white"></div>'
    				+'<div class="swiper-button-next swiper-button-white"></div>'
    		+'<div class="wrap" style="">'
    			+'<img class="animated fadeInDown" style="animation-delay: 1.1s;" src="images/p5_03.png"/>'
    		+'</div>'
    		+'<div class="wrap" style="">'
    			+'<img class="animated fadeInDown" style="animation-delay: 2.1s;" src="images/p5_04.png"/>'
    		+'</div>';
			$(".slide5").html(str)
			swiperH()
   		}else{
   			$(".slide5").html(" ")
   		};
   		//page6
		if(swiper.activeIndex+''==5){
   			var str='<div class="magictime vanishIn swiper-container swiper-container-h" style="width:6.72rem;height:5.32rem;margin-bottom: 0.5rem;margin-top:3.5rem">'
				+'<div class="swiper-wrapper">'
					+'<div class="swiper-slide" style="background:transparent"><img src="images/p5-1.JPG"/></div>'
					+'<div class="swiper-slide" style="background:transparent"><img src="images/p5-2.JPG"/></div>'
				+'</div>'
				+'<div class="swiper-pagination"></div>'
			+'</div>'
			+'<div class="swiper-button-prev swiper-button-white"></div>'
    				+'<div class="swiper-button-next swiper-button-white"></div>'
    		+'<div class="wrap" style="">'
    			+'<img class="animated fadeInDown" style="animation-delay: 1.1s;" src="images/p6_03.png"/>'
    		+'</div>';
  			$(".slide6").html(str)
  			swiperH()
   		}else{
   			$(".slide6").html(" ")
   		}
   		//page7
		if(swiper.activeIndex+''==6){
   			var str='<div class="magictime vanishIn swiper-container swiper-container-h" style="width:6.72rem;height:5.32rem;margin-bottom: 0.5rem;margin-top:3.5rem">'
				+'<div class="swiper-wrapper">'
					+'<div class="swiper-slide" style="background:transparent"><img src="images/p6-1.JPG"/></div>'
					+'<div class="swiper-slide" style="background:transparent"><img src="images/p6-2.JPG"/></div>'
				+'</div>'
				+'<div class="swiper-pagination"></div>'
			+'</div>'
			+'<div class="swiper-button-prev swiper-button-white"></div>'
    				+'<div class="swiper-button-next swiper-button-white"></div>'
    		+'<div class="wrap" style="">'
    			+'<img class="animated fadeInDown" style="animation-delay: 1.1s;" src="images/p7_02.png"/>'
    		+'</div>';
  			$(".slide7").html(str)
  			swiperH()
   		}else{
   			$(".slide7").html(" ")
   		}
   		//page8
		if(swiper.activeIndex+''==7){
   			var str='<div class="wrap" style="margin-top:4rem">'
    		+'<img class="animated fadeInDown" style="animation-delay: 0.5s;" src="images/p8_02.png"/>'
    		+'</div>'
    		+'<div class="wrap" style="">'
    		+'<img class="animated fadeInDown" style="animation-delay: 1.3s;" src="images/p8_03.png"/>'
    		+'</div>'
    		+'<div class="wrap" style="margin-bottom: 0.5rem;">'
    		+'<img class="animated fadeInDown" style="animation-delay: 2.1s;" src="images/p8_04.png"/>'
    		+'</div>'
    		+'<div class="wrap" style="">'
    		+'<a href="http://www.miaopai.com/show/hwikzr~9FkY6d4evlaIuJyc4FJnAZux0496fAQ__.htm"><img class="animated zoomIn" style="animation-delay: 3s;" src="images/p8-btn_02.png"/></a>'
    		+'</div>';
  			$(".slide8").html(str)
  			$("#up").css("display","none")
   		}else{
   			$(".slide8").html(" ")
   			$("#up").css("display","block")
   		}
	}
});
function swiperH(){
	var swiperV = new Swiper('.swiper-container-h', {
	        pagination: '.swiper-pagination-h',
			loop:true,
			autoplay:2500,
			pagination : '.swiper-pagination',
			autoplayDisableOnInteraction : false,
	        prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next'
	        
	    }
	)
}
}