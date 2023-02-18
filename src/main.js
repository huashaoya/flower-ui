import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FlButton from './components/button.vue'
import FlIcon from './components/icon.vue'
import FlSelect from './components/select.vue'
import FlInput from './components/input.vue'
import FlForm from './components/form.vue'
import FlFormItem from './components/form-item.vue'
import FlSwitch from './components/switch.vue'
import FlDialog from './components/dialog.vue'
import './assets/font/iconfont.css'
// import FlowerUI from '../packages'

const app = createApp(App).use(store).use(router)
// .use(FlowerUI)
app.component(FlButton.name, FlButton)
app.component(FlIcon.name, FlIcon)
app.component(FlSelect.name, FlSelect)
app.component(FlInput.name, FlInput)
app.component(FlForm.name, FlForm)
app.component(FlFormItem.name, FlFormItem)
app.component(FlSwitch.name, FlSwitch)
app.component(FlDialog.name, FlDialog)
app.mount('#app')
