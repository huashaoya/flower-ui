import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FlButton from './components/button.vue'
import FlIcon from './components/icon.vue'
import FlSelect from './components/select.vue'
import FlInput from './components/input.vue'
import FlRadio from './components/radio.vue'
import FlRadioGroup from './components/radio-group.vue'
import FlForm from './components/form.vue'
import FlFormItem from './components/form-item.vue'
import FlSwitch from './components/switch.vue'
import FlModal from './components/modal.vue'
import FlDropdown from './components/dropdown.vue'
import FlUpload from './components/upload.vue'
import FlCheckbox from './components/checkbox.vue'
import FlCheckboxGroup from './components/checkbox-group.vue'
import './assets/font/iconfont.css'
// import FlowerUI from '../packages'

const app = createApp(App).use(store).use(router)
// .use(FlowerUI)
app.component(FlButton.name, FlButton)
app.component(FlIcon.name, FlIcon)
app.component(FlSelect.name, FlSelect)
app.component(FlInput.name, FlInput)
app.component(FlRadio.name, FlRadio)
app.component(FlRadioGroup.name, FlRadioGroup)
app.component(FlForm.name, FlForm)
app.component(FlFormItem.name, FlFormItem)
app.component(FlSwitch.name, FlSwitch)
app.component(FlModal.name, FlModal)
app.component(FlDropdown.name, FlDropdown)
app.component(FlUpload.name, FlUpload)
app.component(FlCheckbox.name, FlCheckbox)
app.component(FlCheckboxGroup.name, FlCheckboxGroup)
app.mount('#app')
