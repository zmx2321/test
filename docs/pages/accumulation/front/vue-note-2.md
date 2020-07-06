# vue笔记-2
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 配置全局less
    - `npm i sass-resources-loader -S`
    - 创建less文件
    - 在vue.config.js中进行配置
    ```js
    module.exports = {
        ......
        // 引入公共less
        pluginOptions: {
            'style-resources-loader': {
                preProcessor: 'less',
                patterns:  ['src/assets/less/demo.less', 'src/assets/less/global.less']
            }
        },
        ......
    }
    ```

## 2. vue引入图片无法加载问题
在vue的js引入图片，就需要使用require（“路径”）进来
    - `<img :src=" require('../../assets/images/url/icon' + (index+1) + '.png') " alt="">`

## 3. vue中拖拽
### 1. 自定义指令 - 拖拽
```html
<!-- 自定义指令绑定元素 -->
<button v-drag>拖拽</button>
```
```js
export default {
    name: "",

    // 自定义指令 - 拖拽
    directives:{
        drag(el, bindings){
            el.onmousedown = function(e){
                var disx = e.pageX - el.offsetLeft;
                var disy = e.pageY - el.offsetTop;
                document.onmousemove = function (e){
                    el.style.left = e.pageX - disx+'px';
                    el.style.top = e.pageY - disx+'px';
                }
                document.onmouseup = function(){
                    document.onmousemove = document.onmouseup = null;
                }
            }
        }
    },
}
```

### 2. 通过事件触发 - 拖拽
```html
<div class="xxclass" ref="xxref" @mousedown="mouseDownHandleelse($event)" @mouseup="mouseUpHandleelse($event)"></div>
```
```js
export default {
  name: 'zhinengjifang',
  data () {
    return {
      moveDataelse: {
        x: null,
        y: null
      }
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  components: {
  },
  methods: {
    mouseDownHandleelse (event) {
      this.moveDataelse.x = event.pageX - this.$refs.xxref.offsetLeft
      this.moveDataelse.y = event.pageY - this.$refs.xxref.offsetTop
      event.currentTarget.style.cursor = 'move'
      window.onmousemove = this.mouseMoveHandleelse
    },
    mouseMoveHandleelse (event) {
      let moveLeft = event.pageX - this.moveDataelse.x + 'px'
      let moveTop = event.pageY - this.moveDataelse.y + 'px'
      this.$refs.xxref.style.left = moveLeft
      this.$refs.xxref.style.top = moveTop
    },
    mouseUpHandleelse (event) {
      window.onmousemove = null
      event.currentTarget.style.cursor = 'move'
      console.log('鼠标松开了')
    }
  }
}
```
```css
.xxclass{
    height: 200px;
    width: 400px;
    position: fixed;
    top: 150px;
    left: 550px;
    cursor: pointer;
}
```