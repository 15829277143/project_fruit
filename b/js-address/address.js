$(function(){
	$(".all-list>li>.list-item>a").each(function(){
		$(this).click(function() {
			//$('#item1').parent().parent('.parent1');
			//$(".all-list>li").css("display","none");
			$(this).parent().parent("li").css("display","none");
		})
	})
	
//	$(".all-list>li>.list-item>label>input").each(function(){
//		//alert(this.innerHTML);
//		this.checked = "";
//		//$(this).checked = "checked";
//		var  cnt = 0;
//		if(this.checked == "checked"){cnt++;}
//		alert(cnt);
//		$(this).click(function() {
////			if(cnt  1){
////				this.checked = "checked";
////			}
//			
//		})
//	})
})

