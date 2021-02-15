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
      path:'/info',//网站访问路径
      name:'info',//这个路由的名字叫Regiter
      component:()=>import("../components/info"),
    },
    {
      path:'/progregister',//网站访问路径
      name:'progregister',//这个路由的名字叫Regiter
      component:()=>import("../components/progregister"),
    }

  ]
})
