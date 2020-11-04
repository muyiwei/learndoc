# vue 3.0 变化学习
1. 启动app变化

   **vue3以前**：
   ``` 
   new Vue({
        el:"#app",
        ...App,
        router
        })
   ```

**vue3**
```
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router"
const app = createApp(App);
app.use(router);
app.mount("#app");
```
2. vue-router变化

**vue2**
```
import router from "vue-router"
import Vue from "vue";

Vue.use(router);
export default new router({
    routes:[
        {
            path:"*", // 匹配所有

            component:() => import("@/views/home.vue")
        },
        {
            path:"/hello",
            name:"hello2",
            component:() => import("@/views/hello.vue")
        }

    ]
})
```
**vue3** 
```
import {createRouter, createWebHistory} from "vue-router";

const routes = [
{
    path:"/:ss(.*)*",  //匹配所有
    component:() => import("@/view/home.vue")
},
{
    path:"/hello",
    component: () => import("@/view/hello.vue")
}];
export default createRouter({
    routes,
    history: createWebHistory()
    

})
```
