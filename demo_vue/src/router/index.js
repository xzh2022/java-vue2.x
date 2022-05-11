import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import User from '../views/sys/User.vue'
import Role from '../views/sys/Role.vue'
import Menu from '../views/sys/Menu.vue'
import Dict from '../views/sys/Dict.vue'

import axios from "../axios";
import store from "../store";
// import * as path from "path";

Vue.use(VueRouter)

const routes = [
  {
    //预先加载形式
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        //预先加载形式
        path: '/index',
        name: 'Index',
        meta: {
          title: '首页'
        },
        component: Index
      },
      {
        path: '/userCenter',
        name: 'UserCenter',
        meta: {
          title: '个人中心'
        },
        component: () => import('../views/UserCenter.vue')
      },
    ]
  },

  {
    //懒加载形式
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  let hasRoute = store.state.menus.hasRoutes

  let token = localStorage.getItem("token")

  if(to.path == '/login') {

    next()

  }else if(!token) {

    next({path:'/login'})

  }else if(token && !hasRoute){

    axios.get("/sys/menu/nav", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(res => {

      // console.log(res.data.data)

      //拿到 menuList
      store.commit("setMenuList", res.data.data.nav)

      //拿到 用户权限
      store.commit("setPermList", res.data.data.authorities)

      // 动态绑定路由
      let newRoutes = router.options.routes

      res.data.data.nav.forEach(menu => {
        if(menu.children){
          menu.children.forEach(e => {

            //转化成路由
            let route = menuToRoute(e)

            //将路由添加到路由管理中
            if(route){
              newRoutes[0].children.push(route)
            }


          })
        }
      })
      router.addRoutes(newRoutes)

      hasRoute = true
      store.commit("changeRouteStatus", hasRoute)

    })
  }


  next()
})

// 导航 转换成 路由
const menuToRoute = (menu) => {
  if(!menu.component){
    return null
  }
  let route = {
    name: menu.name,
    path: menu.path,
    meta:{
      icon: menu.icon,
      title: menu.title
    }
  }
  route.component = () => import('@/views/' + menu.component +'.vue')

  return route
}

export default router
