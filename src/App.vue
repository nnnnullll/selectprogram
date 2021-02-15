<template>
  <div id="app">
    <!--  <keep-alive> 帮助获取路由跳转监听 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
const axios=require('axios');
export default {
  name:'App',
  mounted(){
            // // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
            // window.onbeforeunload = function (e) {
            //     var storage = window.localStorage;
            //     storage.clear()
            // }
        }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 1440px;
}
html,body{
  width: 100%;
  height: 100%;
  margin: 0;
}

</style>
