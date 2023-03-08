---
title: statistics
date: 2022-12-12 14:06:24
comments: false
---
<!-- <div id="github"></div> -->
### 访问统计
<div id="statistic">
<div class="content"></div>
<span style="font-size:14px">流量统计支持：<a style="color:#1690ff;" href="https://v6.51.la/">51la</a></span>
</div>

<!-- js -->
<script>
// 链接替换即可，不需要后面的参数
fetch('https://v6-widget.51.la/v6/JtIoqMXdoA8SMpNt/quote.js').then(res => res.text()).then((data) => {
    let title = ['最近活跃访客', '今日人数', '今日访问', '昨日人数', '昨日访问', '本月访问', '总访问量']
    let num = data.match(/(?<=<\/span><span>).*?(?=<\/span><\/p>)/g)
    let order = [1, 3, 2, 4, 5] // 新增  可排序，如果需要隐藏则删除对应数字即可。
    // 示例：[1, 3, 2, 4, 5] 显示 ['今日人数', '昨日人数', '今日访问', '昨日访问', '本月访问']，不显示 最近活跃访客(0) 和 总访问量(6)
    for (let i = 0; i < order.length; i++) { document.querySelectorAll('#statistic .content')[0].innerHTML += '<div><span>' + title[order[i]] + '</span><span class="num">' + num[order[i]] + '</span></div>' }
});
</script>
<!-- 文章发布时间统计图 -->
<div id="posts-chart" data-start="2022-11" style="border-radius: 8px; height: 300px; padding: 10px;"></div>
<!-- 文章标签统计图 -->
<div id="tags-chart" data-length="10" style="border-radius: 8px; height: 300px; padding: 10px;"></div>
<!-- 文章分类统计图 -->
<div id="categories-chart" data-parent="true" style="border-radius: 8px; height: 300px; padding: 10px;"></div>

<!-- 访问地图 -->
<!-- <div id="map-chart" style="border-radius: 8px; height: 600px; padding: 10px;"></div> -->
<!-- 访问趋势 -->
<!-- <div id="trends-chart" style="border-radius: 8px; height: 300px; padding: 10px;"></div> -->
<!-- 访问来源 -->
<!-- <div id="sources-chart" style="border-radius: 8px; height: 300px; padding: 10px;"></div> -->

<!-- <script defer data-pjax src="/js/census.js"></script> -->


<!-- http://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=xs0kBVclwI8K3E8fIrmTtRGY&redirect_uri=oob&scope=basic&display=popup

http://openapi.baidu.com/oauth/2.0/token?grant_type=authorization_code&code=d38a63170789766dc3fc6b7b6a5c927b&client_id=xs0kBVclwI8K3E8fIrmTtRGY&client_secret=70DzqRrjTNdgR2O8oml4ZoyPsOtSNqly&redirect_uri=oob

https://openapi.baidu.com/rest/2.0/tongji/config/getSiteList?access_token=121.72101cbf385ed9b60433216f83accb20.YsQ1rZrHkiQTrhinWhEdKo2xPgs7TqFZ5YPp0-p.8xUzIg -->


<!-- 121.72101cbf385ed9b60433216f83accb20.YsQ1rZrHkiQTrhinWhEdKo2xPgs7TqFZ5YPp0-p.8xUzIg

122.97bcdb75d3daec66d87b8993ee8367de.YGDyk62R-aL5YjdLS-IPF89_PZDeRmzSn1v7wQp.AD5UVA -->