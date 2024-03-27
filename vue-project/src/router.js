import { createRouter, createWebHistory } from 'vue-router'

import Coop from './components/Coop.vue'
import Btl from "./components/Btl.vue"; 
import Home from "./components/Home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/coop', name: 'Coop', component: Coop},
        {path: '/btl', name: 'BTL', component: Btl}
    ]
})

export default router