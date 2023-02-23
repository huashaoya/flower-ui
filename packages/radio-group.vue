<template>
    <div class="fl-radio-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'FlRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    modelValue: null
  }
}
</script>

<style lang="scss">

</style>