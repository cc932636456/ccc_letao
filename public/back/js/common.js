$(function(){

    // NProgress.start();

    // NProgress.done();
    // .ajaxComplete()
    // .ajaxError()
    $(document).ajaxStart(function(){
        NProgress.start();
    })
    $(document).ajaxStop(function(){
       setTimeout(function(){
        NProgress.done();
       },500)
       
    });

    $('#category').click(function(){
        $(this).next().stop().slideToggle();
    })
   
   $('.lt_main .icon-left').click(function(){
       console.log(1)
       $('.lt_aside').toggleClass("hidemenu");
       $('.lt_main').toggleClass("hidemenu");
       $('.lt_topbar').toggleClass("hidemenu")
      
   });

   $('.lt_topbar .icon-right').click(function(){
       $('#logoutModal').modal('show');
   })



   $('#logoutBtn').click(function() {
   

    // 访问退出接口, 进行退出
    $.ajax({
        type: 'get',
        url: '/employee/employeeLogout',
        dataType: 'json',
        success: function(info) {
            console.log(info);
            if(info.success){
                location.href = "login.html";
            }
        }
    })
  })


//    $('#logoutBtn').click(function(){
//        $.ajax({
//            type:"get",
//            url:"/employee/employeeLogout",
//            datatype:'json',
//            success:function(info){
//                console.log(info);
//                if(info.success){

//                }
//            }
//        })
//    })
})

