import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '@/components/page/Login'
import HelloWorld from '@/components/HelloWorld'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
      //components: Login
      // path: '/',
      // name: 'Login',
      // component: Login
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve),
      //components: Login,
      meta: {title: '登陆'}
    }
  ]
})
