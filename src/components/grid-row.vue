<template>
    <div class="fl-row" :style="styleSheet">
      <slot :gutter="gutter"></slot>
    </div>
</template>

<script>
export default {
  name: 'fl-row',
  props: {
    gutter: {
      type: [],
      default: 0
      // 水平和垂直的栅格间隔
    }
  },
  data () {
    return {
    }
  },
  computed: {
    styleSheet () {
      return {
        marginLeft: -this.gutter[0] / 2 + 'px',
        marginRight: -this.gutter[0] / 2 + 'px',
        marginTop: -this.gutter[1] / 2 + 'px',
        marginBottom: -this.gutter[1] / 2 + 'px'
      }
    }
  },
  mounted () {
  },
  created () {
    this.$store.state.gutter = this.gutter
  }
}
</script>

<style lang="scss" scoped>
  .fl-row{
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
  }
</style>