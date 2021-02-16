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
      path:'/addnote',//网站访问路径
      name:'addnote',//这个路由的名字叫Regiter
      component:()=>import("../components/addnote_c"),
    },
    {
      path:'/notemanage',//网站访问路径
      name:'notemanage',//这个路由的名字叫Regiter
      component:()=>import("../components/notemanage_c"),
    }
  ]
})
