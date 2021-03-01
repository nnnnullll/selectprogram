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
      path:'/notet',//网站访问路径
      name:'notet',//这个路由的名字叫Regiter
      component:()=>import("../components/note_t"),
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
    },
    {
      path:'/ktdetail',//网站访问路径
      name:'ktdetail',//这个路由的名字叫Regiter
      component:()=>import("../components/ktdetail_s"),
    },
    {
      path:'/addkt',//网站访问路径
      name:'addkt',//这个路由的名字叫Regiter
      component:()=>import("../components/addkt_t"),
    },
    {
      path:'/teacher_detail',
      name:'teacher_detail',
      component:()=>import("../components/teacher_detail"),
    },
    {
      path:'/student_detail',
      name:'student_detail',
      component:()=>import("../components/student_detail"),
    },
    {
      path:'/info',
      name:'info',
      component:()=>import("../components/info"),
    },
    {
      path:'/teacherinfo',
      name:'teacherinfo',
      component:()=>import("../components/teacherinfo"),
    },
    {
      path:'/deletekt',
      name:'deletekt',
      component:()=>import("../components/managekt_t"),
    },
    {
      path:'/resetkt',
      name:'resetkt',
      component:()=>import("../components/resetkt_t"),
    },
    {
      path:'/time',
      name:'time',
      component:()=>import("../components/time_c"),
    },
    {
      path:'/redfine',
      name:'redfine',
      component:()=>import("../components/redfine"),
    },
    {
      path:'/progregister',
      name:'progregister',
      component:()=>import("../components/progregister"),
    },
    {
      path:'/baominqk',
      name:'baominqk',
      component:()=>import("../components/baominqk"),
    },
    {
      path:'/fenpei',
      name:'fenpei',
      component:()=>import("../components/fenpei"),
    },
    {
      path:'/shenhe',
      name:'shenhe',
      component:()=>import("../components/shenhe"),
    },

  ]
})
