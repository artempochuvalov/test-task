import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store';

import '@/assets/styles/normalize.css'

const app = createApp(App);
app
.use(store)
.mount('#app');
