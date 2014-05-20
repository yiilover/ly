var cycleList = ['ECS_tree1','ECS_tree2','ECS_tree3','ECS_tree4'];
var tabFront = 'tabFront';
var tabBack = 'tabBack';
function cycleShow(obj)
{
    var curObj;
    var curBody;
    for (i=0; i < cycleList.length; i++)
    {
        curObj = document.getElementById(cycleList[i]);
        curBody = document.getElementById(cycleList[i] + '_BODY');
        if (obj.id == curObj.id)
        {
            curObj.className = tabFront;
            curBody.style.display = "";
        }
        else
        {
            curObj.className = tabBack;
            curBody.style.display = "none";
        }
    }
}
for (i=0; i< cycleList.length; i++)
{
    document.getElementById(cycleList[i]).onmousemove = function()
    {
        cycleShow(this);
    };
}
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