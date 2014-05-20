<!--


function WriteQqStr_OK()
{
	document.write('<DIV id=backi_OK style="RIGHT: 0px; OVERFLOW: visible; POSITION: absolute; TOP: 160px">');
	document.write('<table border="0" cellpadding="0" cellspacing="0" width="55">');
	document.write('<tr><td style="padding:0"><a href="javascript:close_float_left_OK();void(0);" title="close"><IMG src="/kefu/img/sk/1.gif" border=0></a></td></tr>');
	document.write('<tr><td style="padding:0"><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1838225378&site=qq&menu=yes"><img border=\"0\" SRC=\'/kefu/img/sk/3.gif\' alt=\"QQ咨询\"></a></td></tr>');
	document.write('<tr><td style="padding:0"><a target=_blank href="http://amos.im.alisoft.com/msg.aw?v=2&uid=乐影baby&site=cntaobao&s=1&charset=utf-8" ><IMG src="/kefu/img/sk/5.gif" border=0 alt="旺旺咨询"></a></td></tr>');
	document.write('<tr><td style="padding:0"><A href="http://www.ddecshop.com"><IMG src="/themes/ok/images/6.jpg" border=0 alt="上海多多模板之家""></A></td></tr>');
        document.write('<tr><td style="padding:0"><A href="#"><IMG src="/kefu/img/sk/7.gif" border=0></A></td></tr>');
	document.write('</table>');
	document.write('</DIV>');
}

function close_float_left_OK(){backi_OK.style.visibility='hidden';}


lastScrollY_OK=0; 
function heartBeat_OK(){ 
var diffY_OK;
if (document.documentElement && document.documentElement.scrollTop)
    diffY_OK = document.documentElement.scrollTop;
else if (document.body)
    diffY_OK = document.body.scrollTop
else
    {}
percent_OK=.1*(diffY_OK-lastScrollY_OK); 
if(percent_OK>0)percent_OK=Math.ceil(percent_OK); 
else percent_OK=Math.floor(percent_OK); 
document.getElementById("backi_OK").style.top=parseInt(document.getElementById("backi_OK").style.top)+percent_OK+"px";
lastScrollY_OK=lastScrollY_OK+percent_OK; 
} 
if (!document.layers) {WriteQqStr_OK();window.setInterval("heartBeat_OK()",1); }
//

//-->