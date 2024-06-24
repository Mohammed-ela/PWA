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
        <ion-item v-for="news in newsList" :key="news.id" router-link="/news/{{news.id}}">
          <ion-label>
            <h2>{{ news.title }}</h2>
            <p>{{ news.summary }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

const newsList = ref([
  { id: 1, title: 'Actualité 1', summary: 'Résumé de l\'actualité 1' },
  { id: 2, title: 'Actualité 2', summary: 'Résumé de l\'actualité 2' },
  { id: 3, title: 'Actualité 3', summary: 'Résumé de l\'actualité 3' },
]);
</script>
