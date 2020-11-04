# ie相关问题
1. ie 调用 window.close时 系统会弹出一个确认框
使用如下代码可以解决：
```
window.open('', '_self');  
window.close():
```
2. ie 中 请求url参数中含有中文会导致乱码，可以使用encodeURI 编码整个请求url例如
   ```http://test.cn/?name=张三``` 编码后变成```http://test.cn/?name=%E5%BC%A0%E4%B8%89```，
   如将使用post 将参数放在body 则不会出现问题
