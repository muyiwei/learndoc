# eventloop

在html5规范中，javascript事件队列分为: 微任务，宏任务。
js执行的顺序:
1. javascript同步脚本
2. 微任务队列内所有的任务
3. 宏任务队列第一个任务 再重复执行 2，3

看如下代码
```
Promise.resolve().then(function(){
    console.log("1");
    Promise.resolve().then(function(){
      console.log("5");
    });
});
setTimeout(function(){
    console.log("2");
    Promise.resolve().then(function(){
    console.log("4");
});
})
setTimeout(function(){
    console.log("3")
})

```

执行的结果是： **1 5 2 4 3** 
1. 首先执行同步代码块 将 **1** 放到 微任务队列，将**2**，**3** 放到宏任务队列
2. 执行微任务**1** ，将5放到微任务队列。微任务队列中还剩一个**5**
3. 执行微任务队列中的**5** 微任务执行完毕
4. 执行宏任务第一个**2**,将**4**放入微任务队列 。此时 微任务队列存在**4**，宏任务队列存在 **3**
5. 执行微任务中的**4** 微任务执行完毕
6. 执行宏任务中的**3** 宏任务队列执行完毕