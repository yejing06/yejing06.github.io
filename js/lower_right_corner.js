// 分享本页
// function share() {
//     let url = window.location.origin + window.location.pathname
//     new ClipboardJS(".share", { text: function() { return '标题：' + document.title + '\n链接：' + url } });
//     btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~")
// }
function share() {
    let url = window.location.origin + window.location.pathname
    try {
        navigator.clipboard.writeText('标题：' + document.title + '\n链接：' + url);
        new Vue({
            data: function () {
                this.$notify({
                    title: "成功复制分享信息🎉",
                    message: "您现在可以通过粘贴直接跟小伙伴分享了！",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success"
                });
                // return { visible: false }
            }
        })
    } catch (err) {
        console.error('复制失败！', err);
    }
    // new ClipboardJS(".share", { text: function () { return '标题：' + document.title + '\n链接：' + url } });
    // btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~")
 }



// 返回顶部显示网页阅读进度
// window.onscroll = percent;// 执行函数  更新用下边这个
window.addEventListener('scroll',percent)
// 页面百分比
function percent() {
    let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
        result = Math.round(a / b * 100), // 计算百分比
        up = document.querySelector("#go-up") // 获取按钮

    if (result <= 95) {
        up.childNodes[0].style.display = 'none'
        up.childNodes[1].style.display = 'block'
        up.childNodes[1].innerHTML = result;
    } else {
        up.childNodes[1].style.display = 'none'
        up.childNodes[0].style.display = 'block'
    }
}


//切换背景
// 存数据
// name：命名 data：数据
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
    let bg = document.getElementById('web_bg')
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else bg.style.backgroundImage = s
    if (!flag) { saveData('blogbg', s) }
}

// 以下为2.0新增内容
// 创建窗口
var winbox = ''

function createWinbox() {
    let div = document.createElement('div')
    document.body.appendChild(div)
    winbox = WinBox({
        id: 'changeBgBox',
        index: 999,
        title: "切换背景",
        x: "center",
        y: "center",
        minwidth: '300px',
        height: "50%",
        background: 'var(--naokuoteng-blue)',
        onmaximize: () => { div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>` },
        onrestore: () => { div.innerHTML = '' }
    });
    winResize();
    window.addEventListener('resize', winResize)

    // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
    winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px;">
    
    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i>点我恢复默认背景の相册也可做为壁纸</button></p>
    <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h2>
    <details class="toggle" ><summary class="toggle-button" style="">查看手机壁纸</summary>
        <div class="toggle-content">
            <div class="bgbox">
                <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/12/2021122715170589.jpeg)" class="pimgbox" onclick="changeBg('url(https://img.vm.laomishuo.com/image/2021/12/2021122715170589.jpeg)')"></a>
                <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/05/2021053107390019.jpeg)" class="pimgbox" onclick="changeBg('url(https://img.vm.laomishuo.com/image/2021/05/2021053107390019.jpeg')"></a>
                <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/08/2021082418471438.jpeg)" class="pimgbox" onclick="changeBg('url(https://img.vm.laomishuo.com/image/2021/08/2021082418471438.jpeg)')"></a>
                <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/05/2021053111333664.jpeg)" class="pimgbox" onclick="changeBg('url(https://img.vm.laomishuo.com/image/2021/05/2021053111333664.jpeg)')"></a>

                <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/05/2021052509214162.jpeg)" class="pimgbox" onclick="changeBg('url(https://img.vm.laomishuo.com/image/2021/05/2021052509214162.jpeg)')"></a>
                <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/10/2021101113150626.jpeg)" class="pimgbox" onclick="changeBg('url(https://img.vm.laomishuo.com/image/2021/10/2021101113150626.jpeg)')"></a>
                <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/12/2021121119294157.jpeg)" class="pimgbox" onclick="changeBg('url(https://img.vm.laomishuo.com/image/2021/12/2021121119294157.jpeg)')"></a>
                <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2022/05/2022050211365433.jpg)" class="pimgbox" onclick="changeBg('url(https://img.vm.laomishuo.com/image/2022/05/2022050211365433.jpg)')"></a>
    
                <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/01/2021011114540487.jpeg)" class="pimgbox" onclick="changeBg('url(https://img.vm.laomishuo.com/image/2021/01/2021011114540487.jpeg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/10/2021101112481925.jpeg)" class="pimgbox" onclick="changeBg('url(https://img.vm.laomishuo.com/image/2021/10/2021101112481925.jpeg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2020/12/2020120109592351.jpeg)" class="pimgbox" onclick="changeBg('url(https://img.vm.laomishuo.com/image/2020/12/2020120109592351.jpeg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/08/2021081519313621.jpeg)" class="pimgbox" onclick="changeBg('url(https://img.vm.laomishuo.com/image/2021/08/2021081519313621.jpeg)')"></a>

    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img3.wallspic.com/previews/7/4/5/9/6/169547/169547-cheng_se-se_cai-shui_shang-he_yin_ying_de_se_cai-dian_lan_se_de-500x.jpg)" class="pimgbox" onclick="changeBg('url(https://img3.wallspic.com/previews/7/4/5/9/6/169547/169547-cheng_se-se_cai-shui_shang-he_yin_ying_de_se_cai-dian_lan_se_de-500x.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img3.wallspic.com/previews/6/4/5/9/6/169546/169546-qi_fen-sheng_tai_qu-guang-xing_zhi-500x.jpg)" class="pimgbox" onclick="changeBg('url(https://img3.wallspic.com/previews/6/4/5/9/6/169546/169546-qi_fen-sheng_tai_qu-guang-xing_zhi-500x.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img2.wallspic.com/previews/1/8/5/9/6/169581/169581-shi_jue_yi_shu-chou_xiang_yi_shu-yi_shu-bing_xi_suan_tu_liao-xian_dai_yi_shu-500x.jpg)" class="pimgbox" onclick="changeBg('url(https://img2.wallspic.com/previews/1/8/5/9/6/169581/169581-shi_jue_yi_shu-chou_xiang_yi_shu-yi_shu-bing_xi_suan_tu_liao-xian_dai_yi_shu-500x.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img3.wallspic.com/previews/8/0/5/9/6/169508/169508-ye_ti-da_hai-shui_zi_yuan-liu_ti-shui_dao-500x.jpg)" class="pimgbox" onclick="changeBg('url(https://img3.wallspic.com/previews/8/0/5/9/6/169508/169508-ye_ti-da_hai-shui_zi_yuan-liu_ti-shui_dao-500x.jpg)')"></a>
    <hr class="hr-double-arrow">

    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img3.wallspic.com/previews/1/7/4/9/6/169471/169471-xia_tian-qi_fen-xing_zhi-azure-yu_hui-500x.jpg)" class="pimgbox" onclick="changeBg('url(https://img3.wallspic.com/previews/1/7/4/9/6/169471/169471-xia_tian-qi_fen-xing_zhi-azure-yu_hui-500x.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://tva4.sinaimg.cn/orj360/ea993b85gy1h4mvcg0wamj20yi22o476.jpg)" class="pimgbox" onclick="changeBg('url(https://tva4.sinaimg.cn/orj360/ea993b85gy1h4mvcg0wamj20yi22o476.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s4.ax1x.com/2022/02/11/HagMAU.md.jpg)" class="pimgbox" onclick="changeBg('url(https://s4.ax1x.com/2022/02/11/HagMAU.md.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://z3.ax1x.com/2021/11/18/II4KiD.md.jpg)" class="pimgbox" onclick="changeBg('url(https://z3.ax1x.com/2021/11/18/II4KiD.md.jpg)')"></a>

    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://z3.ax1x.com/2021/11/18/ITubjK.jpg)" class="pimgbox" onclick="changeBg('urlhttps://z3.ax1x.com/2021/11/18/ITubjK.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://z3.ax1x.com/2021/11/18/ITuOBD.jpg)" class="pimgbox" onclick="changeBg('url(https://z3.ax1x.com/2021/11/18/ITuOBD.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://m1.im5i.com/2021/11/20/UnvWPh.md.jpg)" class="pimgbox" onclick="changeBg('url(https://m1.im5i.com/2021/11/20/UnvWPh.md.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://z3.ax1x.com/2021/11/17/I4gfiR.md.jpg)" class="pimgbox" onclick="changeBg('url(https://z3.ax1x.com/2021/11/17/I4gfiR.md.jpg)')"></a>

    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s4.ax1x.com/2022/01/07/7pqiPH.md.jpg)" class="pimgbox" onclick="changeBg('url(https://s4.ax1x.com/2022/01/07/7pqiPH.md.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009966127164300996671.jpg)" class="pimgbox" onclick="changeBg('url(https://www.toopic.cn/public/uploads/small/1643009966127164300996671.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009950825164300995052.jpg)" class="pimgbox" onclick="changeBg('url(https://www.toopic.cn/public/uploads/small/1643009950825164300995052.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009931804164300993142.jpg)" class="pimgbox" onclick="changeBg('url(https://www.toopic.cn/public/uploads/small/1643009931804164300993142.jpg)')"></a>

    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009891321164300989160.jpg)" class="pimgbox" onclick="changeBg('url(https://www.toopic.cn/public/uploads/small/1643009891321164300989160.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009888911164300988831.jpg)" class="pimgbox" onclick="changeBg('url(https://www.toopic.cn/public/uploads/small/1643009888911164300988831.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009890309164300989049.jpg)" class="pimgbox" onclick="changeBg('url(https://www.toopic.cn/public/uploads/small/1643009890309164300989049.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/164300971036164300971010.jpg)" class="pimgbox" onclick="changeBg('url(https://www.toopic.cn/public/uploads/small/164300971036164300971010.jpg)')"></a>
<hr class="hr-double-arrow">

    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009949138164300994930.jpg)" class="pimgbox" onclick="changeBg('url(https://www.toopic.cn/public/uploads/small/1643009949138164300994930.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009840931164300984067.jpg)" class="pimgbox" onclick="changeBg('url(https://www.toopic.cn/public/uploads/small/1643009840931164300984067.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://www.toopic.cn/public/uploads/small/1643009957306164300995787.png)" class="pimgbox" onclick="changeBg('url(https://www.toopic.cn/public/uploads/small/1643009957306164300995787.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/11/2021111016192964.jpeg)" class="pimgbox" onclick="changeBg('url(https://img.vm.laomishuo.com/image/2021/11/2021111016192964.jpeg)')"></a>
    

    <hr class="hr-double-arrow">
        </div>
    </details>
   
    
    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>
    <details class="toggle" ><summary class="toggle-button" style="">查看电脑壁纸</summary>
    <div class="toggle-content">
        <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/6CQL4URf5keuDoi.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/23/6CQL4URf5keuDoi.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/6vpzBLZtdaEY3GK.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/23/6vpzBLZtdaEY3GK.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/yeCx7QwF5gOnMAk.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/23/yeCx7QwF5gOnMAk.webp)')"></a>
    
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/HG7VS5xFbOJpkia.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/23/HG7VS5xFbOJpkia.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/XZlLNpoVjQeqC4R.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/23/XZlLNpoVjQeqC4R.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/IhP46zy7qiAaU1w.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/23/IhP46zy7qiAaU1w.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/1i8n6hkC95PdNmO.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/23/1i8n6hkC95PdNmO.webp)')"></a>

    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.alicdn.com/imgextra/i3/2208346553225/O1CN01ZW82Ls1Zh66lfvTqH_!!2208346553225.jpg)" class="imgbox" onclick="changeBg('url(https\://img.alicdn.com/imgextra/i3/2208346553225/O1CN01ZW82Ls1Zh66lfvTqH_!!2208346553225.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://halo.linjiangyu.com/img/top.jpg)" class="imgbox" onclick="changeBg('url(https\://halo.linjiangyu.com/img/top.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://tuchuang.voooe.cn/images/2022/11/21/background.jpg)" class="imgbox" onclick="changeBg('url(https\://tuchuang.voooe.cn/images/2022/11/21/background.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://res.mqawa.cn/share/70022444.jpg)" class="imgbox" onclick="changeBg('url(https\://res.mqawa.cn/share/70022444.jpg)')"></a>

    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://tuchuang.voooe.cn/images/2022/11/21/background.jpg)" class="imgbox" onclick="changeBg('url(https\://tuchuang.voooe.cn/images/2022/11/21/background.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://res.mqawa.cn/share/70022444.jpg)" class="imgbox" onclick="changeBg('url(https\://res.mqawa.cn/share/70022444.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/Cx12H84FYNumIAO.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/23/Cx12H84FYNumIAO.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/1kNIM4bUoTpxvLq.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/23/1kNIM4bUoTpxvLq.webp)')"></a>
    

    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/wokTgZCLpmSnONU.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/23/wokTgZCLpmSnONU.webp)')"></a>
    <hr>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/2bKpZMUnLISN4dj.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/23/2bKpZMUnLISN4dj.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/ySlIPw8aDjpOtbq.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/23/ySlIPw8aDjpOtbq.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/OLi6Cg7qFYEVmxz.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/23/OLi6Cg7qFYEVmxz.webp)')"></a>

    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/UukxhLF2ZiMHcsq.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/23/UukxhLF2ZiMHcsq.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/qbg6FkXJrLD83wZ.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/23/qbg6FkXJrLD83wZ.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/fOjPvBJ9bsmu87k.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/23/fOjPvBJ9bsmu87k.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s2.loli.net/2022/11/23/kGIalJcrSdpAB2L.webp)" class="imgbox" onclick="changeBg('url(https\://s2.loli.net/2022/11/23/kGIalJcrSdpAB2L.webp)')"></a>

    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/04/2021040311203011.jpeg)" class="imgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2021/04/2021040311203011.jpeg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/11/2021110119420045.jpeg)" class="imgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2021/11/2021110119420045.jpeg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2020/12/2020121409235638.jpeg)" class="imgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2020/12/2020121409235638.jpeg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/11/2021111016525829.jpeg)" class="imgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2021/11/2021111016525829.jpeg)')"></a>
    
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://img.vm.laomishuo.com/image/2021/11/2021111016580917.jpeg)" class="imgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2021/11/2021111016580917.jpeg)')"></a>


    </div>
    </div>
</details>
    
    
    
    
    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
    <details class="toggle" ><summary class="toggle-button" style="">查看渐变色壁纸</summary>
    <div class="toggle-content">
        <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(255, 110, 127), rgb(191, 233, 255))" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #ff4b1f, #1fddff)" onclick="changeBg('linear-gradient(to right, #ff4b1f, #1fddff)')"></a>
    
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(251, 215, 134), rgb(247, 121, 125))" onclick="changeBg('linear-gradient(to right, rgb(251, 215, 134), rgb(247, 121, 125))')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #16bffd, #cb3066)" onclick="changeBg('linear-gradient(to right, #16bffd, #cb3066)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(192, 192, 170), rgb(28, 239, 255))" onclick="changeBg('linear-gradient(to right, rgb(192, 192, 170), rgb(28, 239, 255))')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, rgb(255, 193, 193), rgb(176, 226, 255))" onclick="changeBg('linear-gradient(to right, rgb(255, 193, 193), rgb(176, 226, 255))')"></a>



    </div>
    </div>
</details>
    
    
    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
    <details class="toggle" ><summary class="toggle-button" style="">查看纯色壁纸</summary>
    <div class="toggle-content">
        <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #FFFAFA" onclick="changeBg('#FFFAFA')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #F4E2D8" onclick="changeBg('#F4E2D8')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg('#7D9D9C')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #F2D7D9" onclick="changeBg('#F2D7D9')"></a>

    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #76BA99" onclick="changeBg('#76BA99')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #9FC088" onclick="changeBg('#9FC088')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #CEAB93" onclick="changeBg('#CEAB93')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #F0FFF0" onclick="changeBg('#F0FFF0')"></a>

    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #E6E6FA" onclick="changeBg('#E6E6FA')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #FFE4E1" onclick="changeBg('#FFE4E1')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7FFFD4" onclick="changeBg('#7FFFD4')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #FFC1C1" onclick="changeBg('#FFC1C1')"></a>

    </div>
    </div>
</details>
    
    <h2 id="随机"><a href="#随机" class="headerlink" title="随机"></a>随机の刷新网站更新壁纸库</h2>
    <details class="toggle" ><summary class="toggle-button" style="">查看随机壁纸</summary>
    <div class="toggle-content">
        <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://iw233.cn/api.php?sort=random)" class="imgbox" onclick="changeBg('url(https\://iw233.cn/api.php?sort=random)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(http://api.iw233.cn/api.php?sort=random)" class="imgbox" onclick="changeBg('url(http\://api.iw233.cn/api.php?sort=random)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://iw233.cn/api.php?sort=iw233)" class="imgbox" onclick="changeBg('url(https\://iw233.cn/api.php?sort=iw233)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://dev.iw233.cn/api.php?sort=random)" class="imgbox" onclick="changeBg('url(https\://dev.iw233.cn/api.php?sort=random)')"></a>

    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(http://api.iw233.cn/api.php?sort=iw233)" class="imgbox" onclick="changeBg('url(http\://api.iw233.cn/api.php?sort=iw233)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://iw233.cn/api.php?sort=pc)" class="imgbox" onclick="changeBg('url(https\://iw233.cn/api.php?sort=pc)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://dev.iw233.cn/api.php?sort=iw233)" class="imgbox" onclick="changeBg('url(https\://dev.iw233.cn/api.php?sort=iw233)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://iw233.cn/api.php?sort=pc)" class="imgbox" onclick="changeBg('url(https\://iw233.cn/api.php?sort=pc)')"></a>

    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://iw233.cn/api.php?sort=top)" class="imgbox" onclick="changeBg('url(https\://iw233.cn/api.php?sort=top)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(http://api.iw233.cn/api.php?sort=top)" class="imgbox" onclick="changeBg('url(http\://api.iw233.cn/api.php?sort=top)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://dev.iw233.cn/api.php?sort=top)" class="imgbox" onclick="changeBg('url(https\://dev.iw233.cn/api.php?sort=top)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://iw233.cn/api.php?sort=top)" class="imgbox" onclick="changeBg('url(https\://iw233.cn/api.php?sort=top)')"></a>

    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://iw233.cn/api.php?sort=yin)" class="imgbox" onclick="changeBg('url(https\://iw233.cn/api.php?sort=yin)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://iw233.cn/api.php?sort=cat)" class="imgbox" onclick="changeBg('url(https\://iw233.cn/api.php?sort=cat)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(http://api.iw233.cn/api.php?sort=xing)" class="imgbox" onclick="changeBg('url(http\://api.iw233.cn/api.php?sort=xing)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://iw233.cn/api.php?sort=pc)" class="imgbox" onclick="changeBg('url(https\://iw233.cn/api.php?sort=pc)')"></a>
    <hr>

    <a href="javascript:;" style="background-image:url(https://www.dmoe.cc/random.php)" class="imgbox" onclick="changeBg('url(https\://www.dmoe.cc/random.php)')"></a>
<a href="javascript:;" style="background-image:url(https://cdn.seovx.com/d/?mom=302)" class="imgbox" onclick="changeBg('url(https\://cdn.seovx.com/d/?mom=302)')"></a>
<a href="javascript:;" style="background-image:url(https://api.ixiaowai.cn/api/api.php)" class="imgbox" onclick="changeBg('url(https\://api.ixiaowai.cn/api/api.php)')"></a>
<a href="javascript:;" style="background-image:url(https://api.ixiaowai.cn/mcapi/mcapi.php)" class="imgbox" onclick="changeBg('url(https\://api.ixiaowai.cn/mcapi/mcapi.php)')"></a>

<a href="javascript:;" style="background-image:url(https://api.mtyqx.cn/api/random.php)" class="imgbox" onclick="changeBg('url(https\://api.mtyqx.cn/api/random.php)')"></a>
<a href="javascript:;" style="background-image:url(https://api.mtyqx.cn/tapi/random.php)" class="imgbox" onclick="changeBg('url(https\://api.mtyqx.cn/tapi/random.php)')"></a>
<a href="javascript:;" style="background-image:url(https://api.yimian.xyz/img?type=moe)" class="imgbox" onclick="changeBg('url(https\://api.yimian.xyz/img?type=moe)')"></a>
<a href="javascript:;" style="background-image:url(https://img.paulzzh.com/touhou/random)" class="imgbox" onclick="changeBg('url(https\://img.paulzzh.com/touhou/random)')"></a>

<a href="javascript:;" style="background-image:url(http://www.dmoe.cc/random.php)" class="imgbox" onclick="changeBg('url(http\://www.dmoe.cc/random.php)')"></a>
<a href="javascript:;" style="background-image:url(http://api.btstu.cn/sjbz/?lx=dongman)" class="imgbox" onclick="changeBg('url(http\://api.btstu.cn/sjbz/?lx=dongman)')"></a>
<a href="javascript:;" style="background-image:url(https://api.yimian.xyz/img?type=moe&size=1920x1080)" class="imgbox" onclick="changeBg('url(https\://api.yimian.xyz/img?type=moe&size=1920x1080)')"></a>
<a href="javascript:;" style="background-image:url(https://api.r10086.com/img-api.php?type=动漫综合1)" class="imgbox" onclick="changeBg('url(https\://api.r10086.com/img-api.php?type=动漫综合1)')"></a>

<a href="javascript:;" style="background-image:url(https://api.r10086.com/img-api.php?type=P站系列1)" class="imgbox" onclick="changeBg('url(https\://api.r10086.com/img-api.php?type=P站系列1)')"></a>
<a href="javascript:;" style="background-image:url(https://cdn.seovx.com/?mom=302)" class="imgbox" onclick="changeBg('url(https\://cdn.seovx.com/?mom=302)')"></a>
<a href="javascript:;" style="background-image:url(https://api.btstu.cn/sjbz/api.php)" class="imgbox" onclick="changeBg('url(https\://api.btstu.cn/sjbz/api.php)')"></a>
<a href="javascript:;" style="background-image:url(http://api.btstu.cn/sjbz/?lx=meizi)" class="imgbox" onclick="changeBg('url(http\://api.btstu.cn/sjbz/?lx=meizi)')"></a>
<hr>

<a href="javascript:;" style="background-image:url(http://api.btstu.cn/sjbz/?lx=suiji)" class="imgbox" onclick="changeBg('url(http\://api.btstu.cn/sjbz/?lx=suiji)')"></a>
<a href="javascript:;" style="background-image:url(http://api.btstu.cn/sjbz/?lx=m_dongman)" class="imgbox" onclick="changeBg('url(http\://api.btstu.cn/sjbz/?lx=m_dongman)')"></a>
<a href="javascript:;" style="background-image:url(http://api.btstu.cn/sjbz/?lx=m_meizi)" class="imgbox" onclick="changeBg('url(http\://api.btstu.cn/sjbz/?lx=m_meizi)')"></a>
<a href="javascript:;" style="background-image:url(http://api.btstu.cn/sjbz/?m_lx=suiji)" class="imgbox" onclick="changeBg('url(https\://api.btstu.cn/sjbz/?m_lx=suiji)')"></a>
<a href="javascript:;" style="background-image:url(https://tuapi.eees.cc/api.php?category=meinv)" class="imgbox" onclick="changeBg('url(https\://tuapi.eees.cc/api.php?category=meinv)')"></a>

<a href="javascript:;" style="background-image:url(https://api.ixiaowai.cn/gqapi/gqapi.php)" class="imgbox" onclick="changeBg('url(https\://api.ixiaowai.cn/gqapi/gqapi.php)')"></a>
<a href="javascript:;" style="background-image:url(https://unsplash.it/1600/900?random)" class="imgbox" onclick="changeBg('url(https\://unsplash.it/1600/900?random)')"></a>
<a href="javascript:;" style="background-image:url(https://tuapi.eees.cc/api.php?category=fengjing)" class="imgbox" onclick="changeBg('url(https\://tuapi.eees.cc/api.php?category=fengjing)')"></a>
    </div>
    </div>
</details>
    


`;
}

// 适应窗口大小
function winResize() {
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
    else createWinbox();
}