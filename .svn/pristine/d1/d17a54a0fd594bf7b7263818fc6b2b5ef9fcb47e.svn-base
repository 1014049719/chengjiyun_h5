				<table class="page1_table">
                                    <tr>
                                        <th>
                                            <input onclick="checkAll(this)"  class="form-checkbox" title="选择此表中所有的行" type="checkbox" />
                                        </th>
                                        <th>学号</th>
                                        <th>姓名</th>
                                        <th>班别</th>
                                        <th>操作</th>
                                    </tr>
                                    {{#each data}}
                                    <tr class="{{ifOdd @index}}">
                                        <td><input name="chk_list" type="checkbox"/></td>
                                        <td>{{student_id}}</td>
                                        <td>{{name}}</td>
                                        <td>{{class_type}}</td>
                                        <td><a href="resetPassword.html"
                                               onclick="reset_password({{id}}, '{{name}}');">重置密码</a>　
                                            <a href="personSet.html?student={{id}}">编辑修改</a>　
                                            <a href="#" onclick="delete_account({{id}}, '{{name}}');">删除账号</a>
                                        </td>
                                    </tr>
                                    {{/each}}
                                </table>