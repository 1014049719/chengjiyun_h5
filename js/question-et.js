$(function() {
    $.cjyAjax({
        method: httpMethod.GET,
        url: "/als/et/10",
        successCallback: function(response) {
            setTitle(response.e_name);
            var temple = generateTemple(response);
            console.log(temple);
            $("#section-tlp-content").append(temple);
        },
        errorCallback: function(err) {
            //document.write(err);
        }
    })


    function generateTemple(response) {
        var template = Handlebars.templates['question-et.tpl'];
        Handlebars.registerHelper('getStatus', function(status) {
            switch (status) { //0=未分析,1=已分析,2=已发布
                case 0:
                    return "未分析";
                case 1:
                    return "已分析";
                case 2:
                    return "已发布"
            }
        });
        Handlebars.registerHelper("getStatusClass", function(status) {
            switch (status) {
                case 0:
                    return "course-status-unpublish";
                case 1:
                    return "course-status-unpublish";
                case 2:
                    return "course-status-publish"
            }

        })
        console.log(response);
        return template(response);
    }
})