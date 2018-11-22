$(function(){

    var currentPage = 1;
    var pageSize = 5;
    var currentId;
    var isDelete;

    render();

   function render(){
    $.ajax({
        type:"get",
        url:"/user/queryUser",
        data:{
            page:currentPage,
            pageSize:pageSize
        },
        dataType:"json",
        success:function(info){
            console.log(info);
           var htmlStr = template("tmp",info);
           $('tbody').html(htmlStr);
        // 分页
           $("#paginator").bootstrapPaginator({
            bootstrapMajorVersion:3,//默认是2，如果是bootstrap3版本，这个参数必填
            currentPage:info.page,//当前页
            totalPages: Math.ceil(info.total/ info.size),//总页数
            onPageClicked:function(a, b, c,page){
                console.log(page);
                
                currentPage = page;
                render();
            }
          });
        }
    })

   }
// 2.事件委托点击按钮显示模态框
   $("tbody").on("click",".btn",function(){
    $('#userModal').modal("show");
    currentId =$(this).parent().data("id");
    // console.log(id);

   isDelete = $(this).hasClass("btn-danger") ? 0:1;
   })

//    3.点击模态框确认按钮
    $('#submitBtn').click(function(){
        $.ajax({
            type:"post",
            url:"/user/updateUser",
            data:{
                id:currentId,
                isDelete:isDelete
            },
            dataType:'json',
            success:function(info){
                console.log(info);
                if(info.success){

    $('#userModal').modal("hide");                    
                    render();
                }
            }
        })
    })
      
})