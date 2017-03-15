/* 
* @Author: anchen
* @Date:   2016-11-02 20:52:53
* @Last Modified by:   anchen
* @Last Modified time: 2016-11-02 20:54:03
*/
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