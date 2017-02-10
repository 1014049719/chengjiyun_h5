/**
 * Created by Wang.'''' on 2016/11/29.
 */
$(function() {
    $('.edit-add').click(function() {

        var checkValue=$("#edit-grade").val();
        var classnumber = $.trim($('input[name=name]').val());

        if (classnumber == '') {
            alert('请填写班级数');
            $('input[name=name]').focus();
            return false;
        }

        var post_data="para={\"year\":\""+checkValue +"\",\"classcount\":\"" +classnumber +"\"}"

        $.cjyAjax({
        type: "post",
        dataType: "json",
            data : post_data,
        url: "data/add-grade.json",
        successCallback:function(msg){

         //   window.location="manage-teacher-arrange.html";

        }
    })
    })
})