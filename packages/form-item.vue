<template>
    <div class="fl-form-item">
        <label class="fl-form-item__label" :style="{width:this.form.labelWidth}">{{label}}</label>
        <div class="fl-form-item__conetent">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FlFormItem',
  props: {
    label: {
      type: String
    }
  },
  inject: ['form']
}
</script>

<style lang='scss'>
.fl-form-item {
  margin-bottom: 22px;
  &::before,
  &::after {
    display: table;
    content: '';
  }
  .fl-form-item__label {
    text-align:right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .fl-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    &::before,
    &::after {
      display: table;
      content: '';
    }
  }
}
</style>
