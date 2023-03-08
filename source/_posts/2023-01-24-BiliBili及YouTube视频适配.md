---
title: BiliBili及YouTube视频适配
tags:
  - BiliBili
  - YouTube
  - 视频适配
keywords:
  - BiliBili视频适配
  - YouTube视频适配
categories: 杂谈教程
description: BiliBili及YouTube视频适配
abbrlink: d014c592
date: 2023-01-24 15:45:29
---
# 自定义CSS并引入
```CSS
/*哔哩哔哩视频适配*/
.video-bilibili {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 65%;
  margin: 3% auto;
  text-align: center;
}
.video-bilibili iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.video-youtube {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  margin: 3% auto;
}
.video-youtube iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```
# 用法示例
```md
<div class="video-bilibili">
  <iframe
    src="https://player.bilibili.com/player.html?aid=412679216&&page=1&as_wide=1&high_quality=1&danmaku=0"
    scrolling="no"
    border="0"
    frameborder="no"
    framespacing="0"
    high_quality="1"
    danmaku="1"
    allowfullscreen="true"
  ></iframe>
</div>
```

```md
<div class="video-youtube">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/76_6dy-lBlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
```

# 效果展示
| 电脑端展示 | 手机端展示 |
| -----| ---- |
|![bilibili电脑端](https://nkt-blog-1315787778.cos.ap-nanjing.myqcloud.com/blog/wallpaper/202301241600154.webp)| ![bilibili手机端](https://nkt-blog-1315787778.cos.ap-nanjing.myqcloud.com/blog/wallpaper/202301241601878.webp)|
|![youtube电脑端](https://nkt-blog-1315787778.cos.ap-nanjing.myqcloud.com/blog/wallpaper/202301241601685.webp)| ![youtube手机端](https://nkt-blog-1315787778.cos.ap-nanjing.myqcloud.com/blog/wallpaper/202301241601095.webp)|


![](https://s2.loli.net/2022/11/24/siMAqL1Zewz3QlJ.webp)