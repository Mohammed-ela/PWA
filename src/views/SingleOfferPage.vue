<template>
  <ion-page>
    <ion-header>
       <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/offers"></ion-back-button>
        </ion-buttons>
        <ion-title>Détails de l'offre</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card v-if="offer">
        <ion-card-header>
          <ion-card-title>{{ offer.name }}</ion-card-title>
          <ion-card-subtitle>{{ offer.price }} €/mois - {{ offer.duration }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>{{ offer.description }}</p>
          <ion-list>
            <ion-item v-for="feature in offer.features" :key="feature">
              <ion-icon name="checkmark-circle" slot="start"></ion-icon>
              <ion-label>{{ feature }}</ion-label>
            </ion-item>
          </ion-list>
          <h3>Accès à la communauté:</h3>
          <ion-list>
            <ion-item v-if="offer.communityAccess.Discord">
              <ion-icon name="logo-discord" slot="start"></ion-icon>
              <ion-label>Discord</ion-label>
            </ion-item>
            <ion-item v-if="offer.communityAccess.Facebook">
              <ion-icon name="logo-facebook" slot="start"></ion-icon>
              <ion-label>Facebook</ion-label>
            </ion-item>
          </ion-list>

          <h2>Récapitulatif du paiement</h2>
          <ion-list>
            <ion-item>
              <ion-label>Nom :</ion-label>
              <ion-text>{{ authStore.user.name }}</ion-text>
            </ion-item>
            <ion-item>
              <ion-label>Email :</ion-label>
              <ion-text>{{ authStore.user.email }}</ion-text>
            </ion-item>
            <ion-item>
              <ion-label>Prix :</ion-label>
              <ion-text>{{ offer.price }} €/mois</ion-text>
            </ion-item>
            <ion-item>
              <ion-label>Durée :</ion-label>
              <ion-text>{{ offer.duration }}</ion-text>
            </ion-item>
          </ion-list>
          <ion-button expand="full" @click="subscribe">Confirmer l'abonnement</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonItem, IonLabel, IonInput, IonIcon, IonList, IonText
} from '@ionic/vue';
import { useAuthStore } from '@/store/store';
import apiClient from '@/axios';
import { loadStripe } from '@stripe/stripe-js'; // Importer Stripe.js

const route = useRoute();
const router = useRouter();
const offerId = route.params.id;

const offer = ref(null);
const promoCode = ref('');
const authStore = useAuthStore();

const fetchOffer = async () => {
  try {
    const response = await apiClient.get(`/abonnements/${offerId}`);
    console.log('Réponse API:', response.data); // Debug log
    offer.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'offre:', error);
  }
};

const subscribe = async () => {
  if (!authStore.token) {
    alert('Vous devez être authentifié pour vous abonner.');
    return;
  }

  try {
    const response = await apiClient.post(`/abonnements/${offerId}`, { // Mise à jour de l'URL
      email: authStore.user.email,
      userId: authStore.user.id // Ajout de l'userId dans la requête
    }, {
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    });

    const { sessionId } = response.data;
    const stripe = await loadStripe('pk_test_51PVrVTGfWKND843lfTwVBvDPfoOz50qKNI1N6KkBfrxXxkepSGlv4pa01fjVKByHKHVyt7eFaBu1MIy3Mb5tTTqH00aoFEYI4i'); // Remplacez par votre clé publique Stripe
    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      console.error('Erreur lors de la redirection vers Checkout:', error);
    }
  } catch (error) {
    console.error('Erreur lors de la souscription:', error);
  }
};

onMounted(fetchOffer);
</script>

<style scoped>
.ion-item {
  margin-top: 10px;
}

ion-card-title {
  font-size: 1.5rem;
  font-weight: bold;
}

ion-card-subtitle {
  color: var(--ion-color-medium);
  font-size: 1.2rem;
}

ion-button {
  margin-top: 20px;
}

.green-icon {
  color: green; 
}
</style>
