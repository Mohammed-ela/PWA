import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { IonicVue } from '@ionic/vue';
import { addIcons } from 'ionicons';
//import icon
import {
  logInOutline, logInSharp, personAddOutline, personAddSharp, personOutline, personSharp, logOutOutline, logOutSharp, newspaperOutline, newspaperSharp,
  pricetagOutline, pricetagSharp, mailOutline, mailSharp, informationCircleOutline, informationCircleSharp, documentTextOutline, documentTextSharp,
  shieldOutline, shieldSharp, checkmarkCircle, logoDiscord, logoFacebook, helpCircleOutline, helpCircleSharp, lockClosedOutline, lockClosedSharp,
  eyeOutline, eyeSharp, eyeOffOutline, eyeOffSharp, homeOutline, homeSharp, settingsOutline, settingsSharp, warningOutline, warningSharp, searchOutline,
  searchSharp, ellipsisVerticalOutline, ellipsisVerticalSharp, ellipsisHorizontalOutline, ellipsisHorizontalSharp, arrowBackOutline, arrowBackSharp,
  arrowForwardOutline, arrowForwardSharp, addCircleOutline, addCircleSharp, removeCircleOutline, removeCircleSharp, pricetagsOutline,locationOutline, callOutline, helpOutline, chatbubblesOutline
} from 'ionicons/icons';

// Core CSS required for Ionic components to work properly
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

// Optional CSS utils that can be commented out
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

// Ionic Dark Mode
import '@ionic/vue/css/palettes/dark.css';

// Theme variables
import './theme/variables.css';

// Add Icons
addIcons({
  'chatbubblesOutline':chatbubblesOutline,
  'callOutline':callOutline,
  'helpOutline':helpOutline,
  'log-in-outline': logInOutline,
  'log-in-sharp': logInSharp,
  'person-add-outline': personAddOutline,
  'person-add-sharp': personAddSharp,
  'person-outline': personOutline,
  'person-sharp': personSharp,
  'log-out-outline': logOutOutline,
  'log-out-sharp': logOutSharp,
  'newspaper-outline': newspaperOutline,
  'newspaper-sharp': newspaperSharp,
  'pricetag-outline': pricetagOutline,
  'pricetag-sharp': pricetagSharp,
  'mail-outline': mailOutline,
  'mail-sharp': mailSharp,
  'information-circle-outline': informationCircleOutline,
  'information-circle-sharp': informationCircleSharp,
  'document-text-outline': documentTextOutline,
  'document-text-sharp': documentTextSharp,
  'shield-outline': shieldOutline,
  'shield-sharp': shieldSharp,
  'checkmark-circle': checkmarkCircle,
  'logo-discord': logoDiscord,
  'logo-facebook': logoFacebook,
  'help-circle-outline': helpCircleOutline,
  'help-circle-sharp': helpCircleSharp,
  'lock-closed-outline': lockClosedOutline,
  'lock-closed-sharp': lockClosedSharp,
  'eye-outline': eyeOutline,
  'eye-sharp': eyeSharp,
  'eye-off-outline': eyeOffOutline,
  'eye-off-sharp': eyeOffSharp,
  'home-outline': homeOutline,
  'home-sharp': homeSharp,
  'settings-outline': settingsOutline,
  'settings-sharp': settingsSharp,
  'warning-outline': warningOutline,
  'warning-sharp': warningSharp,
  'search-outline': searchOutline,
  'search-sharp': searchSharp,
  'ellipsis-vertical-outline': ellipsisVerticalOutline,
  'ellipsis-vertical-sharp': ellipsisVerticalSharp,
  'ellipsis-horizontal-outline': ellipsisHorizontalOutline,
  'ellipsis-horizontal-sharp': ellipsisHorizontalSharp,
  'arrow-back-outline': arrowBackOutline,
  'arrow-back-sharp': arrowBackSharp,
  'arrow-forward-outline': arrowForwardOutline,
  'arrow-forward-sharp': arrowForwardSharp,
  'add-circle-outline': addCircleOutline,
  'add-circle-sharp': addCircleSharp,
  'remove-circle-outline': removeCircleOutline,
  'remove-circle-sharp': removeCircleSharp,
  'pricetags-outline': pricetagsOutline,
  'locationOutline' :locationOutline,

});

// Pinia
const pinia = createPinia();

// IonicVue
const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(pinia);
  
router.isReady().then(() => {
  app.mount('#app');
});
