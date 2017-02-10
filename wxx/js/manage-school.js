/**
 * Created by Wang.'''' on 2016/11/29.
 */
$(function() {

    $.cjyAjax({
        type: "post",
        dataType: "json",
        url: "data/manage-school.json",
      //  url:"Organ"
        successCallback:function(msg){

            //if( typeof(msg.m_attr[0].m_student) != "undefined" ) {
            //    $(".student_number1").text(msg.m_attr[0].m_student);
            //    $(".teacher_number1").text(msg.m_attr[0].m_teacher);
            //    $(".exam_number1").text(msg.m_attr[0].m_test);
            //    $(".add-grade1").remove();
            //}
            //if( typeof(msg.m_attr[1].m_student) != "undefined" ) {
            //    $(".student_number2").text(msg.m_attr[1].m_student);
            //    $(".teacher_number2").text(msg.m_attr[1].m_teacher);
            //    $(".exam_number2").text(msg.m_attr[1].m_test);
            //    $(".add-grade2").remove();
            //}
            //if( typeof(msg.m_attr[2].m_student) != "undefined" ) {
            //    $(".student_number3").text(msg.m_attr[2].m_student);
            //    $(".teacher_number3").text(msg.m_attr[2].m_teacher);
            //    $(".exam_number3").text(msg.m_attr[2].m_test);
            //    $(".add-grade3").remove();
            //}
            var str="";
            $.each(msg.g_attr,function(i,v){
                console.log(msg.g_attr);

                if(v.g_year==''){
                    str +="<tr class='bigger'>"
                        + "<td><a class='blue-round-box' href='../wth/systemManage-class.html'>" + v.g_name + "</a></td>"
                        + "<td><a class='blue-round-box' href='manage-add-gread.html'> 新建年级</a></td>"
                        +"<td></td>"
                        +"<td></td>"
                        +"</tr>"
                }
                else{
                    str +="<tr class='bigger'>"
                        + "<td><a class='blue-round-box' href='../wth/systemManage-class.html'>" + v.g_name + "</a></td>"
                        +"<td>" + v.g_studentnum + "</td>"
                        +"<td>" + v.g_teachernum + "</td>"
                        +"<td>" + v.g_exam + "</td>"
                        +"</tr>"
                }
            })
            $("#invisible1").append(str);
        }
    })

})
