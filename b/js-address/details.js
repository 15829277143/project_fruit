var oCities = document.getElementById("citied");

//将编码转换成字符  
function utf8ToChar(str) {  
    var iCode, iCode1, iCode2;  
    iCode = parseInt("0x" + str.substr(1, 2));  
    iCode1 = parseInt("0x" + str.substr(4, 2));  
    iCode2 = parseInt("0x" + str.substr(7, 2));  
    return String.fromCharCode(((iCode & 0x0F) << 12) | ((iCode1 & 0x3F) << 6) | (iCode2 & 0x3F));  
}  

//将URL中的UTF-8字符串转成中文字符串  
function getCharFromUtf8(str) {  
    var cstr = "";  
    var nOffset = 0;  
    if (str == "")  
        return "";  
    str = str.toLowerCase();  
    nOffset = str.indexOf("%e");  
    if (nOffset == -1)  
        return str;  
    while (nOffset != -1) {  
        cstr += str.substr(0, nOffset);  
        str = str.substr(nOffset, str.length - nOffset);  
        if (str == "" || str.length < 9)  
            return cstr;  
        cstr += utf8ToChar(str.substr(0, 9));  
        str = str.substr(9, str.length - 9);  
        nOffset = str.indexOf("%e");  
    }  
    return cstr + str;  
}  

//从location中获取上一级页面中的所选城市信息，得到城市的utf-8编码
function getvalue(chosedCity){
	var str=window.location.search;   //location.search是从当前URL的?号开始的字符串
	if (str.indexOf(chosedCity)!=-1){        
	    var pos_start=str.indexOf(chosedCity)+chosedCity.length+1;
	    var pos_end=str.indexOf("&",pos_start);
	    
	    if (pos_end==-1){
	        oCities.value = getCharFromUtf8(str.substring(pos_start));
	    }else{
	         oCities.value = '';
	    }
	}
}

oCities:onclick = getvalue("chosedCity");
//功能同上段代码
//var thisURL = document.URL;    
//var getval = thisURL.split('?')[1];  
//var showval= getval.split("=")[1];  //alert(thisURL);alert(getval);
//function  showvalf(){  
// //alert(showval);  
// document.getElementById('citied').value=showval;  
//}
//showvalf();

//点击提交时，验证表单
//var oForm = document.getElementsByName("information");
//var oInformation = document.getElementsByName("name");
//var oSubmit = document.getElementById("submit");
//
//oSubmit.onclick = function (oInformation){
//	for(var i=0;i<oInformation.length-1;i++)
//	{
//		if(!oInformation[i].value){
//			alert("All above must be filled out!" );
//			break;
//		}
//	}
//}

//oSubmit.onClick = NotNull(oInformation);

//oSubmit.onclick = validate_form(oForm);
//
//function validate_required(field,alerttxt)
//{
//with (field)
//{
//if (this.value==null||this.value=="")
//{alert(alerttxt);return false}
//else {return true}
//}
//}
//
//function validate_form(thisform)
//{
//with (thisform)
//{
//if (validate_required(oInformation,"All above must be filled out!")==false)
//  {return false}
//}
//}

//错误
//sessionStorage.lastname=$("#name").value;
//sessionStorage.lastphone=$("#numder").value;
//$("#name").value = sessionStorage.lastname;
//$("#numder").value = sessionStorage.lastphone;



//验证名字只能输入汉字,并且不能少于两个
$("#name").blur(function ()
    {
        var check=/[^\u4E00-\u9FA5]/g;
        var txtcheck=this.value;
        if(txtcheck!="" && txtcheck.length >1 )
        {
            if(check.test(txtcheck))
            {
                alert("只能输入汉字");
                return false;
            }
            else
            {
                //alert("通过");
                return true;
            }
        }
        else
        {
            if(txtcheck==""){
            	alert("姓名不能为空");
                return false;
               }
            else{
            	alert("姓名至少有两个字");
            	return false;
            }
        }
    });
 
//验证手机号码和固定号码是否正确
$("#number").blur(function ()
	{
	    var phone = this.value;
	    if(!(/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/).test(phone) && !(/^1[34578]\d{9}$/.test(phone)))
	    {
	        alert("号码有误，请重填");  
	        return false; 
	    } 
	});



