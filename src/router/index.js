import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ComingSoonTap from "@/BuildTap/ComingSoonTap/ComingSoonTap.vue";
import ContactUsTap from "@/BuildTap/ContactUsTap/ContactUsTap.vue";
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: "/coming-soon",
    component: ComingSoonTap
  },
    {
    path: "/contact-us",
    component: ContactUsTap
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
