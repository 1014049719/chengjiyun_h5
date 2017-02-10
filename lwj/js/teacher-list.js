/**
 * Created by apple on 2016/11/17.
 */
$(document).ready(function() {
    var data = {
        "head_teacher" :[
            {
                "class_name" : "1",
                "subject":"未分",
                "special" : "重点班",
                "header_teacher":"王凤婷",
                "target" : "0",
                "chinese":"曾寒冰",
                "math" : "王凤婷",
                "english":"何靖雯",
                "physical" : "谢婉君",
                "chemistry":"郑舒敏",
                "biology" : "",
                "political":"房玲妹",
                "history":"伍蓝结",
                "geography":"",
                "pe":"罗仕鹏",
            },
            {
                "class_name" : "2",
                "subject":"未分",
                "special" : "重点班",
                "header_teacher":"江梓昕",
                "target" : "0",
                "chinese":"曾寒冰",
                "math" : "王凤婷",
                "english":"何靖雯",
                "physical" : "谢婉君",
                "chemistry":"郑舒敏",
                "biology" : "",
                "political":"房玲妹",
                "history":"伍蓝结",
                "geography":"",
                "pe":"罗仕鹏",
            },
            {
                "class_name" : "3",
                "subject":"未分",
                "special" : "重点班",
                "header_teacher":"刘晓婷	",
                "target" : "0",
                "chinese":"曾寒冰",
                "math" : "王凤婷",
                "english":"何靖雯",
                "physical" : "谢婉君",
                "chemistry":"郑舒敏",
                "biology" : "",
                "political":"房玲妹",
                "history":"伍蓝结",
                "geography":"",
                "pe":"罗仕鹏",
            },
            {
                "class_name" : "4",
                "subject":"未分",
                "special" : "重点班",
                "header_teacher":"刘晓婷	",
                "target" : "0",
                "chinese":"曾寒冰",
                "math" : "王凤婷",
                "english":"何靖雯",
                "physical" : "谢婉君",
                "chemistry":"郑舒敏",
                "biology" : "",
                "political":"房玲妹",
                "history":"伍蓝结",
                "geography":"",
                "pe":"罗仕鹏",
            }
        ]
    };
    var myTemplate = Handlebars.compile($("#table-template").html());//注册一个Handlebars Helper,用来将索引+1，因为默认是从0开始的
    Handlebars.registerHelper("isodd",function(index,options){
        if((parseInt(index)+1)%2){
            //偶数行
            return options.fn(this);
        }else{
            //奇数行执行{{else}}部分
            return options.inverse(this);
        }
    });

    $('#tableList').html(myTemplate(data));
})

;
