
// 申请友链
let linkCom = (type) => {
    var n = document.querySelector(".el-textarea__inner")
    if (type == 'bf') {
        // n.value = '```yml\n';
        n.value += `- name: 
   link: 
   avatar: 
   descr: 
   siteshot: `;
        // n.value += '\n```';
        n.setSelectionRange(15, 15);
    } else {
        n.value = `站点名称：
站点地址：
头像链接：
站点描述：
站点截图：`;
        n.setSelectionRange(5, 5);
    }
    n.focus();
}
