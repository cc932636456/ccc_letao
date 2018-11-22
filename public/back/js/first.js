$(function () {

    var currentPage = 1;
    var pageSize = 5;
    render();

    function render() {
        $.ajax({
            type: 'get',
            url: '/category/queryTopCategoryPaging',
            data: {
                page: currentPage,
                pageSize: pageSize,
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                var htmlTmp = template("firstTmp", info);
                $('tbody').html(htmlTmp);
                $('#paginator').bootstrapPaginator({
                    bootstrapMajorVersion: 3,
                    currentPage: info.page,
                    totalPages: Math.ceil(info.total / info.size),
                    onPageClicked: function (a, b, c, page) {
                        console.log(page);
                        currentPage = page;
                        render();
                    }
                })
            }

        })
    }



    // 2 添加按钮显示模态框
    $('.addBtn').click(function () {
        $('#addModal').modal('show')
    })

    // 3.表单校验
    $('#form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            categoryName: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    }
                }
            }
        }
    })


    // 4.
    $("#form").on("success.form.bv",function(e){
        e.preventDefault();
        $.ajax({
            type:'post',
            url:"/category/addTopCategory",
            data: $('#form').serialize(),
            dataType:'json',
            success:function(info){
                console.log(info)
                if(info.success){
                    $('#addModal').modal('hide');
                    render();
                    $('#form').data("bootstrapValidator").resetForm( true );
                }
            }
        })
    })
})