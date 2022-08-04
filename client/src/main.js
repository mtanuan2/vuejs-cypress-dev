import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'normalize.css'

// commented out
// createApp(App).use(router).use(store).mount('#app')

// modified for Cypress add event mock testing
const app = createApp(App).use(router).use(store).mount('#app');

if (window.Cypress) {
  window.__app__ = app;
}