---
title: 友人帐
date: 2022-11-10 08:46:37
type: "link"
aside: false
---
<style>
html .sakana-box {
    position: inherit;
    right: 0;
    bottom: 0;
    transform-origin: 290% -120%;
}
.sakana-box {
    width: 500px;
    height: 80px;
    position: relative;
    pointer-events: none;
}
@media screen and (max-width: 768px){
  .sakana-box {
  width: 500px;
  height: 80px;
  position: relative;
  pointer-events: none;
}
}
@media screen and (max-width: 768px){
  html .sakana-box {
    position: inherit;
    right: 0;
    bottom: 0;
    transform-origin: 36% 170%;
}
}
[data-theme="light"] .layout > div:first-child:not(.recent-posts) {
    background: rgba(255, 255, 255, .8);
    -webkit-backdrop-filter: none;
    backdrop-filter: none!important;
}
[data-theme="dark"] .layout > div:first-child:not(.recent-posts) {
    background: rgba(15, 15, 15, .75);
    -webkit-backdrop-filter: none;
    backdrop-filter: none!important;
}
html.hide-aside .layout > div:first-child {
    width: 90%;
}
</style>

<div class="sakana-box"></div>
<script src="/js/sakana.js"></script>
<!-- <script src="https://cdn.jsdelivr.net/npm/sakana"></script> -->
<script>
Sakana.init({
  el:         '.sakana-box',     // 启动元素 node 或 选择器
  scale:      .5,                // 缩放倍数
  canSwitchCharacter: true,      // 允许换角色
});
</script>

<h2>🍡本站友链添加方式</h2>
{% tabs 1%}
<!-- tab Flexcard-->
```YML
- name: 脑阔疼ه٥
  link: https://naokuoteng.cn/
  avatar: https://s2.loli.net/2022/12/04/65B3mSlbdsvr4aU.webp
  descr: 天气转晴 太阳崭新 我在前进
  siteshot: https://s2.loli.net/2022/12/26/UrkH1Am6Gb9O2iw.webp
```
<!-- endtab -->
<!-- tab Butterfly -->
| 名称 | 内容 |
| -----| ----- |
| 站点名称          | 脑阔疼ه٥          |
| 站点截图         | https://s2.loli.net/2022/12/26/UrkH1Am6Gb9O2iw.webp         |
| 站点链接      | https://naokuoteng.cn/       |
| 博主头像    | https://s2.loli.net/2022/12/04/65B3mSlbdsvr4aU.webp  |
| 站点描述              | 天气转晴 太阳崭新 我在前进         |
| 站点关键词          | 脑阔疼ه٥ ,个人博客,代码    |
<!-- endtab -->
{% endtabs %}
<h2>⛵加入本站友链方式</h2>
```YML
- name: #站点名称
  link: #站点链接
  avatar: #站长头像
  descr: #站点描述
  siteshot: #站点截图 
```
{% note info flat %}🪞站点截图可以自己提供，图片压缩后最好小于200KB。<br>🪙未提供站点预览图的，本站会根据贵站链接调用以下API自动获取贵站的站点截图。<br>🔫对于做了反扒措施的站点，API获取的将是反扒页面，望知悉。<br>🍭站点截图建议使用以下API获取以匹配本站样式。<br>🥙有部分朋友的截图体积过大影响加载速度，后面一律采用小体积截图代替望周知!{% endnote %}
```Markdown
https://image.thum.io/get/allowJPG/wait/20/width/600/crop/950/https://<你的域名>/
```

<h2>🍨友情提醒</h2>
{% note primary flat %}
<p>🎉本站支持交换友链，在您提出申请之前，请将本站添加至友链<br>🥗为了保障本站用户，本站仅支持个人网站的友链申请<br>🍧申请本站友链需要拥有独立域名（非免费域名），建议开启全站HTTPS<br>🥫如果友情链接已经添加，请保持网站的正常访问，会定期清理僵尸网站<br>🍖网站有一定的实质性内容和主题，不能是空壳网站和练手网站<br>💕感谢您对本站的支持，如果您已经满足上述要求，请在下方表单提交友链申请~~~</p>
{% endnote %}



<!-- //插入到link.md的尾部 -->
<div class="addBtn">
<button onclick="linkCom('bf')"><i class="fa-solid fa-circle-plus"></i>快速申请 (Butterfly)</button>
<button onclick="linkCom()"><i class="fa-solid fa-circle-plus"></i>快速申请 (默认样式)</button>
</div>