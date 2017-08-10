function show() {
	$.ajax({
		type: "get",
		url: "http://123.206.204.163:2333/fruit/firstPage/firstPage",
		dataType: "json",
		async: true,
		success: function(data) {
			var strr = '';
			var str1 = '';
			var str = '';
			var str2 = '';
			for(var i in data['img']) {
				str1 += '<li data-target="#carousel-example-generic" data-slide-to=' + i + '></li>';
				str += '<div class="item"><img src =\"' + data['img'][i] + "\"/></div>";
			}
			for(var i in data['bannerImg']) {
				$('.orange').eq(i).html('<img src =\"' + data['bannerImg'][i] + '\"/>');

			}
			for(var j = 0; j < 3; j++) {
				str2 += '<div class="orange-list clearfix"><div class="orange-list-info clearfix">';
				for(var i in data['goodsList']) {
					str2 += '<a href="goods-information.html"><img src =\"' + data['goodsList'][i]['img'] + '\"/>' +
						'<span class="info-name">' + data['goodsList'][i]['fname'] + '</span>' +
						'<span class="info-kind">' + data['goodsList'][i]['active'] + '</span>' +
						'<span class="info-weight">' + data['goodsList'][i]['weight'] + '</span>' +
						'<span class="info-money">' + data['goodsList'][i]['price'] + '</span></a>' +
						'<span class="food-add"><i class="fa  fa-plus-square "></i></span>';
				}
				str2 += '</div></div>'
			}
			//alert(str2)
			$('.orange').append(str2);
			//$('#suggestId').html(data['detailAddress']);
			//alert($('#suggestId').val())
			$(".carousel-indicators").html(str1);
			$(".carousel-inner").html(str);
			$('.carousel-indicators li').eq(1).addClass("active");
			$('.carousel-inner div').eq(1).addClass("active");
			$('#food-num').html(data['cartGoodsNum']);
			var num = $('#food-num').html();
			$('.food-add').on('touchend', function() {
				num++;
				$('#food-num').html(num);
			});
		}
	});

}
var num = $('#food-num').html();
			$('.food-add').on('touchend', function() {
				num++;
				$('#food-num').html(num);
			});
//function getAddress() {
//	$.ajax({
//		type: "get",
//		url: "http://123.206.204.163:2333/fruit/firstPage/firstPage",
//		data: {
//
//		},
//		async: true,
//		dataType: "json",
//		success: function(data) {
//			var str = '';
//			$.each(data, function(kind, num) {
//				str += num['考试名称'];
//				//alert(str)
//			})
//
//			$('#suggestId').val(str);
//		}
//	});
//}

//show();

//alert($('.food-add').length)
//$('.food-add').on('touchend',function() {
//	alert(num)
//	num++;
//	alert(num)
//	$('#food-num').html(num);
//	$.ajax({
//		type: "get",
//		url: "http://123.206.204.163:2333/fruit/firstPage/firstPage",
//		data: {
//			id: $(this).attr('id')
//		},
//		async: true,
//		dataType: "json",
//		success: function(data) {
//			num = data['cartGoodsNum']
//			num++;
//			$('food-num').inner(num);
//		}
//	});
//})
