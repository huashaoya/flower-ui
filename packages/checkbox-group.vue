<template>
    <div class="fl-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'FlCheckboxGroup',
  props: {
    modelValue: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style lang="scss">

</style>