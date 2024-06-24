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
          <ion-list id="auth-list">
            <ion-list-header>Mon Compte</ion-list-header>
            <ion-menu-toggle :auto-hide="false">
              <ion-item @click="selectedIndex = 0" router-direction="root" router-link="/login" lines="none" :detail="false" :class="{ selected: selectedIndex === 0 }">
                <ion-icon aria-hidden="true" slot="start" :ios="logInOutline" :md="logInSharp"></ion-icon>
                <ion-label>Connexion</ion-label>
              </ion-item>
              <ion-item @click="selectedIndex = 1" router-direction="root" router-link="/register" lines="none" :detail="false" :class="{ selected: selectedIndex === 1 }">
                <ion-icon aria-hidden="true" slot="start" :ios="personAddOutline" :md="personAddSharp"></ion-icon>
                <ion-label>Inscription</ion-label>
              </ion-item>
              <ion-item @click="selectedIndex = 2" router-direction="root" router-link="/account" lines="none" :detail="false" :class="{ selected: selectedIndex === 2 }">
                <ion-icon aria-hidden="true" slot="start" :ios="personOutline" :md="personSharp"></ion-icon>
                <ion-label>Mon Compte</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

          <ion-list id="info-list">
            <ion-list-header>Informations</ion-list-header>
            <ion-menu-toggle :auto-hide="false">
              <ion-item @click="selectedIndex = 3" router-direction="root" router-link="/news" lines="none" :detail="false" :class="{ selected: selectedIndex === 3 }">
                <ion-icon aria-hidden="true" slot="start" :ios="newspaperOutline" :md="newspaperSharp"></ion-icon>
                <ion-label>Actualités</ion-label>
              </ion-item>
              <ion-item @click="selectedIndex = 4" router-direction="root" router-link="/offers" lines="none" :detail="false" :class="{ selected: selectedIndex === 4 }">
                <ion-icon aria-hidden="true" slot="start" :ios="pricetagOutline" :md="pricetagSharp"></ion-icon>
                <ion-label>Offres</ion-label>
              </ion-item>
              <ion-item @click="selectedIndex = 5" router-direction="root" router-link="/contact" lines="none" :detail="false" :class="{ selected: selectedIndex === 5 }">
                <ion-icon aria-hidden="true" slot="start" :ios="mailOutline" :md="mailSharp"></ion-icon>
                <ion-label>Contact</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

          <ion-list id="legal-list">
            <ion-list-header>Mentions Légales</ion-list-header>
            <ion-menu-toggle :auto-hide="false">
              <ion-item @click="selectedIndex = 6" router-direction="root" router-link="/legal-notice" lines="none" :detail="false" :class="{ selected: selectedIndex === 6 }">
                <ion-icon aria-hidden="true" slot="start" :ios="informationCircleOutline" :md="informationCircleSharp"></ion-icon>
                <ion-label>Mentions légales</ion-label>
              </ion-item>
              <ion-item @click="selectedIndex = 7" router-direction="root" router-link="/terms" lines="none" :detail="false" :class="{ selected: selectedIndex === 7 }">
                <ion-icon aria-hidden="true" slot="start" :ios="documentTextOutline" :md="documentTextSharp"></ion-icon>
                <ion-label>CGU/CGV</ion-label>
              </ion-item>
              <ion-item @click="selectedIndex = 8" router-direction="root" router-link="/privacy" lines="none" :detail="false" :class="{ selected: selectedIndex === 8 }">
                <ion-icon aria-hidden="true" slot="start" :ios="shieldOutline" :md="shieldSharp"></ion-icon>
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
  IonNote,
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
  shieldSharp,
  menuOutline
} from 'ionicons/icons';

const selectedIndex = ref(0);
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-background-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;
  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;
  margin-bottom: 18px;
  color: #757575;
  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;
  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>
