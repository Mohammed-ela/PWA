<template>
  <ion-page>
    <ion-header>
       <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Connexion</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-input
            label="Email"
            labelPlacement="stacked"
            v-model="email"
            name="email"
            type="text"
            :spellcheck="false"
            autocapitalize="off"
            required
            clear-input
          >
            <ion-icon slot="start" name="mail-outline" class="input-icon"></ion-icon>
          </ion-input>
        </ion-item>

        <ion-item>
          <ion-input
            labelPlacement="stacked"
            label="Mot de passe"
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

      <ion-button expand="full" @click="login" :disabled="loading" class="ion-margin-top" shape="round">
        <ion-spinner v-if="loading" name="crescent"></ion-spinner>
        <span v-else>Se connecter</span>
      </ion-button>
      <ion-item router-link="/register" detail="false" lines="none" class="ion-margin-top">
        <ion-icon slot="start" name="person-add-outline"></ion-icon>
        <ion-label>Pas encore inscrit ?</ion-label>
      </ion-item>
      <ion-item router-link="/forgot-password" detail="false" lines="none">
        <ion-icon slot="start" name="help-circle-outline"></ion-icon>
        <ion-label>Mot de passe oublié ?</ion-label>
      </ion-item>
      <ion-alert
        :is-open="!!errorMessage"
        @didDismiss="() => { errorMessage = '' }"
        header="Erreur"
        message="Email ou mot de passe incorrect."
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
  IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonInputPasswordToggle, IonSpinner, IonAlert
} from '@ionic/vue';

const email = ref('');
const password = ref('');
const router = useRouter();
const authStore = useAuthStore();
const loading = ref(false); // État pour le loader
const errorMessage = ref(''); // État pour le message d'erreur

const login = async () => {
  loading.value = true; // Activer le loader
  errorMessage.value = ''; // Réinitialiser le message d'erreur

  try {
    const response = await apiClient.post('/users/connexion', {
      email: email.value,
      password: password.value
    });
    authStore.setUser(response.data.existingUser);
    authStore.setToken(response.data.token);
    await authStore.fetchSubscriptions();
    router.push('/account');
  } catch (error) {
    if (error.response && error.response.data) {
      // Erreur avec réponse de l'API
      console.error('Erreur de connexion:', error.response.data);
      errorMessage.value = error.response.data.message || 'Email ou mot de passe incorrect.';
    } else {
      // Erreur sans réponse de l'API
      console.error('Erreur de connexion:', error.message);
      errorMessage.value = 'Erreur de connexion: Une erreur inattendue est survenue.';
    }
  } finally {
    loading.value = false; // Désactiver le loader
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
