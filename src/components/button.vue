<template>
    <button class="fl-button">
      <span><slot></slot></span>
    </button>
</template>

<script>
export default {
  name: 'FlButton'
}
</script>

<style lang="scss" scoped>
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
</style>
