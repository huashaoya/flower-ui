<template>
    <div class="fl-form-item">
        <label class="fl-form-item__label" >{{label}}</label>
        <div class="fl-form-item__conetent">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FlFormItem',
  props: {
    label: {
      type: String
    }
  }
}
</script>

<style lang='scss'>

</style>
