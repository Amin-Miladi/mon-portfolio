<template>
  <div class="youtube-page">
    <h1 class="title">Création Vidéo YouTube</h1>
    <p class="description">Explorez mes vidéos créées pour YouTube.</p>

    <div class="gallery-section">
      <div class="gallery-images">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          class="gallery-image"
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

    <h2 class="video-title">Vidéos YouTube</h2>
    <div class="video-section">
      <div class="video-wrapper">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XF2spi8zokA?si=4S4PPWpNPdcMGYMQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          class="video"
        ></iframe>
      </div>
      <div class="video-wrapper">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hNw22Hh9lXY?si=SgoIOT8uK8Qc_iqc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          class="video"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/IMG_0503.jpeg";
import img2 from "@/assets/IMG_0504.jpeg";
import img3 from "@/assets/IMG_0505.jpeg";
import img4 from "@/assets/IMG_1029.jpeg";
import img5 from "@/assets/IMG_0507.jpeg";
import img6 from "@/assets/IMG_0508.jpeg";
import img7 from "@/assets/IMG_0510.jpeg";
import img8 from "@/assets/IMG_0509.jpeg";

export default {
  name: "YoutubePage",
  data() {
    return {
      images: [
        { src: img1, alt: "Miniature 1" },
        { src: img2, alt: "Miniature 2" },
        { src: img3, alt: "Miniature 3" },
        { src: img4, alt: "Miniature 4" },
        { src: img5, alt: "Miniature 5" },
        { src: img6, alt: "Miniature 6" },
        { src: img7, alt: "Miniature 7" },
        { src: img8, alt: "Miniature 8" },
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
.youtube-page {
  padding: 20px;
  font-family: "Futura PT", sans-serif;
  color: #ffffff;
  margin-top: 100px;
}

/* Titre et description */
.title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
}

.description {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 40px;
}

/* Section des miniatures */
.gallery-section {
  margin-bottom: 40px;
}

.gallery-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.gallery-image {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  width: 640px;
  vertical-align: top;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.gallery-image:hover {
  transform: scale(1.01);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
}

.lightbox-close {
  position: fixed;
  top: 20px;
  right: 30px;
  font-size: 2.5rem;
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  line-height: 1;
}

.lightbox-prev,
.lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 3rem;
  cursor: pointer;
  padding: 10px 15px;
  line-height: 1;
}

.lightbox-prev { left: 20px; }
.lightbox-next { right: 20px; }

/* Titre avant les vidéos */
.video-title {
  font-size: 2rem;
  text-align: center;
  margin: 40px 0 20px;
}

/* Section des vidéos */
.video-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.video-wrapper {
  width: 100%;
  max-width: 640px;
}

.video {
  width: 100%;
  height: 360px;
  border: none;
  border-radius: 8px;
}

/* Responsivité */
@media (max-width: 768px) {
  .youtube-page {
    margin-top: 80px; /* ✅ AJUSTÉ : Évite le vide sous le menu burger */
    padding: 15px;
  }

  .title { font-size: 1.8rem; }
  .description { font-size: 1rem; }
  .video-title { font-size: 1.4rem; }

  .video {
    height: 220px; /* ✅ AJUSTÉ : Ratio vidéo mobile */
  }

  /* ✅ RÉTRÉCISSEMENT DES FLÈCHES SUR MOBILE */
  .lightbox-prev, .lightbox-next {
    font-size: 2.2rem;
    bottom: 20px;
    top: auto;
    transform: none;
  }
  .lightbox-prev { left: 25%; }
  .lightbox-next { right: 25%; }
  
  .lightbox-close {
    font-size: 2rem;
    top: 15px;
    right: 20px;
  }
}

@media (max-width: 480px) {
  .title { font-size: 1.5rem; }
  .video { height: 180px; }
}
</style>