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
      console.log(this.menuHight)
      console.log('$$$$$$$$', this.hight)
      this.hight = this.menuHight + 'px'
      console.log('************', this.hight)
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
    left: 0px;
    overflow: hidden;
    height: v-bind(hight);
    transition: all .4s;
}
.negative{
    height: 0px;
    opacity: 0;
}
</style>