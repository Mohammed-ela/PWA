import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import apiClient from '@/axios';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const token = ref(localStorage.getItem('token') || '');
  const subscriptions = ref([]);

  const isAuthenticated = computed(() => !!token.value);

  const setUser = (userData) => {
    user.value = userData;
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const setToken = (tokenData) => {
    token.value = tokenData;
    localStorage.setItem('token', tokenData);
  };

  const setSubscriptions = (subscriptionData) => {
    subscriptions.value = subscriptionData;
  };

  const fetchSubscriptions = async () => {
    try {
      const response = await apiClient.get('/users/subscriptions', {
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      });
      subscriptions.value = response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des abonnements:', error.response.data);
    }
  };
  const logout = () => {
    user.value = null;
    token.value = '';
    subscriptions.value = [];
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    router.push('/login'); 
  };
  

  // Initialisation
  if (localStorage.getItem('user')) {
    user.value = JSON.parse(localStorage.getItem('user'));
  }

  return {
    user,
    token,
    subscriptions,
    isAuthenticated,
    setUser,
    setToken,
    setSubscriptions,
    fetchSubscriptions,
    logout
  };
});
