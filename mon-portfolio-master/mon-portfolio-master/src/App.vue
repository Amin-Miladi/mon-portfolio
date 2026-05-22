<template>
  <div id="app">
    <AppLoader v-if="isLoading" @finished="isLoading = false" />

    <header v-if="!isLoading" class="brand-header" role="banner">
      <div class="brand-name">AMIN MILADI</div>
    </header>

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
import AppLoader from './components/AppLoader.vue';
import MainMenu from './components/MainMenu.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppLoader, 
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

/* 🎯 CORRECTION : COMME LE FOOTER (S'ÉLOIGNE AU SCROLL) */
.brand-header {
  position: relative;
  z-index: 10000;
  width: 100%;
  text-align: left; /* Aligne le bloc à gauche */
}

/* 🎯 CORRECTION : COMME LE FOOTER (S'ÉLOIGNE AU SCROLL) */
.brand-name {
  position: relative;
  top: 24px;
  left: 24px;
  font-family: 'Futura PT', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  z-index: 10000;
  user-select: none;
  letter-spacing: 0.5px;
  display: inline-block; /* Conserve son alignement propre */
}

/* 🎯 UNE SEULE LIGNE POUR L'OPACITÉ MOINS VOYANTE */
body {
  margin: 0;
  padding: 0;
  overflow-y: auto;
  overflow-x: hidden;
  font-family: 'Trispace', sans-serif;
  width: 100%;
  position: relative;
  
  /* L'image est teintée avec un voile noir à 80% pour laisser transparaître 20% du fond manga */
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('~@/assets/fond_portfolio_manga.png') no-repeat center center fixed;
  background-size: cover;
}

/* Flèches de navigation */
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
  background: rgba(0, 0, 0, 0.7);
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

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
  #app {
    font-size: 1.2rem;
  }

  .brand-name {
    font-size: 1.2rem;
    top: 16px;
    left: 16px;
  }

  .scroll-hint {
    left: 10px;
    bottom: 80px;
    gap: 8px;
  }

  .scroll-btn {
    width: 40px;
    height: 40px;
    font-size: 16px;
    background: rgba(0, 0, 0, 0.85);
  }
}

@media (max-width: 480px) {
  .brand-name {
    font-size: 1.1rem;
  }

  .scroll-hint {
    bottom: 70px;
  }
}
</style>