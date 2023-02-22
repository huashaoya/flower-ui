<template>
    <div>
      <svg :width="size" :height="size" viewBox="0 0 100 100" v-show="type === 'circle'">
        <!-- 在svg区域内使用view截了一个100 100 的图 -->
        <circle r="50" cx="50" cy="50" class="progress_outer"></circle>
        <circle r="50" cx="50" cy="50" class="progress_inner" :stroke-dasharray="totalProgress" :stroke-dashoffset="currentProgress" :style="{'stroke': currentColor}"></circle>
         <text x="50" y="50" text-anchor="middle" dominant-baseline="middle" v-show="showPercentage">{{Math.trunc(percentage*100)}}%</text>
      </svg>
      <div class="progress_bar" :style="{ '--width':percentage * 100, '--backgroundColor': currentColor, '--radius':line_height / 2 + 'px','--height':line_height + 'px'}" v-show="type === 'line'">
      </div>
      <text v-show="lineShowPercentage">
        {{Math.trunc(percentage*100)}}%</text>
    </div>
</template>

<script>
export default {
  name: 'fl-progress',
  props: {
    size: {
      type: [Number, String],
      default: 0
    },
    percentage: {
      type: Number,
      default: 0
    },
    color: {
      type: [],
      default: 0
    },
    type: {
      type: String
    },
    line_height: {
      type: [String, Number],
      default: 20
    },
    showPercentage: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      totalProgress: Math.PI * 2 * 50,
      lineShowPercentage: this.type === 'line' && this.showPercentage
    }
  },
  computed: {
    currentProgress () {
      return this.totalProgress * (1 - this.percentage)
    },
    currentColor () {
      for (let index = 0; index < this.color.length; index++) {
        if (this.percentage <= this.color[index].percentage) {
          return this.color[index].color
        }
      }
      return 'rgb(248, 4, 4)'
    }
  }
}
</script>

<style lang="scss" scoped>
  .progress_outer{
    fill: transparent;
    stroke-width: 10px;
    stroke: rgba($color: rgb(223, 231, 230), $alpha: 0.5);
    transform-origin: center;
    transform: scale(0.9);
    transition: all 0.5s;
  }
  .progress_inner{
    fill: transparent;
    stroke-width: 10px;
    stroke-linecap: round;
    // stroke:rgb(248, 4, 4);
    transform-origin: center;
    transform: rotate(-90deg) scale(0.9);
    transition: all 0.5s;
  }
  .progress_bar{
    display: inline-block;
    position: relative;
    width: 500px;
    height: var(--height);
    background-color: rgba($color: rgb(223, 231, 230), $alpha: 0.5);
    border-radius: 2.5rem;
    color: aliceblue;
  }
  .progress_bar::before{
    position: absolute;
    top: 0em;
    bottom: 0em;
    left: 0em;
    width: calc(var(--width, 0)*1%);
    min-width: 0rem;
    max-width: calc(100%);
    content: ' ';
    // background-color: rgb(45, 126, 197);
    background-color: var(--backgroundColor);
    border-radius: var(--radius);
    transition: all 0.5s;
  }
</style>