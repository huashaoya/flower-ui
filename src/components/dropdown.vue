<template>
<div class="dropdownWrapper">
  <fl-button id="btn" type="primary" @click="handleClick" @mouseenter="handleHoverA" @mouseleave="handleHoverN">Dropdown
    <slot :menuHight="menuHight"></slot>
</fl-button>
</div>
</template>

<script>
export default {
  name: 'FlDropdown',
  data () {
    return {
      active: false,
      timeID: null,
      menuHight: ''
    }
  },
  props: {
    activeType: {
      type: String,
      default: 'hover'
    }
  },
  methods: {
    triggerClick () {
      let dropdownM = document.querySelector('.dropdownMenu')
      if (this.active === true) {
        dropdownM.classList.add('negative')
        this.active = !this.active
      } else {
        dropdownM.classList.remove('negative')
        this.active = !this.active
      }
    },
    handleClick () {
      if (this.activeType === 'click') {
        this.triggerClick()
      }
    },
    handleHoverA () {
      if (this.activeType === 'hover') {
        let dropdownM = document.querySelector('.dropdownMenu')
        if (this.timeID !== null) {
          return
        }
        this.timeID = setTimeout(() => {
          dropdownM.classList.remove('negative')
          this.timeID = null
        }, 150)
      }
    },
    handleHoverN () {
      if (this.activeType === 'hover') {
        let dropdownM = document.querySelector('.dropdownMenu')
        if (this.timeID !== null) {
          clearTimeout(this.timeID)
        }
        this.timeID = setTimeout(() => {
          dropdownM.classList.add('negative')
          this.timeID = null
        }, 300)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdownWrapper{
  position: relative;
  display: inline-block;
}
#btn{
  width: 100px;
  &::after{
    content: 'sry';
    color: transparent;
    position: absolute;
    bottom: -10px;
    left: 0;
    display: block;
    width: 150px;
  }
}
</style>