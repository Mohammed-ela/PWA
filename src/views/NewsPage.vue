<template>
  <ion-page>
    <ion-header>
       <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Actualités</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-card v-for="news in newsList" :key="news.id" :router-link="`/actus/${news.id}`">
          <img :src="news.image" alt="Image de l'actualité" />
          <ion-card-header>
            <ion-card-title>{{ news.title }}</ion-card-title>
            <ion-card-subtitle>{{ formatDate(news.createdAt) }}</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            {{ news.description }}
          </ion-card-content>
        </ion-card>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList } from '@ionic/vue';
import axios from '@/axios';

const newsList = ref([]);

const fetchNews = async () => {
  try {
    const response = await axios.get('/actualites');
    console.log('Réponse de l\'API:', response.data); // debug du contenu reçu
    newsList.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des actualités:', error);
  }
};


const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

onMounted(fetchNews);
</script>

<style scoped>
.ion-card-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.ion-card-subtitle {
  color: var(--ion-color-medium);
}
</style>
