import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FlButton from './components/button.vue'
import FlIcon from './components/icon.vue'
import FlSelect from './components/select.vue'
import FlForm from './components/form.vue'
import FlFormItem from './components/form-item.vue'
import './assets/font/iconfont.css'
// import FlowerUI from '../packages'

const app = createApp(App).use(store).use(router)
// .use(FlowerUI)
app.component(FlButton.name, FlButton)
app.component(FlIcon.name, FlIcon)
app.component(FlSelect.name, FlSelect)
app.component(FlForm.name, FlForm)
app.component(FlFormItem.name, FlFormItem)
app.mount('#app')
