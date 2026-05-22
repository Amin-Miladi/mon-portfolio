<template>
  <div class="youtube-page" role="main">
    
    <header class="page-header fade-in">
      <div class="category-tag">AUDIOVISUEL // DIGITAL CONTENT</div>
      <h1 class="title">Création Vidéo YouTube</h1>
      <div class="header-line"></div>
      <p class="description">
        Découvrez mon travail de production audiovisuelle, de montage vidéo et de direction artistique sur YouTube. À travers des concepts dynamiques, des habillages graphiques soignés et un travail approfondi sur le rythme et le sound design, je conçois des contenus immersifs adaptés aux codes de la création de contenu sur le web.
      </p>
    </header>

    <main class="content-wrapper">
      <section class="reveal-section intro-grid">
        <div class="text-block">
          <h2>Créer pour l'Impact</h2>
          <p>
            La production de contenu pour YouTube dépasse le cadre du simple montage. Chaque projet commence par une phase essentielle de conception stratégique : écriture du script, structuration du rythme narratif pour maximiser la rétention d'audience, et optimisation de l'habillage global.
          </p>
          <p>
            L'identité visuelle d'une vidéo se joue dès les premières secondes. C'est pourquoi j'accorde une importance majeure à l'équilibre entre une colorimétrie percutante et un environnement sonore travaillé, des éléments indispensables pour retenir l'attention dans le flux de la plateforme.
          </p>
        </div>
        <div class="text-block secondary-text">
          <h2>Post-Production Visuelle</h2>
          <p>
            En utilisant des outils professionnels comme Adobe After Effects et Premiere Pro, j'intègre des animations de texte, des transitions fluides et des effets d'incrustation qui soutiennent le propos de la vidéo sans saturer l'écran. L'objectif est d'allier fluidité technique et clarté du message.
          </p>
        </div>
      </section>

      <section class="reveal-section gallery-section">
        <div class="section-title-wrapper">
          <h2>L'Art du Click-Through Rate (CTR)</h2>
          <p>Sélection de packagings visuels et de compositions graphiques pour miniatures YouTube.</p>
        </div>

        <div class="bento-grid">
          <div 
            v-for="(image, index) in images" 
            :key="index" 
            :class="['bento-item', `item-${(index % 5) + 1}`]"
            @click="openLightbox(index)"
            role="button"
            :aria-label="`Agrandir la miniature : ${image.alt}`"
          >
            <div class="image-box">
              <img :src="image.src" :alt="image.alt" class="gallery-image" loading="lazy" />
              <div class="bento-overlay">
                <span class="zoom-icon">🔍 Aperçu Miniature {{ index + 1 }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <transition name="lightbox-fade">
        <div v-if="isLightboxOpen" class="lightbox-overlay" @click.self="closeLightbox">
          <button class="lightbox-close" @click="closeLightbox" aria-label="Fermer la vue plein écran">✕</button>
          <button class="lightbox-nav lightbox-prev" @click.stop="prevImage" aria-label="Élément précédent">‹</button>

          <div class="lightbox-content animate-zoom">
            <img :src="images[currentIndex].src" :alt="images[currentIndex].alt" class="lightbox-image" />
            <p class="lightbox-caption">{{ images[currentIndex].alt }} ({{ currentIndex + 1 }} / {{ images.length }})</p>
          </div>

          <button class="lightbox-nav lightbox-next" @click.stop="nextImage" aria-label="Élément suivant">›</button>
        </div>
      </transition>

      <section class="reveal-section video-showcase-section">
        <h2 class="video-title">Productions Audiovisuelles</h2>
        <p class="video-desc">Visionnez des exemples concrets de projets finalisés, du dérushage à l'étalonnage.</p>
        
        <div class="video-section">
          <div class="video-wrapper">
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/XF2spi8zokA?si=4S4PPWpNPdcMGYMQ"
                title="Création Vidéo YouTube - Projet Épisode 1 Amin Miladi"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                class="video"
              ></iframe>
            </div>
          </div>
          
          <div class="video-wrapper">
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/hNw22Hh9lXY?si=SgoIOT8uK8Qc_iqc"
                title="Création Vidéo YouTube - Projet Épisode 2 Amin Miladi"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                class="video"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
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
        { src: img1, alt: "Création miniature YouTube - Composition Gaming" },
        { src: img2, alt: "Design Miniature - Graphisme Manga" },
        { src: img3, alt: "Création miniature YouTube - Impact Visuel" },
        { src: img4, alt: "Design Miniature - Esthétique Dark" },
        { src: img5, alt: "Création miniature YouTube - Call-to-action visuel" },
        { src: img6, alt: "Design Miniature - Concept Multimédia MMI" },
        { src: img7, alt: "Création miniature YouTube - Retouche d'image" },
        { src: img8, alt: "Design Miniature - Typographie et contraste" },
      ],
      isLightboxOpen: false,
      currentIndex: 0,
    };
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeydown);
    this.initScrollReveal();
    this.setSEO();
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
    document.body.style.overflow = "";
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
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    handleKeydown(event) {
      if (!this.isLightboxOpen) return;
      if (event.key === "Escape") this.closeLightbox();
      if (event.key === "ArrowRight") this.nextImage();
      if (event.key === "ArrowLeft") this.prevImage();
    },
    initScrollReveal() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      }, { threshold: 0.05 });

      document.querySelectorAll(".reveal-section").forEach((section) => {
        observer.observe(section);
      });
    },
    setSEO() {
      document.title = "Production & Création Vidéo YouTube | Amin Miladi";
      
      const currentUrl = window.location.href;
      const descText = "Découvrez le savoir-faire d'Amin Miladi en montage vidéo, post-production digitale et création de miniatures YouTube (CTR). Portfolio de projets audiovisuels.";

      const updateMeta = (attr, value, content) => {
        let el = document.querySelector(`meta[${attr}="${value}"]`);
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute(attr, value);
          document.head.appendChild(el);
        }
        el.content = content;
      };

      updateMeta('name', 'description', descText);
      updateMeta('name', 'keywords', "Amin Miladi, YouTube, montage vidéo, miniature YouTube, CTR, Adobe Premiere Pro, After Effects, sound design, étalonnage, vidéaste, MMI");
      updateMeta('name', 'robots', "index, follow, max-image-preview:large, max-video-preview:-1");

      updateMeta('property', 'og:site_name', "Amin Miladi - Portfolio");
      updateMeta('property', 'og:title', "Production Audiovisuelle et Contenu YouTube - Amin Miladi");
      updateMeta('property', 'og:description', descText);
      updateMeta('property', 'og:type', "video.other");
      updateMeta('property', 'og:url', currentUrl);

      const oldScript = document.getElementById('youtube-seo-ld');
      if (oldScript) oldScript.remove();

      // Injection de la structure de données massives JSON-LD (SEO Technique pour la première place Google)
      const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "VideoChannel",
            "@id": currentUrl + "#channel",
            "url": currentUrl,
            "name": "Showroom de Production Vidéo YouTube — Amin Miladi",
            "description": descText,
            "author": {
              "@type": "Person",
              "name": "Amin Miladi",
              "jobTitle": "Graphiste & Vidéaste"
            }
          },
          {
            "@type": "BreadcrumbList",
            "@id": currentUrl + "#breadcrumb",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": window.location.origin + "/accueil" },
              { "@type": "ListItem", "position": 2, "name": "Projets", "item": window.location.origin + "/projets" },
              { "@type": "ListItem", "position": 3, "name": "YouTube", "item": currentUrl }
            ]
          }
        ]
      };

      const script = document.createElement('script');
      script.id = "youtube-seo-ld";
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }
};
</script>

<style scoped>
/* ====== STRUCTURE DE LA PAGE ====== */
.youtube-page {
  padding: 0 0 120px 0;
  font-family: "Futura PT", "Segoe UI", sans-serif;
  color: #f5f5f5;
  background-color: #000;
  overflow-x: hidden;
  min-height: 100vh;
}

/* ====== EN-TÊTE ÉPURÉ DE TYPE GALERIE ====== */
.page-header {
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 150px 24px 40px 24px;
  max-width: 900px;
  margin: 0 auto;
  box-sizing: border-box;
}

.category-tag {
  color: #ff5722;
  letter-spacing: 4px;
  font-size: 0.85rem;
  margin-bottom: 20px;
  font-family: 'Trispace', sans-serif;
}

.title {
  font-size: clamp(2.2rem, 6vw, 3.8rem);
  font-weight: 300; /* Linéaire et moderne, pas de gras */
  text-transform: uppercase;
  margin: 0 0 20px 0;
  letter-spacing: -0.5px;
  color: #fff;
}

.header-line {
  width: 50px;
  height: 1px;
  background-color: #ff5722;
  margin-bottom: 30px;
}

.description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #b3b3b3;
  font-weight: 300;
}

/* ====== COMPORTEMENT SCROLL REVEAL (JS TRANSITION) ====== */
.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.reveal-section {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
  margin-bottom: 140px;
}

.reveal-section.active {
  opacity: 1;
  transform: translateY(0);
}

/* ====== BLOCS DE TEXTES DE STORYTELLING ====== */
.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  text-align: left;
}

.text-block h2 {
  font-size: 1.6rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 18px;
  letter-spacing: -0.2px;
}

.text-block p {
  font-size: 1.05rem;
  line-height: 1.75;
  color: #a6a6a6;
  font-weight: 300;
}

/* ====== CONFIGURATION DES GRILLES BENTO ASYMÉTRIQUES ====== */
.section-title-wrapper {
  text-align: center;
  margin-bottom: 50px;
}

.section-title-wrapper h2 {
  font-size: 1.8rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 10px;
}

.section-title-wrapper p {
  font-weight: 300;
  color: #777777;
  font-size: 1rem;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 240px;
  gap: 24px;
}

.bento-item {
  position: relative;
  background: #0d0d0d;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease;
}

.bento-item:hover {
  border-color: #ff5722;
}

/* Organisation asymétrique bento sur ordinateur */
.item-1 { grid-column: span 2; }
.item-4 { grid-column: span 2; }
.item-5 { grid-row: span 2; height: auto; }
.item-8 { grid-column: span 2; }

.image-box {
  width: 100%;
  height: 100%;
  position: relative;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.bento-item:hover .gallery-image {
  transform: scale(1.03);
}

.bento-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, transparent 100%);
  display: flex;
  align-items: flex-end;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.bento-item:hover .bento-overlay {
  opacity: 1;
}

.zoom-icon {
  color: #fff;
  font-size: 0.85rem;
  font-family: 'Trispace', sans-serif;
  font-weight: 300;
  letter-spacing: 0.5px;
}

/* ====== LOGIQUE INTEGRATION LECTEURS VIDEO YOUTUBE ====== */
.video-showcase-section {
  text-align: center;
}

.video-title {
  font-size: 1.8rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 10px;
}

.video-desc {
  font-weight: 300;
  color: #777;
  margin-bottom: 45px;
}

.video-section {
  display: flex;
  justify-content: center;
  gap: 35px;
  flex-wrap: wrap;
}

.video-wrapper {
  flex: 1;
  min-width: 450px;
  max-width: 550px;
}

/* Ratio 16:9 strict */
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0,0,0,0.75);
  border: 1px solid rgba(255,255,255,0.06);
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* ====== MODALE VISIONNEUSE LIGHTBOX INTERACTIVE ====== */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.98);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  padding: 24px;
}

.lightbox-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 85vw;
  max-height: 85vh;
}

.lightbox-image {
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;
  border-radius: 6px;
  box-shadow: 0 25px 60px rgba(0,0,0,0.95);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.lightbox-caption {
  margin-top: 16px;
  color: #777777;
  font-size: 0.85rem;
  font-family: 'Trispace', sans-serif;
  font-weight: 300;
}

.lightbox-close {
  position: absolute;
  top: 35px;
  right: 45px;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 2.2rem;
  cursor: pointer;
  transition: color 0.2s, transform 0.2s;
}
.lightbox-close:hover { color: #ff5722; transform: scale(1.1); }

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  color: #fff;
  font-size: 4.5rem;
  cursor: pointer;
  padding: 20px;
  transition: color 0.2s, transform 0.2s;
  user-select: none;
}
.lightbox-nav:hover { color: #ff5722; }
.lightbox-prev { left: 20px; }
.lightbox-next { right: 20px; }
.lightbox-prev:hover { transform: translateY(-50%) scale(1.08); }
.lightbox-next:hover { transform: translateY(-50%) scale(1.08); }

.lightbox-fade-enter-active, .lightbox-fade-leave-active { transition: opacity 0.3s ease; }
.lightbox-fade-enter-from, .lightbox-fade-leave-to { opacity: 0; }

.animate-zoom {
  animation: lightboxZoom 0.35s cubic-bezier(0.25, 1, 0.5, 1);
}
@keyframes lightboxZoom {
  from { transform: scale(0.96); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* ====== PLAN RESPONSIVE LOGIQUE COMPLET ====== */
@media (max-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 210px;
    gap: 20px;
  }
  .item-1, .item-4, .item-8 { grid-column: span 2; }
  .item-5 { grid-row: span 1; height: auto; }
  
  .video-wrapper { min-width: 100%; max-width: 100%; }
  .reveal-section { margin-bottom: 100px; }
}

@media (max-width: 768px) {
  .page-header { padding-top: 120px; }
  .title { font-size: 2.3rem; }
  .description { font-size: 1rem; line-height: 1.7; }
  
  .intro-grid { grid-template-columns: 1fr; gap: 30px; }
  .text-block h2 { font-size: 1.45rem; margin-bottom: 12px; }
  
  .bento-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 220px;
    gap: 16px;
  }
  .item-1, .item-4, .item-5, .item-8 { grid-column: span 1; grid-row: span 1; }
  
  /* Relocalisation des contrôles tactiles au pouce en bas sur Mobile */
  .lightbox-nav {
    top: auto;
    bottom: 20px;
    transform: none;
    font-size: 2.8rem;
    padding: 10px;
  }
  .lightbox-nav:hover { transform: none; }
  .lightbox-prev { left: 25%; }
  .lightbox-next { right: 25%; }
  
  .lightbox-close { top: 25px; right: 25px; font-size: 1.8rem; }
  .lightbox-content { max-width: 95%; }
  .lightbox-image { max-height: 65vh; }
}

@media (max-width: 480px) {
  .title { font-size: 1.9rem; }
  .section-title-wrapper h2, .video-title { font-size: 1.5rem; }
  .bento-grid { grid-auto-rows: 180px; }
}
</style>