////创建和初始化地图函数：
//  function initMap(){
//      createMap();//创建地图
//      setMapEvent();//设置地图事件
//      addMapControl();//向地图添加控件
//  }
//  
//  //创建地图函数：
//  function createMap(){
//      var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
//      var point = new BMap.Point(116.403958,39.915049);//定义一个中心点坐标
//      map.centerAndZoom(point,17);//设定地图的中心点和坐标并将地图显示在地图容器中
//      window.map = map;//将map变量存储在全局
//  }
//  
//  //地图事件设置函数：
//  function setMapEvent(){
//      map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
//      map.enableScrollWheelZoom();//启用地图滚轮放大缩小
//      map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
//      map.enableKeyboard();//启用键盘上下左右键移动地图
//  }
//  
//  //地图控件添加函数：
//  function addMapControl(){
//      //向地图中添加缩放控件
//	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
//	map.addControl(ctrl_nav);
//      //向地图中添加缩略图控件
//	var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
//	map.addControl(ctrl_ove);
//      //向地图中添加比例尺控件
//	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
//	map.addControl(ctrl_sca);
//  }
//  
//  
//  initMap();//创建和初始化地图



//根据城市名定位城市中心
	// 百度地图API功能
//	var map = new BMap.Map("allmap");
//	var point = new BMap.Point(116.331398,39.897445);
//	map.centerAndZoom(point,11);
//
//	function theLocation(){
//		var city = document.getElementById("cityName").value;
//		if(city != ""){
//			map.centerAndZoom(city,11);      // 用城市名设置地图中心点
//		}
//	}


//实现一进去地图定位
    var geolocation = new BMap.Geolocation();
		geolocation.getCurrentPosition(function(r){
			if(this.getStatus() == BMAP_STATUS_SUCCESS){
				var mk = new BMap.Marker(r.point);
				map.addOverlay(mk);
				map.panTo(r.point);
			}
	},{enableHighAccuracy: true});
// 百度地图API功能
	function G(id) {
		return document.getElementById(id);
	}

	var map = new BMap.Map("l-map");
	map.centerAndZoom("北京",12);                   // 初始化地图,设置城市和地图级别。

	var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
		{"input" : "suggestId"
		,"location" : map
	});

	ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
	var str = "";
		var _value = e.fromitem.value;
		var value = "";
		if (e.fromitem.index > -1) {
			value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
		}    
		str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
		
		value = "";
		if (e.toitem.index > -1) {
			_value = e.toitem.value;
			value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
		}    
		str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
		G("searchResultPanel").innerHTML = str;
	});

	var myValue;
	ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
	var _value = e.item.value;
		myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
		G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
		
		setPlace();
	});

	function setPlace(){
		map.clearOverlays();    //清除地图上所有覆盖物
		function myFun(){
			var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
			map.centerAndZoom(pp, 18);
			map.addOverlay(new BMap.Marker(pp));    //添加标注
		}
		var local = new BMap.LocalSearch(map, { //智能搜索
		  onSearchComplete: myFun
		});
		local.search(myValue);
	}