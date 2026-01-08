<template>
  <div id="app">
    <AppLoader v-if="isLoading" @finished="isLoading = false" />

    <BackgroundCanvas v-if="!isLoading" />

    <MainMenu v-if="!isLoading" />

    <router-view v-if="!isLoading" />

    <div v-if="!isLoading" class="scroll-hint">
      <button
        v-if="hasPrev"
        class="scroll-btn"
        type="button"
        aria-label="Page précédente"
        @click="goPrev"
      >
        ▲
      </button>

      <button
        v-if="hasNext"
        class="scroll-btn"
        type="button"
        aria-label="Page suivante"
        @click="goNext"
      >
        ▼
      </button>
    </div>

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
    AppLoader, 
    BackgroundCanvas,
    MainMenu, 
    AppFooter, 
  },
  data() {
    return {
      isLoading: true, 
      routesOrder: ['/accueil', '/cv', '/projets', '/contact'],
    };
  },
  computed: {
    currentIndex() {
      return this.routesOrder.indexOf(this.$route.path);
    },
    hasPrev() {
      return this.currentIndex > 0;
    },
    hasNext() {
      return this.currentIndex !== -1 && this.currentIndex < this.routesOrder.length - 1;
    },
  },
  methods: {
    goNext() {
      if (!this.hasNext) return;
      this.$router.push(this.routesOrder[this.currentIndex + 1]);
      window.scrollTo({ top: 0, behavior: 'auto' });
    },
    goPrev() {
      if (!this.hasPrev) return;
      this.$router.push(this.routesOrder[this.currentIndex - 1]);
      window.scrollTo({ top: 0, behavior: 'auto' });
    },
  },
};
</script>

<style>
/* Style global */
#app {
  font-family: 'Futura PT', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
}

/* Styles globaux pour activer le scroll */
body {
  margin: 0;
  padding: 0;
  overflow-y: auto;
  overflow-x: hidden; /* ✅ EMPÊCHE LE SCROLL HORIZONTAL SUR MOBILE */
  font-family: 'Trispace', sans-serif;
  background-color: #000;
  width: 100%;
}

/* ✅ AJOUT : flèches à gauche (ne touche pas le footer) */
.scroll-hint {
  position: fixed;
  left: 16px;
  bottom: 90px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 9999;
}

.scroll-btn {
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(0, 0, 0, 0.7); /* ✅ PLUS OPAQUE POUR LA LISIBILITÉ */
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  display: grid;
  place-items: center;
  transition: transform 0.15s ease, background 0.2s ease;
}

.scroll-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: scale(1.05);
}

/* RESPONSIVE FLÈCHES */
@media (max-width: 768px) {
  #app {
    font-size: 1.2rem; /* ✅ RÉDUIT LA TAILLE GLOBALE SUR MOBILE */
  }

  .scroll-hint {
    left: 10px; /* ✅ PLUS PRÈS DU BORD POUR LAISSER DE LA PLACE AU TEXTE */
    bottom: 80px; 
    gap: 8px;
  }

  .scroll-btn {
    width: 40px; /* ✅ UN PEU PLUS PETIT SUR MOBILE */
    height: 40px;
    font-size: 16px;
    background: rgba(0, 0, 0, 0.85); /* ✅ ENCORE PLUS OPAQUE */
  }
}

/* OPTIMISATION POUR LES TRÈS PETITS ÉCRANS */
@media (max-width: 480px) {
  .scroll-hint {
    bottom: 70px; /* ✅ REMONTE LÉGÈREMENT POUR NE PAS COLLER AU FOOTER MOBILE */
  }
}
</style>