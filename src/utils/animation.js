import {isBrowser} from 'react-device-detect';

//show text animation
export const textShowing = (event, text) => {
  var a_idx = 0;
      var a = new Array(text);

      var heart = document.createElement("b"); //创建b元素
      heart.onselectstart = new Function('event.returnValue=false'); //防止拖动

      document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
      a_idx = (a_idx + 1) % a.length;
      heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式

      var f = 50, // 字体大小
        x = isBrowser ? event.clientX / 2 : event.touches[0].clientX / 2, // 横坐标
        y = isBrowser ? event.clientY - f : event.touches[0].clientY - f, // 纵坐标
          c = randomColor(), // 随机颜色
          a = 1, // 透明度
          s = 5; // 放大缩小

      var timer = setInterval(function () { //添加定时器
          if (a <= 0) {
              document.body.removeChild(heart);
              clearInterval(timer);
          } else {
              heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" +
                  c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
                  s + ");";

              y--;
              a -= 0.016;
              s += 0.002;
          }
      }, 15)

  // 随机颜色
  function randomColor() {

      return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
      .random() * 255)) + ")";

  }
};

export default textShowing;