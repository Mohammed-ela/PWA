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
      <ion-card>
        <ion-card-header>
          <ion-card-title>Informations utilisateur</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-input v-model="user.name" clear-input></ion-input>
            </ion-item>
            <ion-item>
              <ion-input type="email" v-model="user.email" clear-input></ion-input>
            </ion-item>
          </ion-list>
          <ion-button expand="full" @click="updateProfile">Mettre à jour le profil</ion-button>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Gestion de l'abonnement</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-button expand="full" @click="openBillingPortal">Accéder au portail de facturation</ion-button>
        </ion-card-content>
      </ion-card>
      <ion-button expand="full" color="danger" @click="confirmDeleteAccount">Supprimer le compte</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonInput
} from '@ionic/vue';

const router = useRouter();

const user = ref({
  name: 'Mohammed',
  email: 'momo@example.com'
});

const updateProfile = () => {

};

const openBillingPortal = async () => {

};

const confirmDeleteAccount = () => {
  if (confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.')) {
    deleteAccount();
  }
};

const deleteAccount = () => {
  // Logique de suppression de compte utilisateur
  console.log('Compte supprimé');
  router.push('/'); // Redirige vers la page d'accueil après la suppression
};
</script>

<style scoped>
.ion-card-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.ion-button {
  margin-top: 10px;
}
</style>
