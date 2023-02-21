<template>
    <label :class="['fl-radio', label==model ? 'is-checked' : '']">
      <span class="fl-radio__input">
        <span class="fl-radio__inner"></span>
        <input
          type="radio"
          class="fl-radio__original"
          :value="label"
          :name="name"
          v-model="model"
        >
      </span>
      <span class="fl-radio__label">
        <slot></slot>
        <template v-if="!$slots.default">{{ label }}</template>
      </span>
    </label>
</template>

<script>
export default {
  name: 'FlRadio',
  inject: {
    RadioGroup: {
      default: ''
      // default: () => ({ name: 'John' })
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.modelValue : this.modelValue
      },
      set (value) {
        this.$emit('update:modelValue', value)
        this.isGroup ? this.RadioGroup.$emit('update:modelValue', value) : this.$emit('update:modelValue', value)
      }
    },
    isGroup () {
      return !!this.RadioGroup
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    modelValue: null,
    name: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
.fl-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .fl-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .fl-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      //   background-color: #409eff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
    }
    .fl-radio__inner.is-mimicry {
      box-shadow: inset 4px 2px 6px #cacaca48,
        inset -4px -2px 6px rgba(255, 255, 255, 0.377);
    }
    .fl-radio__inner:after {
      width: 4px;
      height: 4px;
      border-radius: 100%;
      background-color: #fff;
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.15s ease-in;
    }
    .fl-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .fl-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.fl-radio.is-checked {
  .fl-radio__input {
    .fl-radio__inner {
      border-color: #409eff;
      background-color: #409eff;
      &::after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .fl-radio__label {
    color: #409eff;
  }
}
</style>
