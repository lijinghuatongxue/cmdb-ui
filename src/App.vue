<template>
  <div id="app">
    <h1> I Love Golang  </h1>
<!--    <h1> 首页  </h1>-->
    <router-link to="/login">登陆    </router-link>
    <router-link to="/register">注册  </router-link>
    <router-link to="/progess"> 进度条  </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Progess from "@/components/Progess";
export default {
  name: 'App',
  comments:{
    Progess,
  }
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
