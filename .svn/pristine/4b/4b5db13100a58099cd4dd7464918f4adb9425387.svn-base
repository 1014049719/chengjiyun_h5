(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['grade-manage-table.tpl'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "                                    <tr class=\""
    + alias3((helpers.ifOdd || (depth0 && depth0.ifOdd) || alias2).call(alias1,(data && data.index),{"name":"ifOdd","hash":{},"data":data}))
    + "\">\r\n                                        <td><input name=\"chk_list\" type=\"checkbox\"/></td>\r\n                                        <td>"
    + alias3(((helper = (helper = helpers.student_id || (depth0 != null ? depth0.student_id : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"student_id","hash":{},"data":data}) : helper)))
    + "</td>\r\n                                        <td>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\r\n                                        <td>"
    + alias3(((helper = (helper = helpers.class_type || (depth0 != null ? depth0.class_type : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"class_type","hash":{},"data":data}) : helper)))
    + "</td>\r\n                                        <td><a href=\"resetPassword.html\"\r\n                                               onclick=\"reset_password("
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ", '"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "');\">重置密码</a>　\r\n                                            <a href=\"personSet.html?student="
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">编辑修改</a>　\r\n                                            <a href=\"#\" onclick=\"delete_account("
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ", '"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "');\">删除账号</a>\r\n                                        </td>\r\n                                    </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<table class=\"page1_table\">\r\n                                    <tr>\r\n                                        <th>\r\n                                            <input onclick=\"checkAll(this)\"  class=\"form-checkbox\" title=\"选择此表中所有的行\" type=\"checkbox\" />\r\n                                        </th>\r\n                                        <th>学号</th>\r\n                                        <th>姓名</th>\r\n                                        <th>班别</th>\r\n                                        <th>操作</th>\r\n                                    </tr>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                                </table>";
},"useData":true});
})();