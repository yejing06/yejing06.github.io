function share(){let a=window.location.origin+window.location.pathname;try{navigator.clipboard.writeText("标题："+document.title+"\n链接："+a),new Vue({data:function(){this.$notify({title:"成功复制分享信息🎉",message:"您现在可以通过粘贴直接跟小伙伴分享了！",position:"top-left",offset:50,showClose:!0,type:"success"})}})}catch(a){console.error("复制失败！",a)}}function percent(){let a=document.documentElement.scrollTop||window.pageYOffset,e=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-document.documentElement.clientHeight,o=Math.round(a/e*100),n=document.querySelector("#go-up");o<=95?(n.childNodes[0].style.display="none",n.childNodes[1].style.display="block",n.childNodes[1].innerHTML=o):(n.childNodes[1].style.display="none",n.childNodes[0].style.display="block")}function saveData(a,e){localStorage.setItem(a,JSON.stringify({time:Date.now(),data:e}))}function loadData(a,e){let o=JSON.parse(localStorage.getItem(a));if(o){let a=Date.now()-o.time;if(a<60*e*1e3&&a>-1)return o.data}return 0}window.addEventListener("scroll",percent);try{let a=loadData("blogbg",1440);a?changeBg(a,1):localStorage.removeItem("blogbg")}catch(a){localStorage.removeItem("blogbg")}function changeBg(a,e){let o=document.getElementById("web_bg");"#"==a.charAt(0)?(o.style.backgroundColor=a,o.style.backgroundImage="none"):o.style.backgroundImage=a,e||saveData("blogbg",a)}var winbox="";function createWinbox(){let a=document.createElement("div");document.body.appendChild(a),winbox=WinBox({id:"changeBgBox",index:999,title:"切换背景",x:"center",y:"center",minwidth:"300px",height:"50%",background:"var(--naokuoteng-blue)",onmaximize:()=>{a.innerHTML="<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>"},onrestore:()=>{a.innerHTML=""}}),winResize(),window.addEventListener("resize",winResize),winbox.body.innerHTML='\n    <div id="article-container" style="padding:10px;">\n    \n    <p><button onclick="localStorage.removeItem(\'blogbg\');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i>点我恢复默认背景の相册也可做为壁纸</button></p>\n    <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h2>\n    <details class="toggle" ><summary class="toggle-button" style="">查看手机壁纸</summary>\n        <div class="toggle-content">\n            <div class="bgbox">\n                <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/12/2021122715170589.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/12/2021122715170589.jpeg)\')"></a>\n                <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/05/2021053107390019.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/05/2021053107390019.jpeg\')"></a>\n                <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/08/2021082418471438.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/08/2021082418471438.jpeg)\')"></a>\n                <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/05/2021053111333664.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/05/2021053111333664.jpeg)\')"></a>\n\n                <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/05/2021052509214162.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/05/2021052509214162.jpeg)\')"></a>\n                <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/10/2021101113150626.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/10/2021101113150626.jpeg)\')"></a>\n                <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/12/2021121119294157.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/12/2021121119294157.jpeg)\')"></a>\n                <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2022/05/2022050211365433.jpg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2022/05/2022050211365433.jpg)\')"></a>\n    \n                <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/01/2021011114540487.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/01/2021011114540487.jpeg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/10/2021101112481925.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/10/2021101112481925.jpeg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2020/12/2020120109592351.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2020/12/2020120109592351.jpeg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/08/2021081519313621.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/08/2021081519313621.jpeg)\')"></a>\n\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img3.wallspic.com/previews/7/4/5/9/6/169547/169547-cheng_se-se_cai-shui_shang-he_yin_ying_de_se_cai-dian_lan_se_de-500x.jpg)" class="pimgbox" onclick="changeBg(\'url(https://img3.wallspic.com/previews/7/4/5/9/6/169547/169547-cheng_se-se_cai-shui_shang-he_yin_ying_de_se_cai-dian_lan_se_de-500x.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img3.wallspic.com/previews/6/4/5/9/6/169546/169546-qi_fen-sheng_tai_qu-guang-xing_zhi-500x.jpg)" class="pimgbox" onclick="changeBg(\'url(https://img3.wallspic.com/previews/6/4/5/9/6/169546/169546-qi_fen-sheng_tai_qu-guang-xing_zhi-500x.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img2.wallspic.com/previews/1/8/5/9/6/169581/169581-shi_jue_yi_shu-chou_xiang_yi_shu-yi_shu-bing_xi_suan_tu_liao-xian_dai_yi_shu-500x.jpg)" class="pimgbox" onclick="changeBg(\'url(https://img2.wallspic.com/previews/1/8/5/9/6/169581/169581-shi_jue_yi_shu-chou_xiang_yi_shu-yi_shu-bing_xi_suan_tu_liao-xian_dai_yi_shu-500x.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img3.wallspic.com/previews/8/0/5/9/6/169508/169508-ye_ti-da_hai-shui_zi_yuan-liu_ti-shui_dao-500x.jpg)" class="pimgbox" onclick="changeBg(\'url(https://img3.wallspic.com/previews/8/0/5/9/6/169508/169508-ye_ti-da_hai-shui_zi_yuan-liu_ti-shui_dao-500x.jpg)\')"></a>\n    <hr class="hr-double-arrow">\n\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img3.wallspic.com/previews/1/7/4/9/6/169471/169471-xia_tian-qi_fen-xing_zhi-azure-yu_hui-500x.jpg)" class="pimgbox" onclick="changeBg(\'url(https://img3.wallspic.com/previews/1/7/4/9/6/169471/169471-xia_tian-qi_fen-xing_zhi-azure-yu_hui-500x.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://tva4.sinaimg.cn/orj360/ea993b85gy1h4mvcg0wamj20yi22o476.jpg)" class="pimgbox" onclick="changeBg(\'url(https://tva4.sinaimg.cn/orj360/ea993b85gy1h4mvcg0wamj20yi22o476.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s4.ax1x.com/2022/02/11/HagMAU.md.jpg)" class="pimgbox" onclick="changeBg(\'url(https://s4.ax1x.com/2022/02/11/HagMAU.md.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://z3.ax1x.com/2021/11/18/II4KiD.md.jpg)" class="pimgbox" onclick="changeBg(\'url(https://z3.ax1x.com/2021/11/18/II4KiD.md.jpg)\')"></a>\n\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://z3.ax1x.com/2021/11/18/ITubjK.jpg)" class="pimgbox" onclick="changeBg(\'urlhttps://z3.ax1x.com/2021/11/18/ITubjK.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://z3.ax1x.com/2021/11/18/ITuOBD.jpg)" class="pimgbox" onclick="changeBg(\'url(https://z3.ax1x.com/2021/11/18/ITuOBD.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://m1.im5i.com/2021/11/20/UnvWPh.md.jpg)" class="pimgbox" onclick="changeBg(\'url(https://m1.im5i.com/2021/11/20/UnvWPh.md.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://z3.ax1x.com/2021/11/17/I4gfiR.md.jpg)" class="pimgbox" onclick="changeBg(\'url(https://z3.ax1x.com/2021/11/17/I4gfiR.md.jpg)\')"></a>\n\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s4.ax1x.com/2022/01/07/7pqiPH.md.jpg)" class="pimgbox" onclick="changeBg(\'url(https://s4.ax1x.com/2022/01/07/7pqiPH.md.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009966127164300996671.jpg)" class="pimgbox" onclick="changeBg(\'url(https://www.toopic.cn/public/uploads/small/1643009966127164300996671.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009950825164300995052.jpg)" class="pimgbox" onclick="changeBg(\'url(https://www.toopic.cn/public/uploads/small/1643009950825164300995052.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009931804164300993142.jpg)" class="pimgbox" onclick="changeBg(\'url(https://www.toopic.cn/public/uploads/small/1643009931804164300993142.jpg)\')"></a>\n\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009891321164300989160.jpg)" class="pimgbox" onclick="changeBg(\'url(https://www.toopic.cn/public/uploads/small/1643009891321164300989160.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009888911164300988831.jpg)" class="pimgbox" onclick="changeBg(\'url(https://www.toopic.cn/public/uploads/small/1643009888911164300988831.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009890309164300989049.jpg)" class="pimgbox" onclick="changeBg(\'url(https://www.toopic.cn/public/uploads/small/1643009890309164300989049.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/164300971036164300971010.jpg)" class="pimgbox" onclick="changeBg(\'url(https://www.toopic.cn/public/uploads/small/164300971036164300971010.jpg)\')"></a>\n<hr class="hr-double-arrow">\n\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009949138164300994930.jpg)" class="pimgbox" onclick="changeBg(\'url(https://www.toopic.cn/public/uploads/small/1643009949138164300994930.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009840931164300984067.jpg)" class="pimgbox" onclick="changeBg(\'url(https://www.toopic.cn/public/uploads/small/1643009840931164300984067.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009957306164300995787.png)" class="pimgbox" onclick="changeBg(\'url(https://www.toopic.cn/public/uploads/small/1643009957306164300995787.png)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/11/2021111016192964.jpeg)" class="pimgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/11/2021111016192964.jpeg)\')"></a>\n    \n\n    <hr class="hr-double-arrow">\n        </div>\n    </details>\n   \n    \n    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>\n    <details class="toggle" ><summary class="toggle-button" style="">查看电脑壁纸</summary>\n    <div class="toggle-content">\n        <div class="bgbox">\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/6CQL4URf5keuDoi.webp)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/11/23/6CQL4URf5keuDoi.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/6vpzBLZtdaEY3GK.webp)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/11/23/6vpzBLZtdaEY3GK.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/yeCx7QwF5gOnMAk.webp)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/11/23/yeCx7QwF5gOnMAk.webp)\')"></a>\n    \n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/HG7VS5xFbOJpkia.webp)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/11/23/HG7VS5xFbOJpkia.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/XZlLNpoVjQeqC4R.webp)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/11/23/XZlLNpoVjQeqC4R.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/IhP46zy7qiAaU1w.webp)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/11/23/IhP46zy7qiAaU1w.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/1i8n6hkC95PdNmO.webp)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/11/23/1i8n6hkC95PdNmO.webp)\')"></a>\n\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.alicdn.com/imgextra/i3/2208346553225/O1CN01ZW82Ls1Zh66lfvTqH_!!2208346553225.jpg)" class="imgbox" onclick="changeBg(\'url(https://img.alicdn.com/imgextra/i3/2208346553225/O1CN01ZW82Ls1Zh66lfvTqH_!!2208346553225.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://halo.linjiangyu.com/img/top.jpg)" class="imgbox" onclick="changeBg(\'url(https://halo.linjiangyu.com/img/top.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://tuchuang.voooe.cn/images/2022/11/21/background.jpg)" class="imgbox" onclick="changeBg(\'url(https://tuchuang.voooe.cn/images/2022/11/21/background.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://res.mqawa.cn/share/70022444.jpg)" class="imgbox" onclick="changeBg(\'url(https://res.mqawa.cn/share/70022444.jpg)\')"></a>\n\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://tuchuang.voooe.cn/images/2022/11/21/background.jpg)" class="imgbox" onclick="changeBg(\'url(https://tuchuang.voooe.cn/images/2022/11/21/background.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://res.mqawa.cn/share/70022444.jpg)" class="imgbox" onclick="changeBg(\'url(https://res.mqawa.cn/share/70022444.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/Cx12H84FYNumIAO.webp)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/11/23/Cx12H84FYNumIAO.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/1kNIM4bUoTpxvLq.webp)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/11/23/1kNIM4bUoTpxvLq.webp)\')"></a>\n    \n\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/wokTgZCLpmSnONU.webp)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/11/23/wokTgZCLpmSnONU.webp)\')"></a>\n    <hr>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/2bKpZMUnLISN4dj.webp)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/11/23/2bKpZMUnLISN4dj.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/ySlIPw8aDjpOtbq.webp)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/11/23/ySlIPw8aDjpOtbq.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/OLi6Cg7qFYEVmxz.webp)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/11/23/OLi6Cg7qFYEVmxz.webp)\')"></a>\n\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/UukxhLF2ZiMHcsq.webp)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/11/23/UukxhLF2ZiMHcsq.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/qbg6FkXJrLD83wZ.webp)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/11/23/qbg6FkXJrLD83wZ.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/fOjPvBJ9bsmu87k.webp)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/11/23/fOjPvBJ9bsmu87k.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/kGIalJcrSdpAB2L.webp)" class="imgbox" onclick="changeBg(\'url(https://s2.loli.net/2022/11/23/kGIalJcrSdpAB2L.webp)\')"></a>\n\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/04/2021040311203011.jpeg)" class="imgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/04/2021040311203011.jpeg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/11/2021110119420045.jpeg)" class="imgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/11/2021110119420045.jpeg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2020/12/2020121409235638.jpeg)" class="imgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2020/12/2020121409235638.jpeg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/11/2021111016525829.jpeg)" class="imgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/11/2021111016525829.jpeg)\')"></a>\n    \n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/11/2021111016580917.jpeg)" class="imgbox" onclick="changeBg(\'url(https://img.vm.laomishuo.com/image/2021/11/2021111016580917.jpeg)\')"></a>\n\n\n    </div>\n    </div>\n</details>\n    \n    \n    \n    \n    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>\n    <details class="toggle" ><summary class="toggle-button" style="">查看渐变色壁纸</summary>\n    <div class="toggle-content">\n        <div class="bgbox">\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg(\'linear-gradient(to right, #eecda3, #ef629f)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg(\'linear-gradient(to right, #eecda3, #ef629f)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(255, 110, 127), rgb(191, 233, 255))" onclick="changeBg(\'linear-gradient(to right, #eecda3, #ef629f)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #ff4b1f, #1fddff)" onclick="changeBg(\'linear-gradient(to right, #ff4b1f, #1fddff)\')"></a>\n    \n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(251, 215, 134), rgb(247, 121, 125))" onclick="changeBg(\'linear-gradient(to right, rgb(251, 215, 134), rgb(247, 121, 125))\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #16bffd, #cb3066)" onclick="changeBg(\'linear-gradient(to right, #16bffd, #cb3066)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(192, 192, 170), rgb(28, 239, 255))" onclick="changeBg(\'linear-gradient(to right, rgb(192, 192, 170), rgb(28, 239, 255))\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(255, 193, 193), rgb(176, 226, 255))" onclick="changeBg(\'linear-gradient(to right, rgb(255, 193, 193), rgb(176, 226, 255))\')"></a>\n\n\n\n    </div>\n    </div>\n</details>\n    \n    \n    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>\n    <details class="toggle" ><summary class="toggle-button" style="">查看纯色壁纸</summary>\n    <div class="toggle-content">\n        <div class="bgbox">\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #FFFAFA" onclick="changeBg(\'#FFFAFA\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #F4E2D8" onclick="changeBg(\'#F4E2D8\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg(\'#7D9D9C\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #F2D7D9" onclick="changeBg(\'#F2D7D9\')"></a>\n\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #76BA99" onclick="changeBg(\'#76BA99\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #9FC088" onclick="changeBg(\'#9FC088\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #CEAB93" onclick="changeBg(\'#CEAB93\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #F0FFF0" onclick="changeBg(\'#F0FFF0\')"></a>\n\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #E6E6FA" onclick="changeBg(\'#E6E6FA\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #FFE4E1" onclick="changeBg(\'#FFE4E1\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7FFFD4" onclick="changeBg(\'#7FFFD4\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #FFC1C1" onclick="changeBg(\'#FFC1C1\')"></a>\n\n    </div>\n    </div>\n</details>\n    \n    <h2 id="随机"><a href="#随机" class="headerlink" title="随机"></a>随机の刷新网站更新壁纸库</h2>\n    <details class="toggle" ><summary class="toggle-button" style="">查看随机壁纸</summary>\n    <div class="toggle-content">\n        <div class="bgbox">\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://iw233.cn/api.php?sort=random)" class="imgbox" onclick="changeBg(\'url(https://iw233.cn/api.php?sort=random)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(http://api.iw233.cn/api.php?sort=random)" class="imgbox" onclick="changeBg(\'url(http://api.iw233.cn/api.php?sort=random)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://iw233.cn/api.php?sort=iw233)" class="imgbox" onclick="changeBg(\'url(https://iw233.cn/api.php?sort=iw233)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://dev.iw233.cn/api.php?sort=random)" class="imgbox" onclick="changeBg(\'url(https://dev.iw233.cn/api.php?sort=random)\')"></a>\n\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(http://api.iw233.cn/api.php?sort=iw233)" class="imgbox" onclick="changeBg(\'url(http://api.iw233.cn/api.php?sort=iw233)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://iw233.cn/api.php?sort=pc)" class="imgbox" onclick="changeBg(\'url(https://iw233.cn/api.php?sort=pc)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://dev.iw233.cn/api.php?sort=iw233)" class="imgbox" onclick="changeBg(\'url(https://dev.iw233.cn/api.php?sort=iw233)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://iw233.cn/api.php?sort=pc)" class="imgbox" onclick="changeBg(\'url(https://iw233.cn/api.php?sort=pc)\')"></a>\n\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://iw233.cn/api.php?sort=top)" class="imgbox" onclick="changeBg(\'url(https://iw233.cn/api.php?sort=top)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(http://api.iw233.cn/api.php?sort=top)" class="imgbox" onclick="changeBg(\'url(http://api.iw233.cn/api.php?sort=top)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://dev.iw233.cn/api.php?sort=top)" class="imgbox" onclick="changeBg(\'url(https://dev.iw233.cn/api.php?sort=top)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://iw233.cn/api.php?sort=top)" class="imgbox" onclick="changeBg(\'url(https://iw233.cn/api.php?sort=top)\')"></a>\n\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://iw233.cn/api.php?sort=yin)" class="imgbox" onclick="changeBg(\'url(https://iw233.cn/api.php?sort=yin)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://iw233.cn/api.php?sort=cat)" class="imgbox" onclick="changeBg(\'url(https://iw233.cn/api.php?sort=cat)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(http://api.iw233.cn/api.php?sort=xing)" class="imgbox" onclick="changeBg(\'url(http://api.iw233.cn/api.php?sort=xing)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://iw233.cn/api.php?sort=pc)" class="imgbox" onclick="changeBg(\'url(https://iw233.cn/api.php?sort=pc)\')"></a>\n    <hr>\n\n    <a href="javascript:;" style="background-image:url(https://www.dmoe.cc/random.php)" class="imgbox" onclick="changeBg(\'url(https://www.dmoe.cc/random.php)\')"></a>\n<a href="javascript:;" style="background-image:url(https://cdn.seovx.com/d/?mom=302)" class="imgbox" onclick="changeBg(\'url(https://cdn.seovx.com/d/?mom=302)\')"></a>\n<a href="javascript:;" style="background-image:url(https://api.ixiaowai.cn/api/api.php)" class="imgbox" onclick="changeBg(\'url(https://api.ixiaowai.cn/api/api.php)\')"></a>\n<a href="javascript:;" style="background-image:url(https://api.ixiaowai.cn/mcapi/mcapi.php)" class="imgbox" onclick="changeBg(\'url(https://api.ixiaowai.cn/mcapi/mcapi.php)\')"></a>\n\n<a href="javascript:;" style="background-image:url(https://api.mtyqx.cn/api/random.php)" class="imgbox" onclick="changeBg(\'url(https://api.mtyqx.cn/api/random.php)\')"></a>\n<a href="javascript:;" style="background-image:url(https://api.mtyqx.cn/tapi/random.php)" class="imgbox" onclick="changeBg(\'url(https://api.mtyqx.cn/tapi/random.php)\')"></a>\n<a href="javascript:;" style="background-image:url(https://api.yimian.xyz/img?type=moe)" class="imgbox" onclick="changeBg(\'url(https://api.yimian.xyz/img?type=moe)\')"></a>\n<a href="javascript:;" style="background-image:url(https://img.paulzzh.com/touhou/random)" class="imgbox" onclick="changeBg(\'url(https://img.paulzzh.com/touhou/random)\')"></a>\n\n<a href="javascript:;" style="background-image:url(http://www.dmoe.cc/random.php)" class="imgbox" onclick="changeBg(\'url(http://www.dmoe.cc/random.php)\')"></a>\n<a href="javascript:;" style="background-image:url(http://api.btstu.cn/sjbz/?lx=dongman)" class="imgbox" onclick="changeBg(\'url(http://api.btstu.cn/sjbz/?lx=dongman)\')"></a>\n<a href="javascript:;" style="background-image:url(https://api.yimian.xyz/img?type=moe&size=1920x1080)" class="imgbox" onclick="changeBg(\'url(https://api.yimian.xyz/img?type=moe&size=1920x1080)\')"></a>\n<a href="javascript:;" style="background-image:url(https://api.r10086.com/img-api.php?type=动漫综合1)" class="imgbox" onclick="changeBg(\'url(https://api.r10086.com/img-api.php?type=动漫综合1)\')"></a>\n\n<a href="javascript:;" style="background-image:url(https://api.r10086.com/img-api.php?type=P站系列1)" class="imgbox" onclick="changeBg(\'url(https://api.r10086.com/img-api.php?type=P站系列1)\')"></a>\n<a href="javascript:;" style="background-image:url(https://cdn.seovx.com/?mom=302)" class="imgbox" onclick="changeBg(\'url(https://cdn.seovx.com/?mom=302)\')"></a>\n<a href="javascript:;" style="background-image:url(https://api.btstu.cn/sjbz/api.php)" class="imgbox" onclick="changeBg(\'url(https://api.btstu.cn/sjbz/api.php)\')"></a>\n<a href="javascript:;" style="background-image:url(http://api.btstu.cn/sjbz/?lx=meizi)" class="imgbox" onclick="changeBg(\'url(http://api.btstu.cn/sjbz/?lx=meizi)\')"></a>\n<hr>\n\n<a href="javascript:;" style="background-image:url(http://api.btstu.cn/sjbz/?lx=suiji)" class="imgbox" onclick="changeBg(\'url(http://api.btstu.cn/sjbz/?lx=suiji)\')"></a>\n<a href="javascript:;" style="background-image:url(http://api.btstu.cn/sjbz/?lx=m_dongman)" class="imgbox" onclick="changeBg(\'url(http://api.btstu.cn/sjbz/?lx=m_dongman)\')"></a>\n<a href="javascript:;" style="background-image:url(http://api.btstu.cn/sjbz/?lx=m_meizi)" class="imgbox" onclick="changeBg(\'url(http://api.btstu.cn/sjbz/?lx=m_meizi)\')"></a>\n<a href="javascript:;" style="background-image:url(http://api.btstu.cn/sjbz/?m_lx=suiji)" class="imgbox" onclick="changeBg(\'url(https://api.btstu.cn/sjbz/?m_lx=suiji)\')"></a>\n<a href="javascript:;" style="background-image:url(https://tuapi.eees.cc/api.php?category=meinv)" class="imgbox" onclick="changeBg(\'url(https://tuapi.eees.cc/api.php?category=meinv)\')"></a>\n\n<a href="javascript:;" style="background-image:url(https://api.ixiaowai.cn/gqapi/gqapi.php)" class="imgbox" onclick="changeBg(\'url(https://api.ixiaowai.cn/gqapi/gqapi.php)\')"></a>\n<a href="javascript:;" style="background-image:url(https://unsplash.it/1600/900?random)" class="imgbox" onclick="changeBg(\'url(https://unsplash.it/1600/900?random)\')"></a>\n<a href="javascript:;" style="background-image:url(https://tuapi.eees.cc/api.php?category=fengjing)" class="imgbox" onclick="changeBg(\'url(https://tuapi.eees.cc/api.php?category=fengjing)\')"></a>\n    </div>\n    </div>\n</details>\n    \n\n\n'}function winResize(){var a=document.documentElement.clientWidth;a<=768?winbox.resize(.95*a+"px","90%").move("center","center"):winbox.resize(.6*a+"px","70%").move("center","center")}function toggleWinbox(){document.querySelector("#changeBgBox")?winbox.toggleClass("hide"):createWinbox()}