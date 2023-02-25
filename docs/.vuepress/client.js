import { defineClientConfig } from '@vuepress/client'
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
import FlDropdownMenu from './components/dropdownMenu.vue'
import FlDropdownItem from './components/dropdownItem.vue'
import FlUpload from './components/upload.vue'
import FlCheckbox from './components/checkbox.vue'
import FlCheckboxGroup from './components/checkbox-group.vue'
import FlProgress from './components/progress.vue'
import FlAvator from './components/avator.vue'
// import FlGridRow from './components/grid-row.vue'
// import FlGridCol from './components/grid-col.vue'
import './components/iconfont.css'
export default defineClientConfig({
  enhance({ app }) {
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
    app.component(FlDropdownMenu.name, FlDropdownMenu)
    app.component(FlDropdownItem.name, FlDropdownItem)
    app.component(FlUpload.name, FlUpload)
    app.component(FlCheckbox.name, FlCheckbox)
    app.component(FlCheckboxGroup.name, FlCheckboxGroup)
    app.component(FlProgress.name, FlProgress)
    app.component(FlAvator.name, FlAvator)
    // app.component(FlGridRow.name, FlGridRow)
    // app.component(FlGridCol.name, FlGridCol)
  },
})