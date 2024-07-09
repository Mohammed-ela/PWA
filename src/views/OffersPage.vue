<template>
  <ion-page>
    <ion-header>
       <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Offres</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-card v-for="offer in offers" :key="offer.id">
          <img :src="offer.image" alt="Image de l'offre" />
          <ion-card-header>
            <ion-card-title>{{ offer.name }}</ion-card-title>
            <ion-card-subtitle>{{ offer.price }} €/mois - {{ offer.duration }}</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <p>{{ offer.description }}</p>
            <ion-list>
              <ion-item v-for="feature in offer.features" :key="feature">
                <ion-icon class="green-icon" name="checkmark-circle" slot="start"></ion-icon>
                <ion-label>{{ feature }}</ion-label>
              </ion-item>
            </ion-list>
            <h3>Accès à la communauté:</h3>
            <ion-list>
              <ion-item v-if="offer.communityAccess.Discord">
                <ion-icon class="discord" name="logo-discord" slot="start"></ion-icon>
                <ion-label>Discord</ion-label>
              </ion-item>
              <ion-item v-if="offer.communityAccess.Facebook">
                <ion-icon class="facebook" name="logo-facebook" slot="start"></ion-icon>
                <ion-label>Facebook</ion-label>
              </ion-item>
            </ion-list>
            <ion-button expand="full" color="tertiary" shape="round"  @click="goToOffer(offer.id)">S'abonner</ion-button>
          </ion-card-content>
        </ion-card>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {
  IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonIcon, IonButton
} from '@ionic/vue';
import { useRouter } from 'vue-router';
import apiClient from '@/axios';

const offers = ref([]);
const router = useRouter();

const fetchOffers = async () => {
  try {
    const response = await apiClient.get('/abonnements');
    console.log('Réponse de l\'API:', response.data); 
    offers.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des offres:', error);
  }
};

const goToOffer = (offerId) => {
  router.push(`/offers/${offerId}`);
};

onMounted(fetchOffers);
</script>

<style scoped>
.ion-item {
  margin-top: 10px;
}

ion-card-title {
  font-size: 1.2rem;
}

ion-card-subtitle {
  color: var(--ion-color-medium);
}

ion-button {
  margin-top: 10px;
}

.green-icon {
  color: green; 
}
.discord{
  color: #5865f2;
}
.facebook{
  color: #3b5998;
}
</style>
