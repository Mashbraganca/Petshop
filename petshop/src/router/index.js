import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    //client routes
    { path: '/', name: 'Home', component: Home },
    { path: '/new', name: 'Sign Up', component: () => import('../views/SignUp.vue') },
    { path: '/profile', name: 'Profile', component: () => import('../views/Profile.vue') },
    { path: '/cart', name: 'Cart', component: () => import('../views/Cart.vue') },
    { path: '/calendar', name: 'Calendar', component: () => import('../views/Calendar.vue') },

    //admin routes
    { path: '/admin', name: 'Admin', component: () => import('../views/Admin.vue') },
    { path: '/GerenAdmin', name: 'GerenAdmin', component: () => import('../views/GerenAdmin.vue') },
    { path: '/AdminReg', name: 'AdminReg', component: () => import('../views/AdminReg.vue') },
    { path: '/GerenClientes', name: 'GerenClientes', component: () => import('../views/GerenClientes.vue') },
    { path: '/ClientReg', name: 'ClientReg', component: () => import('../views/ClientReg.vue') },
    { path: '/GerenItens', name: 'GerenItens', component: () => import('../views/GerenItens.vue') },
    { path: '/CatItem', name: 'CatItem', component: () => import('../views/CatItem.vue') },
    { path: '/CadItem', name: 'CadItem', component: () => import('../views/CadItem.vue') },
    { path: '/CatServ', name: 'CatServ', component: () => import('../views/CatServ.vue') },
    { path: '/CadServ', name: 'CadServ', component: () => import('../views/CadServ.vue') },
    { path: '/Fat', name: 'Fat', component: () => import('../views/Fat.vue') }

  

  

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
