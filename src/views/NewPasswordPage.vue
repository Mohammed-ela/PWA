<template>
    <ion-page>
      <ion-header>
         <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button default-href="/login"></ion-back-button>
          </ion-buttons>
          <ion-title>Nouveau mot de passe</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item>
            <ion-label position="floating">Nouveau mot de passe</ion-label>
            <ion-input type="password" v-model="newPassword"></ion-input>
          </ion-item>
        </ion-list>
        <ion-button expand="full" @click="updatePassword">Mettre à jour le mot de passe</ion-button>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import apiClient from '@/axios';
  import {
    IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton
  } from '@ionic/vue';
  
  const newPassword = ref('');
  const route = useRoute();
  const router = useRouter();
  const slug = route.params.slug;
  
  const updatePassword = async () => {
    try {
      await apiClient.post(`/users/new-password/${slug}`, { newPassword: newPassword.value });
      alert('Mot de passe mis à jour avec succès.');
      router.push('/login');
    } catch (error) {
      console.error('Erreur lors de la mise à jour du mot de passe:', error.response.data);
      alert('Erreur lors de la mise à jour du mot de passe.');
    }
  };
  </script>
  