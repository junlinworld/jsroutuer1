<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="toTest">加载路由test</button>
    <button @click="toHelloWorld">加载路由HelloWorld</button>
    <button @click="goBack">后退一步</button>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  methods:{
    toTest(){
      this.$router.replace({
        name:'test',
        params:{userId:999}
      });
    },
    toHelloWorld(){
      this.$router.replace({
        path:'/helloworld',
        query:{password:123}
      });
    },
    goBack(){
      this.$router.go(-1);
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
