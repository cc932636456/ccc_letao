$(function(){
    $.ajax({
        type:'get',
        url:'/employee/checkRootLogin',
        dataType:'json',
        success:function(info){
            if(info.success){
                console.log("")
            }
            if(info.error === 400)
            
          {
            location.href = "login.html"
          }
        }
    })
})