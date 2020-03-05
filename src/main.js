import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import App from './App.vue'
import store from './store'
// import env from './env'

//mock开关
const mock =true;
if(mock){
  require('./mock/api')//import 是预编译加载，require是从上到下执行的时候加载的
}

 
//发请求的时候设置一些基础值,根据前端的跨域方式做调整
//当为接口代理时，域名是一样的，习惯叫api,转发的时候也可以切掉,:为所有url请求前加了一个/api 
axios.defaults.baseURL='/api'; 
axios.defaults.timeout=8000;
//根据环境变量获取不同的请求地址
// axios.defaults.baseURL=env.baseURL;
// console.log(env.baseURL)

//注：请求拦截可用request.use

//拦截器(接口错误拦截)
axios.interceptors.response.use(function(response){
  let res=response.data;
  if(res.status==0){
    return res.data;
  }else if(res.status==10){//未登陆的状态码==10
    window.location.href='/#/login' //跳转到登录页面,#:哈希路由
  }else{
    // alert(res.msg);
  }
})


//注册
Vue.use(VueAxios,axios);//发请求的时候就可以用this来调用了
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
