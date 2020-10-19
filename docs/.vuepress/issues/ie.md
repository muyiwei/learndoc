# ie相关问题
1. ie 调用 window.close时 系统会弹出一个确认框
![ie弹框](../asset/images/ieClose.png)
使用如下代码可以解决：
```
window.open('', '_self');  
window.close():
```