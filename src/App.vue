<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-text">welcome to my website.contanct me.<a href="mailto:zhusiyuanhao@163.com"> zhusiyuanhao@163.com</a></span>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
.logo {
  width: 50px;
  height: 50px;
}
body{
  background: #f5f4f5!important;
}
</style>
