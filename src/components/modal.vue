<template>
<transition name="modal-fade">
  <div class="fl-modal_wrapper" v-show="modalVisible" @click.self="handleCloseWrapper">
    <div class="fl-modal" :style="{width, marginTop: top}">
      <div class="fl-modal_header">
        <slot name="title">
            <span class="fl-modal_title">{{title}}</span>
        </slot>
        <button class="fl-modal_headerbtn" @click="handleClose">x</button>
      </div>
      <div class="fl-modal_body">
        <slot>
            <span>这是一段信息</span>
        </slot>
      </div>
      <div class="fl-modal_footer" v-if="$slots.footer">
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
  name: 'FlModal',
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
    modalVisible: {
      type: Boolean,
      default: false
    },
    closeWrapper: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('closeModal', false)
    },
    handleCloseWrapper () {
      if (this.closeWrapper === false) {
        const content = document.querySelector('.fl-modal')
        content.classList.add('shakeClass')
        setTimeout(() => {
          content.classList.remove('shakeClass')
        }, 400)
        console.log(this)
      } else {
        this.$emit('closeModal', false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fl-modal_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);

  .fl-modal {
    position: relative;
    margin: 15vh auto 50px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30vw;

    &_header {
      padding: 20px 20px 10px;
      .fl-modal_title {
        line-height: 24px;
        font-size: 18px;
        color: gray;
      }
      .fl-modal_headerbtn {
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
.modal-fade-enter-active {
  animation: fade .3s;
}
.modal-fade-leave-active {
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
.shakeClass{
  animation: shake .3s infinite;
}
@keyframes shake {
  0% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>