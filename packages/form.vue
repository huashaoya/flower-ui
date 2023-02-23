<template>
    <div class="fl-form">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'FlForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      form: this
    }
  }
}
</script>

<style scss>

</style>
