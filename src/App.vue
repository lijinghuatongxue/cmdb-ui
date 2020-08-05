<template>
  <div id="app">
<!--    <h1> I Love Golang  </h1>-->
    <h1> 首页 233 </h1>
    <router-link to="/">登陆 </router-link>
    <router-link to="/register">注册 </router-link>
    <router-link to="/nav">导航栏</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
