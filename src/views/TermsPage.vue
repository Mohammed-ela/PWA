<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>CGU/CGV</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Mauris vehicula, urna eget sollicitudin vehicula, eros libero iaculis arcu, non aliquet purus urna vel dolor. Phasellus vitae cursus nulla. Integer a mi nec nunc dictum congue. Integer non justo vel odio tincidunt commodo. Integer nec dolor et purus accumsan cursus.
          </p>
          <p>
            Integer ultricies, sapien non fermentum dignissim, orci odio pulvinar purus, ac cursus lacus nisi vitae ligula. Sed non nisl quis lorem luctus sodales. Donec consectetur lectus quis tellus accumsan, in varius lorem aliquet. Morbi posuere dui id magna vestibulum cursus. Donec posuere tortor at sapien tristique, ac fermentum justo pulvinar. In scelerisque vehicula arcu, ut rhoncus justo vehicula non.
          </p>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<style scoped>
ion-card-content {
  white-space: pre-wrap;
}
</style>
