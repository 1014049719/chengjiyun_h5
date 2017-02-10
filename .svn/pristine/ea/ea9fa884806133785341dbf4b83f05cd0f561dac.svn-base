/**
 * Created by Wang.'''' on 2016/11/29.
 */
$(function() {

    $.cjyAjax({
        type: "post",
        dataType: "json",
        url: "data/search-student.json",
        successCallback:function(msg){
            alert(111111);
            var source   = $("#search_student_data_entry_template").html();
            //预编译模板
            var template = Handlebars.compile(source);
            var temple = template(msg);
            console.log(temple);
            $("#search_student_data").append(temple);
        }
    })

})
