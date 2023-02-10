import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

const obj = {
  name: 'huashao', // 6666
  age: 100
}

console.log(obj)
