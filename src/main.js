import './assets/style/main.css'
import { createMemoryHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

import Aunth from './Views/authentification.vue'
import Home from './Views/home.vue'
import Document from './Views/grid.vue'




const routes = [
  { path: '/', component:  Aunth},
  { path: '/home', component:  Home},
  { path: '/document', component:  Document},
  { path: '/error', component: Aunth },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
