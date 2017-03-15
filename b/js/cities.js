$(function() {
	
	    var oWidth = $(window).width();
	    var CityWidth = oWidth/5;
		var oCity = document.getElementById("city");
	    var aCities = oCity.getElementsByTagName("li");
	    oCity.style.position = 'relative';
		var str = "";
		var arr = ['北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江','上海','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','重庆','四川','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆','台湾','香港','澳门',];
		for(var i=0;i<34;i++){		    
			    str += "<li style='width:60px;height:35px;opacity:0.3;border-radius:10px;position:absolute;background-color:gray;margin:10px;'></li>";	
			}
			oCity.innerHTML = str;
	
		for(var i=0;i<34;i++){  //每5个一换行
			 	
							aCities[i].style.left = CityWidth*(i%5) + "px";  
		  					aCities[i].style.top = parseInt(i/5)*CityWidth + "px";
			                aCities[i].innerHTML =  arr[i];
			    }
		for(var i=0;i<aCities.length;i++)
		{
			aCities[i].onclick = function() {
				this.backgroundColor = 'red';
				//alert (this.innerHTML);
				//self.location="index-detail.html";
				this.id = 'chosedCity'
				location.href = "detail.html?chosedCity="+this.innerHTML;
				//alert(location.href);
				//alert(this.innerHTML);
				//$(window).history.back = -1; 
			}
		}
		
//		$(".back").click(function() {
//			window.history.back(-1);
//		})
		
})

