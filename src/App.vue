<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link :to="{ path:'/' }">
            <img class="logo" alt="Brand" src="./assets/logo.png">
          </router-link>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"></div>
      </div>
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
</style>
