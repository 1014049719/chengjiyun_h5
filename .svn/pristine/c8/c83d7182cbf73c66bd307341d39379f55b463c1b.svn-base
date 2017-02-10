/**
 * Created by Wang.'''' on 2016/11/17.
 */
function Div_hideOrshow(menu,cur_div) {
    var parent = jQuery(menu).parent().parent().parent().parent();
    var li = parent.children('.tabs').children().first().children();
    li.removeClass('active');
    li.children().removeClass('active');
    jQuery(menu).addClass('active');
    jQuery(menu).parent().addClass('active');

    $('.block').hide();
    $("#"+cur_div).show();
}

function input_isNull(){
    if($('#edit-keyword').val().trim()=='')
        return false;;
    return true;
}