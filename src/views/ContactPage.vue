<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Contact</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label position="floating">Nom</ion-label>
          <ion-input v-model="name"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Message</ion-label>
          <ion-textarea v-model="message"></ion-textarea>
        </ion-item>
      </ion-list>
      <ion-button expand="full" @click="sendContactForm">Envoyer</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTextarea, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/vue';

const name = ref('');
const email = ref('');
const message = ref('');

const sendContactForm = () => {
  // Ajoutez la logique d'envoi du formulaire de contact ici
};
</script>
