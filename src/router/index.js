import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default  new Router({
  mode: 'history',
  routes:[
    {
      path:'/note',//网站访问路径
      name:'note',//这个路由的名字叫Regiter
      component:()=>import("../components/note"),
    },
    {
      path:'/login',//网站访问路径
      name:'login',//这个路由的名字叫Regiter
      component:()=>import("../components/login"),
    },
    {
      path:'/info',
      name:'info',
      component:()=>import("../components/info"),
    }
  ]
})
