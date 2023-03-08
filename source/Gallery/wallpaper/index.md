---
title: 电脑壁纸
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
  <h1>电脑壁纸</h1>
</div>

{% note blue 'fas fa-bullhorn' simple %}
点击可以查看图片，`电脑端拖动图片/手机端长按图片` 可以实现切换壁纸哦~<button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#e7e26f;display:inline;padding: 10px 10px;border-radius:6px;color:#f9549a;"><i class="fa-solid fa-arrows-rotate"></i> 恢复</button>
{% endnote %}

{% gallery %}
![女仆](https://s2.loli.net/2022/11/23/ekLW4BUFHZtdhCV.webp)
![](https://s2.loli.net/2022/11/23/MEhGk3x6YWeFbuP.webp)
![](https://s2.loli.net/2022/11/23/7Vz3duMCJWQaei4.webp)
![](https://s2.loli.net/2022/11/23/JMBF3T91q4OzeIu.webp)
![](https://s2.loli.net/2022/11/23/wW1o4YySNs2IjJT.webp)
![](https://s2.loli.net/2022/11/23/yQEa1zhisGwTMb2.webp)
![](https://s2.loli.net/2022/11/23/4Yz9xAZTNgJfO7a.webp)
![](https://s2.loli.net/2022/11/23/3iAYDZEcySVLkof.webp)
![](https://s2.loli.net/2022/11/23/ZUSQTCN9yDwIxGu.webp)
![](https://s2.loli.net/2022/11/23/6mgns9oufQqBDZz.webp)
![](https://s2.loli.net/2022/11/23/CtO76hTpwYVcUS8.webp)
![](https://s2.loli.net/2022/11/23/yeCx7QwF5gOnMAk.webp)
![](https://s2.loli.net/2022/11/23/VDlzoL5SptraHYf.webp)
![](https://s2.loli.net/2022/11/23/PzH7jr6FTuCMiSy.webp)
![](https://s2.loli.net/2022/11/23/IPNcdFhoauAk78Q.webp)
![](https://s2.loli.net/2022/11/23/qbg6FkXJrLD83wZ.webp)
![](https://s2.loli.net/2022/11/23/v6jNtdyn1u9hYXW.webp)
![](https://s2.loli.net/2022/11/23/HG7VS5xFbOJpkia.webp)
![](https://s2.loli.net/2022/11/23/wokTgZCLpmSnONU.webp)
![](https://s2.loli.net/2022/11/23/1kNIM4bUoTpxvLq.webp)
![](https://s2.loli.net/2022/11/23/Cx12H84FYNumIAO.webp)
![](https://s2.loli.net/2022/11/23/1i8n6hkC95PdNmO.webp)
![](https://s2.loli.net/2022/11/23/q7LeVl94rFWtjkX.webp)
![](https://s2.loli.net/2022/11/23/dlwghv4n93S5iFa.webp)
![](https://nkt-blog-1315787778.cos.ap-nanjing.myqcloud.com/blog/article/202212101520091.webp)
![](https://s2.loli.net/2022/11/23/Fv4QCDrnPG8jayZ.webp)
![](https://s2.loli.net/2022/12/03/uEeO9RjaMSkGBA3.jpg)
![](https://s2.loli.net/2022/12/03/GWdmCRiuN41UPeO.jpg)
![](/img/Gallery/figure/太空的少女.webp)
{% endgallery %}

<script>
let time = ''
let imgbox = document.querySelector('.fj-gallery')
imgbox.addEventListener('contextmenu', e => e.preventDefault())
imgbox.addEventListener('dragend', e => { changeBg('url(' + e.target.src + ')'); })
imgbox.addEventListener('touchstart', e => { time = setTimeout(() => { changeBg('url(' + e.target.src + ')'); }, 500); })
imgbox.addEventListener('touchend', ()=>{clearTimeout(time)})
</script>