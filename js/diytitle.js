var titleTime,OriginTitile=document.title;document.addEventListener("visibilitychange",(function(){document.hidden?(document.title="为人民谋幸福！",clearTimeout(titleTime)):(document.title="为民族谋复兴！"+OriginTitile,titleTime=setTimeout((function(){document.title=OriginTitile}),2e3))}));