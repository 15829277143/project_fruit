var num = 0;
	$('ul1').innerHTML +=$('ul1').innerHTML;
	var aLi =$('ul1').getElementsByTagName('li');
	$('ul1').style.width = parseInt(getStyle(aLi[0],'width'))*aLi.length +'px';
	function a(){
		clearInterval($('ul1').timer1);
		$('ul1').timer1=setInterval(function(){
			if(num ==aLi.length/2){
				num = 1;
				$('ul1').style.left = '0px';
			}else{
				num++;
			}
		doMove($('ul1'),20,-num*parseInt(getStyle(aLi[0],'width')),'left');
		},2000);
	}
	$('ul1').onmouseover = function(){
		clearInterval($('ul1').timer1);
	}
	var n = $('num').innerHTML;
	$('minus').onclick=function(){
		if(n>1){
			n--;
			$('num').innerHTML = n;
		}
			}
	$('add').onclick=function(){
			n++;
			$('num').innerHTML = n;
	}
	$('footer_2').onclick=function(){
		$('p3').innerHTML='亲~您所选的物品已成功加入购物车';
			setTimeout(function(){
				$('p3').innerHTML='';
			},1000)
	}
	a();
	$('collect').onOff=true;
	$('collect').onclick = function(){
		if(this.onOff){
			$('collect').src='imges/收藏.png';
			$('p2').innerHTML='亲~您所选的物品已成功加入收藏';
			setTimeout(function(){
				$('p2').innerHTML='';
			},1000)
			$('collect').onOff=false;
		}
		else{
			$('collect').src='imges/收藏2.jpg';
			$('p2').innerHTML='亲~您所选的物品已从收藏夹中被删除';
			setTimeout(function(){
				$('p2').innerHTML='';
			},1000)			
			$('collect').onOff = true;
		}
		
	}