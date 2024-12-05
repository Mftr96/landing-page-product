import { createApp } from 'vue';
//bootstrap libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//imported fonts
import '@fontsource/montserrat';
import '@fontsource/poppins';
//font awesome imported (to use as components)
//to import as <font-awesome-icon :icon="[]"/>
import { library } from '@fortawesome/fontawesome-svg-core';

import './style.css';
import App from './App.vue';

createApp(App)
    .mount('#app');
