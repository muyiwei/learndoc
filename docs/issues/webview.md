# webview中遇到的问题
1. andrond webview 中由于安全问题，无法通过```<input type = "file">```选择文件，需要webview 暴露出选择文件的接口。
   以前做的的原理是:
   1. 通过webviwe 接口选择文件后获取文件路径
   2. 通过webview 接口 传入文件名 将文件转换成base64
   3. 将base64 转换成file对象 ，放到FormData 传给后台
   ```
        function dataURLtoFile(dataurl, filename) {//将base64转换为文件
            var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, {type:mime});
        }
   ```
   ios webview 可以通过```<input type="file">```选择文件
2. 之前遇到一个问题，就是app有一系列待办任务，点开待办任务跳转到h5页面，h5完成后，关闭webview app待办数量并没有更新，原因是app的待办更新并不是完全实时的可能有一个1，2秒的延迟。所有需要延迟2秒关闭webview   
