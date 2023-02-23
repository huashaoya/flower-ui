<template>
  <div class="fl-switch">
    <span :class="inActiveTextClass">{{inActiveText}}</span>
    <div class="switch" @click="handleClick" :class="[stateDialog]" ref="customColors">
      <input type="checkbox" v-model="stateChange">
      <span class="core"></span>
    </div>
    <span :class="activeTextClass">{{activeText}}</span>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue'
export default {
  name: 'FlSwitch',
  props: {
    modelValue: {
      type: Boolean,
      defualt: false
    },
    activeColor: {
      type: String,
      defualt: ''
    },
    inActiveColor: {
      type: String,
      defualt: ''
    },
    inActiveText: {
      type: String,
      defualt: ''
    },
    activeText: {
      type: String,
      defualt: ''
    }
  },
  // emits: ['update'],
  setup (props, content) {
    let stateChange = ref(null)
    let customColors = ref(null)
    const stateDialog = ref('off')
    const activeTextClass = ref('texton')
    const inActiveTextClass = ref('textoff')

    async function handleClick () {
      content.emit('update:modelValue', !props.modelValue)
      stateChange.value = props.modelValue
      await nextTick()
      setColor()
      stateDialog.value = props.modelValue ? 'on' : 'off'
      activeTextClass.value = props.modelValue ? 'texton' : 'textoff'
      inActiveTextClass.value = !props.modelValue ? 'texton' : 'textoff'
    }
    function setColor () {
      if (props.activeColor || props.inActiveColor) {
        let color = props.modelValue ? props.activeColor : props.inActiveColor
        customColors.value.style.backgroundColor = color
      }
    }
    onMounted(() => {
      setColor()
      stateDialog.value = props.modelValue ? 'on' : 'off'
      activeTextClass.value = props.modelValue ? 'texton' : 'textoff'
      inActiveTextClass.value = !props.modelValue ? 'texton' : 'textoff'
    })
    return {
      stateChange,
      handleClick,
      stateDialog,
      customColors,
      activeTextClass,
      inActiveTextClass
    }
  }
}
</script>

<style lang="scss" scoped>
.fl-switch{
  width: 200px;
  display: flex;
  justify-content: center;
  span{
    display: inline-block;
    font-weight: bold;
  }
}
.switch{
  margin: 0 5px;
  display: inline-block;
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  transition: all .3s;
  box-sizing: border-box;
  cursor:pointer;
  span.core:after{
    content: "";
    position: absolute;
    border-radius: 100%;
    box-sizing: border-box;
    border: 1px solid #fff;
    box-shadow: 0 0 1px 1px #ccc;
    text-align: center;
    top: 2px;
    left: 2px;
    transition: all .3s;
    width: 26px;
    height: 26px;
    background-color: #fff;
  }
}
.off{
  background-color: #f0f0f4;
}
.on{
  background-color: #00bc12;
  .core::after{
    transform: translateX(60px);
    margin-left: -30px;
  }
}
.texton{
  color: #1f9e2c;
}
.textoff{
  color: black;
}
input{
  position: absolute;
  width: 0;
  height: 0;
}
</style>