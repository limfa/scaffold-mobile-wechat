// 禁止微信内可以向上滑动出现文字
void function(){
    var body = document.body;
    if(body.offsetHeight == body.scrollHeight){
        body.addEventListener('touchmove' ,function(e){
            e.preventDefault();
        });
    }else{
        // 当页面需要滑动时无法这么做
    }
}();