import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FlowerUI from '../packages'

const app = createApp(App).use(store).use(router).use(FlowerUI)
app.mount('#app')
