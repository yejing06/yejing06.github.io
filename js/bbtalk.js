let jsonUrl="https://kkapi-open-xi.vercel.app/api/ispeak?author=62cfe22a3a91f6ac8ea6803f";function bbtalk(){let e,t=JSON.parse(localStorage.getItem("bibi")),a=Date.now();if(null==t||a-t.time>=18e5)return void getData();e=JSON.parse(t.ls);let l="";e.forEach(((e,t)=>{e.content=e.content.replace(/[\s\uFEFF\xA0]+/g,"");let a=new Date(e.createdAt),i=a.getFullYear()+"/"+(a.getMonth()+1)+"/"+a.getDate()+" "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),n=timeago.format(i,"zh_CN");l+='<li class="item item-'+(t+1)+'">'+('<span class="datatime">'+n+"</span>")+"： "+urlToLink(e.content)+"</li>"})),document.getElementById("bber-talk").innerHTML+='<i style="margin-right: 10px;" class="fa-regular fa-message"></i><ul class="talk-list">'+l+'</ul><i class="fa-solid fa-angles-right pass bber-icon"></i>'}function getData(){fetch(jsonUrl).then((e=>e.json())).then((e=>{e={time:Date.now(),ls:JSON.stringify(e.data.items)},localStorage.setItem("bibi",JSON.stringify(e))})).then((()=>{bbtalk()})).catch((()=>{console.log("获取哔哔数据失败！")}))}function urlToLink(e){return e=e.replace(/<img(.*?)src=[\"|\']?(.*?)[\"|\']?(.*?)>|!\[(.*?)\]\((.*?)\)/g,'<i class="fa-solid fa-image"></i>')}function Roll(){try{let e=Array.prototype.slice.call(document.querySelectorAll(".talk-list li")),t=e[0];e.splice(0,1),e.push(t);let a=document.querySelector("ul.talk-list");e.forEach((e=>{a.appendChild(e)}))}catch(e){}}document.getElementById("bber-talk").addEventListener("click",(()=>{window.location.pathname="/bb/"})),bbtalk(),setInterval(Roll,3e3);