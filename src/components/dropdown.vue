<template>
<div class="dropdownWrapper">
  <fl-button v-if="splitButton" id="btn" type="primary" @click="handleClick" @mouseenter="handleHoverA" @mouseleave="handleHoverN">Dropdown
    <slot :menuHight="menuHight"></slot>
  </fl-button>
  <div v-if="!splitButton" class="text" @click="handleClick" @mouseenter="handleHoverA" @mouseleave="handleHoverN">Dropdown<span>></span>
    <slot :menuHight="menuHight"></slot>
  </div>
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
    },
    splitButton: {
      type: Boolean,
      default: false
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
.text{
  display: inline-block;
  cursor: pointer;
  color: #409eff;
  text-align: center;
  font-weight: 500;
  user-select: none;
  padding:0px 20px;
  white-space: nowrap;
  font-size:14px;
  span{
    display: inline-block;
    transform: rotate(90deg);
    margin-left: 3px;
  }
  &::after{
    content: 'sry';
    color: transparent;
    position: absolute;
    bottom: -10px;
    left: 0;
    display: block;
    width: 150px;
}
  ::v-deep .dropdownMenu{
    top: 30px;
    // bottom: -30px;
  }
}
</style>