<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Accueil</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="content-background">
      <!-- si je suis connecté -->
      <template v-if="isAuthenticated">
        <div class="center-content">
          <img src="https://pwa-mohammed.netlify.app/logo4.png" alt="Logo" class="center-image"/>
        </div>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Bienvenue, {{ user.name }} !</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Découvrez nos services et vos abonnements pour apprendre le développement web, mobile et logiciel.
          </ion-card-content>
        </ion-card>
        <ion-button router-link="/offers" shape="round">
          <ion-icon slot="start" name="pricetags-outline"></ion-icon>
          Voir les offres
        </ion-button>
        <ion-button expand="full" router-link="/actus">
          <ion-icon slot="start" name="newspaper-outline"></ion-icon>
          Voir les actualités
        </ion-button>
      </template>
      <!-- si je suis PAS connecté -->
      <template v-else>
        <div class="center-content">
          <img src="https://pwa-mohammed.netlify.app/logo4.png" alt="Logo" class="center-image"/>
        </div>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Bienvenue sur MomoDev</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Découvrez nos services mensuels et annuels pour apprendre le développement web, mobile et logiciel sous forme d'abonnement.
          </ion-card-content>
        </ion-card>
        <ion-button expand="full" shape="round" router-link="/register">
          <ion-icon slot="start" name="person-add-outline"></ion-icon>
          S'inscrire
        </ion-button>
        <ion-button expand="full" shape="round" router-link="/login">
          <ion-icon slot="start" name="log-in-outline"></ion-icon>
          Se connecter
        </ion-button>
        <ion-button expand="full" fill="outline" router-link="/offers">
          <ion-icon slot="start" name="pricetags-outline"></ion-icon>
          Découvrir nos offres
        </ion-button>
      </template>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '@/store/store';
import {
  IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButtons, IonIcon
} from '@ionic/vue';

const authStore = useAuthStore();

const isAuthenticated = computed(() => !!authStore.token);
const user = computed(() => authStore.user);
</script>

<style scoped>
.content-background {
  --background: #f0f0f5;
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45vh; 
  margin-top: 20px;
}

.center-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}



ion-button {
  margin: 10px 20px;
}
</style>
