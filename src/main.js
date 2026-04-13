import './assets/main.css'
import { createMemoryHistory, createRouter } from 'vue-router'

import Aunth from './Views/authentification.vue'
import Home from './Views/home.vue'
import { createApp } from 'vue'
import App from './App.vue'



const routes = [
  { path: '/', component:  Home},
  { path: '/about', component: Aunth },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
