# 前端安全 请求头
1. 点击劫持 ，点击劫持是恶意网站将原网站嵌入到恶意网站中，然后用一些透明的元素将用户想点击的区域遮盖，用户点击后跳转到恶意网站。
   防御方式：
  **X-Frame-Options**（IE8+、Opera10+、Safari4+、Chrome4.1.249.1042+、Firefox3.6.9)
   1. 不允许被嵌入
   2. 允许被同域名的嵌入
   3. 允许被指定域名的嵌入
2. **CSP（Content Security Policy）**内容安全策略：用于指定哪些内容可加载（css.js,img等）  设置csp后可以防止引入带有攻击性的js外链脚本 ， 
3. 设置 cookie Samesite 属性可以防止CRSF攻击
4. **X-Content-Type-Options** 'nosniff'; script 只允许请求 minitype为javascript的文件，style 只允许请求minitype为 css的文件，
如果在script 中加载非js资源会被浏览器阻止
5. **X-XSS-Protection**   
1. 0 禁用XSS保护；
2. 1 启用XSS保护；
3.   mode=block,发现xss时不渲染xss脚本
这一定程度上可以缓解xss攻击，但是也会存在一些误处理，如果识别错误会把正常的js给过滤掉，所以需要根据业务需求来确定是否使用
6. **HTTP Strict Transport Security**
   **HTTP Strict Transport Security: 3600 incloudSubDomain** 在3600毫秒内包含子域名直接使用https 访问