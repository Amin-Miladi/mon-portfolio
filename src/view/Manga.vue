<template>
  <div class="project-detail">
    <h1 class="title">Projet Manga - Genesis Zero</h1>
    <p class="description">
      Plongez dans l'univers de Genesis Zero, mon projet de création manga.
    </p>

    <div class="project-section">
      <h2 class="section-title">Synopsis</h2>
      <p class="section-text">
        Dans un monde futuriste, une expérience scientifique tourne mal et provoque l'apparition d'un trou noir mystérieux, appelé Athanéon, qui dévore toute forme d'énergie, y compris les êtres vivants. Seuls quatre lycéens, Satoru, Hana, Toru et Kenta, survivent miraculeusement.
      </p>
      <p class="section-text">
        Face à la catastrophe, les quatre amis devront unir leurs forces pour renverser le scientifique à l'origine de l'expérience et tenter de réparer le monde, dans une course contre la montre mêlant stratégie et voyages temporels.
      </p>
    </div>

    <div class="project-section">
      <h2 class="section-title">Personnages</h2>
      <div class="images-container">
        <img
          v-for="(image, index) in images"
          :key="index"
          class="project-image"
          :src="image.src"
          :alt="image.alt"
          @click="openLightbox(index)"
        />
      </div>
    </div>

    <div
      v-if="isLightboxOpen"
      class="lightbox-overlay"
      @click.self="closeLightbox"
    >
      <button class="lightbox-close" @click="closeLightbox">×</button>

      <button class="lightbox-prev" @click.stop="prevImage">‹</button>

      <img
        class="lightbox-image"
        :src="images[currentIndex].src"
        :alt="images[currentIndex].alt"
      />

      <button class="lightbox-next" @click.stop="nextImage">›</button>
    </div>
  </div>
</template>

<script>
import perso from "@/assets/personnage_de_mon_manga.png";
import dessin from "@/assets/dessin.png";

import toru from "@/assets/toru.png";
import scientifique from "@/assets/scientifique.png";
import Satoru from "@/assets/Satoru.png";
import mockup from "@/assets/mockup.png";
import kenta from "@/assets/kenta.png";
import hana from "@/assets/hana.png";
import gensis_zero from "@/assets/gensis_zero.png";

export default {
  name: "MangaPage",
  data() {
    return {
      images: [
        {
          // ✅ URL CORRIGÉE (image qui était cassée)
          src: "https://cdn.myportfolio.com/905c9151-2f7d-4626-b84f-d8b2df0a099b/ea4a8b15-ab92-4c91-87d2-de04827f028f_rw_600.png?h=463c529fe1889c71e6a2df16f3501f6b",
          alt: "Illustration Genesis Zero",
        },
        { src: gensis_zero, alt: "Genesis Zero" },
        { src: Satoru, alt: "Satoru" },
        { src: hana, alt: "Hana" },
        { src: toru, alt: "Toru" },
        { src: kenta, alt: "Kenta" },
        { src: scientifique, alt: "Scientifique" },
        { src: perso, alt: "Personnage manga" },
        { src: dessin, alt: "Dessin manga" },
        { src: mockup, alt: "Mockup" },
      ],
      isLightboxOpen: false,
      currentIndex: 0,
    };
  },
  methods: {
    openLightbox(index) {
      this.currentIndex = index;
      this.isLightboxOpen = true;
      document.body.style.overflow = "hidden";
    },
    closeLightbox() {
      this.isLightboxOpen = false;
      document.body.style.overflow = "";
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    handleKeydown(event) {
      if (!this.isLightboxOpen) return;
      if (event.key === "Escape") this.closeLightbox();
      if (event.key === "ArrowRight") this.nextImage();
      if (event.key === "ArrowLeft") this.prevImage();
    },
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
    document.body.style.overflow = "";
  },
};
</script>

<style scoped>
.project-detail {
  padding: 20px;
  color: #ffffff;
  font-family: "Futura PT", sans-serif;
  margin-top: 100px;
}

.title {
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}

.description {
  font-size: 20px;
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.section-text {
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
}

/* GRID 2 COLONNES */
.images-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  max-width: 900px;
  margin: 0 auto;
}

.project-image {
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  border-radius: 8px;
  cursor: pointer;
}

.project-image:hover {
  transform: scale(1.02);
}

/* LIGHTBOX */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.lightbox-image {
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
}

.lightbox-close {
  position: fixed;
  top: 20px;
  right: 30px;
  font-size: 2.5rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.lightbox-prev,
.lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.lightbox-prev {
  left: 20px;
}

.lightbox-next {
  right: 20px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .images-container {
    grid-template-columns: 1fr; /* Box en une seule colonne */
  }

  .project-detail {
    margin-top: 80px; /* Réduction du margin-top pour mobile */
  }

  .title {
    font-size: 24px; /* Texte adapté */
  }

  .description, .section-text {
    font-size: 16px; /* Texte plus petit */
  }

  /* ✅ RÉTRÉCISSEMENT DES FLÈCHES SUR MOBILE */
  .lightbox-prev, .lightbox-next {
    font-size: 2rem;
    bottom: 20px;
    top: auto;
    transform: none;
  }
  .lightbox-prev { left: 25%; }
  .lightbox-next { right: 25%; }
}

@media (max-width: 480px) {
  .title {
    font-size: 20px;
  }
  .project-image {
    max-height: 350px;
  }
}
</style>