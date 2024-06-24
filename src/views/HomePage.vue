<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Accueil</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-button router-link="/news">Voir les actualités</ion-button>
      <ion-button router-link="/register">S'inscrire</ion-button>
      <ion-button router-link="/login">Se connecter</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>
