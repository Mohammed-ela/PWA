<template>
  <ion-page>
    <ion-header>
       <ion-toolbar color="primary">
        <ion-title>Paiement réussi</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-alert
        id="payment-alert"
        header="Paiement réussi"
        message="Votre paiement a été effectué avec succès."
        :buttons="alertButtons"
        css-class="custom-alert"
      ></ion-alert>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const alertButtons = [
  {
    text: 'Retour à mon compte',
    handler: () => {
      closeAlertAndRedirect();
    }
  }
];

const closeAlertAndRedirect = () => {
  const alert = document.querySelector('ion-alert');
  if (alert) {
    alert.dismiss().then(() => {
      router.push('/account');
    });
  }
};

onMounted(() => {
  setTimeout(() => {
    const alert = document.querySelector('ion-alert');
    if (alert) {
      alert.present();
    }
  }, 1); // Affiche l'alerte immédiatement

  setTimeout(() => {
    closeAlertAndRedirect();
  }, 5000); // Rediriger après 5 secondes
});
</script>

<style scoped>

</style>
