<template>
  <div class="fl-input">
    <input class="fl-input_inner" placeholder="请输入用户名" type="type" name="name"/>
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
    }
  }
}
</script>

<style lang="scss">
.fl-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .fl-input_inner {
    -webkit-appearance: none;
    background-color: #8dc3fc;
    background-image: none;
    border-radius: 4px;
    border: 1px solid rgb(79, 104, 203);
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
  }
}
</style>
