<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Mentions légales</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Mentions légales</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-label>
                <h2>Identification de l'éditeur du site</h2>
                <p>
                  Raison sociale : Société Exemple<br>
                  Adresse : 123 Rue de Exemple, 75000 Paris<br>
                  Téléphone : 01 23 45 67 89<br>
                  Email : contact@societe-exemple.com<br>
                  Numéro SIRET : 123 456 789 00010<br>
                  Directeur de la publication : M. Jean Dupont
                </p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                <h2>Hébergement du site</h2>
                <p>
                  Hébergeur : Hébergeur Exemple<br>
                  Adresse : 456 Avenue de Hébergeur, 75001 Paris<br>
                  Téléphone : 01 98 76 54 32<br>
                  Email : support@hebergeur-exemple.com
                </p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                <h2>Propriété intellectuelle</h2>
                <p>
                  Le contenu du site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de Société Exemple, sauf mentions contraires.
                </p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                <h2>Données personnelles</h2>
                <p>
                  Conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, l'utilisateur dispose d'un droit d'accès, de modification et de suppression des données qui le concernent.
                </p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                <h2>Cookies</h2>
                <p>
                  Le site peut collecter automatiquement des informations standards telles que les données de navigation de l'utilisateur, le système d'exploitation utilisé, etc.
                </p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                <h2>Conditions d'utilisation</h2>
                <p>
                  En utilisant ce site, l'utilisateur accepte pleinement et entièrement les conditions générales d'utilisation précisées dans les mentions légales.
                </p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                <h2>Contact</h2>
                <p>
                  Pour toute question, veuillez contacter Société Exemple par email à contact@societe-exemple.com ou par téléphone au 01 23 45 67 89.
                </p>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar
} from '@ionic/vue';
</script>

<style scoped>
ion-item {
  --padding-start: 0;
}
ion-label {
  white-space: pre-wrap;
}
</style>
