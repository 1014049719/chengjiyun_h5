$(document).ready(function() {
    var c_h = $(window).height() - $('.header').height();
    $(".section-wrapper").css({ 'min-height': c_h });
    var str_header, str_menu;
    str_header = '<img class="log" src="img/log.png" />' +
        '<ul class="main-menu-links">' +
        '<li class="main-menu-transcripts"><a href="#">成绩</a></li>' +
        '<li class="main-menu-messages"><a href="#">信息</a></li>' +
        '<li class="main-menu-setting"><a href="#">设置</a></li>' +
        '</ul>' +
        '<ul class="main-menu-right">' +
        '<li class="name"><a href="#">test</a></li>' +
        '<li class="logout"><a href="#">退出</a></li>' +
        '<li><a href="#">提意见</a></li>' +
        '<li><a href="#">帮助</a></li>' +
        '</ul>'
    $(".header").append(str_header);


    str_menu = '<div class="contenter">' +
        '<ul class="menu">' +
        '<li class="menu2-title menu2-user-manage">系统管理</li>' +
        '<li><a href="/democz/?q=transcripts/user/school">学校</a></li>' +
        '<li><a href="/democz/?q=transcripts/user/grade/9">初三</a></li>' +
        '<li><a href="/democz/?q=transcripts/user/grade/8">初二</a></li>' +
        '<li><a href="/democz/?q=transcripts/user/grade/7">初一</a></li>' +
        '<li><a href="/democz/?q=transcripts/user/grade/graduate">已毕业年级</a></li>' +
        '</ul>' +
        '<ul class="menu">' +
        '<li class="menu2-title menu2-transcripts-manage">教学管理</li>' +
        '<li><a href="/democz/?q=transcripts/search-exam">考试分析</a></li>' +
        '<li><a href="/democz/?q=transcripts/my-exam">考试管理</a></li>' +
        '<li><a href="/democz/?q=transcripts/grade/9">初三</a></li>' +
        '<li><a href="/democz/?q=transcripts/grade/8" class="active">初二</a></li>' +
        '<li><a href="/democz/?q=transcripts/grade/7">初一</a></li>' +
        '</ul>' +
        '</div>'
    $(".region").append(str_menu);
})


function setTitle(title) {
    document.title = title;
}
//时间戳转换
function add0(m) { return m < 10 ? '0' + m : m }
function format(shijianchuo) {
    //shijianchuo是整数，否则要parseInt转换
    var time = new Date(shijianchuo * 1000);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    //var s = time.getSeconds();
    var time1 = y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm);
    return time1;
}
function url(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return r[2];
  } else {
    return null;
  }
}