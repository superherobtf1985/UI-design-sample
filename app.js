// アロー関数だと失敗する
$(".check-button").on('click', function() {
    let title_body = ($(this).closest('.list-group-item').find('.preview-body'));
    
    if($(title_body).css("display") == "none") {
        $(title_body).fadeIn("normal");
    } else {
        $(title_body).fadeOut("fast");
    }
});