<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Actualité</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <img :src="news.image" alt="Image de l'actualité" />
        <ion-card-header>
          <ion-card-title>{{ news.title }}</ion-card-title>
          <ion-card-subtitle>{{ news.date }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>{{ news.summary }}</p>
          <p>{{ news.content }}</p>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import {
  IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar
} from '@ionic/vue';

const route = useRoute();
const newsId = route.params.id;

const news = ref({
  title: 'Titre de l\'actualité',
  summary: 'Résumé de l\'actualité',
  content: 'Contenu complet de l\'actualité.',
  image: 'https://ionicframework.com/docs/img/demos/card-media.png',
  date: '2023-01-01'
});
</script>
