<template>
<div class="dropdownWrapper">
  <fl-button v-if="splitButton" id="btn" type="primary" @click.stop="handleClick" @mouseenter="handleHoverA" @mouseleave="handleHoverN">Dropdown
    <transition name="fade">
    <div v-show="active"><slot></slot></div>
    </transition>
  </fl-button>
  <div v-if="!splitButton" class="text" @click="handleClick" @mouseenter="handleHoverA" @mouseleave="handleHoverN">Dropdown<span>></span>
    <transition name="fade">
    <div v-show="active"><slot></slot></div>
    </transition>
  </div>
</div>
</template>

<script>
export default {
  name: 'FlDropdown',
  data () {
    return {
      active: false,
      timeID: null
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
      if (this.active === true) {
        this.active = !this.active
      } else {
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
        if (this.timeID !== null) {
          return
        }
        this.timeID = setTimeout(() => {
          this.active = !this.active
          this.timeID = null
        }, 150)
      }
    },
    handleHoverN () {
      if (this.activeType === 'hover') {
        if (this.timeID !== null) {
          clearTimeout(this.timeID)
        }
        this.timeID = setTimeout(() => {
          this.isNegative = !this.isNegative
          this.active = !this.active
          this.timeID = null
        }, 300)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active {
  animation: fade .1s;
}
.fade-leave-active {
  animation: fade .2s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.dropdownWrapper{
  position: relative;
  display: inline-block;
}
#btn{
  position: relative;
  width: 100px;
  &::after{
    content: 'sry';
    color: transparent;
    position: absolute;
    bottom: -10px;
    left: 0;
    display: block;
    width: 100px;
  }
}
.text{
  position: relative;
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
    width: 100px;
}
  ::v-deep .dropdownMenu{
    top: 30px;
    // bottom: -30px;
  }
}
</style>