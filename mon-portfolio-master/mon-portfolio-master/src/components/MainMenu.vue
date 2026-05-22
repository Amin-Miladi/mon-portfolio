<template>
  <nav class="navigation-hub" role="navigation" aria-label="Menu principal Amin Miladi">
    <div 
      class="burger-menu" 
      @click="toggleMenu" 
      :class="{ 'open': isMenuOpen }"
      role="button"
      :aria-expanded="isMenuOpen.toString()"
      aria-label="Ouvrir le menu de navigation"
    >
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
  data() {
    return {
      isMenuOpen: false
    };
  },
  mounted() {
    this.injectNavigationSEO();
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    injectNavigationSEO() {
      const oldScript = document.getElementById("jsonld-navigation-seo");
      if (oldScript) oldScript.remove();

      const siteUrl = window.location.origin;

      const navigationSchema = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "SiteNavigationElement",
            "@id": siteUrl + "#main-menu",
            "name": ["Accueil", "A Propos de Amin Miladi", "Projets Portfolio", "Contact Amin Miladi"],
            "url": [
              siteUrl + "/accueil",
              siteUrl + "/cv",
              siteUrl + "/projets",
              siteUrl + "/contact"
            ]
          }
        ]
      };

      const script = document.createElement('script');
      script.id = "jsonld-navigation-seo";
      script.type = "application/ld+json";
      script.text = JSON.stringify(navigationSchema);
      document.head.appendChild(script);
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Futura:wght@400;600&display=swap');

.navigation-hub {
  position: relative;
  z-index: 10000;
}

/* 🎯 CORRECTION : COMME LE FOOTER (S'ÉLOIGNE AU SCROLL SUR DESKTOP) */
.shadow-button-set {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 3rem;
  position: absolute; /* Aligné par rapport au bandeau parent */
  top: 24px;
  right: 24px;
  list-style: none;
  z-index: 10000;
}

.shadow-button-set > li {
  display: inline-flex;
}

.shadow-button-set > li > a {
  font-family: 'Futura PT', 'Futura', sans-serif;
  font-size: 1.35rem;
  font-weight: 300;
  text-decoration: none;
  color: white;
  padding: 0.5rem 1rem;
  transition: color 0.3s cubic-bezier(0.25, 1, 0.5, 1), transform 0.2s ease;
  letter-spacing: 0.5px;
}

.shadow-button-set > li > a:hover {
  color: #ff5722;
  transform: translateY(-1px);
}

.shadow-button-set > li > a.router-link-active,
.shadow-button-set > li > a.active-link {
  color: #ff5722;
  font-weight: 400;
  border-bottom: 1px solid #ff5722;
}

.shadow-button-set > li > a:focus {
  outline: none;
}

/* Bouton Burger */
.burger-menu {
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 6px;
  position: fixed; /* Reste fixe pour l'accessibilité de l'index sur mobile */
  top: 24px;
  right: 24px;
  z-index: 10002;
  padding: 5px;
  background: transparent;
}

.burger-menu span {
  display: block;
  width: 28px;
  height: 2px;
  background-color: white;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  transform-origin: center;
}

/* ====== RESPONSIVE MENUS AVANCÉS ====== */
@media (max-width: 768px) {
  .burger-menu {
    display: flex;
    top: 18px;
    right: 18px;
  }

  /* Sur mobile, on conserve la structure fixed du volet latéral pour le confort de navigation */
  .shadow-button-set {
    display: flex; 
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.98);
    position: fixed;
    top: 0;
    right: 0;
    width: 65%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    padding: 0;
    margin: 0;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    border-left: 1px solid rgba(255, 255, 255, 0.05);
  }

  .shadow-button-set.menu-mobile-open {
    transform: translateX(0);
  }

  .shadow-button-set > li > a {
    font-size: 1.6rem;
    letter-spacing: 1px;
    padding: 10px 20px;
  }

  .shadow-button-set > li > a.router-link-active,
  .shadow-button-set > li > a.active-link {
    border-bottom: 2px solid #ff5722;
  }

  .burger-menu.open span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
    background-color: #ff5722;
  }
  .burger-menu.open span:nth-child(2) {
    opacity: 0;
    transform: translateX(-10px);
  }
  .burger-menu.open span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
    background-color: #ff5722;
  }
}

@media (max-width: 480px) {
  .burger-menu {
    top: 14px;
    right: 14px;
  }

  .shadow-button-set {
    width: 100%;
  }

  .shadow-button-set > li > a {
    font-size: 1.45rem;
  }
}

@media (max-height: 440px) {
  .shadow-button-set {
    gap: 1.2rem;
  }
  .shadow-button-set > li > a {
    font-size: 1.25rem;
    padding: 5px 10px;
  }
}
</style>
