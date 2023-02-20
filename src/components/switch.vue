<template>
    <div class="switch" @click="handleClick" :class="[stateDialog]" ref="customColors">
      <input type="checkbox" v-model="stateChange">
      <span class="core"></span>
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
    }
  },
  // emits: ['update'],
  setup (props, content) {
    let stateChange = ref(null)
    let customColors = ref(null)
    const stateDialog = ref('off')

    async function handleClick () {
      content.emit('update:modelValue', !props.modelValue)
      stateChange.value = props.modelValue
      await nextTick()
      setColor()
      stateDialog.value = props.modelValue ? 'on' : 'off'
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
    })
    return {
      stateChange,
      handleClick,
      stateDialog,
      customColors
    }
  }
}
</script>

<style lang="scss" scoped>
.switch{
  display: inline-block;
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  transition: all .3s;
  box-sizing: border-box;
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
  background-color: brown;
}
.on{
  background-color: rgb(7, 82, 20);
  .core::after{
    transform: translateX(60px);
    margin-left: -30px;
  }
}
input{
  position: absolute;
  width: 0;
  height: 0;
}
</style>