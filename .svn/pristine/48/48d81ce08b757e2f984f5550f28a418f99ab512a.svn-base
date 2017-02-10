/**
 * Created by Wang.'''' on 2016/11/29.
 */
$(function() {
    $.ajax({
        type: "post",
        dataType: "json",
        url: "data/schoolRegister-manage.json",
        success: function (msg) {
            if (msg.res == '1') {
                //用jquery获取模板
                var source   = $("#entry-template").html();
                //预编译模板
                var template = Handlebars.compile(source);
                var temple = template(msg.data);
                console.log(temple);
                $(".schoolRegister-manage-table").append(temple);
            }
        }
    });
})
function generateTemple(response) {
    var template = Handlebars.templates['test-table.tpl'];
    Handlebars.registerHelper("ifOdd", function(index) {
        if (index % 2 != 0) {
            return "odd";
        }
        return "even";
    });
    console.log(response);
    return template(response);
}
