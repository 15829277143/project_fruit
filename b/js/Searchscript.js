$(".search_hot_btn").on("touchend",function(){
		
		$(".search_history_btn").css({"color" : "#68e316" , "background" : "white"});
        $(".search_hot_btn").css({"color" : "white" , "background" : "#68e316"});
        $(".search_history").css("display","none");
        $(".search_hot").css("display","block");
});
$(".search_history_btn").on("touchend",function(){
		$(".search_hot_btn").css({"color" : "#68e316" , "background" : "white"});
        $(".search_history_btn").css({"color" : "white" , "background" : "#68e316"});
        $(".search_history").css("display","block");
        $(".search_hot").css("display","none");
});
