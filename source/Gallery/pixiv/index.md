---
title: Pixiv
date: 2022-11-30 10:20:18
type:
aside: false
comments: false
description:
keywords:
top_img:
mathjax:
katex:
aplayer:
highlight_shrink:
---

<style>
#page-header:not(.not-top-img):before {
    display: none !important;
}
#page-header.not-home-page {
    height: 40px;
}
#page-header #site-title, #page-header #site-subtitle, #page-header #scroll-down .scroll-down-effects {
    display: none !important;
}
</style>

<div class="title" style="text-align: center;">
  <h1>Pixiv</h1>
</div>

{% note blue 'fas fa-bullhorn' simple %}
点击可查看图片，`电脑端拖动图片/手机端长按图片` 可以实现切换壁纸哦~<button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#87CEFA;display:inline;padding: 10px 10px;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 恢复</button>
{% endnote %}
所有图片均来自网络 侵删

{% gallery %}

![](https://s2.loli.net/2022/12/03/5A6wlxfrit9oImn.jpg)
![](https://s2.loli.net/2022/12/03/APOdmrCQbiXcen6.jpg)
![](https://s2.loli.net/2022/12/03/Ra8zMSsKUlmxfut.jpg)
![](https://s2.loli.net/2022/12/03/FDXcqULRV5dyTGN.jpg)

![](https://s2.loli.net/2022/12/03/zfrDjdL4T26Rcgm.jpg)
![](https://s2.loli.net/2022/12/03/gSJIU1xtlX9mH6N.jpg)
![](https://s2.loli.net/2022/12/03/biTcWYjQZdV3wPs.jpg)
![](https://s2.loli.net/2022/12/03/TdUuvIF24PflDZj.jpg)

![](https://s2.loli.net/2022/12/03/kOYetopWJCyTIRQ.jpg)
![](https://s2.loli.net/2022/12/03/5e7XBGIaAs18lur.jpg)
![](https://s2.loli.net/2022/12/03/ysFpVTdnftqW1oM.jpg)
![](https://s2.loli.net/2022/12/03/enHNbKG8X2yhUIq.jpg)

![](https://s2.loli.net/2022/12/03/aTbVlzAe7LqXI5r.jpg)
![](https://s2.loli.net/2022/12/03/qcat7jA9wxChSLF.jpg)
![](https://s2.loli.net/2022/12/03/OCEUl2oJbVnGsQj.jpg)
![](https://s2.loli.net/2022/12/03/z1fqJQpvKwTxVoM.jpg)

![](https://s2.loli.net/2022/12/03/LU6Hy1AgXzSvmZC.jpg)





{% endgallery %}

<script>
let time = ''
let imgbox = document.querySelector('.fj-gallery')
imgbox.addEventListener('contextmenu', e => e.preventDefault())
imgbox.addEventListener('dragend', e => { changeBg('url(' + e.target.src + ')'); })
imgbox.addEventListener('touchstart', e => { time = setTimeout(() => { changeBg('url(' + e.target.src + ')'); }, 500); })
imgbox.addEventListener('touchend', ()=>{clearTimeout(time)})
</script>