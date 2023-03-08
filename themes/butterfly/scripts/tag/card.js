/**
 * card
 * {% card name,url,bg,star,text,icon,tag,w,h %}
 * {% card 标题,链接,背景,评分,评价,图标,标签,宽度,高度 %}
 */
// // 使用js是为了高亮代码，不必在意
// // 参数如下：
// {% card 标题,链接,背景,评分,评价,图标,标签,宽度,高度 %}
// // 示例如下：
// {% card 诡秘之主,https://book.qidian.com/info/1010868264/,https://bookcover.yuewen.com/qdbimg/349573/1010868264/300,4.5,第一次接触这种西方文学小说，刚开始感觉看不懂，断断续续看了很多次。后来越看越觉好看，每次看甚至都需要查“文档”,fa-solid fa-book-open,小说 %}
// // 你也可以什么都不填，将会全部使用默认值，如下：
// {% card %}
// // 你也可以省略部分内容，如下：
// {% card 诡秘之主,https://book.qidian.com/info/1010868264/,https://bookcover.yuewen.com/qdbimg/349573/1010868264/300 %}
// // 位置在后面的参数不填的话可以直接省略，但是如果中间的不想填必须留空，如下：
// {% card 诡秘之主,,,,,fa-solid fa-book-open,小说 %}

 'use strict'

 // 分数转成星星
 function tostar(num) {
     let tmp = ''
     for (let i = 0; i < Math.floor(num); i++) { tmp += '<i class="fa-solid fa-star"></i>' } // 整数部分加实心星星
     if (num - Math.floor(num) != 0) tmp += '<i class="fa-solid fa-star-half-alt"></i>' // 小数部分转成半星
     for (let i = 0; i < 5 - Math.ceil(num); i++) { tmp += '<i class="fa-regular fa-star"></i>' } // 不够5个补空心星星
     return tmp
 }
 
 function card(args) {
     args = args.join(' ').split(',')
 
     // 获取参数
     let name = (args[0] || '未知').trim()
     let url = (args[1] || '').trim()
     let bg = (args[2] ? `background-image: url(${args[2]});` : 'background-color: #333;').trim()
     let star = tostar(Number(args[3]) || 0)
     let text = (args[4] || '此作品博主暂未作出评价').trim()
     let icon = (args[5] || '').trim()
     let tag = (args[6] || '').trim()
     let w = args[7] || '200px'
     let h = args[8] || '275px'
 
     return `<div title="${name}" referrerPolicy="no-referrer" class="card_box" style="${bg} width:${w}; height:${h};">
     <div class="card_mask">
       <span>${text}</span>
       ${url?'<a href="'+url+'">查看详情</a>':''}
     </div>
     <div class="card_top">
       <i class="${icon}"></i>
       <span>${tag}</span>
     </div>
     <div class="card_content">
       <span>${name}</span>
       <div>${star}</div>
     </div>
   </div>`
 }
 
 hexo.extend.tag.register('card', card, { ends: false })