var oGoods=document.getElementsByClassName('goods')[0];
var oSelect=oGoods.getElementsByClassName('left');
var p=[1,1,1];

var oAll=document.getElementById('all');
var p1=1;

var aNumber=document.getElementsByClassName('number');
var aLi0=aNumber[0].getElementsByTagName("li");
var aLi1=aNumber[1].getElementsByTagName("li");
var aLi2=aNumber[2].getElementsByTagName("li");

//选择商品
for(var i=0;i<oSelect.length;i++){
   oSelect[i].index=i;
  oSelect[i].onclick=function(){
    if(p[this.index]){
      this.src="../IMGcar/select1.png";
      // useAll();
      p[this.index]=0;
    }else{
      this.src="../IMGcar/select2.png";
      oAll.src="../IMGcar/select2.png";
      p1=1;
      p[this.index]=1;
    }
  }
}

//全选
oAll.onclick=function(){
  if(p1){
    this.src="../IMGcar/select1.png";
    p1=0;
    for(var i=0;i<oSelect.length;i++){
      oSelect[i].src="../IMGcar/select1.png";
      p[i]=0;
    }
  }else{
    this.src="../IMGcar/select2.png";
    p1=1;
    for(var i=0;i<oSelect.length;i++){
      oSelect[i].src="../IMGcar/select2.png";
      p[i]=1;
    }
  }
}

// function useAll(){
//   for(var i=0;i<oSelect.length;){
//     console.log(i);
//      if(oSelect[i].src=="../IMGcar/select2.png"){
//        i++;
//        console.log(i);
//      }
//   }
//   if(i==oSelect.length){
//     oAll.src="../IMGcar/select2.png";
//   }
// }

//商品数量加减
aLi0[0].onclick=function(){
  var n=aLi0[1].innerHTML*1;
  if(n>1){
    aLi0[1].innerHTML=--n;
  }
}
aLi0[2].onclick=function(){
  var n=aLi0[1].innerHTML*1;
    aLi0[1].innerHTML=++n;
}
aLi1[0].onclick=function(){
  var n=aLi1[1].innerHTML*1;
  if(n>1){
    aLi1[1].innerHTML=--n;
  }
}
aLi1[2].onclick=function(){
  var n=aLi1[1].innerHTML*1;
    aLi1[1].innerHTML=++n;
}
aLi2[0].onclick=function(){
  var n=aLi2[1].innerHTML*1;
  if(n>1){
    aLi2[1].innerHTML=--n;
  }
}
aLi2[2].onclick=function(){
  var n=aLi2[1].innerHTML*1;
    aLi2[1].innerHTML=++n;
}
