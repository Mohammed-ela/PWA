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
      <template v-if="isAuthenticated">
        <ion-card>
          <ion-card-header>
            <ion-card-title>Bienvenue, {{ user.name }} !</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Découvrez nos services et vos abonnements.
          </ion-card-content>
        </ion-card>
        <ion-button expand="full" router-link="/offers">Voir les offres</ion-button>
        <ion-button expand="full" router-link="/actus">Voir les actualités</ion-button>
      </template>
      <template v-else>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Bienvenue sur notre service SaaS</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Découvrez nos services mensuels et annuels sous forme d'abonnement.
          </ion-card-content>
        </ion-card>
        <ion-button expand="full" router-link="/register">S'inscrire</ion-button>
        <ion-button expand="full" router-link="/login">Se connecter</ion-button>
      </template>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '@/store/store';
import {
  IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButtons
} from '@ionic/vue';

const authStore = useAuthStore();

const isAuthenticated = computed(() => !!authStore.token);
const user = computed(() => authStore.user);
</script>
