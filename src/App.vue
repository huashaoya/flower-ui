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
    </div>
  </div>
</template>

<script>
export default {
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
</style>
