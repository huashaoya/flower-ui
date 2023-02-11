import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FlButton from './components/button.vue'
import FlIcon from './components/icon.vue'
import './assets/font/iconfont.css'

const app = createApp(App).use(store).use(router)
app.component(FlButton.name, FlButton)
app.component(FlIcon.name, FlIcon)
app.mount('#app')
