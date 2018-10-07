$(function(){
    new BScroll('.content');
    $.ajax({
        url:'../json/data.json',
        dataType:'json',
        success:function(res){
            console.log(res);
        }
    })
})