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