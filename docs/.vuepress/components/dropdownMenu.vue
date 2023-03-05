<template>
<div class="dropdownMenu">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'FlDropdownMenu',
  props: ['active']
}
</script>

<style lang="scss" scoped>
.dropdownMenu{
  transition: all 1s;
  background-color: #fff;
  border: 1px solid rgb(235,238,245);
  border-radius: 6px;
  box-shadow: 2px 2px 3px rgba(224, 219, 219, 0.5);
  position: absolute;
  top: 45px;
  left: 5px;
  overflow: hidden;
  padding: 5px 0;
  color: rgb(109, 110, 112);
  z-index: 9;
  animation: aaa 1s;
  @keyframes aaa {
  0% {
    max-height: 0;
  }
  100% {
    max-height: 1000px;
  }
  }
}
</style>