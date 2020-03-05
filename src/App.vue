<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
// import jsonp from 'jsonp';
export default {
  name:'app',
  data(){
  return{
    res:{},
    data:[]
  }
  },
  mounted(){
    // let url="/api/search/hotwords";
    // jsonp(url,(err,res)=>{
    //   let result=res;
    //   this.data=result
    // })
    this.axios.get('/search/hotwords').then((res)=>{
      console.log(res)
    })
    // 本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res=res;
    // })
    //本地集成mockjs实现数据mock
    this.axios.get('/user/login').then((res)=>{
      this.res=res;
      console.log(this.res)
    })
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
