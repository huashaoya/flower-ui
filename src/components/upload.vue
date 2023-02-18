<template>
    <div class="fl-upload">
      <div v-show="btnShow">
        <div class="showFiles">
          <li v-for="(item, index) in fileList" :key="index">
            <span>{{item.name}}</span>
            <span @click="deleteFile(index)">删除</span>
          </li>
        </div>
        <input class="input" type="file" ref="choose" @change="fileChange" :multiple="multiple">
        <fl-button @click="handleClick" :type="type">{{label}}</fl-button>
      </div>
        <div class="dragArea" ref="drag" :class="{isDragIn:isActive}" @click="handleClick" v-show="dragShow">
          <span v-show="!isActive">拖拽或点击上传文件</span>
          <span v-show="isActive">松开即可</span>
        </div>
    </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import FlButton from './button.vue'
// import func from 'vue-editor-bridge'
export default {
  name: 'FlUpload',
  components: {
    FlButton
  },
  props: {
    multiple: Boolean,
    type: {
      type: String,
      default: 'parmary'
    },
    label: {
      type: String,
      default: '选择文件'
    },
    showImage: {
      type: Boolean,
      default: false
    },
    btnShow: {
      type: Boolean,
      default: true
    },
    dragShow: {
      type: Boolean,
      default: true
    }
  },
  setup (props, content) {
    const choose = ref(null)
    const fileList = reactive([])
    const drag = ref(null)
    let isActive = ref(null)

    function handleClick () {
      choose.value.click()
    }
    function fileChange (e) {
      fileList.unshift(...e.target.files)
      content.emit('change', fileList)
    }
    function deleteFile (index) {
      fileList.splice(index, 1)
    }
    function setStyle (boo, color) {
      isActive.value = boo
      drag.value.style.color = color
    }

    onMounted(() => {
      drag.value.addEventListener('drop', (e) => {
        e.stopPropagation()
        e.preventDefault()
        fileList.unshift(...e.dataTransfer.files)
        content.emit('change', fileList)
        setStyle(false, null)
      }, false)
      drag.value.addEventListener('dragenter', (e) => {
        e.stopPropagation()
        e.preventDefault()
        // isActive.value = true
        // drag.value.style.color = 'rgb(86, 168, 235)'
        setStyle(true, 'rgb(86, 168, 235)')
      })
      drag.value.addEventListener('dragleave', (e) => {
        e.stopPropagation()
        e.preventDefault()
        setStyle(true, 'rgb(86, 168, 235)')
      })
      drag.value.addEventListener('dragover', (e) => {
        e.stopPropagation()
        e.preventDefault()
        setStyle(true, 'rgb(86, 168, 235)')
      })
    })
    return {
      handleClick,
      fileChange,
      choose,
      fileList,
      deleteFile,
      drag,
      isActive,
      setStyle
    }
  }
}
</script>

<style lang="scss">
.fl-upload{
  // display: inline-block;
  width: 500px;
  margin: 20px 0;
  .input{
    display: none;
  }
  .showFiles{
    li{
      line-height: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .dragArea{
    width: 200px;
    height: 200px;
    border: 2px dashed #000;
    margin: 20px 0;
    // transition: all .3s;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
      border: 2px dashed rgb(86, 168, 235);
      color: rgb(86, 168, 235);
    }
    span{
      font-size: 30%;
    }
  }
}
.isDragIn{
  border: 2px dashed rgb(86, 168, 235) !important;
  span{
  }
}
</style>
