<template>
  <ion-page>
    <ion-header>
       <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Mon Compte</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-alert
        :is-open="showAlert"
        header="Erreur"
        :message="alertMessage"
        :buttons="alertButtons"
        @didDismiss="closeAlert"
      ></ion-alert>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Informations utilisateur</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-label position="stacked">Nom</ion-label>
              <ion-input v-model="user.name" clear-input></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Email</ion-label>
              <ion-input type="email" v-model="user.email" clear-input></ion-input>
            </ion-item>
          </ion-list>
          <ion-button expand="full" shape="round" color="medium" @click="updateProfile">Mettre à jour le profil</ion-button>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Gestion de l'abonnement</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-button expand="full" @click="openBillingPortal">Accéder au portail de facturation</ion-button>
        </ion-card-content>
        <ion-button expand="full" color="danger" shape="round" @click="confirmDeleteAccount">Supprimer le compte</ion-button>
      </ion-card>

      <ion-card v-if="activeSubscriptions.length > 0">
        <ion-card-header>
          <ion-card-title>Abonnements Actifs</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item v-for="subscription in activeSubscriptions" :key="subscription.id">
              <ion-label>
                <div class="subscription-info">
                  <div class="subscription-status">
                    <ion-icon color="success" name="checkmark-circle"></ion-icon>
                  </div>
                  <div class="subscription-details">
                    <p>ID: {{ subscription.id }}</p>
                    <p>Client Stripe: {{ subscription.stripeCustomerId }}</p>
                    <p>Début: {{ new Date(subscription.currentPeriodStart).toLocaleDateString() }}</p>
                    <p>Fin: {{ new Date(subscription.currentPeriodEnd).toLocaleDateString() }}</p>
                    <p>Status: {{ subscription.status }}</p>
                    <p>Type d'abonnement: {{ subscriptionType(subscription.abonnementId) }}</p>
                  </div>
                </div>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>

      <ion-card v-if="expiredSubscriptions.length > 0">
        <ion-card-header>
          <ion-card-title>Abonnements Expirés</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item v-for="subscription in expiredSubscriptions" :key="subscription.id">
              <ion-label>
                <div class="subscription-info">
                  <div class="subscription-status">
                    <ion-icon color="warning" name="alert-circle"></ion-icon>
                  </div>
                  <div class="subscription-details">
                    <p>ID: {{ subscription.id }}</p>
                    <p>Client Stripe: {{ subscription.stripeCustomerId }}</p>
                    <p>Début: {{ new Date(subscription.currentPeriodStart).toLocaleDateString() }}</p>
                    <p>Fin: {{ new Date(subscription.currentPeriodEnd).toLocaleDateString() }}</p>
                    <p>Status: {{ subscription.status }}</p>
                    <p>Type d'abonnement: {{ subscriptionType(subscription.abonnementId) }}</p>
                  </div>
                </div>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>

      <ion-card v-if="canceledSubscriptions.length > 0">
        <ion-card-header>
          <ion-card-title>Abonnements Annulés</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item v-for="subscription in canceledSubscriptions" :key="subscription.id">
              <ion-label>
                <div class="subscription-info">
                  <div class="subscription-status">
                    <ion-icon color="danger" name="close-circle"></ion-icon>
                  </div>
                  <div class="subscription-details">
                    <p>ID: {{ subscription.id }}</p>
                    <p>Client Stripe: {{ subscription.stripeCustomerId }}</p>
                    <p>Début: {{ new Date(subscription.currentPeriodStart).toLocaleDateString() }}</p>
                    <p>Fin: {{ new Date(subscription.currentPeriodEnd).toLocaleDateString() }}</p>
                    <p>Status: {{ subscription.status }}</p>
                    <p>Type d'abonnement: {{ subscriptionType(subscription.abonnementId) }}</p>
                  </div>
                </div>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/store';
import apiClient from '@/axios';
import {
  IonButton, IonCard, IonAlert, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonInput, IonIcon
} from '@ionic/vue';

const router = useRouter();
const authStore = useAuthStore();

const user = ref({});
const subscriptions = ref([]);
const showAlert = ref(false);
const alertMessage = ref('');

const activeSubscriptions = computed(() => subscriptions.value.filter(subscription => subscription.status === 'active'));
const expiredSubscriptions = computed(() => subscriptions.value.filter(subscription => subscription.status === 'expired'));
const canceledSubscriptions = computed(() => subscriptions.value.filter(subscription => subscription.status === 'canceled'));

const loadUserInfo = async () => {
  try {
    const userInfo = await apiClient.get('/users/profile', {
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    });
    user.value = userInfo.data;

    await authStore.fetchSubscriptions();
    subscriptions.value = authStore.subscriptions;
  } catch (error) {
    console.error('Erreur lors de la récupération des informations utilisateur et abonnements:', error.response?.data || error.message);
  }
};

const subscriptionType = (abonnementId) => {
  switch (abonnementId) {
    case 1:
      return 'Basic';
    case 2:
      return 'Pro';
    case 3:
      return 'Premium';
    default:
      return 'Inconnu';
  }
};

onMounted(() => {
  if (authStore.isAuthenticated) {
    loadUserInfo();
  } else {
    router.push('/login');
  }
});

const updateProfile = async () => {
  try {
    await apiClient.put('/users/profile/update', {
      email: user.value.email,
      name: user.value.name
    }, {
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    });
    alert('Profil mis à jour avec succès');
  } catch (error) {
    if (error.response && error.response.status === 409) {
      alert('L\'e-mail est déjà utilisé');
    } else {
      console.error('Erreur lors de la mise à jour du profil:', error.response?.data || error.message);
      alert('Erreur lors de la mise à jour du profil.');
    }
  }
};

const openBillingPortal = async () => {
  try {
    const response = await apiClient.post('/portal/customer', {
      userId: authStore.user.id
    }, {
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    });

    if (response.data.url) {
      window.location.href = response.data.url;
    } else {
      alertMessage.value = 'Erreur: URL de portail de facturation non reçue.';
      showAlert.value = true;
    }
  } catch (error) {
    alertMessage.value = error.response?.data?.message || 'Erreur lors de l\'ouverture du portail de facturation.';
    showAlert.value = true;
  }
};

const goToOffers = () => {
  router.push('/offers');
};

const alertButtons = [
  {
    text: 'Voir les offres',
    handler: goToOffers
  },
  {
    text: 'OK',
    role: 'cancel',
  }
];

const closeAlert = () => {
  showAlert.value = false;
};

const confirmDeleteAccount = () => {
  if (confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Tout vos abonnement seront perdu, cette action est irréversible.')) {
    deleteAccount();
  }
};

const deleteAccount = async () => {
  try {
    const token = authStore.token;
    await apiClient.delete('/users/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    authStore.logout();
    router.push('/'); 
  } catch (error) {
    console.error('Erreur lors de la suppression du compte:', error.response.data);
  }
};

</script>


<style scoped>
.ion-card-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.ion-button {
  margin-top: 10px;
}

.subscription-info {
  display: flex;
  align-items: center;
}

.subscription-status {
  margin-right: 10px;
}

.subscription-details p {
  margin: 0;
}
</style>
