<template>
<div class="dropdownItem" @click="alertItem" :class="{divided: isDivided,disabled: isDisabled}">
    <slot></slot>
</div>
</template>

<script>
export default {
  name: 'FlDropdownItem',
  data () {
    return {
      isDivided: false,
      isDisabled: false
    }
  },
  props: {
    command: {
      type: String
    },
    divided: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    }
  },
  methods: {
    alertItem () {
      if (this.command) {
        alert(this.command)
      }
    },
    handleDivided () {
      if (this.divided) {
        this.isDivided = true
      }
    },
    handleDisabled () {
      if (this.disabled) {
        this.isDisabled = true
      }
    }
  },
  mounted () {
    this.handleDisabled()
    this.handleDivided()
  }
}
</script>

<style lang="scss" scoped>
.dropdownItem{
    box-sizing: border-box;
    padding: 0 20px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    &:hover{
      background-color: rgb(236,245,255);
      color: rgb(102,177,255);
    }
}
.divided{
  border-top: 1.5px solid rgba(192, 192, 192, 0.719);
}
.disabled{
    color: rgba(127, 128, 131, 0.507);
    &:hover{
      background-color: #fff;
      color: rgba(127, 128, 131, 0.507);
      cursor: not-allowed;
    }
}
</style>