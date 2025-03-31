import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './components/Home.vue'
import Specialist from './components/Specialist.vue'

const router = createRouter({
    routes: [
        {
            path:'/',
            component: HomePage
        },
        {
            path:'/specialstes',
            component: Specialist
        }
    ],
    history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')

