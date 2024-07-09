<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Contact</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">

      <ion-card>
        <ion-card-header>
          <ion-card-title>Formulaire de Contact</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <form @submit.prevent="sendContactForm">
            <ion-list>
              <ion-item>
                <ion-input
                  label="Nom/Prénom"
                  labelPlacement="stacked"
                  v-model="state.contactName"
                  :class="{ 'has-error': v$.contactName.$error }"
                  required
                  clear-input
                >
                  <ion-icon slot="start" name="person-outline" class="input-icon"></ion-icon>
                </ion-input>
                <ion-note slot="helper" v-if="v$.contactName.$error">Ce champ est requis</ion-note>
              </ion-item>
              <ion-item>
                <ion-input
                  label="Email"
                  labelPlacement="stacked"
                  v-model="state.contactEmail"
                  :class="{ 'has-error': v$.contactEmail.$error }"
                  type="email"
                  required
                  clear-input
                >
                  <ion-icon slot="start" name="mail-outline" class="input-icon"></ion-icon>
                </ion-input>
                <ion-note slot="helper" v-if="v$.contactEmail.$error">Email non valide</ion-note>
              </ion-item>
              <ion-item>
                <ion-input
                  label="Objet"
                  labelPlacement="stacked"
                  v-model="state.contactSubject"
                  :class="{ 'has-error': v$.contactSubject.$error }"
                  required
                  clear-input
                >
                  <ion-icon slot="start" name="help-outline" class="input-icon"></ion-icon>
                </ion-input>
                <ion-note slot="helper" v-if="v$.contactSubject.$error">Ce champ est requis</ion-note>
              </ion-item>
              <ion-item>
                <ion-textarea
                  label="Message"
                  labelPlacement="stacked"
                  v-model="state.contactMessage"
                  :class="{ 'has-error': v$.contactMessage.$error }"
                  required
                  clear-input
                >
                  <ion-icon slot="start" name="chatbubbles-outline" class="input-icon"></ion-icon>
                </ion-textarea>
                <ion-note slot="helper" v-if="v$.contactMessage.$error">Minimum 50 caractères</ion-note>
              </ion-item>
            </ion-list>
            <ion-button expand="full" shape="round" type="submit" :disabled="v$.$invalid">Envoyer</ion-button>
          </form>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Contactez-nous</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-icon :icon="icons.locationOutline" slot="start"></ion-icon>
              <ion-label>
                <h2>Adresse :</h2>
                <p>19 rue Yves Toudic, 75010 Paris</p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-icon :icon="icons.callOutline" slot="start"></ion-icon>
              <ion-label>
                <h2>Téléphone :</h2>
                <p>01 23 45 67 89</p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-icon :icon="icons.mailOutline" slot="start"></ion-icon>
              <ion-label>
                <h2>Email :</h2>
                <p>contact@webstart.fr</p>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Nous situer</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.890080960569!2d2.364290915673417!3d48.86970847928832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1c3ed7a0c5%3A0x1a2a8e9e6e09db20!2s19%20Rue%20Yves%20Toudic%2C%2075010%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1638282062582!5m2!1sen!2sus"
            width="100%"
            height="250"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </ion-card-content>
      </ion-card>
      
      <ion-alert :is-open="showAlert" header="Succès" message="Votre message a été envoyé avec succès!" :buttons="['OK']" @didDismiss="showAlert = false"></ion-alert>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, reactive } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import {
  IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTextarea, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonNote, IonIcon, IonAlert
} from '@ionic/vue';
import { locationOutline, callOutline, mailOutline, personOutline, helpOutline, chatbubblesOutline } from 'ionicons/icons';
import apiClient from '@/axios';

const state = reactive({
  contactName: '',
  contactEmail: '',
  contactSubject: '',
  contactMessage: ''
});

const rules = {
  contactName: { required },
  contactEmail: { required, email },
  contactSubject: { required },
  contactMessage: { required, minLength: minLength(50) }
};

const v$ = useVuelidate(rules, state);

const icons = {
  locationOutline,
  callOutline,
  mailOutline,
  personOutline,
  helpOutline,
  chatbubblesOutline
};
const showAlert = ref(false);
const sendContactForm = async () => {
  v$.value.$touch();
  if (v$.value.$invalid) {
    return;
  }

  try {
    await apiClient.post('/contact', {
      name: state.contactName,
      email: state.contactEmail,
      subject: state.contactSubject,
      message: state.contactMessage
    });
    showAlert.value = true;

    state.contactName = '';
    state.contactEmail = '';
    state.contactSubject = '';
    state.contactMessage = '';
    v$.value.$reset();
    console.log("Formulaire envoyé avec succès!");
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire de contact:', error.response.data);
  }
};
</script>

<style scoped>
.ion-card-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.ion-note {
  color: var(--ion-color-danger);
}

.has-error ion-input, .has-error ion-textarea {
  --background: var(--ion-color-danger-tint);
}

.input-icon {
  margin-top: 15px;
}

.ion-padding {
  padding: 16px;
}
</style>
