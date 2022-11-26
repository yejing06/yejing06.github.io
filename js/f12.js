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
// document.addEventListener("copy",function(e){
//   new Vue({
//     data:function(){
//       this.$notify({
//         title:"哎嘿！复制成功🥂",
//         message:"若要转载请保留原文链接，给你一个大大的赞哦！💖",
//         // position: 'bottom-right',
//         position: 'top-left',
//         offset: 50,
//         showClose: false,
//         type:"success"
//       });
//       return{visible:false}
//     }
//   })
// })

// /* 禁用F12按键并提醒 */
// document.onkeydown = function () {
//   if (window.event && window.event.keyCode == 123) {
//     event.keyCode = 0;
//     event.returnValue = false;
//     new Vue({
//       data:function(){
//         this.$notify({
//           title:"啊啊！你干嘛啊！😳😳",
//           message:"怎么能随随便便扒人家裤子呢？坏！",
//           // position: 'bottom-right',
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