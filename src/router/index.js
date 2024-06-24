// src/router/index.js
import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  { path: '', redirect: '/home' },
  { path: '/home', component: () => import('../views/HomePage.vue') },
  { path: '/news', component: () => import('../views/NewsPage.vue') },
  { path: '/news/:id', component: () => import('../views/SingleNewsPage.vue') },
  { path: '/register', component: () => import('../views/RegisterPage.vue') },
  { path: '/login', component: () => import('../views/LoginPage.vue') },
  { path: '/account', component: () => import('../views/AccountPage.vue') },
  { path: '/offers', component: () => import('../views/OffersPage.vue') },
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

export default router;
