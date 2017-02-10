<h1 class="page-title">{{e_name}} 小题分析</h1>
<div class="content">
    <form enctype="multipart/form-data" action="#" method="POST">
        <!--模板内容-->
        <div class="model-content">
            <p><a href="#">查看使用教程</a></p>
            <span> </span>
            <p><a href="#">下载试卷结构模板文件</a></p>
            <span> </span>
            <p><a href="#">下载小题分模板文件</a></p>
            <span> </span>
        </div>
        <div id="course-als-warapper">
            {{#each s_course_infos}}
            <fieldset class="course-als-item">
                <div class="course-als-title">
                    <span class="course-als-title-logo"></span> {{c_name}}
                </div>
                <div class="course-als-content">
                    状态:<span class="{{getStatusClass c_analysis_state}}">{{getStatus c_analysis_state}}</span>
                    <a target="_blank" href="#">&nbsp;查看分析日志</a>
                    <a target="_blank" href="#">&nbsp;查看分析结果</a>
                    <div class="question-format-content">
                        <div class="course-format-explain">
                            <label>{{c_name}}小题分<a target="_blank" href="#">[格式说明]</a></label>
                        </div>
                        {{#if c_subsection_score_desc}}
                        <div class="show-file-info">
                            <span>
                                <img class="origin-file-icon" src="img/office-sheet.png"/>
                                <a href="{{c_subsection_score_url}}">{{c_subsection_score_desc}}</a>
                            </span>
                            <input type="submit" value="移除" class="form_submit" />
                        </div>
                        {{else}}
                        <div class="form-upload-file">
                            <input type="file" size="22" />
                            <input type="submit" value="上传" class="form_submit" />
                        </div>
                        {{/if}}
                    </div>
                    <div class="exam-struct-content">
                        <div class="course-format-explain">
                            <label>{{c_name}}试卷结构<a target="_blank" href="#">[格式说明]</a></label>
                        </div>
                        {{#if c_structure_desc}}
                        <div class="show-file-info">
                            <span>
                                <img class="origin-file-icon" src="img/office-sheet.png"/>
                                <a href="{{c_structure_url}}">{{c_structure_desc}}</a>
                            </span>
                            <input type="submit" value="移除" class="form_submit" />
                        </div>
                        {{else}}
                        <div class="form-upload-file">
                            <input type="file" size="22" />
                            <input type="submit" value="上传" class="form_submit" />
                        </div>
                        {{/if}}
                    </div>
                </div>
            </fieldset>
            {{/each}}
        </div>
        <div class="course-als-footer">
            <input type="submit" value="保存" class="form_submit" />
            <input type="submit" value="删除" class="form_submit" />
        </div>
    </form>
</div>