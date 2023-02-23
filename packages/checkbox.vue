<template>
     <label
    :class="[
      'fl-checkbox',
      isChecked ? 'is-checked' : '',
      disabled ? 'is-disabled' : '',
    ]"
  >
    <span class="fl-checkbox__input">
      <span
        class="fl-checkbox__inner"
        :style="{
          backgroundColor: isChecked ? activeColor : '#fff',
          borderColor: isChecked ? activeColor : '#dcdfe6'
        }"
      ></span>
      <input
        type="checkbox"
        class="fl-checkbox__original"
        :name="name"
        :value="label"
        v-model="model"
        :disabled="disabled"
      />
    </span>
    <span class="fl-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'FlCheckbox',
  computed: {
    isGroup () {
      return !!this.CheckboxGroup
    },
    model: {
      get () {
        return this.isGroup ? this.CheckboxGroup.modelValue : this.modelValue
      },
      set (value) {
        this.$emit('update:modelValue', value)
        this.isGroup ? this.CheckboxGroup.$emit('update:modelValue', value) : this.$emit('update:modelValue', value)
      }
    },
    isChecked () {
      return this.isGroup ? this.model.includes(this.label) : this.model
    }
  },
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: '#409eff'
    }
  }
}
</script>

<style lang="scss">
.fl-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .fl-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .fl-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        // 这里使用边框实现对勾的样式
        box-sizing: content-box;
        content: '';
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        width: 3px;
        position: absolute;
        left: 4px;
        top: 1px;
        transform: rotate(45deg) scaleY(1);
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .fl-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .fl-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
// 父元素的最后的一个子元素d-checkbox取消margin-right，也包括嵌套子元素的最后一个d-checkbox
.fl-checkbox:last-of-type {
  margin-right: 0;
}
.fl-checkbox.is-checked {
  .fl-checkbox__inner {
    background-color: #409eff;
    border-color: #409eff;
    &:after {
      transform: rotate(45deg) scaleY(1);
    }
  }
  .fl-checkbox__label {
    color: #409eff;
  }
}
.fl-checkbox.is-disabled {
  .fl-checkbox__inner {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
  }
  span.d-checkbox__label {
    color: #c0c4cc;
    cursor: not-allowed;
  }
}
</style>