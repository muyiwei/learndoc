# encodeURI decodeURI decodeURIComponent encodeURIComponent 的理解
1. **encodeURI** 编码 对应 **decodeURI** 解码  不会对://=&编码 ，例子：

```
encodeURI("http://www.baidu.com/?i=张三")
```

得到：

```
http://www.baidu.com/?i=%E5%BC%A0%E4%B8%89
```
## 使用场景

可以解决ie上url参数上有中文导致请求报错问题。

2.  ***encodeURIComponent***编码 对应 ***decodeURIComponent*** 解码，例子
```
http://www.baidu.com?return=encodeURIComponent("http://www.baidu.com/?i=张三")
```

得到：

```
http://www.baidu.com?return=http%3A%2F%2Fwww.baidu.com%2F%3Fi%3D%E5%BC%A0%E4%B8%89
```
## 使用场景
主要用于对参数进行编码，如参数是一个连接的，需要对该连接encodeURIComponent