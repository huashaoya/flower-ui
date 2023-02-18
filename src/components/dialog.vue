<template>
<transition name="dialog-fade">
  <div class="fl-dialog_wrapper" v-show="visible" @click.self="handleClose">
    <div class="fl-dialog" :style="{width, marginTop: top}">
      <div class="fl-dialog_header">
        <slot name="title">
            <span class="fl-dialog_title">{{title}}</span>
        </slot>
        <button class="fl-dialog_headerbtn" @click="handleClose">x</button>
      </div>
      <div class="fl-dialog_body">
        <slot>
            <span>这一段信息</span>
        </slot>
      </div>
      <div class="fl-dialog_footer" v-if="$slots.footer">
        <slot name="footer">
         <fl-button plain>取消</fl-button>
         <fl-button type="primary">确定</fl-button>
        </slot>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'FlDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30vw'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('close', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.fl-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);

  .fl-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30vw;

    &_header {
      padding: 20px 20px 10px;
      .fl-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: gray;
      }
      .fl-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
      }
    }
    &_body {
      padding: 30px 20px;
      color: grey;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .fl-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade .3s;
}

.dialog-fade-leave-active {
  animation: fade .3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform:  translateY(-20px);
  }
  100% {
    opacity: 1;
    transform:  translateY(0px);
  }
}
</style>