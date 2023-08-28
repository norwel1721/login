import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../components/pages/Home.vue');
const About = () => import('../components/pages/About.vue');
// import Home from '../components/pages/Home.vue'
// import About from '../components/pages/About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      name: 'User Info',
      icon: 'mdi-home-account'
    },
    {
      path: '/about',
      component: About,
      name: 'About',
      icon: 'mdi-information'
    },
  ]
});

export default router;