$(function() {
    $('img[lazy-src]:visible').imglazyload({fadeIn:true});
    $( 'img[lazy-src]' ).one( 'lazyload', function(){
        $(this).imglazyload({fadeIn:true});
    });
    //$().find('img').trigger('lazyload');
});
function showG(idx,tp)
{
    var idx=idx;
    var tp=tp;
    if (tp=='s')
    {
        document.getElementById(idx).style.display='inline';
    }
    else
    {
        document.getElementById(idx).style.display='none';
    }
}
function addfavorite(obj,url,title) {
    !url ? url = location.href : null;
    !title ? title = document.title : null;
    try{
        window.external.addFavorite(url, title);
        return false;
    }catch(e){
        try{
            window.sidebar.addPanel(title, url, "");
            return false;
        }catch(e){
            alert("加入收藏失败，请使用Ctrl+D进行添加");
            if(location.href.toLowerCase().indexOf(obj.href.toLowerCase(),0)>=0){return false;}
        }
    }
}

var qqLoginWin;
function head_qq_login(){
    qqLoginWin = window.open("/qq/login.php","TencentLogin","width=450,height=320,menubar=0,scrollbars=1, resizable=1,status=1,titlebar=0,toolbar=0,location=1");
}