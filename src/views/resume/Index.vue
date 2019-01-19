<template>
  <div class="p-4 resume-wrapper">
    <base-info></base-info>
    <skills></skills>
    <project-info></project-info>
    <self-say></self-say>
    <div class="contact">
      <h5>联系我</h5>
      <div>Github:<a href="https://github.com/zhuzhuppx" target="_blank">https://github.com/zhuzhuppx</a></div>
      <div>邮箱：zhusiyuanhao@163.com</div>
    </div>
  </div>
</template>
<script>
import mix from './sub/index.js'
export default {
    mixins: [mix]
}
</script>
<style lang="less" scoped>
.resume-wrapper {
  width: 900px;
  margin: 8px auto;
  background: #fff;
  color:#333;
}
</style>
<style lang="less">
body {
  background-image: url("~@/assets/bg.jpeg") !important;
  background-repeat: no-repeat !important;
  background-size: 100% 100% !important;
}
</style>
