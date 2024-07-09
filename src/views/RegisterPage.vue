<template>
  <ion-page>
    <ion-header>
       <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Inscription</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-input
            label="Nom"
            labelPlacement="stacked"
            v-model="name"
            name="name"
            type="text"
            required
            clear-input
          >
            <ion-icon slot="start" name="person-outline" class="input-icon"></ion-icon>
          </ion-input>
        </ion-item>
        <ion-item>
          <ion-input
            label="Email"
            labelPlacement="stacked"
            v-model="email"
            name="email"
            type="email"
            required
            clear-input
          >
            <ion-icon slot="start" name="mail-outline" class="input-icon"></ion-icon>
          </ion-input>
        </ion-item>
        <ion-item>
          <ion-input
            label="Mot de passe"
            labelPlacement="stacked"
            v-model="password"
            name="password"
            type="password"
            required
            clear-input
          >
            <ion-input-password-toggle slot="end"></ion-input-password-toggle>
            <ion-icon slot="start" name="lock-closed-outline" class="input-icon"></ion-icon>
          </ion-input>
        </ion-item>
      </ion-list>
      <ion-button expand="full" @click="register" class="ion-margin-top" shape="round">S'inscrire</ion-button>
      <ion-item router-link="/login" detail="false" lines="none" class="ion-margin-top">
        <ion-icon slot="start" name="log-in-outline"></ion-icon>
        <ion-label>Vous êtes déjà inscrit ?</ion-label>
      </ion-item>
      <ion-alert
        :is-open="!!successMessage"
        @didDismiss="() => { successMessage = '' }"
        header="Succès"
        :message="successMessage"
        :buttons="['OK']"
      ></ion-alert>
      <ion-alert
        :is-open="!!errorMessage"
        @didDismiss="() => { errorMessage = '' }"
        header="Erreur"
        :message="errorMessage"
        :buttons="['OK']"
      ></ion-alert>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/store';
import apiClient from '@/axios';
import {
  IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonInputPasswordToggle, IonAlert
} from '@ionic/vue';

const name = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();
const authStore = useAuthStore();
const errorMessage = ref('');
const successMessage = ref('');

const register = async () => {
  try {
    const response = await apiClient.post('/users/inscription', {
      name: name.value,
      email: email.value,
      password: password.value
    });
    authStore.setUser(response.data.user);
    authStore.setToken(response.data.token);
    successMessage.value = 'Vous êtes inscrit ! Veuillez vous connecter maintenant.';
    setTimeout(() => {
      router.push('/login');
    }, 2000);
  } catch (error) {
    console.error('Erreur d\'inscription:', error.response?.data);
    errorMessage.value = error.response?.data?.message || 'Erreur d\'inscription.';
  }
};
</script>

<style scoped>
.ion-text-center {
  text-align: center;
}
.ion-margin-top {
  margin-top: 16px;
}
.input-icon {
  margin-top: 15px;
}
</style>
