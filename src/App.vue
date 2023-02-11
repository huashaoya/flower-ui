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
  </div>
</template>

<style lang="scss">
.row{
  margin-bottom: 10px;
  .fl-button{
    margin-right: 10px;
  }
}
</style>
