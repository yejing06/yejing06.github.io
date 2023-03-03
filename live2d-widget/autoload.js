// 注意：live2d_path 参数应使用绝对路径
//const live2d_path = "https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/";
const live2d_path = "/live2d-widget/";

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}

// 加载 waifu.css live2d.min.js waifu-tips.js
if (screen.width >= 768) {
	Promise.all([
		loadExternalResource(live2d_path + "waifu.css", "css"),
		loadExternalResource(live2d_path + "live2d.min.js", "js"),
		loadExternalResource(live2d_path + "waifu-tips.js", "js")
	]).then(() => {
		initWidget({
			waifuPath: live2d_path + "waifu-tips.json",
			apiPath: "https://api.itggg.cn/live2d_api",
			//"https://live2d.fghrsh.net/api/",
			//cdnPath: "https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/"
		});
	});
}
// initWidget 第一个参数为 waifu-tips.json 的路径，第二个参数为 API 地址
// API 后端可自行搭建，参考 https://github.com/fghrsh/live2d_api
// 初始化看板娘会自动加载指定目录下的 waifu-tips.json

console.log(`%c
  く__,.ヘヽ.        /  ,ー､ 〉
           ＼ ', !-─‐-i  /  /´
           ／｀ｰ'       L/／｀ヽ､
         /   ／,   /|   ,   ,       ',
       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
             .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
              ﾚ'ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
`,'color: #EEB4B4');

console.log('%c🍡欢迎来到の脑阔疼小站🍭🥂', 'color: #FF82AB;font-size: 45px;font-weight: bold; font-family: 楷体;');
let c = 'background: #35495e; color: #fff; border-radius: 4px 0 0 4px; font-size: 20px; '
let d = 'background: #41b883; color: #fff; border-radius: 0 4px 4px 0; font-size: 20px; '
console.log(`%c 拍照取证进行中  %c 开始运行摄像头调用程序 `, c, d)
console.log('%c photo:', 'color: #FF82AB;font-size: 15px;font-weight: bold; font-family: 楷体;');
console.log('%c👻', 'font-size: 45px;');


// var res = `
//      __  __     ____         _       __           __    __
//     / / / /__  / / /___     | |     / /___  _____/ /___/ /
//    / /_/ / _ \\/ / / __ \\    | | /| / / __ \\/ ___/ / __  / 
//   / __  /  __/ / / /_/ /    | |/ |/ / /_/ / /  / / /_/ /  
//  /_/ /_/\\___/_/_/\\____/     |__/|__/\\____/_/  /_/\\__,_/   
                                                          
// `
// console.log(res)
let a = 'background: #606060; color: #fff; border-radius: 4px 0 0 4px; font-size: 20px; '
let b = 'background: #1475B2; color: #fff; border-radius: 0 4px 4px 0; font-size: 20px; '
console.log(`%c 摄像头调用成功 : %c 识别结果为 の大聪明 `, a, b)


