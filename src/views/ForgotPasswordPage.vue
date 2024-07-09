<template>
  <ion-page>
    <ion-header>
       <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/login"></ion-back-button>
        </ion-buttons>
        <ion-title>Mot de passe oublié</ion-title>
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
            type="email"
            required
            clear-input
          ></ion-input>
        </ion-item>
      </ion-list>
      <ion-button expand="full" @click="sendRecoveryEmail" class="ion-margin-top">
        Envoyer un lien de récupération
      </ion-button>
      <ion-alert
        :is-open="showAlert"
        @didDismiss="closeAlert"
        :header="alertHeader"
        :message="alertMessage"
        :buttons="['OK']"
      ></ion-alert>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import apiClient from '@/axios';
import { useRouter } from 'vue-router';
import {
  IonButton, IonContent, IonHeader, IonInput, IonItem, IonList, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonAlert
} from '@ionic/vue';

const email = ref('');
const router = useRouter();
const showAlert = ref(false);
const alertHeader = ref('');
const alertMessage = ref('');

const sendRecoveryEmail = async () => {
  try {
    await apiClient.post('/users/recovery-password', { email: email.value });
    alertHeader.value = 'Succès';
    alertMessage.value = 'Un lien de récupération a été envoyé à votre adresse e-mail.';
    showAlert.value = true;
  } catch (error) {
    alertHeader.value = 'Erreur';
    alertMessage.value = error.response?.data?.message || 'Erreur lors de l\'envoi du lien de récupération.';
    showAlert.value = true;
    console.error('Erreur lors de l\'envoi du lien de récupération:', error.response?.data || error.message);
  }
};

const closeAlert = () => {
  showAlert.value = false;
  if (alertHeader.value === 'Succès') {
    router.push('/login');
  }
};
</script>

<style scoped>
.ion-margin-top {
  margin-top: 16px;
}
</style>
