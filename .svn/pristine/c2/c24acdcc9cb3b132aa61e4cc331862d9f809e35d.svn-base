(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['average.tpl'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"subpage text\" id=\"page2_score_"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n        <h2> "
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "</h2>\r\n        <table class=\"page1_table\">\r\n            <tr>\r\n                <th>"
    + alias4(((helper = (helper = helpers.a_name || (depth0 != null ? depth0.a_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"a_name","hash":{},"data":data}) : helper)))
    + "</th>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.classroomlist : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </tr>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.scorelist : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </table>\r\n    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                <th>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</th>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <tr class=\""
    + alias3((helpers.ifOdd || (depth0 && depth0.ifOdd) || alias2).call(alias1,(data && data.index),{"name":"ifOdd","hash":{},"data":data}))
    + "\">\r\n                    <td>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.num : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </tr>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                    <td>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</td>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.list : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['question-et.tpl'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <fieldset class=\"course-als-item\">\r\n                <div class=\"course-als-title\">\r\n                    <span class=\"course-als-title-logo\"></span> "
    + alias4(((helper = (helper = helpers.c_name || (depth0 != null ? depth0.c_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"c_name","hash":{},"data":data}) : helper)))
    + "\r\n                </div>\r\n                <div class=\"course-als-content\">\r\n                    状态:<span class=\""
    + alias4((helpers.getStatusClass || (depth0 && depth0.getStatusClass) || alias2).call(alias1,(depth0 != null ? depth0.c_analysis_state : depth0),{"name":"getStatusClass","hash":{},"data":data}))
    + "\">"
    + alias4((helpers.getStatus || (depth0 && depth0.getStatus) || alias2).call(alias1,(depth0 != null ? depth0.c_analysis_state : depth0),{"name":"getStatus","hash":{},"data":data}))
    + "</span>\r\n                    <a target=\"_blank\" href=\"#\">&nbsp;查看分析日志</a>\r\n                    <a target=\"_blank\" href=\"#\">&nbsp;查看分析结果</a>\r\n                    <div class=\"question-format-content\">\r\n                        <div class=\"course-format-explain\">\r\n                            <label>"
    + alias4(((helper = (helper = helpers.c_name || (depth0 != null ? depth0.c_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"c_name","hash":{},"data":data}) : helper)))
    + "小题分<a target=\"_blank\" href=\"#\">[格式说明]</a></label>\r\n                        </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.c_subsection_score_desc : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "                    </div>\r\n                    <div class=\"exam-struct-content\">\r\n                        <div class=\"course-format-explain\">\r\n                            <label>"
    + alias4(((helper = (helper = helpers.c_name || (depth0 != null ? depth0.c_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"c_name","hash":{},"data":data}) : helper)))
    + "试卷结构<a target=\"_blank\" href=\"#\">[格式说明]</a></label>\r\n                        </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.c_structure_desc : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "                    </div>\r\n                </div>\r\n            </fieldset>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                        <div class=\"show-file-info\">\r\n                            <span>\r\n                                <img class=\"origin-file-icon\" src=\"img/office-sheet.png\"/>\r\n                                <a href=\""
    + alias4(((helper = (helper = helpers.c_subsection_score_url || (depth0 != null ? depth0.c_subsection_score_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"c_subsection_score_url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.c_subsection_score_desc || (depth0 != null ? depth0.c_subsection_score_desc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"c_subsection_score_desc","hash":{},"data":data}) : helper)))
    + "</a>\r\n                            </span>\r\n                            <input type=\"submit\" value=\"移除\" class=\"form_submit\" />\r\n                        </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                        <div class=\"form-upload-file\">\r\n                            <input type=\"file\" size=\"22\" />\r\n                            <input type=\"submit\" value=\"上传\" class=\"form_submit\" />\r\n                        </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                        <div class=\"show-file-info\">\r\n                            <span>\r\n                                <img class=\"origin-file-icon\" src=\"img/office-sheet.png\"/>\r\n                                <a href=\""
    + alias4(((helper = (helper = helpers.c_structure_url || (depth0 != null ? depth0.c_structure_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"c_structure_url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.c_structure_desc || (depth0 != null ? depth0.c_structure_desc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"c_structure_desc","hash":{},"data":data}) : helper)))
    + "</a>\r\n                            </span>\r\n                            <input type=\"submit\" value=\"移除\" class=\"form_submit\" />\r\n                        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<h1 class=\"page-title\">"
    + container.escapeExpression(((helper = (helper = helpers.e_name || (depth0 != null ? depth0.e_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"e_name","hash":{},"data":data}) : helper)))
    + " 小题分析</h1>\r\n<div class=\"content\">\r\n    <form enctype=\"multipart/form-data\" action=\"#\" method=\"POST\">\r\n        <!--模板内容-->\r\n        <div class=\"model-content\">\r\n            <p><a href=\"#\">查看使用教程</a></p>\r\n            <span> </span>\r\n            <p><a href=\"#\">下载试卷结构模板文件</a></p>\r\n            <span> </span>\r\n            <p><a href=\"#\">下载小题分模板文件</a></p>\r\n            <span> </span>\r\n        </div>\r\n        <div id=\"course-als-warapper\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.s_course_infos : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n        <div class=\"course-als-footer\">\r\n            <input type=\"submit\" value=\"保存\" class=\"form_submit\" />\r\n            <input type=\"submit\" value=\"删除\" class=\"form_submit\" />\r\n        </div>\r\n    </form>\r\n</div>";
},"useData":true});
templates['test-table.tpl'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "    <tr class=\""
    + alias3((helpers.ifOdd || (depth0 && depth0.ifOdd) || alias2).call(alias1,(data && data.index),{"name":"ifOdd","hash":{},"data":data}))
    + "\">\r\n        <td>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\r\n    </tr>    \r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.students : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</table>";
},"useData":true});
})();
