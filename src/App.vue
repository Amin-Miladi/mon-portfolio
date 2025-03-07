<template>
  <div id="app">
    <!-- Loader au démarrage -->
    <AppLoader v-if="isLoading" @finished="isLoading = false" />

    <!-- Fond animé -->
    <BackgroundCanvas v-if="!isLoading" />

    <!-- Menu de navigation -->
    <MainMenu v-if="!isLoading" />

    <!-- Contenu principal (les différentes pages) -->
    <router-view v-if="!isLoading" />

    <!-- Footer -->
    <AppFooter v-if="!isLoading" />
  </div>
</template>

<script>
import AppLoader from './components/AppLoader.vue'; // Animation de chargement
import BackgroundCanvas from './components/BackgroundCanvas.vue'; // Fond animé
import MainMenu from './components/MainMenu.vue'; // Menu de navigation
import AppFooter from './components/AppFooter.vue'; // Footer ajouté ici

export default {
  name: 'App',
  components: {
    AppLoader, // Loader corrigé
    BackgroundCanvas,
    MainMenu, // Menu corrigé
    AppFooter, // Footer ajouté
  },
  data() {
    return {
      isLoading: true, // Loader affiché au début
    };
  },
};
</script>

<style>
/* Style global (inchangé) */
#app {
  font-family: 'Futura PT', sans-serif; /* Typographie FUTURA PT */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff; /* Texte blanc */
  text-align: center;
  font-size: 1.5rem; /* Taille du texte */
  font-weight: bold; /* Texte en gras */
  text-align: center; /* Centrer le texte */
}

/* Empêche le scroll pendant le chargement */
/* Styles globaux pour activer le scroll */
body {
  margin: 0;
  padding: 0;
  overflow-y: auto; /* Active le défilement vertical */
  font-family: 'Trispace', sans-serif; /* Police par défaut */
  background-color: #000; /* Fond noir */
}

</style>
