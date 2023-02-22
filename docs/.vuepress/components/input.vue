<template>
  <div class="fl-input">
    <input class="fl-input_inner" :class="{'is-disabled': disabled}" :placeholder="placeholder" :type="type" :name="name" :disabled="disabled" :value="modelValue" @input="handleInput"/>
  </div>
</template>

<script>
export default {
  name: 'FlInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false// 禁用输入框
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style lang="scss">
.fl-input {
  width: 150px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .fl-input_inner {
    -webkit-appearance: none;
    background-color: white;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;//rgb(79, 104, 203)
    box-sizing: border-box;
    color: black;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: black;
    }
    &.is-disabled {// 禁用样式
      background-color: white;
      border-color: #dcdfe6;//rgb(79, 104, 203)
      color: rgb(154, 184, 210);
      cursor: not-allowed;// 有个禁止标志
    }
  }
}
</style>
