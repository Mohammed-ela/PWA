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
                <ion-icon slot="start" :ios="newspaperOutline" :md="newspaperSharp"></ion-icon>
                <ion-label>Actualités</ion-label>
              </ion-item>
              <ion-item router-link="/offers" detail="false">
                <ion-icon slot="start" :ios="pricetagOutline" :md="pricetagSharp"></ion-icon>
                <ion-label>Offres</ion-label>
              </ion-item>
              <ion-item router-link="/contact" detail="false">
                <ion-icon slot="start" :ios="mailOutline" :md="mailSharp"></ion-icon>
                <ion-label>Contact</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

          
          <ion-list>
            <ion-list-header>Mon Compte</ion-list-header>
            <ion-menu-toggle auto-hide="false">
              <ion-item router-link="/login" detail="false">
                <ion-icon slot="start" :ios="logInOutline" :md="logInSharp"></ion-icon>
                <ion-label>Connexion</ion-label>
              </ion-item>
              <ion-item router-link="/register" detail="false">
                <ion-icon slot="start" :ios="personAddOutline" :md="personAddSharp"></ion-icon>
                <ion-label>Inscription</ion-label>
              </ion-item>
              <ion-item router-link="/account" detail="false">
                <ion-icon slot="start" :ios="personOutline" :md="personSharp"></ion-icon>
                <ion-label>Mon Compte</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

          <ion-list>
            <ion-list-header>Mentions Légales</ion-list-header>
            <ion-menu-toggle auto-hide="false">
              <ion-item router-link="/legal-notice" detail="false">
                <ion-icon slot="start" :ios="informationCircleOutline" :md="informationCircleSharp"></ion-icon>
                <ion-label>Mentions légales</ion-label>
              </ion-item>
              <ion-item router-link="/terms" detail="false">
                <ion-icon slot="start" :ios="documentTextOutline" :md="documentTextSharp"></ion-icon>
                <ion-label>CGU/CGV</ion-label>
              </ion-item>
              <ion-item router-link="/privacy" detail="false">
                <ion-icon slot="start" :ios="shieldOutline" :md="shieldSharp"></ion-icon>
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
import {
  logInOutline,
  logInSharp,
  personAddOutline,
  personAddSharp,
  personOutline,
  personSharp,
  newspaperOutline,
  newspaperSharp,
  pricetagOutline,
  pricetagSharp,
  mailOutline,
  mailSharp,
  informationCircleOutline,
  informationCircleSharp,
  documentTextOutline,
  documentTextSharp,
  shieldOutline,
  shieldSharp
} from 'ionicons/icons';

const selectedIndex = ref(0);
</script>

