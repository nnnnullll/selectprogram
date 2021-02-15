// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from  './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

axios.defaults.baseURL="http://localhost:8010/"
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

//http request 请求拦截器

axios.interceptors.request.use(config => {
  if(store.state.token){
    config.headers.Authorization = `token ${store.state.token}`;
    console.log("token----->"+localStorage.getItem('token'))
  }
  // console.log("config:")
  // console.log(config)
  // if(config.headers['Content-Type'] !='application/json'){
  //   config.data = qs.stringify(config.data);
  // }
  //config.data=qs.stringify(config.data);//防止post请求参数无法传到后台

  // if(config.method=='post'){
  //   config.data=qs.stringify(config.data);//防止post请求参数无法传到后台
  // }

  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// http response 响应拦截器
axios.interceptors.response.use(response => {
  return response;
},error => {
  if (error.response) {
    switch (error.response.status) {
        // 返回401，清除token信息并跳转到登录页面
      case 401:
        localStorage.removeItem('token');
        router.replace({
          path: '/login'
          //登录成功后跳入浏览的当前页面
          // query: {redirect: router.currentRoute.fullPath}
        })
    }
    // 返回接口返回的错误信息
    return Promise.reject(error.response.data);
  }
});

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    let token = localStorage.getItem('token');
    if (token === null || token === '') {
      next('/login');
    }
    else {
      console.log(token)
      next();
    }
  }
  else {
    next();
  }
});