<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Offres</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card v-for="offer in offers" :key="offer.id">
        <ion-card-header>
          <ion-card-title>{{ offer.title }}</ion-card-title>
          <ion-card-subtitle>{{ offer.price }} €/mois</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          {{ offer.description }}
        </ion-card-content>
        <ion-item>

          <ion-input v-model="promoCode" placeholder="Entrez votre code promo"></ion-input>
        </ion-item>
        <ion-button expand="full" @click="subscribe(offer)">S'abonner</ion-button>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import {
  IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonItem, IonLabel, IonInput
} from '@ionic/vue';

// Liste des offres
const offers = ref([
  { id: 1, title: 'Offre Basique', price: 10, description: 'Description de l\'offre basique.' },
  { id: 2, title: 'Offre Standard', price: 20, description: 'Description de l\'offre standard.' },
  { id: 3, title: 'Offre Premium', price: 30, description: 'Description de l\'offre premium.' },
]);

const promoCode = ref('');

// Fonction de souscription
const subscribe = async (offer) => {
  try {

  } catch (error) {
    console.error('Error:', error);
  }
};
</script>

<style scoped>
.ion-item {
  margin-top: 10px;
}
</style>
