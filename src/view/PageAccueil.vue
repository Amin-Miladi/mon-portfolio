<template>
  <div class="page-accueil">
    <div class="centered-text">
      Portfolio
    </div>

    <section class="tools-section fade-in-up">
      <h1 class="tools-title">Outils utilisés</h1>

      <div class="tools-carousel">
        <button class="nav-button prev" @click="prevSlide" aria-label="Précédent">
          ‹
        </button>

        <div class="carousel-window">
          <div
            class="carousel-track"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              class="carousel-slide"
              v-for="(tool, index) in tools"
              :key="index"
            >
              <img :src="tool.src" :alt="tool.alt" class="tool-image" />
              <p class="tool-label">{{ tool.alt }}</p>
            </div>
          </div>
        </div>

        <button class="nav-button next" @click="nextSlide" aria-label="Suivant">
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
          src: "https://crn4955a.mmiweb.iut-tlse3.fr/croc_enzo/wp-content/uploads/2024/06/ai-1024x1024.png", // Remplacement par un lien valide si besoin
        },
      ],
    };
  },

  mounted() {
    this.startAutoplay();
  },
  beforeUnmount() {
    this.stopAutoplay();
  },

  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.tools.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.tools.length) % this.tools.length;
    },
    startAutoplay() {
      this.stopAutoplay();
      this.autoplayTimer = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    stopAutoplay() {
      if (this.autoplayTimer) {
        clearInterval(this.autoplayTimer);
        this.autoplayTimer = null;
      }
    },
  },
};
</script>

<style scoped>
/* Centrer le texte et l'agrandir */
.centered-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Futura PT', sans-serif;
  font-size: 3.5rem;
  font-weight: bold;
  color: white;
  text-align: center;
  z-index: 1;
}

/* Page accueil layout */
.page-accueil {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* ====== CARROUSEL ====== */

.tools-section {
  margin-top: 65vh; /* ✅ AJUSTÉ : On donne un peu plus d'air sous le mot Portfolio */
  padding: 40px 20px 60px;
  text-align: center;
  font-family: 'Futura PT', sans-serif;
}

.tools-title {
  font-size: 2rem;
  margin-bottom: 30px; /* ✅ RÉDUIT : Évite de trop descendre sur mobile */
  color: #ffffff;
}

.tools-carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
}

.carousel-window {
  overflow: hidden;
  width: 260px;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide {
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tool-image {
  width: 220px;
  height: 220px;
  object-fit: contain;
  border-radius: 16px;
  background: #111;
  padding: 12px;
}

.tool-label {
  margin-top: 10px;
  font-size: 0.95rem;
  color: #ffffff;
}

/* Boutons navigation */
.nav-button {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  width: 40px; /* ✅ AGRANDI : Plus facile pour le tactile */
  height: 40px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, transform 0.15s ease;
}

/* Responsive Design */
@media (max-width: 768px) {
  .centered-text {
    font-size: 2.5rem;
  }

  .tools-section {
    margin-top: 55vh;
  }

  .carousel-window {
    width: 200px; /* ✅ AJUSTÉ : Fenêtre plus étroite */
  }

  .tool-image {
    width: 170px;
    height: 170px;
  }
}

@media (max-width: 480px) {
  .centered-text {
    font-size: 2rem;
    width: 90%;
  }

  .tools-title {
    font-size: 1.5rem;
  }

  .tools-carousel {
    gap: 8px; /* ✅ RÉDUIT : Évite que les flèches sortent de l'écran */
  }

  .carousel-window {
    width: 160px; /* ✅ AJUSTÉ : Plus petit pour les petits téléphones */
  }

  .tool-image {
    width: 140px;
    height: 140px;
  }

  .nav-button {
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
  }
}

/* Animation fadeIn */
.fade-in-up {
  opacity: 0;
  animation: fadeInUp 1.25s forwards;
}

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>