<template>
    <div class="fl-upload">
        <input class="input" type="file" ref="chooseFlie" @change="fileChange">
        <fl-button @click="handleClick"></fl-button>
    </div>
</template>

<script>
import { ref } from 'vue'
import FlButton from './button.vue'
export default {
  name: 'FlUpload',
  components: {
    FlButton
  }
}
</script>

<script setup>
const chooseFlie = ref()
function handleClick () {
  chooseFlie.value.click()
}
function fileChange () {
  console.log(1)
}
</script>

<style lang="scss">
.fl-upload{
  .input{
    display: none;
  }
}
</style>
