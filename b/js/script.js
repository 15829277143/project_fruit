window.onload = function(){
	fontSelf();
}
window.onresize = function () {
	fontSelf();
};

function fontSelf() {
	var wHtml = document.getElementById('html');
	var h = document.documentElement.clientHeight;
	var  w = document.documentElement.clientWidth;
	w =  w > 768 ? 768 : document.documentElement.clientWidth;
	wHtml.style.fontSize = w * 0.045 + 'px';
	return h;
	
};
			
//滑动出现上定位
var oHeader = document.getElementById('header');
var oHtml = document.getElementById('html');
var oSearch = document.getElementById('position');
var oInput = oSearch.getElementsByTagName('input')[0];
var oSearch1 = document.getElementById('position1');
var oInput1 = oSearch1.getElementsByTagName('input')[0];
//oSearch1.innerHTML = oSearch.innerHTML;
touchFunc(oHtml,'top',function(){
	if(oInput.value)
	{
		oInput1.value = oInput.value;
		oInput.value = oInput1.value;
		
	}
	oSearch1.style.display = 'block';
	oSearch.style.display = 'none';
	
})
touchFunc(oHtml,'down',function(){
	
	//oInput1.innerHTML = oInput.innerHTML;
	oSearch1.style.display = 'none';
	oSearch.style.display = 'block';
})

//三个参数，对象，事件，执行的函数
function touchFunc(obj,type,func) {
    //滑动范围内则做点击处理，s是开始，e是结束
    var distance = oHeader.offsetHeight/2;
    var init = {y:50,sy:0,ey:0}; 
    var init = {wy:50,wsy:0,wey:0};
    type = type.toLowerCase();
 	
    obj.addEventListener("touchstart",function(){
        init.sy = event.targetTouches[0].pageY;
        init.wsy = event.targetTouches[0].clientY  ;
        init.ey = init.sy;
        init.wey = init.wsy;
        if(type.indexOf("start") != -1) func();
    }, false);
 
    obj.addEventListener("touchmove",function() {
        event.preventDefault();//阻止触摸时浏览器的缩放、滚动条滚动
        init.ey = event.targetTouches[0].pageY;
        init.wey = event.targetTouches[0].clientY  ;
         document.getElementsByTagName('body')[0].style.top = -(init.sy-init.wsy)+'px';
        if(type.indexOf("move")!=-1) func();
    }, false);
      
    obj.addEventListener("touchend",function() {
        var changeY = init.sy - init.ey;
            //上下事件
            //alert(init.wsy);
            //alert(init.wey);
           
            if((init.ey-init.wey > distance)) {
                if(type.indexOf("top")!=-1) func();
            }
            else{
                if(type.indexOf("down")!=-1) func();
            }
        })
};



//购物车计数
//var foodNum = document.getElementById('food-num');
//var num = 0;
//alert($('.food-add').length)
//$('.food-add').on('touchend',function(){
//	num++;
//	//foodNum.innerHTML = num ;
//	$('#food-num').html(num)
//});	

//点击阴影
var oFooter = document.getElementsByTagName('footer')[0];
var oA = oFooter.getElementsByTagName('a');
for(var i=0;i<oA.length;i++){
	oA[i].index = i;
	oA[i].addEventListener('touchend',function(){
		for(var j=0;j<oA.length;j++){
			if(j==this.index){
				oA[j].className = 'shadow'  ;
				
			}
			else{
				oA[j].className = 'shadow1'  ;
			}
		}
	})
	
}


//回到顶部
$('.back').on('touchend',function(){
	$('body').css('top',0);
})

//alert($('.orange-list-info').length);
for(var i = 0;i<$('.orange-list-info').length; i++){
	$('.orange-list-info').eq(i).attr('id',i);
}



