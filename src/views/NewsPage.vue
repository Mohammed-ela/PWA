<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
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
            <ion-card-subtitle>{{ news.date }}</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            {{ news.summary }}
          </ion-card-content>
        </ion-card>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import {
  IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent
} from '@ionic/vue';

const newsList = ref([
  { id: 1, title: 'Actualité 1', summary: 'Résumé de l\'actualité 1', image: 'https://ionicframework.com/docs/img/demos/card-media.png', date: '2023-01-01' },
  { id: 2, title: 'Actualité 2', summary: 'Résumé de l\'actualité 2', image: 'https://ionicframework.com/docs/img/demos/card-media.png', date: '2023-02-01' },
  { id: 3, title: 'Actualité 3', summary: 'Résumé de l\'actualité 3', image: 'https://ionicframework.com/docs/img/demos/card-media.png', date: '2023-03-01' },
]);
</script>
