setInterval((()=>{let e=Math.round(new Date("2022-11-09 00:00:00").getTime()/1e3),t=Math.round((new Date).getTime()/1e3)-e,r=new Array(0,0,0,0,0);var i=function(e){return e>9?e:"0"+e};t>=31536e3&&(r[0]=parseInt(t/31536e3),t%=31536e3),t>=86400&&(r[1]=parseInt(t/86400),t%=86400),t>=3600&&(r[2]=i(parseInt(t/3600)),t%=3600),t>=60&&(r[3]=i(parseInt(t/60)),t%=60),t>0&&(r[4]=i(t)),Number(r[2])<22&&Number(r[2])>7?currentTimeHtml="<img class='boardsign' src='https://img.shields.io/badge/%E8%84%91%E9%98%94%E7%96%BC%E5%B0%8F%E7%AB%99-%E8%90%A5%E4%B8%9A%E4%B8%AD-6adea8?style=social&logo=Graylog' title='距离百年老店也就差不到一百年~'><div id='runtime'>"+r[0]+" YEAR "+r[1]+" DAYS "+r[2]+" : "+r[3]+" : "+r[4]+"</div>":currentTimeHtml="<img class='boardsign' src='https://img.shields.io/badge/%E8%84%91%E9%98%94%E7%96%BC%E5%B0%8F%E7%AB%99-%E6%89%93%E7%83%8A%E4%BC%91%E6%81%AF%E5%95%A6-6adea8?style=social&logo=coffeescript' title='这个点了应该去睡觉啦，熬夜对身体不好哦'><div id='runtime'>"+r[0]+" YEAR "+r[1]+" DAYS "+r[2]+" : "+r[3]+" : "+r[4]+"</div>",document.getElementById("workboard").innerHTML=currentTimeHtml}),1e3);