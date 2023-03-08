---
title: 生活的小美好
date: 2022-11-30 10:20:18
type:
aside: false
comments: false
description: 记录生活的小美好
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
  <h1>生活的小美好</h1>
</div>

{% note blue 'fas fa-bullhorn' simple %}
点击可查看图片，`电脑端拖动图片/手机端长按图片` 可以实现切换壁纸哦~<button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#87CEFA;display:inline;padding: 10px 10px;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 恢复</button>
{% endnote %}

{% gallery %}
<!-- ![](https://s2.loli.net/2022/12/03/c8xnRXLz6iKJPWZ.jpg) -->
![](https://nkt-blog-1315787778.cos.ap-nanjing.myqcloud.com/blog/article/202212101513032.webp)
<!-- ![](https://s2.loli.net/2022/12/03/tejupoKkdzXNrx4.jpg)
![](https://s2.loli.net/2022/12/03/5IaBkmuPQVFpJgE.jpg)
![](https://s2.loli.net/2022/12/03/Hk8SpZQhPmJwvdN.jpg)
![](https://s2.loli.net/2022/12/03/4pC2fZRohOMw8SW.jpg)
![](https://s2.loli.net/2022/12/03/7Jrsyj5qew6klGp.jpg)
![](https://s2.loli.net/2022/12/03/NI2QJvkYcSGFL1a.jpg)
![](https://s2.loli.net/2022/12/03/BsKZqRyzPvYf4dV.jpg) -->
![](https://nkt-blog-1315787778.cos.ap-nanjing.myqcloud.com/blog/article/202212101531772.webp)
![](https://nkt-blog-1315787778.cos.ap-nanjing.myqcloud.com/blog/article/202212101532549.webp)
![](https://nkt-blog-1315787778.cos.ap-nanjing.myqcloud.com/blog/article/202212101532733.webp)
![](https://nkt-blog-1315787778.cos.ap-nanjing.myqcloud.com/blog/article/202212101533875.webp)
![](https://nkt-blog-1315787778.cos.ap-nanjing.myqcloud.com/blog/article/202212101534283.webp)
![](https://nkt-blog-1315787778.cos.ap-nanjing.myqcloud.com/blog/article/202212101534645.webp)

{% endgallery %}

<script>
let time = ''
let imgbox = document.querySelector('.fj-gallery')
imgbox.addEventListener('contextmenu', e => e.preventDefault())
imgbox.addEventListener('dragend', e => { changeBg('url(' + e.target.src + ')'); })
imgbox.addEventListener('touchstart', e => { time = setTimeout(() => { changeBg('url(' + e.target.src + ')'); }, 500); })
imgbox.addEventListener('touchend', ()=>{clearTimeout(time)})
</script>