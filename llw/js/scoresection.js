/**
 * Created by ttt on 2016/11/9.
 */
function setpage(menu, id) {
    jQuery('.page').hide();
    jQuery('#' + id).show();
    jQuery('.tabs.primary li').removeClass('active');
    jQuery('.tabs.primary a').removeClass('active');
    jQuery(menu).addClass('active');
    jQuery(menu).parent().addClass('active');
    var page_id = jQuery("#"+id);
    var second_tab_num = page_id.children().first().find('span.tab').length;
    if (second_tab_num <= 2) {
        page_id.children().first().hide();
        page_id.children().first().find('li:not(:first)').find('span').click();
        jQuery('.tabs.third').css('border-top', 'none');
        jQuery('.tabs.third').css('border-bottom', 'none');
    }
    //setTimeout(show_pending_charts, 100);

    return false;
}

function set_subpage(menu, id) {
    var parent = jQuery(menu).parent().parent().parent().parent();
    if (jQuery(menu).children().first().text() == '全部') {
        parent.find('.subpage').show();
    } else {
        parent.find('.subpage').hide();
        jQuery('#' + id).show();
    }

    var li = parent.children('.tabs').children().first().children();
    li.removeClass('active');
    li.children().removeClass('active');
    jQuery(menu).addClass('active');
    jQuery(menu).parent().addClass('active');

    // 三级菜单需有一个和三级页面id同名的class
    parent.children('.tabs:not(:first)').hide();
    var third_menu = parent.children('.tabs.' + id);
    third_menu.show();
    // 激活三级菜单的“全部”分类
    li = third_menu.children().children().first();
    li.children().click();

    //setTimeout(show_pending_charts, 100);

    return false;
}

function set_subpage2(menu, id) {
    var parent = jQuery(menu).parent().parent().parent().parent();
    var subpage2 = jQuery('#' + id);
    if (jQuery(menu).children().first().text() == '全部') {
        subpage2.children().show();
    } else {
        subpage2.siblings().hide();
        subpage2.show();
    }

    var li = parent.children('.tabs:not(:first)').children('.secondary').children();
    li.removeClass('active');
    li.children().removeClass('active');
    jQuery(menu).addClass('active');
    jQuery(menu).parent().addClass('active');

    //setTimeout(show_pending_charts, 100);

    return false;
}

(function ($) {
    $(function () {
        var $backToTopTxt = "返回顶部";
        var $backToTopEle = $('<div class="backToTop"></div>').appendTo($("body")).text($backToTopTxt).attr("title", $backToTopTxt).click(function () {
            $("html, body").animate({scrollTop: 0}, 120);
        });
        var $backToTopFun = function () {
            var st = $(document).scrollTop(), winh = $(window).height();
            (st > 0) ? $backToTopEle.show() : $backToTopEle.hide();
            //IE6下的定位
            if (!window.XMLHttpRequest) {
                $backToTopEle.css("top", st + winh - 166);
            }
        };
        $(window).bind("scroll", $backToTopFun);
        $backToTopFun();
        initDatas();
    });
    function initDatas() {
        var subjects = ["语文","数学","英语","政治","历史","地理","物理","化学","生物"];
        for(var i = 0; i < subjects.length; i++){
            var $subject = $("<li><a href=\"#\" onclick=\"return set_subpage2(this, 'page6-score-subject1"+subjects[i]+"');\">" +
                "<span class=\"tab\">"+subjects[i]+"-单科分数段详细表格</span></a></li>");
            var $subject2 = $("<li><a href=\"#\" onclick=\"return set_subpage2(this, 'page6-score-subject2"+subjects[i]+"');\">" +
                "<span class=\"tab\">"+subjects[i]+"-单科分数段详细表格</span></a></li>");
            if(i < 3){
                $subject.appendTo(".tabs.third.page6-score-subject1-all > ul");
                $subject2.appendTo(".tabs.third.page6-score-subject2-all > ul");
            }else if(i < 6) {
                $subject.appendTo(".tabs.third.page6-score-subject1-all > ul");
            }else{
                $subject2.appendTo(".tabs.third.page6-score-subject2-all > ul");
            }
        }

        var json ='{"data":{' +
            '"SignalSubject":[{"ScoreSectionName":"语文人数","Score140":"0" , "Score130":"1" , "Score120":"61" , "Score110":"183" , "Score100":"105" , "Score90":"20" , "Score80":"2" , "Score70":"0" , "Score60":"2" , "Score50":"0" , "Score40":"0" , "Score30":"0" , "Score20":"0" , "Score10":"0", "Score9":"0"}'+
            ',{"ScoreSectionName":"语文累计","Score140":"0" , "Score130":"1" , "Score120":"61" , "Score110":"183" , "Score100":"105" , "Score90":"20" , "Score80":"2" , "Score70":"0" , "Score60":"2" , "Score50":"0", "Score40":"0" , "Score30":"0" , "Score20":"0" , "Score10":"0", "Score9":"0"}' +
            ',{"ScoreSectionName":"数学人数","Score140":"0" , "Score130":"1" , "Score120":"61" , "Score110":"183" , "Score100":"105" , "Score90":"20" , "Score80":"2" , "Score70":"0" , "Score60":"2" , "Score50":"0", "Score40":"0" , "Score30":"0" , "Score20":"0" , "Score10":"0", "Score9":"0"}' +
            ',{"ScoreSectionName":"数学累计","Score140":"0" , "Score130":"1" , "Score120":"61" , "Score110":"183" , "Score100":"105" , "Score90":"20" , "Score80":"2" , "Score70":"0" , "Score60":"2" , "Score50":"0" , "Score40":"0" , "Score30":"0" , "Score20":"0" , "Score10":"0", "Score9":"0"}' +
            ',{"ScoreSectionName":"英语人数","Score140":"0" , "Score130":"1" , "Score120":"61" , "Score110":"183" , "Score100":"105" , "Score90":"20" , "Score80":"2" , "Score70":"0" , "Score60":"2" , "Score50":"0", "Score40":"0" , "Score30":"0" , "Score20":"0" , "Score10":"0", "Score9":"0"}' +
            ',{"ScoreSectionName":"英语累计","Score140":"0" , "Score130":"1" , "Score120":"61" , "Score110":"183" , "Score100":"105" , "Score90":"20" , "Score80":"2" , "Score70":"0" , "Score60":"2" , "Score50":"0", "Score40":"0" , "Score30":"0" , "Score20":"0" , "Score10":"0", "Score9":"0"}]' +
            ',"SumScoreSection":[{}]' +
            '}}';
        var jsonObj = jQuery.parseJSON(json);
        var tableHead = ["单科分数段","140段","130段","120段","110段","100段","90段","80段","70段","60段","50段","40段","30段","20段","10段","9以下"];
        var table = "<table class=\"page6-table1\"><thead><tr>";
        for(var i = 0; i < tableHead.length; i++){
            table += "<th>"+tableHead[i]+"</th>";
        }
        table += "</tr></thead><tbody>";
        for(var i = 0; i < jsonObj.data.SignalSubject.length; i++){
            var obj = jsonObj.data.SignalSubject[i];
            table += "<tr class=\""+(i%2 == 0 ? "odd":"even")+"\">"
            table += "<td>" +obj.ScoreSectionName +"</td>";
            table += "<td>" +obj.Score140 +"</td>"+"<td>" +obj.Score130 +"</td>"+"<td>" +obj.Score120 +"</td>";
            table += "<td>" +obj.Score110 +"</td>"+"<td>" +obj.Score100 +"</td>"+"<td>" +obj.Score90 +"</td>";
            table += "<td>" +obj.Score80 +"</td>"+"<td>" +obj.Score70 +"</td>"+"<td>" +obj.Score60 +"</td>";
            table += "<td>" +obj.Score50 +"</td>"+"<td>" +obj.Score40 +"</td>"+"<td>" +obj.Score30 +"</td>";
            table += "<td>" +obj.Score20 +"</td>"+"<td>" +obj.Score10 +"</td>"+"<td>" +obj.Score9 +"</td>";
            table += "</tr>"
        }
        table += "</tbody></table>";
        $(table).appendTo("#page6-score-subject1-single-score-section");
        tableHead = ["总分分数段","700-750","680-699","660-679","640-659","620-639","600-619","580-599","560-579","540-559","520-539","500-519","480-499","460-479","440-459","420-439","400-419","380-399","360-379","340-359","320-339","300-319","299或以下"];
        var table = "<table class=\"page6-table1\"><thead><tr>";
        for(var i = 0; i < tableHead.length && i < 12; i++){
            table += "<th>"+tableHead[i]+"</th>";
        }
        table += "</tr></thead>";
        var data = ["总分人数","0","0","0","2","3","15","28","50","60","67","55","42","19","17","6","3","2","1","0","3","3","0"];
        var data2 = ["总分累计","0","0","0","2","3","15","28","50","60","67","55","42","19","17","6","3","2","1","0","3","3","0"];
        var tableData = "<tr class = \"odd\">";
        var tableData2 = "<tr class = \"even\">";
        var tableDataHead = "<tr class = \"odd\">";
        table += "<tbody>"
        for(var i = 0; i< data.length; i++){
            if(i < 12){
                tableData += "<td>"+data[i] + "</td>";
                tableData2 += "<td>"+data2[i] + "</td>";
            }else if(i == 12){
                table += tableData + "</tr>"+tableData2+"</tr>";
                tableData = "<tr class = \"odd\"><td>"+data[0] + "</td><td>"+data[i] + "</td>";
                tableData2 = "<tr class = \"even\"><td>"+data[0] + "</td><td>"+data[i] + "</td>";
                tableDataHead += "<th>"+tableHead[0] + "</th><th>"+tableHead[i] + "</th>";
            }else{
                tableData += "<td>"+data[i] + "</td>";
                tableData2 += "<td>"+data2[i] + "</td>";
                tableDataHead += "<th>"+tableHead[i] + "</th>";
            }
        }

        table += tableDataHead+ "</tr>"+ tableData + "</tr>"+tableData2+"</tr></tbody></table>";
        $(table).appendTo("#page6-score-subject1-total-score-section");
    }
})(jQuery);