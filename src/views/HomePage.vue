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
      <ion-card>
        <ion-card-header>
          <ion-card-title>Bienvenue sur notre service SaaS</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Découvrez nos services mensuels et annuels sous forme d'abonnement.
        </ion-card-content>
      </ion-card>
      <ion-button expand="full" router-link="/actus">Voir les actualités</ion-button>
      <ion-button expand="full" router-link="/register">S'inscrire</ion-button>
      <ion-button expand="full" router-link="/login">Se connecter</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButtons } from '@ionic/vue';
</script>
