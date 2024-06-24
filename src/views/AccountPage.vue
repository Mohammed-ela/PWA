<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Mon Compte</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- Affichez ici les informations utilisateur -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>Informations utilisateur</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-label>Nom: {{ user.name }}</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Email: {{ user.email }}</ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
      <ion-button expand="full" @click="editProfile">Modifier le profil</ion-button>
      <ion-button expand="full" color="danger" @click="deleteAccount">Supprimer le compte</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/vue';

const user = ref({
  name: 'John Doe',
  email: 'john.doe@example.com'
});

const editProfile = () => {
  // Logique de modification du profil
};

const deleteAccount = () => {
  // Logique de suppression de compte
};
</script>
