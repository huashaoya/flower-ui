<template>
<div class="dropdownWrapper">
  <fl-button id="btn" type="primary" @click="handleClick" @mouseenter="handleHoverA" @mouseleave="handleHoverN">Dropdown</fl-button>
    <slot :menuHight="menuHight"></slot>
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
        }, 200)
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
        }, 150)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdownWrapper{
  // border: 3px solid palevioletred;
  position: relative;
  // width: 250px;
  // height: 80px;
  transition: all .2s;
}
#btn{
  width: 100px;
}
</style>