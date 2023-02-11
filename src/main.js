import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FlButton from './components/button.vue'

const app = createApp(App).use(store).use(router)
app.component('fl-button', FlButton)
app.mount('#app')
