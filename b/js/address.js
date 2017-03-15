$(function(){
	$(".all-list>li>.list-item>a").each(function(){
		$(this).click(function() {
			//$('#item1').parent().parent('.parent1');
			//$(".all-list>li").css("display","none");
			$(this).parent().parent("li").css("display","none");
		})
	})
	
	$(".all-list>li>.list-item>label>input").each(function(){
		$(this).checked = "checked";
//		$(this).click(function() {
//			
//		})
	})
})

