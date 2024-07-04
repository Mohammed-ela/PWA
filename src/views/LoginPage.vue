<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Connexion</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Mot de passe</ion-label>
          <ion-input type="password" v-model="password"></ion-input>
        </ion-item>
      </ion-list>
      <ion-button expand="full" @click="login">Se connecter</ion-button>
      <ion-item router-link="/register" detail="false">
        <ion-icon slot="start" name="person-add-outline"></ion-icon>
        <ion-label>Pas encore inscrit ?</ion-label>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/store';
import apiClient from '@/axios';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon } from '@ionic/vue';

const email = ref('');
const password = ref('');
const router = useRouter();
const authStore = useAuthStore();

const login = async () => {
  try {
    const response = await apiClient.post('/users/connexion', {
      email: email.value,
      password: password.value
    });
    authStore.setUser(response.data.existingUser);
    authStore.setToken(response.data.token);
    router.push('/');
  } catch (error) {
    console.error('Erreur de connexion:', error.response.data);
  }
};
</script>
