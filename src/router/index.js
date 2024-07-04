import { createRouter, createWebHistory } from '@ionic/vue-router';
import { useAuthStore } from '@/store/store'; // Assurez-vous que le chemin est correct

const routes = [
  { path: '', redirect: '/home' },
  { path: '/home', component: () => import('../views/HomePage.vue') },
  { path: '/actus', component: () => import('../views/NewsPage.vue') },
  { path: '/actus/:id', component: () => import('../views/SingleNewsPage.vue') },
  { path: '/register', component: () => import('../views/RegisterPage.vue') },
  { path: '/login', component: () => import('../views/LoginPage.vue') },
  { path: '/account', component: () => import('../views/AccountPage.vue'), meta: { requiresAuth: true } },
  { path: '/offers', component: () => import('../views/OffersPage.vue') },
  { path: '/offers/:id', component: () => import('../views/SingleOfferPage.vue'), meta: { requiresAuth: true } },
  { path: '/payment-success', component: () => import('../views/PaymentSuccessPage.vue') },
  { path: '/payment-cancel', component: () => import('../views/PaymentCancelPage.vue') },
  { path: '/service', component: () => import('../views/ServiceAccessPage.vue') },
  { path: '/contact', component: () => import('../views/ContactPage.vue') },
  { path: '/legal-notice', component: () => import('../views/LegalNoticePage.vue') },
  { path: '/terms', component: () => import('../views/TermsPage.vue') },
  { path: '/privacy', component: () => import('../views/PrivacyPage.vue') },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

//middleware connexion
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.matched.some(record => record.meta.requiresAuth) && !authStore.token) {
    alert('Vous devez être connecté pour accéder à cette page.');
    // redirige vers login
    next('/login');
  } else {
    next();
  }
});

export default router;
