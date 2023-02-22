<template>
<div class="dropdownItem" @click="alertItem">
    <slot></slot>
</div>
</template>

<script>
export default {
  name: 'FlDropdownItem',
  props: {
    command: {
      type: String
    }
  },
  methods: {
    alertItem () {
      if (this.command) {
        alert(this.command)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdownItem{
    box-sizing: border-box;
    // width: 115px;
    padding: 0 40px;
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
  border-top: 1px solid black;
}
</style>