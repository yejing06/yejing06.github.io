// //禁用开发者工具F12
//   document.onkeydown = document.onkeyup = document.onkeypress = function(event) {
//     let e = event || window.event || arguments.callee.caller.arguments[0];
//     if (e && e.keyCode == 123) {
//       e.returnValue = false;
//       return false;
//     }
//   };
//   let userAgent = navigator.userAgent;
//   if (userAgent.indexOf("Firefox") > -1) {
//     let checkStatus;
//     let devtools = /./;
//     devtools.toString = function() {
//       checkStatus = "on";
//     };
//     setInterval(function() {
//       checkStatus = "off";
//       console.log(devtools);
//       console.log(checkStatus);
//       console.clear();
//       if (checkStatus === "on") {
//         let target = "";
//         try {
//           window.open("about:blank", (target = "_self"));
//         } catch (err) {
//           let a = document.createElement("button");
//           a.onclick = function() {
//             window.open("about:blank", (target = "_self"));
//           };
//           a.click();
//         }
//       }
//     }, 200);
//   } else {
//     //禁用控制台
//     let ConsoleManager = {
//       onOpen: function() {
//         alert("Console is opened");
//       },
//       onClose: function() {
//         alert("Console is closed");
//       },
//       init: function() {
//         let self = this;
//         let x = document.createElement("div");
//         let isOpening = false,
//           isOpened = false;
//         Object.defineProperty(x, "id", {
//           get: function() {
//             if (!isOpening) {
//               self.onOpen();
//               isOpening = true;
//             }
//             isOpened = true;
//             return true;
//           }
//         });
//         setInterval(function() {
//           isOpened = false;
//           console.info(x);
//           console.clear();
//           if (!isOpened && isOpening) {
//             self.onClose();
//             isOpening = false;
//           }
//         }, 200);
//       }
//     };
//     ConsoleManager.onOpen = function() {
//       //打开控制台，跳转
//       let target = "";
//       try {
//         window.open("about:blank", (target = "_self"));
//       } catch (err) {
//         let a = document.createElement("button");
//         a.onclick = function() {
//           window.open("about:blank", (target = "_self"));
//         };
//         a.click();
//       }
//     };
//     ConsoleManager.onClose = function() {
//       alert("Console is closed!!!!!");
//     };
//     ConsoleManager.init();
//   }


// 复制提醒
document.addEventListener("copy",function(e){
  new Vue({
    data:function(){
      this.$notify({
        title:"哎嘿！复制成功🥂",
        message:"若要转载请保留原文链接，给你一个大大的赞哦！💖",
        // position: 'bottom-right',
        position: 'top-left',
        offset: 50,
        showClose: false,
        type:"success"
      });
      return{visible:false}
    }
  })
})

// /* 禁用F12按键并提醒 */
// document.onkeydown = function () {
//   if (window.event && window.event.keyCode == 123) {
//     event.keyCode = 0;
//     event.returnValue = false;
//     new Vue({
//       data:function(){
//         this.$notify({
//           title:"啊啊！你干嘛啊！😳😳",
//           message:"怎么能随随便便扒人家裤子呢？抓紧！",
//           // position: 'bottom-right',s
//           position: 'top-left',
//           offset: 50,
//           showClose: false,
//           type:"error"
//         });
//         return{visible:false}
//       }
//     })
//     return false;
//   }
// };

// twikoo表情包放大
// 如果当前页有评论就执行函数
if (document.getElementById('post-comment')) owoBig();
// 表情放大
function owoBig() {
    let flag = 1, // 设置节流阀
        owo_time = '', // 设置计时器
        m = 3; // 设置放大倍数
    // 创建盒子
    let div = document.createElement('div'),
        body = document.querySelector('body');
    // 设置ID
    div.id = 'owo-big';
    // 插入盒子
    body.appendChild(div)

    // 构造observer
    let observer = new MutationObserver(mutations => {

        for (let i = 0; i < mutations.length; i++) {
            let dom = mutations[i].addedNodes,
                owo_body = '';
            if (dom.length == 2 && dom[1].className == 'OwO-body') owo_body = dom[1];
            // 如果需要在评论内容中启用此功能请解除下面的注释
            // else if (dom.length == 1 && dom[0].className == 'tk-comment') owo_body = dom[0];
            else continue;
            
            // 禁用右键（手机端长按会出现右键菜单，为了体验给禁用掉）
            if (document.body.clientWidth <= 768) owo_body.addEventListener('contextmenu', e => e.preventDefault());
            // 鼠标移入
            owo_body.onmouseover = (e) => {
                    if (flag && e.target.tagName == 'IMG') {
                        flag = 0;
                        // 移入300毫秒后显示盒子
                        owo_time = setTimeout(() => {
                            let height = e.target.clientHeight * m, // 盒子高 2023-02-16更新
                                width = e.target.clientWidth * m, // 盒子宽 2023-02-16更新
                                left = (e.x - e.offsetX) - (width - e.target.clientWidth) / 2, // 盒子与屏幕左边距离 2023-02-16更新
                                top = e.y - e.offsetY; // 盒子与屏幕顶部距离

                            if ((left + width) > body.clientWidth) left -= ((left + width) - body.clientWidth + 10); // 右边缘检测，防止超出屏幕
                            if (left < 0) left = 10; // 左边缘检测，防止超出屏幕
                            // 设置盒子样式
                            div.style.cssText = `display:flex; height:${height}px; width:${width}px; left:${left}px; top:${top}px;`;
                            // 在盒子中插入图片
                            div.innerHTML = `<img src="${e.target.src}">`
                        }, 300);
                    }
                };
            // 鼠标移出隐藏盒子
            owo_body.onmouseout = () => { div.style.display = 'none', flag = 1, clearTimeout(owo_time); }
        }

    })
    observer.observe(document.getElementById('post-comment'), { subtree: true, childList: true }) // 监听的 元素 和 配置项
}