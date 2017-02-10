USER_JASONP = false;

if (typeof httpMethod == "undefined") {
    var httpMethod = {
        POST: "POST",
        GET: "GET",
        PUT: "PUT",
        DELETE: "DELETE"
    }
}

(function($) {
    /**
     * reqData 参数说明
     * method:请求方法(可从httpMethod枚举中获取)
     * url:请求地址
     * data:请求数据 obj类型
     * dataType:请求类型  默认json
     * headers:请求头 obj类型
     * successCallback:请求成功回调
     * errorCallback:请求失败回调
     * jsonpCallback:jsonp回调函数
     * complete:complete回调函数
     */
    $.cjyAjax = function(reqData) {
        var reqDataType = "json";
        var jsonpCallback = "jsonpCallback";
        var url = "";

        if (USER_JASONP) {
            url = reqData.url;
            reqDataType = "jsonp";
        } else {
            url = reqData.url;
        }
        if (typeof reqData.dataType != "undefined") {
            reqDataType = reqData.dataType;
        }
        if (typeof reqData.jsonpCallback != "undefined") {
            jsonpCallback = reqData.jsonpCallback;
        }

        jQuery.ajax({
            type: reqData.method,
            url: url,
            headers: reqData.headers,
            data: reqData.data,
            dataType: reqDataType,
            jsonp: "callback",
            jsonpCallback: jsonpCallback,
            beforeSend: reqData.beforeSend,
            complete: reqData.complete,
            success: function(response) {
                console.log(response);
                if (typeof reqData.successCallback === "function") {
                    //TODO 校验后台status 1=成功
                    if (response.res == 1) {
                        reqData.successCallback(response.data);
                    } else {
                        if (typeof reqData.errorCallback === "function") {
                            reqData.errorCallback(response.msg);
                        }
                    }
                }
            },
            error: function(err) {
                console.log(err);
                if (typeof reqData.errorCallback === "function") {
                    reqData.errorCallback(err);
                }
            }
        });
    }
})(jQuery)