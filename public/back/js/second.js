$(function(){
    $.ajax({
        type:'get',
        url:'/category/querySecondCategoryPaging',
        data:{
            page:1,
            pageSize:5
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template("secondTmp",info);
            $('tbody').html(htmlStr);
        }
    })
})