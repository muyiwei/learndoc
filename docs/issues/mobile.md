# 移动端遇到的问题总结
1. android 后退会刷新页面，ios后退不会刷新页面，需要监听pageshow 去处理
2. cookie 设置了 SameSite=Lax 在 部分手机上（荣耀9i等） 浏览器不会自动发送cookie。