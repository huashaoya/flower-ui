<template>
    <div class="fl-upload">
      <div v-show="btnShow">
        <div class="showFiles" v-show="showImage" style="cursor:pointer;">
          <li v-for="(item, index) in fileList" :key="index">
            <span>{{item.name}}</span>
            <span @click="deleteFile(index)" style="cursor:pointer;">删除</span>
          </li>
        </div>
        <input class="input" type="file" ref="choose" @change="fileChange" :multiple="multiple">
        <fl-button @click="handleClick" :type="type" :plain="plain" :round="round" :circle="circle" :disabled="disabled" :icon="icon">{{label}}</fl-button>
      </div>
      <div class="drag" v-show="dragShow">
        <ul v-for="(item, index) in imgArr" :key="index" class="imgArr">
          <img :src="item" alt="" class="img">
          <span @click="deleteFile(index)" style="cursor:pointer;" class="delete2">删除</span>
        </ul>
        <div class="dragArea" ref="drag" :class="{isDragIn:isActive}" @click="handleClick" >
          <span v-show="!isActive">拖拽或点击上传文件</span>
          <span v-show="isActive">松开即可</span>
        </div>
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
      // 按钮的样式
    },
    label: {
      type: String,
      default: '选择文件'
      // 设置按钮内文字样式
    },
    showImage: {
      type: Boolean,
      default: false
      // 是否将上传的文件显示出来
    },
    btnShow: {
      type: Boolean,
      default: true
      // 是否显示按钮上传
    },
    dragShow: {
      type: Boolean,
      default: false
      // 是否显示拖拽上传区域
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'none'
    }
  },
  setup (props, content) {
    const choose = ref(null)
    const fileList = reactive([])
    const drag = ref(null)
    let isActive = ref(null)
    let src = ref()
    let imgArr = ref([])

    function handleClick () {
      choose.value.click()
    }
    function fileChange (e) {
      fileList.unshift(...e.target.files)
      content.emit('change', fileList)
      src.value = window.URL.createObjectURL(e.target.files[0])
      // 图片信息转为临时预览路径
      imgArr.value.push(src.value)
    }
    function deleteFile (index) {
      fileList.splice(index, 1)
      imgArr.value.splice(index, 1)
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
        setStyle(false, null)
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
      setStyle,
      src,
      imgArr
    }
  }
}
</script>

<style lang="scss">
.fl-upload{
  // display: inline-block;
  // width: 600px;
  margin: 20px 0;
  .input{
    display: none;
  }
  .showFiles{
    li{
    transition: all 2s;
      line-height: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .drag{
    width: 800px;
    padding: 20px;
    box-shadow: 1px 1px 2px 2px rgb(219, 214, 214);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .imgArr{
      margin: 0;
      padding: 0;
      width: 200px;
      margin-right: 5px;
      display: flex;
      flex-wrap: wrap;
      justify-content: end;
      align-items: flex-end;
      height: 200px;
      img{
        width: 200px ;
        max-height: 200px;
        animation: img 3s 1;
        @keyframes img {
          0%{opacity: 0;}
          100%{opacity: 1;}
        }
      }
      span{
        font-weight: bold;
      }
      span:hover{
        color: rgb(221, 89, 80);
        transition: all .2s;
      }
    }
    .dragArea{
      width: 200px;
      height: 200px;
      border: 1px dashed #000;
      margin: 20px 0;
      cursor: pointer;
      // transition: all .3s;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      border-radius: 5px;
      &:hover{
        border: 1px dashed rgb(86, 168, 235);
        color: rgb(86, 168, 235);
      }
      span{
        font-size: 30%;
      }
    }
  }
}
.isDragIn{
  border: 2px dashed rgb(86, 168, 235) !important;
}
</style>
