import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Header from '../views/Header/Header.vue'

import AOS from "aos";
import 'aos/dist/aos.css';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/header',
      name: 'headr',
      component: () => import('../views/Header/Header.vue'),
    },
    {
      path: '/hero',
      name: 'hero',
      component: () => import('../views/Hero.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/Skills.vue'),
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/Project.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
    },
    {
      path: '/footer',
      name: 'footer',
      component: () => import('../views/Header/Footer.vue'),
    },
  ],
})
router.beforeEach((to, from, next) => {
  AOS.init(); // Initialize AOS
  next();
});

export default router
