# 起步
## 环境支持
Flowers-ui 可以在以下浏览器上运行,由于 Vue 3 不再支持 IE11，Flowers-ui 也不再支持 IE 浏览器。
![](/browsers.png 'image')
## 安装与使用
### 安装：使用包管理器
我们建议您使用包管理器（如 NPM、Yarn 或 pnpm）安装，然后您就可以使用打包工具，例如 Vite 或 webpack。
```shell
# NPM
npm i flowers-ui

# Yarn
yarn add flowers-ui

# pnpm
pnpm install flowers-ui
```
### 使用
```javascript
//main.js
import fl from 'flowers-ui'
import 'flowers-ui/dist/flowers-ui.css'

createApp(App).use(fl)
```
### 安装：浏览器直接引入
直接通过浏览器的 HTML 标签导入 FlowersUi，然后就可以使用全局变量 FlowersUi 了。
```html
<!-- import Vue3-->
<script src="https://unpkg.com/vue@next"></script>
<!-- import CSS -->
<link rel="stylesheet" href="https://unpkg.com/flowers-ui/dist/flowers-ui.css">
<!-- import JavaScript -->
<script src="https://unpkg.com/flowers-ui"></script>
```
::: tip
我们建议使用 CDN 引入 FlowersUi 的用户在链接地址上锁定版本，以免将来 FlowersUi 升级时受到非兼容性更新的影响。
:::
### 使用
```html
<script>
    const App = {
    data() {
        return {
        };
    },
    };
    const app = Vue.createApp(App);
    app.use(FlowersUi);
    app.mount("#app");
</script>
```