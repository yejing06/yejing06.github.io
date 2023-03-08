---
title: 3D立体相册
date: 2022-12-07 10:20:18
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
  <h1>立体相册</h1>
</div>

{% note blue 'fas fa-bullhorn' simple %}
所有图片均来自网络 侵删
{% endnote %}
<!-- <div class="aplayer no-destroy" data-id="2346950274" data-server="netease" data-type="playlist" data-fixed="true" data-mini="true" data-listFolded="false" data-order="random" data-preload="none" data-autoplay="true" muted></div> -->
<link type="text/css" href="../../css/3d.css" rel="stylesheet" />
<style>
@media screen and (max-width: 768px) {
.box {
    width: 200px;
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
    position: absolute;
    margin-left: 14%;
    margin-top: 22%;
    -webkit-transform-style: preserve-3d;
    -webkit-transform: rotateX(13deg);
    -webkit-animation: move 5s linear infinite;
}
}

</style>


<div class="box">
  <ul class="minbox">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <ol class="maxbox">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ol>
</div>
<p style="height:800px;"></p>