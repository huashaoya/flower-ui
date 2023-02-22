<template>
  <div id="app">
    hello flowerUI
    <div>button:</div>
    <div class="row">
      <fl-button >默认</fl-button>
      <fl-button type="primary">提交</fl-button>
      <fl-button type="success">成功</fl-button>
      <fl-button type="info">信息</fl-button>
      <fl-button type="warning">警告</fl-button>
      <fl-button type="danger">危险</fl-button>
    </div>
    <div class="row">
      <fl-button plain>默认</fl-button>
      <fl-button plain type="primary" icon="address_book_line">提交</fl-button>
      <fl-button plain type="success">成功</fl-button>
      <fl-button plain type="info">信息</fl-button>
      <fl-button plain type="warning">警告</fl-button>
      <fl-button plain type="danger">危险</fl-button>
    </div>
    <div class="row">
      <fl-button round>默认</fl-button>
      <fl-button round type="primary">提交</fl-button>
      <fl-button round type="success">成功</fl-button>
      <fl-button round type="info">信息</fl-button>
      <fl-button round type="warning">警告</fl-button>
      <fl-button round type="danger">危险</fl-button>
    </div>
    <div class="row">
      <fl-button round disabled >默认</fl-button>
      <fl-button round disabled type="primary">提交</fl-button>
      <fl-button round disabled type="success">成功</fl-button>
      <fl-button round disabled type="info">信息</fl-button>
      <fl-button round disabled type="warning">警告</fl-button>
      <fl-button round disabled type="danger">危险</fl-button>
    </div>
    <div class="row">
      <fl-button circle>默</fl-button>
      <fl-button circle type="primary">提</fl-button>
      <fl-button circle type="success">成</fl-button>
      <fl-button circle type="info">信</fl-button>
      <fl-button circle type="warning">警</fl-button>
      <fl-button circle type="danger">危</fl-button>
    </div>
    <div class="row">
      <fl-button plain icon="about_line"></fl-button>
      <fl-button plain icon="about_line" type="primary"></fl-button>
      <fl-button plain icon="about_line" type="success"></fl-button>
      <fl-button plain icon="about_line" type="info"></fl-button>
      <fl-button plain icon="about_line" type="warning"></fl-button>
      <fl-button plain icon="about_line" type="danger"></fl-button>
    </div>
    <div class="row">
      <fl-button round type="primary" @click="buttonClick">点击事件</fl-button>
      <fl-button round type="primary" @click="buttonClick" disabled>点击事件</fl-button>
    </div>
    icon:
    <div class="row">
      <fl-icon icon="address_book_line" :size="100"></fl-icon>
      <fl-icon icon="address_book_line" :size="80" color="red"></fl-icon>
      <fl-icon icon="address_book_line" :size="60" color="green"></fl-icon>
      <fl-icon icon="address_book_line" :size="40" color="yellow"></fl-icon>
      <fl-icon icon="address_book_line" :size="20" color="#1234ff"></fl-icon>
    </div>
    下拉选择：
    <fl-select></fl-select>
    <div>input:</div>
    <div class="row">
    禁用框:
     <fl-input placeholder="请输入用户名" type="password" name="username" disabled></fl-input>
    </div>
    <div class="row">
    密码框:
    <fl-input placeholder="请输入密码" type="password"></fl-input>
    </div>
    <div class="row">
    输入绑定:
    <fl-input placeholder="请输入用户名" v-model="model.username"></fl-input>
    </div>
    <div>radio:</div>
    <fl-radio>radio</fl-radio>
    <div>radioGroup:</div>
    <fl-radio-group v-model="model.gender">
      <fl-radio label="0">1</fl-radio>
      <fl-radio label="1">2</fl-radio>
      <fl-radio label="2">3</fl-radio>
    </fl-radio-group>
    <div>checkbox:</div>
    <fl-checkbox v-model="model.checkbox">checkMe</fl-checkbox>
    <div>checkbox-group</div>
    <fl-checkbox-group v-model="model.checkboxGroup">
      <fl-checkbox label="html"></fl-checkbox>
      <fl-checkbox label="css"></fl-checkbox>
      <fl-checkbox label="javaScript"></fl-checkbox>
    </fl-checkbox-group>
    <div> form:</div>
    <fl-form :model="model" label-width="60px">
      <fl-form-item label="用户名:">
        <fl-input placeholder="请输入用户名" v-model="model.username"></fl-input>
      </fl-form-item>
      <fl-form-item label="性别:">
        <fl-radio label="0" v-model="model.gender">男</fl-radio>
        <fl-radio label="1" v-model="model.gender">女</fl-radio>
      </fl-form-item>
    </fl-form>
    {{ model }}
    <br>
    <br>
   <div id="modal">
    <fl-button type="primary" @click="modalVisible=true">点击打开 Modal</fl-button>
    <fl-modal :modalVisible="modalVisible" @closeModal="closeModal">
      <template #footer>
        <fl-button plain @click="modalVisible=false">取消</fl-button>
        <fl-button type="primary" @click="modalVisible=false">确定</fl-button>
      </template>
    </fl-modal>
   </div>
    <br>
   <div id="dropdown">
    <fl-dropdown>
      <fl-dropdownMenu :menuHight="menuHight">
        <fl-dropdownItem command="jayZhou">兰亭序</fl-dropdownItem>
        <fl-dropdownItem>无关风月</fl-dropdownItem>
        <fl-dropdownItem disabled>我题序</fl-dropdownItem>
        <fl-dropdownItem>等你回</fl-dropdownItem>
        <fl-dropdownItem>情字何解</fl-dropdownItem>
        <fl-dropdownItem divided>怎落笔不对</fl-dropdownItem>
      </fl-dropdownMenu>
    </fl-dropdown>
   </div>
    <br>
    <fl-switch v-model="active" activeColor="red" inActiveColor="black"></fl-switch>
    <br>
    <fl-switch v-model="active" activeText="已激活" inActiveText="未激活"></fl-switch>
    <div class="row">
      <fl-upload @change="change" :multiple="multiple" :btnShow="btnShow" :round="true" :dragShow="dragShow"></fl-upload>
      <fl-upload type="success" label="上传图片" :drag="true"></fl-upload>
      <fl-upload type="danger" :showImage="true"></fl-upload>
    </div>

    <!-- ***********grid********** -->
    <br>
     <fl-row :gutter="[ 8, 8 ]">
      <fl-col span="12" offset="0" class="item">1</fl-col>
      <!-- <fl-col span="6" offset="0"></fl-col> -->
      <fl-col span="6" offset="0" class="item">2</fl-col>
      <fl-col span="6" offset="0" class="item">3</fl-col>
      <fl-col span="6" offset="0" class="item">4</fl-col>
      <fl-col span="6" offset="0" class="item">5</fl-col>
      <fl-col span="12" offset="0" class="item">6</fl-col>
      <!-- <fl-col span="6" offset="0"></fl-col> -->
     </fl-row>
    <br>
    <!-- ***********grid********** -->
    <!-- ***********progress********** -->
    <br>
    <fl-progress :percentage="percentage" :color="customColors" type="line" line_height="10"></fl-progress>
    <br>
    <fl-progress :percentage="percentage" :color="customColor" type="line" line_height="10" :showPercentage="false"></fl-progress>
    <br>
    <fl-button @click="lowerProgress">➖</fl-button>
    <fl-button @click="addProgress">➕</fl-button>
    <br>
    <fl-progress size="200" :percentage="percentage" :color="customColors" type="circle"></fl-progress>
    <br>
    <fl-progress size="200" :percentage="percentage" :color="customColor" type="circle" :showPercentage="false"></fl-progress>
    <!-- ***********progress********** -->
  </div>
  <div>avator:</div>
  <fl-avator></fl-avator>
  <fl-avator size="100"></fl-avator>
  <fl-avator size="100" square src="favicon.ico"></fl-avator>
</template>

<script>
export default {
  data () {
    return {
      model: {
        username: '',
        gender: 0,
        checkbox: false,
        checkboxGroup: []
      },
      modalVisible: false,
      active: false,
      multiple: false,
      btnShow: true,
      dragShow: false,
      percentage: 0,
      customColors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ],
      customColor: '#f56c6c',
      menuHight: 111
    }
  },
  methods: {
    buttonClick (e) {
      alert('点击事件')
    },
    closeModal (value) {
      this.modalVisible = value
    },
    change (e) {
      console.log(e)
    },
    lowerProgress () {
      this.percentage -= 10
      if (this.percentage < 0) {
        this.percentage = 0
      }
    },
    addProgress () {
      this.percentage += 10
      if (this.percentage > 100) {
        this.percentage = 100
      }
    },
    handleLength () {
      let dropdownM = document.querySelector('.dropdownMenu')
      let menuHight = (dropdownM.children.length) * 40
      this.menuHight = menuHight
    }
  },
  mounted () {
    this.handleLength()
  }
}

</script>

<style lang="scss">
.row{
  margin-bottom: 10px;
  .fl-button{
    margin-right: 10px;
  }
}
#app{
.fl-input{
  width: 200px;
}
#dropdown{
  height: 400px;
}
}
.item{
  height: 100px;
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>
