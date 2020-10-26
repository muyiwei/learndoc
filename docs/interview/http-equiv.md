# http-equiv.md 理解
```<meta http-equiv="">``` 只支持 5个属性 基本上只用到了X-UA-Compatible，其他的很少用，其他属性都应该设置在服务端
1. **X-UA-Compatible** 浏览器uA兼容处理，用于ie ,一般设置为```<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">```
  表示 ie使用最高版本渲染，如果安装了Google Chrome Frame(谷歌内嵌浏览器框架GCF) 就会在ie中使用chrome 内核来渲染
  一些其他设置```<meta http-equiv="X-UA-Compatible" content="IE=ie7">``` ie中总是以ie7来渲染
2. **content-security-policy**，用于设置内容安全策略，更好的方法是在服务端设置而不是在客户端设置，而且要使用 nonce 功能就必须在服务端设置。
3. **content-type**，用于设置文档类型，现在只支持 "text/html; charset=utf-8" 这一个值，不如 ```<meta charset="utf-8"> ```方便。
4. **default-style**，用于设置样式表，不如 ```<link rel="stylesheet" href="style.css">``` 方便。

5. **refresh**，用于设置页面自动刷新时间，用 ```window.setTimeout()``` 更方便，而且对于 SPA 应用，不需要刷新整个页面。

