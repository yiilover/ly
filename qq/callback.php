<?php
/**
 * Created by JetBrains PhpStorm.
 * User: black
 * Date: 14-4-13
 * Time: 下午6:36
 * To change this template use File | Settings | File Templates.
 */
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>QQ登录</title>
    <style type="text/css">
        *{margin:0;padding:0}
        body,.ico_shell,.lay_top,.lay_bottom_corner,.lay_bottom .btn_em,.lay_bottom .btn_weak,.type_auth .lay_main .request_site .arr{background-image:url(img/style_v2.png);background-repeat:no-repeat}
        body{font:12px/1.5 Tahoma;color:#434343;background-color:#52ABDB;text-align:center;padding-top:40px;background-position:0 -221px;background-repeat:repeat-x}
        li{list-style:none}
        a{color:#2583BA;text-decoration:none}
        img{border:0 none}
        .ui_mr10{margin-right:10px}
        .fn_secureURL{position:absolute;left:6px;top:6px;background-color:#D3EAF6;padding:0 5px 0 26px;height:20px;line-height:20px;border-radius:2px}
        .fn_secureURL .arr{position:absolute;left:35px;top:-10px;border-width:5px;border-color:transparent transparent #D3EAF6;border-style:dashed dashed solid;font-size:0;overflow:hidden;height:0;width:0}
        .fn_secureURL .ico_shell{position:absolute;left:7px;top:2px;width:14px;height:16px;background-position:-557px -117px}
        .lay{width:519px;margin:0 auto 0;background-color:#FFF;text-align:left;position:relative}
        .lay_top{height:135px;padding-top:10px;background-position:-1px -10px;border-bottom:1px solid #D4EFFF}
        .lay_top .logo{position:absolute;left:335px;top:30px;width:64px;height:64px}
        .lay_top .remark{padding-top:98px;text-align:center}
        .lay_bottom_corner{height:10px;overflow:hidden;font-size:0;clear:both;width:100%;background-position:-1px 0}
        .lay_main{margin:0 20px 10px;border-bottom:1px dotted #CECECE;padding:20px 25px 10px}
        .lay_main h3{font-weight:normal}
        .lay_main .ptlogin{margin-bottom:10px;padding:0 0 0 50px}
        .lay_main .fn_login{margin-bottom:10px;padding:0 10px 10px 110px}
        .lay_main .fn_login_warn{margin-bottom:10px;padding:50px 10px 20px 110px}
        .lay_main .feedback{color:#A5A5A5}
        .lay_bottom{padding:0 20px;position:relative;zoom:1}
        .lay_bottom .split{margin:0 10px;color:#CECECE}

            /*zhuijia*/
        .inputstyle{ border:1px solid #7F9DB9; color:#808080; font-size:14px; margin:0; padding:5px; width:190px;}
        .btn{ background:url(img/icons.gif) no-repeat scroll transparent; border:0 none; color:#2473A2; cursor:pointer; font-size:14px; font-weight:bold; height:28px; width:103px;}
        .colorFF6000{ color:#FF6000;}
    </style>

</head>

<body>

<div class="fn_secureURL"><div class="arr"></div><i class="ico_shell"></i>http://www.aizhigu.com.cn为爱之谷官方域名 谨防假冒</div>
<div id="outerWarper" style="padding:8px 25px 25px 25px; display:inline-block;">

    <div class="lay">
        <div class="lay_wrap">
            <div class="lay_top">
                <img alt="爱之谷商城" src="http://qzonestyle.gtimg.cn/ac/qzone/applogo/64/218112_64.gif" class="logo">
                <p class="remark">用QQ帐号登录<a target="_blank" href="http://www.aizhigu.com.cn">爱之谷商城</a>，与好友共享精彩内容</p>
            </div>
            <div class="lay_main">


                <div class="ptlogin">

                    <div class="fn_login_main">

                        <span class="colorFF6000">尊敬的QQ用户： 渗 透，您已登录成功，请放心购物!</span>

                    </div>

                </div>

            </div>
            <div class="lay_bottom">
                <a target="_blank" href="http://connect.opensns.qq.com/">网站添加QQ登录</a>
            </div>
        </div>
        <div class="lay_bottom_corner"></div>
    </div>

</div>

<script type="text/javascript">
    setTimeout(function(){
        window.opener.location='http://ddecshop.com/';
        window.close();
    },5000);
</script>
</body>
</html>
