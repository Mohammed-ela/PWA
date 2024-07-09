<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-header>
          <ion-toolbar>
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-list-header>Informations</ion-list-header>
            <ion-menu-toggle auto-hide="false">
              <ion-item router-link="/actus" detail="false">
                <ion-icon slot="start" name="newspaper-outline"></ion-icon>
                <ion-label>Actualités</ion-label>
              </ion-item>
              <ion-item router-link="/offers" detail="false">
                <ion-icon slot="start" name="pricetag-outline"></ion-icon>
                <ion-label>Offres</ion-label>
              </ion-item>
              <ion-item router-link="/contact" detail="false">
                <ion-icon slot="start" name="mail-outline"></ion-icon>
                <ion-label>Contact</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

          <ion-list>
            <ion-list-header>Mon Compte</ion-list-header>
            <ion-menu-toggle auto-hide="false">
              <ion-item router-link="/login" detail="false" v-if="!isAuthenticated">
                <ion-icon slot="start" name="log-in-outline"></ion-icon>
                <ion-label>Connexion</ion-label>
              </ion-item>
              <ion-item router-link="/register" detail="false" v-if="!isAuthenticated">
                <ion-icon slot="start" name="person-add-outline"></ion-icon>
                <ion-label>Inscription</ion-label>
              </ion-item>
              <ion-item router-link="/account" detail="false" v-if="isAuthenticated">
                <ion-icon slot="start" name="person-outline"></ion-icon>
                <ion-label>Mon Profil</ion-label>
              </ion-item>
              <ion-item detail="false" @click="logout" v-if="isAuthenticated">
                <ion-icon slot="start" name="log-out-outline"></ion-icon>
                <ion-label>Déconnexion</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

          <ion-list>
            <ion-list-header>Mentions Légales</ion-list-header>
            <ion-menu-toggle auto-hide="false">
              <ion-item router-link="/legal-notice" detail="false">
                <ion-icon slot="start" name="information-circle-outline"></ion-icon>
                <ion-label>Mentions légales</ion-label>
              </ion-item>
              <ion-item router-link="/terms" detail="false">
                <ion-icon slot="start" name="document-text-outline"></ion-icon>
                <ion-label>CGU/CGV</ion-label>
              </ion-item>
              <ion-item router-link="/privacy" detail="false">
                <ion-icon slot="start" name="shield-outline"></ion-icon>
                <ion-label>Politique de confidentialité</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup>
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/store/store';

const selectedIndex = ref(0);
const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);

const logout = () => {
  authStore.logout();
};
</script>

<style scoped>

</style>
