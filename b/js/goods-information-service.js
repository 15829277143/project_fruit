// JavaScript Document
window.onload = function(){
    fontSelf();
}
window.onresize = function () {
    fontSelf();
};
function fontSelf() {
    var wHtml = document.getElementById('html');
    var w = document.documentElement.clientWidth;
    w =  w > 768 ? 768 : document.documentElement.clientWidth;
    wHtml.style.fontSize = w * 0.045 + 'px';
};
function $( v ){//$为函数名
	if( typeof v === 'function' ){
		window.onload = v;
	} else if ( typeof v === 'string' ) {
		return document.getElementById(v);
	} else if ( typeof v === 'object' ) {
		return v;
	}
}
function getStyle( obj, attr ){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle( obj )[attr];
}
function doMove(id,speed,where,howTo,endFn){
	speed = parseInt(getStyle( id, howTo ))> where ? -speed : speed;
	clearInterval(id.timer);
	id.timer=setInterval(function(){
		var nowLeft = parseInt(getStyle( id, howTo ));
		var thisLeft = nowLeft+ speed;
		if(thisLeft >=where&&speed>0||thisLeft <=where&&speed<0){
			thisLeft=where;
		}
		id.style[howTo] = thisLeft+'px';
		if(parseInt(getStyle( id, howTo ))===where){
			clearInterval(id.timer);
			endFn&&endFn();
		}
	},30)
}