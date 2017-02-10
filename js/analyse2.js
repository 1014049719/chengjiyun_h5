// $.ajax({
//     type: "post",
//     dataType: "json",
//     url: "data/analyse2.json",
//     success: function(msg) {
//         if (msg.res == '1') {
//             $(".title_two .name").text(msg.data.name);
//             $(".student_num").text(msg.data.student_num);
//             $(".add_time").text(format(msg.data.add_time));
//             $(".exam_time").text(format(msg.data.exam_time));
//             $(".exam_pk").text(msg.data.exam_pk);
//             $(".look_num").text(msg.data.look_num);
//             $(".teacher_looknum").text(msg.data.teacher_looknum);

//             $(".teacher_num").text(msg.data.teacher_num);
//             $(".studentr_looknum").text(msg.data.studentr_looknum);
//             //表格
//             var str_th = "<tr><th></th>",
//                 str_td;
//             $.each(msg.data.show, function(index, value) {
//                 str_th += "<th>" + value + "</th>";
//             })
//             str_th += "</tr>";
//             $.each(msg.data.list, function(index, value) {
//                 str_td += "<tr><td>" + value.name + "</td>";
//                 $.each(value.scorelist, function(i, v) {
//                     str_td += "<td>" + v.num + "</td>";
//                 })
//                 str_td += "</tr>";
//             })
//             $(".page1_table").append(str_th, str_td)
//         }
//     }
// })
$.cjyAjax({
    type: "post",
    dataType: "json",
    url: "data/analyse2.json",
    successCallback:function(msg){
        console.log(msg.name)
        $(".title_two .name").text(msg.name);
    }
})
$(document).ready(function() {
    $(".tabs li").each(function(e) {
        $(".tabs li").eq(e).click(function() {
            $(this).
            addClass("active").siblings().removeClass("active");
            $(".analyse_box .analyse_page").eq(e).show().siblings().hide();
        })
    })
})

function set_subpage(menu, id) {
    var parent = jQuery(menu).parent().parent().parent().parent();
    if (jQuery(menu).children().first().text() == '全部') {
        parent.find('.subpage').show();
    } else {
        parent.find('.subpage').hide();
        jQuery('#' + id).show();
    }

    var li = parent.children('.child-tabs').children().first().children();
    li.removeClass('active');
    jQuery(menu).parent().addClass('active');

    // 三级菜单需有一个和三级页面id同名的class
    parent.children('.tabs:not(:first)').hide();
    var third_menu = parent.children('.tabs.' + id);
    third_menu.show();
    // 激活三级菜单的“全部”分类
    li = third_menu.children().children().first();
    li.children().click();

    return false;
}