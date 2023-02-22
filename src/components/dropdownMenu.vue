<template>
<div class="dropdownMenu negative">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'FlDropdownMenu',
  data () {
    return {
      hight: '',
      x: '180px'
    }
  },
  props: {
    menuHight: {
      type: Number
    }
  },
  methods: {
    fn () {
      this.hight = this.menuHight + 'px'
    }
  },
  mounted () {
    this.fn()
  },
  updated () {
    this.fn()
  }
}
</script>

<style lang="scss" scoped>
.dropdownMenu{
    border: 1px solid rgb(235,238,245);
    border-radius: 6px;
    box-shadow: 2px 2px 3px rgba(224, 219, 219, 0.5);
    position: absolute;
    top: 45px;
    left: 5px;
    overflow: hidden;
    padding: 5px 0;
    height: v-bind(hight);
    transition: all .3s;
    color: rgb(119,121,124);
}
.negative{
    height: 0px;
    padding: 0;
    border: 0;
    opacity: 0;
}
</style>