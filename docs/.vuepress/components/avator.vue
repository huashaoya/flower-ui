<template>
    <div class="fl-avator"
    :style="{
      width: size+'px',
      height:size+'px',
      borderRadius: square?'20%':'50%',
      backgroundImage:src?'url('+src+')':'url(./avator.png)',
    }"
    ></div>
</template>

<script>
export default {
  name: 'FlAvator',
  props: {
    src: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '60'
    },
    square: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  .fl-avator{
    // background-color: rgb(0, 0, 0);
    // opacity: 0;
    display: inline-block;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>