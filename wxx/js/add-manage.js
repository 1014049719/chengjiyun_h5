/**
 * Created by Wang.'''' on 2016/11/29.
 */
$(function() {
    $('#edit-add').click(function () {

        var username = $.trim($('input[name=name]').val());
        var password1 = $.trim($('input[name=pass1]').val());
        var password2 = $.trim($('input[name=pass2]').val());
        if (username == '') {
            alert('请填写用户名');

            $('input[name=name]').focus();
            return false;
        } else if (password1 == '') {
            alert('请填写密码');

            $('input[name=pass1]').focus();
            return false;
        }
        var post_data = "para={\"school_adm_name\":\"" + username + "\",\"school_adm_psd\":\"" + password1 + "\"}"

        $.cjyAjax({
            type: "post",
            dataType: "json",
            data: post_data,
            url: "data/add-grade.json",
            successCallback: function (msg) {
                alert(111111);


            }
        })
    })

    $('input[name="pass1"]').keyup(function(){
        var gettext=$(this).val();
        console.log(gettext);
        AuthPasswd(gettext)
    })
    function AuthPasswd(string) {
        if(/[a-zA-Z]+/.test(string) && /[0-9]+/.test(string) && /\W+\D+/.test(string)) {
            noticeAssign(1);
        }else if(/[a-zA-Z]+/.test(string) || /[0-9]+/.test(string) || /\W+\D+/.test(string)) {
            if(/[a-zA-Z]+/.test(string) && /[0-9]+/.test(string)) {
                noticeAssign(-1);
            }else if(/\[a-zA-Z]+/.test(string) && /\W+\D+/.test(string)) {
                noticeAssign(-1);
            }else if(/[0-9]+/.test(string) && /\W+\D+/.test(string)) {
                noticeAssign(-1);
            }else{
                noticeAssign(0);
            }
        }
    }

    function noticeAssign(num) {
        if(num == 1) {
            $('.indicator').css({"width":'100%',"background":"#3BB558"});
            $('.strength').html('强');
        }else if(num == -1){
            $('.indicator').css({"width":'66%',"background":"#fc0"});
            $('.strength').html('中');
        }else if(num ==0) {
            $('.indicator').css({"width":'33%',"background":"#e1e1e1"});
            $('.strength').html('弱');
        }else{
            $('.indicator').css({"width":'0'});
            $('.strength').html('');
        }
    }
})
