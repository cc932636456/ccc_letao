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
       
    })
   
})