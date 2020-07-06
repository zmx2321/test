# js工作积累
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. Promise基本用法
> - [演示地址](https://zmx2321.github.io/blog_code/accumulation/front/promise_easy)

### 1. 场景
在领导要求下，某个项目需要引入引入一个js但不能暴露其地址，所以我使用$.getScript()方法异步加载，但如果还需要引入其他js，并且这个js中的方法只有在异步执行那个js之后才能使用，在这个时候需要有执行先后顺序
解决办法：考虑使用Promise去实现，先执行完方法一之后再去执行方法二。

### 2. 示例
```js
// 添加js和cssdom
/* let addJs = (url)=> {
    let newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.src = url; 
    let head = document.getElementsByTagName("head")[0];
    head.appendChild(newScript);
}

let addClss = (url)=> {
    var headHTML = document.getElementsByTagName('head')[0].innerHTML;
    headHTML += `<link type="text/css" rel="stylesheet" href="${url}">`;
    document.getElementsByTagName('head')[0].innerHTML = headHTML;
} */

// test1
let test1 = ()=> {
    return new Promise((resolve, reject) => {
        // 返回写函数里面你要执行的内容
        resolve(
            console.log("test1, 1111")
        );
    })
}

// test2
let test2 = () => {
    setTimeout(function () {
        console.log("test2, 2222");
    }, 2000)
}

// 先执行test1，再执行test2
test1().then(() => {
    test2();
}) 
```

## 2. 队列控制多个请求访问一个异步方法
### 1. 场景
搜索的时候每次键盘按下都会进行一次搜索，但是搜索时间是异步的，这就导致了上一次搜索还没结束下一次搜索就有开始了，
事实上，异步代码一旦调用频繁后，要么回调满地图跑，要么这些代码不要求有先后，规律。我见过一些代码，所有的请求都用异步，
有时候两三个方法同时请求一个方法的时候，就会出现变量赋值错误，代码执行混乱等问题
解决办法：使用队列来控制搜索的次数与条件。

### 2. 示例
```js
// 实例化队列
var queue=new Queue();
//搜索点击
function onSearchClick(key){         
    if(queue.getLength==0){
    queue.push(key);
    search()
    }else{
    queue.push(key); 
    }
}
//搜索
function search(){
    //获取队尾
    var key=queue.getTail();
    if(!key){
        $.ajax({
        ....
        data:{searchKey:key},//赋值搜索条件
        ....
        success:function(result){
            var length=queue.getLength();
            if(length>1){
                //清空除队尾的其余条件
                queue.splice(0,length);
                //递归调用
                search();
            }else{
                //清空队列
                queue.clear();
            }                    
        },             
    })
    }
}
    
//队列
Queue:function(){
    var arr = [];
    //入队
    this.push = function (item) {
        arr.push(item);
        return true;
    };
    //出队
    this.shift = function () {
        return arr.shift();
    };
    //获取队首
    this.getHead = function () {
        return arr[0];
    };
    //获取队尾
    this.getTail = function () {
        return arr[arr.length - 1];
    };
    //删除数组固定位
    this.splice = function (start,end) {
        arr.splice(start, end);
    };
    //清空数组
    this.clear = function () {
        arr=[];
    };
    //获取数组长度
    this.getLength = function () {
        return arr.length;
    };
}
```

## 3. 根据索引删除数组元素
```js
// 根据索引删除数组元素
delArrEleByIndex(arr, indexsArr) {
    indexsArr.sort(function(a, b) { return b - a});
    
    indexsArr.forEach(function(indexsArr) { arr.splice(indexsArr, 1) })

    return arr;
},
```

## 4. 生成随机数
```js
// 生成随机数
getRandomNumber (m,n){
    return Math.floor(Math.random()*(m - n) + n);
},
```

## 5. 播放videojs
```js
// 播放videojs
playVideoJS(videoName, videoId) {
    videoName = this.$video(videoId, {
        bigPlayButton: false,
        textTrackDisplay: false,
        posterImage: true,
        errorDisplay: false,
        controlBar: true,
    }, function () {
        this.play()
    });
},
```

## 6. 两个按钮点击事件重叠在一起
- `event.stopPropagation();  // 原生js实现阻止冒泡-使点击眼睛只触发当前事件`

## 7. 定时刷新功能
```js
let myrefresh = ()=> {
    window.location.reload();
}

// 获取刷新时间（分钟）
let getFreshTime = (min) => {
    return 1000*60*min;
}

setTimeout('myrefresh()', getFreshTime(25));
```

## 8. js往对象中添加属性以及拷贝
### 1. 给对象obj1中追加obj2中数据
```js
let obj1={a:1};
let obj2={b:3,c:1}
Object.assign(obj1,obj2，..n个);  //第一个元素是要追加的对象，之后的是要添加的对象，可以传多个
console.log(obj1)  //{a:1,b:3,c:1}
```

### 2. 拷贝
```js
let obj1={a:1};
let obj2={b:3,c:1}
obj1=Object.assign(obj2);
console.log(obj1)  //{b:3,c:1}
```

## 9. js删除字符串中指定字符最简单的办法
```js
let str = "blog.123csdn.net";
console.log(str.replace("123", ""));  // blog.csdn.net
```

## 10. 根据需求只截取数组前三个
`trackList = trackList.slice(0, 3);`

## 10. 截取字符串前5位并返回新数组
`trackList[item].time = trackList[item].time.substring(5);`