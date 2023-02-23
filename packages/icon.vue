<template>
    <span  class="fl-icon" :class="['icon-'+icon]"
    :style="
    `font-size:${size}px;
    color:${color};
    `"
    ></span>
</template>
<script>
export default {
  name: 'FlIcon',
  props: {
    icon: {
      type: String,
      default: 'none'
    },
    size: {
      type: Number,
      default: -1
    },
    color: {
      type: String,
      default: 'skyblue'
    }
  }
}
</script>
<sytle>

</sytle>
