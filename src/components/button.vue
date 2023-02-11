<template>
    <button class="fl-button" :class="['fl-button--'+type]">
      <span><slot></slot></span>
    </button>
</template>

<script>

export default {
  name: 'FlButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  created () {
    // console.log(this.type)
  }
}
</script>

<style lang="scss">
$normal-color: #fff;
$normal-active-color: #409eff;
$primary-color: #409eff;
$primary-active-color: #66b1ff;
$info-color: #909399;
$info-active-color: #a6a9ad;
$success-color: #67c23a;
$success-active-color: #85ce61;
$warning-color: #e6a23c;
$warning-active-color: #ebb563;
$danger-color: #f56c6c;
$danger-active-color: #f78989;
.fl-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color:#606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline:none;
  margin:0;
  transition: 0.1s;
  font-weight: 500;
  // 禁止元素的文字被选中
  user-select: none;
  padding:12px 20px;
  font-size:14px;
  border-radius:4px;
  &:hover,
  &:focus{
    color:#409eff;
    border-color:#c6e2ff;
    background-color: #ecf5ff;
  }
}

.fl-button--primary {
  color: #fff;
  background-color: $primary-color;
  border-color: $primary-color;
  //   box-shadow: inset 3px 6px 10px #337ecc, inset -3px -7px 10px #4dbeff;
  &:hover,
  &:focus {
    background: $primary-active-color;
    background-color: $primary-active-color;
    color: #fff;
  }
}
.fl-button--success {
  color: #fff;
  background-color: $success-color;
  border-color: $success-color;
  &:hover,
  &:focus {
    background: $success-active-color;
    background-color: $success-active-color;
    color: #fff;
  }
}
.fl-button--info {
  color: #fff;
  background-color: $info-color;
  border-color: $info-color;
  &:hover,
  &:focus {
    background: $info-active-color;
    background-color: $info-active-color;
    color: #fff;
  }
}
.fl-button--warning {
  color: #fff;
  background-color: $warning-color;
  border-color: $warning-color;
  &:hover,
  &:focus {
    background: $warning-active-color;
    background-color: $warning-active-color;
    color: #fff;
  }
}
.fl-button--danger {
  color: #fff;
  background-color: $danger-color;
  border-color: $danger-color;
  &:hover,
  &:focus {
    background: $danger-active-color;
    background-color: $danger-active-color;
    color: #fff;
  }
}
</style>
