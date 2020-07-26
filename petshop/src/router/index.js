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
    { path: '/admins', name: 'GerenAdmin', component: () => import('../views/GerenAdmin.vue') },
    { path: '/new-admin', name: 'AdminReg', component: () => import('../views/CadAdmin.vue') },
    { path: '/customers', name: 'GerenClientes', component: () => import('../views/GerenClientes.vue') },
    { path: '/new-customer', name: 'ClientReg', component: () => import('../views/CadCliente.vue') },
    { path: '/products', name: 'GerenItens', component: () => import('../views/GerenItens.vue') },
    { path: '/new-product', name: 'CadItem', component: () => import('../views/CadItem.vue') },
    { path: '/categories', name: 'CatItem', component: () => import('../views/Category.vue') },
    { path: '/services', name: 'CatServ', component: () => import('../views/GerenServ.vue') },
    { path: '/new-service', name: 'CadServ', component: () => import('../views/CadServ.vue') },
    { path: '/status', name: 'Fat', component: () => import('../views/Fat.vue') }

  

  

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
