<template>
  <div class="page-accueil" role="main">
    <header class="hero-brand-section">
      <h1 class="seo-hidden-title">Amin Miladi | Portfolio Officiel — Graphiste &amp; Vidéaste</h1>
      <div class="centered-text">
        <span class="sub-brand-text">Graphiste · Vidéaste</span>
      </div>
    </header>

    <section class="tools-section fade-in-up" aria-label="Outils et technologies maîtrisés">
      <h2 class="tools-title">Outils utilisés</h2>

      <div class="tools-carousel">
        <button 
          class="nav-button prev" 
          @click="prevSlide" 
          @mouseenter="stopAutoplay" 
          @mouseleave="startAutoplay" 
          aria-label="Outil précédent"
        >
          ‹
        </button>

        <div class="carousel-window" aria-live="polite">
          <div
            class="carousel-track"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              class="carousel-slide"
              v-for="(tool, index) in tools"
              :key="index"
              :aria-hidden="index !== currentIndex"
            >
              <div class="image-wrapper">
                <img :src="tool.src" :alt="`Logiciel ${tool.alt} maîtrisé par Amin Miladi`" class="tool-image" loading="lazy" />
              </div>
              <p class="tool-label">{{ tool.alt }}</p>
            </div>
          </div>
        </div>

        <button 
          class="nav-button next" 
          @click="nextSlide" 
          @mouseenter="stopAutoplay" 
          @mouseleave="startAutoplay" 
          aria-label="Outil suivant"
        >
          ›
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PageAccueil', 
  data() {
    return {
      currentIndex: 0,
      autoplayTimer: null,
      tools: [
        {
          alt: "Photoshop",
          src: "https://crn4955a.mmiweb.iut-tlse3.fr/croc_enzo/wp-content/uploads/2024/06/ps-1024x1024.png",
        },
        {
          alt: "After Effects",
          src: "https://crn4955a.mmiweb.iut-tlse3.fr/croc_enzo/wp-content/uploads/2024/06/af-1024x1024.png",
        },
        {
          alt: "Illustrator",
          src: "https://crn4955a.mmiweb.iut-tlse3.fr/croc_enzo/wp-content/uploads/2024/06/ai-1024x1024.png",
        },
        {
          alt: "InDesign",
          src: "https://crn4955a.mmiweb.iut-tlse3.fr/croc_enzo/wp-content/uploads/2024/06/id-1024x1024.png",
        },
        {
          alt: "Canva",
          src: "https://crn4955a.mmiweb.iut-tlse3.fr/croc_enzo/wp-content/uploads/2024/06/canva-1024x1024.png",
        },
        {
          alt: "Visual Studio Code",
          src: "https://crn4955a.mmiweb.iut-tlse3.fr/croc_enzo/wp-content/uploads/2024/06/vs-1024x1024.png",
        },
        {
          alt: "HTML",
          src: "https://crn4955a.mmiweb.iut-tlse3.fr/croc_enzo/wp-content/uploads/2024/06/html-1024x1024.png",
        },
        {
          alt: "CSS",
          src: "https://crn4955a.mmiweb.iut-tlse3.fr/croc_enzo/wp-content/uploads/2024/06/css-1024x1024.png",
        },
        {
          alt: "JavaScript",
          src: "https://crn4955a.mmiweb.iut-tlse3.fr/croc_enzo/wp-content/uploads/2024/06/js-1024x1024.png",
        },
        {
          alt: "WordPress",
          src: "https://crn4955a.mmiweb.iut-tlse3.fr/croc_enzo/wp-content/uploads/2024/06/wp-1024x1024.png",
        },
        {
          alt: "CapCut",
          src: "https://static.vecteezy.com/ti/vecteur-libre/p1/13948546-logo-capcut-sur-fond-blanc-transparent-gratuit-vectoriel.jpg",
        },
        {
          alt: "Procreate",
          src: "https://crn4955a.mmiweb.iut-tlse3.fr/croc_enzo/wp-content/uploads/2024/06/ai-1024x1024.png",
        },
      ],
    };
  },
  mounted() {
    this.startAutoplay();
    this.injectHomepageSEO();
  },
  beforeUnmount() {
    this.stopAutoplay();
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.tools.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.tools.length) % this.tools.length;
    },
    startAutoplay() {
      this.stopAutoplay();
      this.autoplayTimer = setInterval(() => {
        this.nextSlide();
      }, 4000); // Transition fluide toutes les 4 secondes
    },
    stopAutoplay() {
      if (this.autoplayTimer) {
        clearInterval(this.autoplayTimer);
        this.autoplayTimer = null;
      }
    },
    injectHomepageSEO() {
      document.title = "Amin Miladi | Portfolio Officiel - Graphiste & Vidéaste";
      const currentUrl = window.location.origin;
      const pageDescription = "Portfolio officiel d'Amin Miladi, créateur multimédia. Découvrez mes univers et compétences en montage vidéo, motion design, design graphique et illustrations.";

      const setMetaTag = (attribute, name, content) => {
        let meta = document.querySelector(`meta[${attribute}="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute(attribute, name);
          document.head.appendChild(meta);
        }
        meta.content = content;
      };

      setMetaTag('name', 'description', pageDescription);
      setMetaTag('name', 'keywords', "Amin Miladi, Amin Miladi portfolio, am.lab1, graphiste Amin Miladi, vidéaste Amin Miladi, monteur vidéo, motion design, design graphique, BUT MMI");
      setMetaTag('name', 'robots', "index, follow, max-image-preview:large");

      const legacyScript = document.getElementById("jsonld-home-master-seo");
      if (legacyScript) legacyScript.remove();

      // Structure d'autorité pour forcer Google à positionner le site sur la requête principale "Amin Miladi"
      const jsonLdStructure = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": currentUrl + "/#website",
            "url": currentUrl,
            "name": "Amin Miladi Portfolio",
            "description": pageDescription,
            "publisher": {
              "@type": "Person",
              "name": "Amin Miladi",
              "jobTitle": "Graphiste & Vidéaste"
            }
          }
        ]
      };

      const scriptTag = document.createElement('script');
      scriptTag.id = "jsonld-home-master-seo";
      scriptTag.type = "application/ld+json";
      scriptTag.text = JSON.stringify(jsonLdStructure);
      document.head.appendChild(scriptTag);
    }
  },
};
</script>

<style scoped>
/* Page accueil layout */
.page-accueil {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding-bottom: 60px;
}

/* Zone supérieure de la marque */
.hero-brand-section {
  position: relative;
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Masquage sémantique pour Google */
.seo-hidden-title {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Épurement typographique : pas de gras */
.centered-text {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 5;
  width: max-content;
  user-select: none;
}

.sub-brand-text {
  font-family: 'Futura PT', 'Segoe UI', sans-serif;
  font-size: 3.5rem;
  font-weight: 300; /* Version épurée, fine et linéaire */
  color: #ffffff;
  letter-spacing: 1px;
}

/* ====== COMPOSANT CARROUSEL LOGICIELS ====== */
.tools-section {
  width: 100%;
  padding: 0 24px 40px 24px;
  text-align: center;
  font-family: 'Futura PT', sans-serif;
  box-sizing: border-box;
}

.tools-title {
  font-size: 1.5rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 25px;
  color: rgba(255, 255, 255, 0.9);
}

.tools-carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  max-width: 600px;
  margin: 0 auto;
}

.carousel-window {
  overflow: hidden;
  width: 240px;
}

.carousel-track {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

.carousel-slide {
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-wrapper {
  width: 140px;
  height: 140px;
  background: #0d0d0d;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7);
  box-sizing: border-box;
}

.tool-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(10%);
}

.tool-label {
  margin-top: 14px;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.6);
}

/* Boutons de contrôle directionnels */
.nav-button {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  width: 42px; 
  height: 42px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.2s ease;
  user-select: none;
  outline: none;
}

.nav-button:hover {
  background: #ff5722;
  border-color: #ff5722;
  transform: scale(1.08);
}

.nav-button:active {
  transform: scale(0.95);
}

/* ====== COMPORTEMENT RESPONSIVE GLOBAL ====== */
@media (max-width: 768px) {
  .sub-brand-text {
    font-size: 2.3rem;
  }
  
  .carousel-window {
    width: 200px; 
  }

  .image-wrapper {
    width: 120px;
    height: 120px;
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .page-accueil {
    padding-bottom: 90px; /* Évite les télescopages avec les flèches globales */
  }

  .sub-brand-text {
    font-size: 1.8rem;
    letter-spacing: 0.5px;
  }

  .tools-title {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  .tools-carousel {
    gap: 12px; 
  }

  .carousel-window {
    width: 160px; 
  }

  .image-wrapper {
    width: 110px;
    height: 110px;
    border-radius: 12px;
  }

  .nav-button {
    width: 36px;
    height: 36px;
    font-size: 1.2rem;
  }
}

/* Intégration de l'animation d'apparition cinématique */
.fade-in-up {
  opacity: 0;
  animation: fadeInUpMaster 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

@keyframes fadeInUpMaster {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>