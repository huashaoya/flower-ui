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
    <div> form:</div>
    <fl-form :model="model" label-width="60px">
      <fl-form-item label="用户名:">
        <fl-input placeholder="请输入用户名" v-model="model.username"></fl-input>
      </fl-form-item>
      <fl-form-item label="性别:">
        <fl-input placeholder="请输入性别" v-model="model.sex"></fl-input>
      </fl-form-item>
    </fl-form>
    {{ model }}

    <br>
    <fl-switch v-model="model.active" activeColor="red" inActiveColor="black"></fl-switch>
    <fl-upload></fl-upload>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {
        username: '',
        sex: '',
        active: false
      }
    }
  },
  methods: {
    buttonClick (e) {
      alert('点击事件')
    }
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
}
</style>
