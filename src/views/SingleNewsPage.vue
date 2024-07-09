<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/actus"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Actualité</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-card v-if="news">
        <img :src="news.image" alt="Image de l'actualité" />
        <ion-card-header>
          <ion-card-title>{{ news.title }}</ion-card-title>
          <ion-card-subtitle>{{ formatDate(news.createdAt) }}</ion-card-subtitle>
          <ion-card-subtitle v-if="news.userOrAdmin === 1">Créé par : Utilisateur</ion-card-subtitle>
          <ion-card-subtitle v-if="news.userOrAdmin === 2">Créé par : Administrateur</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>{{ news.description }}</p>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import axios from '@/axios';

const route = useRoute();
const newsId = route.params.id;
const news = ref(null);

const fetchNewsById = async () => {
  try {
    const response = await axios.get(`/actualites/${newsId}`);
    news.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'actualité:', error);
  }
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

onMounted(fetchNewsById);
</script>

<style scoped>
.ion-card-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.ion-card-subtitle {
  color: var(--ion-color-medium);
}
</style>
