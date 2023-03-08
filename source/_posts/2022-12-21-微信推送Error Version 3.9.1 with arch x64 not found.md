---
title: '微信推送Error: Version 3.9.1 with arch x64 not found'
tags:
  - 微信推送
  - 公众号
keywords:
  - 微信推送
  - 公众号
categories: 杂谈教程
theme: shrink
password: ''
abbrlink: afe4abf2
date: 2022-12-21 12:41:06
description:
---
# 前言
&emsp;&emsp;前些日子发现`微信自动推送`不能正常推送了，一直没顾得上看是怎么回事，今日解决这个问题，顺便就在这里记录一下解决方案。
# 查看错误
![](https://nkt-blog-1315787778.cos.ap-nanjing.myqcloud.com/blog/article/202212211259804.webp)
# 分析原因
&emsp;&emsp;因为程序一直正常运行挺久了，所以问题应该不大，下面分析原因。
&emsp;&emsp;报错显示是`3.9.1`版本的`python`没有找到，并且给出了所有可用版本的列表链接：`https://raw.githubusercontent.com/actions/python-versions/main/versions-manifest.json`
![](https://nkt-blog-1315787778.cos.ap-nanjing.myqcloud.com/blog/article/202212211311444.webp)
&emsp;&emsp;从图中可以看出，其中Ubuntu上有3个二进制压缩包，并且给出的对应的Ubuntu版本号，返回action执行文件，可以看到我用的Runner(runs-on)是`ubuntu-latest`,而目前最新的版本则为`Ubuntu 22.04`,所以上边的三个压缩包并没有可供`Ubuntu 22.04`使用的,因此会报错误 Error: Version 3.9.1 with arch x64 not found。此外，可以看到在此句错上一行显示 Version 3.9.1 was not found in the local cache ,查阅得知，actions/setup-python（当前最新是 v4）支持在两个地方寻找可用的Python版本，一个是在用户指定的`Runner Images缓存中`寻找（优先），另一个是在`actions/python-versions`中寻找（次要）。所以在GitHub的Runner Images中查看`python缓存支持版本`
![](https://nkt-blog-1315787778.cos.ap-nanjing.myqcloud.com/blog/article/202212211334898.webp)
&emsp;&emsp;可以发现我所使用的`3.9.1`版本的python并不在其中，因而会出现此句错误。
# 解决办法
&emsp;&emsp;经过分析，解决办法自然也有了头绪，在`action执行文件`中进行以下修改：
## 方法一
&emsp;&emsp;将`Runner Image(runs-on)`修改为`ubuntu-20.04`
![](https://nkt-blog-1315787778.cos.ap-nanjing.myqcloud.com/blog/article/202212211347430.webp)
## 方法二
&emsp;&emsp;将`python-version`修改为`v3.9.12`
# 成功解决
![](https://nkt-blog-1315787778.cos.ap-nanjing.myqcloud.com/blog/article/202212211351762.webp)

![](https://s2.loli.net/2022/11/24/siMAqL1Zewz3QlJ.webp)