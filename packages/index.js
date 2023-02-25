import FlButton from './button.vue'
import FlIcon from './icon.vue'
import FlSelect from './select.vue'
import FlInput from './input.vue'
import FlRadio from './radio.vue'
import FlRadioGroup from './radio-group.vue'
import FlForm from './form.vue'
import FlFormItem from './form-item.vue'
import FlSwitch from './switch.vue'
import FlModal from './modal.vue'
import FlDropdown from './dropdown.vue'
import FlDropdownMenu from './dropdownMenu.vue'
import FlDropdownItem from './dropdownItem.vue'
import FlUpload from './upload.vue'
import FlCheckbox from './checkbox.vue'
import FlCheckboxGroup from './checkbox-group.vue'
import FlGridRow from './grid-row.vue'
import FlGridCol from './grid-col.vue'
import FlProgress from './progress.vue'
import FlAvator from './avator.vue'
import './font/iconfont.css'
// 存储组件列表
const components = [
  FlAvator
]
const install = function (app) { // app===Vue
  // 全局注册所有组件
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
  app.component(FlGridRow.name, FlGridRow)
  app.component(FlGridCol.name, FlGridCol)
  app.component(FlProgress.name, FlProgress)

  components.forEach((item) => {
    app.component(item.name, item)
    // console.log(item)
  })
}
// 如果是直接引入vue,就自动注册组件
// vue 2.x的写法，淘汰
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

export { components, install }
const FlowersUi = {
  install
}
export default FlowersUi