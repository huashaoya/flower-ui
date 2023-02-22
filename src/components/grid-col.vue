<template slot-scope="gutter">
    <div class="fl-col" :class="[`col-${span}`,offset&&`offset-${offset}`]" ref="col" :style="styleSheet">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'fl-col',
  data () {
    return {
      gutter: []
    }
  },
  props: {
    span: {
      type: [String, Number]
      // 栅格占位格数，为 0 时相当于 display: none
    },
    offset: {
      type: [String, Number]
      // 栅格左侧的间隔格数，间隔内不可以有栅格
    }
  },
  computed: {
    styleSheet () {
      return {
        paddingLeft: this.gutter[0] / 2 + 'px',
        paddingRight: this.gutter[0] / 2 + 'px',
        marginTop: this.gutter[1] / 2 + 'px',
        marginBottom: this.gutter[1] / 2 + 'px'
      }
    }
  },
  mounted () {
    this.gutter = this.$store.state.gutter
  }
}
</script>

<style lang="scss" scoped>
  $bg-color: #FFFFCC;
  $border-color:#99CCCC;
  .fl-col{
    width: 50%;
    // background-color: #000;
    background-clip:content-box;
    box-sizing: border-box;
    $class-prefix: col-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n} {
        width: calc($n / 24)*100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n} {
        margin-left: calc($n / 24)*100%;
      }
    }
  }
</style>