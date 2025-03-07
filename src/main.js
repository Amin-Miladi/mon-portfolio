import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importer le routeur

const app = createApp(App);

app.use(router); // Ajouter le routeur à l'application
app.mount('#app');
