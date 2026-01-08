<template>
  <nav>
    <div class="burger-menu" @click="toggleMenu" :class="{ 'open': isMenuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <ul class="shadow-button-set" :class="{ 'menu-mobile-open': isMenuOpen }">
      <li><router-link to="/accueil" exact-active-class="active-link" @click="closeMenu">Accueil</router-link></li>
      <li><router-link to="/cv" exact-active-class="active-link" @click="closeMenu">A Propos</router-link></li>
      <li><router-link to="/projets" exact-active-class="active-link" @click="closeMenu">Projets</router-link></li>
      <li><router-link to="/contact" exact-active-class="active-link" @click="closeMenu">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainMenu',
  // ✅ AJOUT : Logique pour ouvrir/fermer le menu
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};
</script>

<style scoped>
/* Importation de la typographie FUTURA */
@import url('https://fonts.googleapis.com/css2?family=Futura:wght@400;600&display=swap');

/* Styles globaux du menu (TON CODE ORIGINAL) */
.shadow-button-set {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 3rem;
  position: absolute;
  top: 20px;
  right: 20px;
  list-style: none; /* ✅ Ajout pour enlever les puces */
  z-index: 100;
}

.shadow-button-set > li {
  display: inline-flex;
}

.shadow-button-set > li > a {
  font-family: 'Futura PT', sans-serif;
  font-size: 1.5rem;
  text-decoration: none;
  color: white;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease-in-out;
}

.shadow-button-set > li > a:hover {
  color: #ff4500;
}

.shadow-button-set > li > a.router-link-active {
  font-weight: bold;
  transition: font-size 0.2s ease;
}

.shadow-button-set > li > a:focus {
  outline: none;
}

/* ✅ AJOUT : Style du bouton Burger (caché par défaut sur PC) */
.burger-menu {
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 101;
}

.burger-menu span {
  display: block;
  width: 30px;
  height: 3px;
  background-color: white;
  transition: 0.3s;
}

/* ✅ NOUVEAU RESPONSIVE */

@media (max-width: 768px) {
  .burger-menu {
    display: flex; /* On affiche les 3 traits sur mobile */
  }

  /* Transformation du menu en volet latéral ou plein écran */
  .shadow-button-set {
    display: none; /* On cache le menu par défaut */
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.95); /* Fond noir pour le menu mobile */
    position: fixed;
    top: 0;
    right: 0;
    width: 70%; /* Largeur du menu mobile */
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  /* Quand le menu est ouvert via le clic burger */
  .shadow-button-set.menu-mobile-open {
    display: flex;
  }

  .shadow-button-set > li > a {
    font-size: 1.8rem; /* Plus gros pour le doigt */
  }

  /* Animation des 3 traits pour faire une croix quand c'est ouvert */
  .burger-menu.open span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .burger-menu.open span:nth-child(2) {
    opacity: 0;
  }
  .burger-menu.open span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}

/* Media query pour les écrans très petits (mobiles) */
@media (max-width: 480px) {
  .shadow-button-set {
    width: 100%; /* Plein écran sur très petit mobile */
  }
}
</style>