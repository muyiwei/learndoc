# 前端缓存理解
1. 按 f5 刷新页面，或 直接输入url, 浏览器会自动在请求头上 添加 max-age = 0,会去请求服务器（无论该请求原有的max age 是否过期）。
   ctrl+f5 浏览器会在请求头上添加 cache-control:no-store 会使用服务器的资源
2. ## http1.0 和 http1.1 的区别 

| http 1.0 | http1.1|  |
| :-----| ----: |
| Expires:3600 | cache-control:max-age 3600 | 
| Pragma:no-cache  | cache-control:no-cache  |

http1.1 的属性优先级更高，如果需要设置max-age 和cache-control 一般为了兼容性都会将Expries 和 pragma 设置上
3. 设置了 max-age 在未过期前，不会像服务器发送新的请求，会直接使用缓存（直接在浏览器上输入请求除外，浏览器上直接输入max-age:0 ）
4. 如果资源过期了，会向服务器发送请求，带上 last-modified或etag，也可以两者都设置  服务器会比较资源的last-modified 和 etag 如果两者一致就返回304 表示资源未改变，直接使用缓存即可。
（如果是分布式，需要统一服务器和版本，不然，可能 etag 会生成的不一样）
5. no-cache 表示不直接使用缓存，直接向服务发送请求 会根据last-modifyed或etag 来判断是否使用缓存
6. no-store 表示不缓存文件，会直接下载请求服务器的文件

如果什么都不设置，默认是文件改变了，服务器就会返回新的。js好像是直接使用的缓存，并没有向服务器发送请求，这是为啥？

缓存优化建议：
index.html 不使用缓存。
js使用缓存，通过更改版本号来控制js的发布
```
		location ~ .htm{
		 try_files $uri $uri/ /index.html;
         add_header Cache-Control no-cache;

         } 
```
