
function setpage(menu, id) {
    jQuery('.analyse_page').hide();
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
        jQuery('.child_tabs.third').css('border-top', 'none');
        jQuery('.child_tabs.third').css('border-bottom', 'none');
    }

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

    var li = parent.children('.child_tabs').children().first().children();
    li.removeClass('active');
    li.children().removeClass('active');
    jQuery(menu).addClass('active');
    jQuery(menu).parent().addClass('active');

    // 三级菜单需有一个和三级页面id同名的class
    parent.children('.child_tabs:not(:first)').hide();
    var third_menu = parent.children('.child_tabs.' + id);
    third_menu.show();
    // 激活三级菜单的“全部”分类
    li = third_menu.children().children().first();
    li.children().click();

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

    var li = parent.children('.child_tabs:not(:first)').children('.secondary').children();
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
    });
    
})(jQuery);
