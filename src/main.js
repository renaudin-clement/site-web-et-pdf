import './assets/style/main.css'
import { createMemoryHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

import Aunth from '@/Views/authentification.vue'
import Home from '@/Views/home.vue'
import Document from '@/Views/grid.vue'




const routes = [
  { path: '/', component:  Aunth, name:'Login'},
  { path: '/home', component:  Home, name:'home'},
  { path: '/document', component:  Document, name:'document'},
  { path: '/error', component: Aunth , name:'error'},
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


router.beforeEach((to, from) => {
  let login = localStorage.getItem("login");
  let admin = localStorage.getItem("admin");

  if (login =="false" && to.name !== 'Login'
  ) {
    return { name: 'Login' }
  }

})

createApp(App).use(router).mount('#app')
