import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: "/", redirect: '/minter' },
  { path: "/minter", name: 'Minter', component: () => import('@/views/Minter.vue'), },
  { path: "/xpr", name: 'Transfer', component: () => import('@/views/Transfer.vue'), },
  { path: "/my-nfts", name: 'My Nfts', component: () => import('@/views/MyNfts.vue'), },
];

const router = createRouter({
  scrollBehavior() {
    return { left: 0, top: 0, behavior: 'smooth' };
  },
  history: createWebHistory(),
  routes,
});

export default router;
