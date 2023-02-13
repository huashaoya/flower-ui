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
    }
  }
}
</script>

<style scss>

</style>
