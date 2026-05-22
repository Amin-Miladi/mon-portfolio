<template>
  <div class="project-detail">
    <header class="project-header fade-in" role="banner">
      <div class="category-tag">PROJET MANGA // CRÉATION ORIGINALE</div>
      <h1 class="title">Genesis Zero</h1>
      <div class="header-line"></div>
    </header>

    <main class="content-wrapper">
      <section class="reveal-section intro-grid">
        <div class="text-block">
          <h2>Origine et Concept</h2>
          <p>
            <em>Genesis Zero</em> est un projet de création de manga de science-fiction né d'une passion pour l'audiovisuel et la narration graphique. Développé parallèlement à mes études en MMI, ce projet explore les limites de l'animation 2D, du character design et du découpage scénaristique traditionnel.
          </p>
          <p>
            L'univers graphique s'inspire du style shōnen et cyberpunk moderne. Chaque planche et illustration a demandé une étude approfondie de la perspective, de la gestion de la lumière sur tablette graphique et de la colorisation numérique afin de donner vie à un univers sombre mais technologique.
          </p>
        </div>
        <div class="image-block highlight" @click="openLightbox(0)" role="button" aria-label="Agrandir l'illustration de couverture">
          <div class="image-inner-frame">
            <img
              :src="images[0].src"
              :alt="images[0].alt"
              class="clickable-img"
            />
            <div class="image-hover-layer">
              <span>🔍 Agrandir l'illustration</span>
            </div>
          </div>
          <span class="caption">Illustration promotionnelle officielle de Genesis Zero.</span>
        </div>
      </section>

      <section class="reveal-section synopsis-section">
        <div class="synopsis-card">
          <h2>Le Synopsis</h2>
          <p>
            Dans un monde futuriste régi par les avancées technologiques, une expérience scientifique de grande envergure tourne au drame. Elle provoque l'apparition d'un trou noir mystérieux et dévastateur baptisé Athanéon. Ce phénomène dévore toute forme d'énergie environnante sur son passage, ne laissant derrière lui que le néant absolu et décimant les êtres vivants.
          </p>
          <p>
            Au milieu de cette apocalypse, seuls quatre lycéens, Satoru, Hana, Toru et Kenta, survivent miraculeusement. Face à la catastrophe, le groupe d'amis devra unir ses forces pour renverser le scientifique fou à l'origine de l'expérience et tenter de réparer la trame temporelle de leur monde, dans une course contre la montre haletante mêlant stratégie et voyages temporels.
          </p>
        </div>
      </section>

      <section class="reveal-section characters-section">
        <div class="section-intro">
          <h2>Character Design &amp; Planches</h2>
          <p>Cliquez sur les visuels pour explorer les recherches de personnages et les mockups de l'œuvre.</p>
        </div>

        <div class="bento-grid">
          <div 
            v-for="(image, index) in images.slice(1)" 
            :key="index + 1" 
            :class="['bento-item', `item-${(index % 5) + 1}`]"
            @click="openLightbox(index + 1)"
            role="button"
            :aria-label="`Agrandir la recherche graphique : ${image.alt}`"
          >
            <img :src="image.src" :alt="image.alt" class="clickable-img" />
            <div class="bento-overlay">
              <span class="zoom-icon">🔍 {{ image.alt }}</span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <transition name="lightbox-fade">
      <div v-if="isLightboxOpen" class="lightbox-overlay" @click.self="closeLightbox">
        <button class="lightbox-close" @click="closeLightbox" aria-label="Fermer la vue plein écran">✕</button>

        <button class="lightbox-nav lightbox-prev" @click.stop="prevImage" aria-label="Visuel précédent">‹</button>

        <div class="lightbox-content animate-zoom">
          <img
            class="lightbox-image"
            :src="images[currentIndex].src"
            :alt="images[currentIndex].alt"
          />
          <p class="lightbox-caption">{{ images[currentIndex].alt }} ({{ currentIndex + 1 }} / {{ images.length }})</p>
        </div>

        <button class="lightbox-nav lightbox-next" @click.stop="nextImage" aria-label="Visuel suivant">›</button>
      </div>
    </transition>
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
          src: "https://cdn.myportfolio.com/905c9151-2f7d-4626-b84f-d8b2df0a099b/ea4a8b15-ab92-4c91-87d2-de04827f028f_rw_600.png?h=463c529fe1889c71e6a2df16f3501f6b",
          alt: "Illustration Concept Genesis Zero",
        },
        { src: gensis_zero, alt: "Logo Officiel Genesis Zero" },
        { src: Satoru, alt: "Satoru - Protagoniste Principal" },
        { src: hana, alt: "Hana - Character Design" },
        { src: toru, alt: "Toru - Compagnon d'Armes" },
        { src: kenta, alt: "Kenta - Support Tactique" },
        { src: scientifique, alt: "L'Antagoniste Scientifique" },
        { src: perso, alt: "Recherche de Personnages" },
        { src: dessin, alt: "Crayonnés et Lineart" },
        { src: mockup, alt: "Mockup de Tome Manga" },
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
    setSEO() {
      document.title = "Genesis Zero | Création Manga & Concept Art — Amin Miladi";
      
      const currentUrl = window.location.href;
      const descriptionText = "Explorez Genesis Zero, le projet de manga de science-fiction imaginé par Amin Miladi. Découvrez le synopsis de l'Athanéon, le character design de Satoru, Hana, Toru et Kenta.";

      const updateMeta = (attr, value, content) => {
        let element = document.querySelector(`meta[${attr}="${value}"]`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute(attr, value);
          document.head.appendChild(element);
        }
        element.content = content;
      };

      // Configuration sémantique de l'indexation globale Google
      updateMeta('name', 'description', descriptionText);
      updateMeta('name', 'keywords', "Amin Miladi, Genesis Zero, Manga original, Science-fiction, Satoru, Hana, Kenta, Toru, Athanéon, Character Design, Dessin manga, BUT MMI, Graphiste portfolio");
      updateMeta('name', 'robots', "index, follow, max-image-preview:large");

      updateMeta('property', 'og:site_name', "Amin Miladi - Portfolio");
      updateMeta('property', 'og:title', "Genesis Zero | Projet de Création Manga Original - Amin Miladi");
      updateMeta('property', 'og:description', descriptionText);
      updateMeta('property', 'og:type', "article");
      updateMeta('property', 'og:url', currentUrl);
      updateMeta('property', 'og:image', this.images[0].src);

      const existingScript = document.getElementById('manga-seo-jsonld');
      if (existingScript) existingScript.remove();

      // Injection dynamique de données massives JSON-LD (SEO Technique pour la première place Google)
      const jsonLdData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CreativeWork",
            "@id": currentUrl + "#manga",
            "url": currentUrl,
            "name": "Genesis Zero - Manga de Science-Fiction",
            "description": descriptionText,
            "headline": "Création de l'univers narratif et visuel de Genesis Zero par Amin Miladi",
            "inLanguage": "fr-FR",
            "author": {
              "@type": "Person",
              "name": "Amin Miladi",
              "jobTitle": "Graphiste & Vidéaste"
            },
            "genre": ["Manga", "Illustration", "Concept Art", "Character Design"]
          },
          {
            "@type": "BreadcrumbList",
            "@id": currentUrl + "#breadcrumb",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": window.location.origin + "/accueil" },
              { "@type": "ListItem", "position": 2, "name": "Projets", "item": window.location.origin + "/projets" },
              { "@type": "ListItem", "position": 3, "name": "Genesis Zero (Manga)", "item": currentUrl }
            ]
          }
        ]
      };

      const script = document.createElement('script');
      script.id = "manga-seo-jsonld";
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLdData);
      document.head.appendChild(script);
    }
  }
};
</script>

<style scoped>
/* ====== CONFIGURATION DESIGN GLOBAL ====== */
.project-detail {
  padding: 0 0 120px 0;
  color: #f0f0f0;
  font-family: "Futura PT", "Segoe UI", sans-serif;
  background-color: #000;
  overflow-x: hidden;
  min-height: 100vh;
}

/* ====== EN-TÊTE ÉPURÉ DE TYPE EXPOSITION ====== */
.project-header {
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(to bottom, rgba(0,0,0,0.4), #000);
  padding: 0 24px;
}

.category-tag {
  color: #ff5722;
  letter-spacing: 4px;
  font-size: 0.85rem;
  margin-bottom: 20px;
  font-family: 'Trispace', sans-serif;
}

.title {
  font-size: clamp(2.3rem, 6vw, 4rem);
  font-weight: 300; /* Linéaire et premium, pas de gras */
  text-transform: uppercase;
  margin: 0;
  letter-spacing: -0.5px;
}

.header-line {
  width: 50px;
  height: 1px;
  background-color: #ff5722;
  margin-top: 25px;
}

/* ====== CONTENEUR ET SCROLL REVEAL (JS TRANSITION) ====== */
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

/* ====== DISPOSITION ASYMÉTRIQUE DES CHASSIS D'IMAGES ====== */
.intro-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: center;
}

.text-block h2 {
  font-size: 1.8rem;
  margin-bottom: 22px;
  color: #fff;
  font-weight: 400;
  letter-spacing: -0.2px;
}

.text-block p {
  line-height: 1.75;
  margin-bottom: 20px;
  font-weight: 300;
  color: #a6a6a6;
  font-size: 1.05rem;
}

.image-block {
  width: 100%;
}

.image-inner-frame {
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6);
  cursor: pointer;
}

.clickable-img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.image-inner-frame:hover .clickable-img {
  transform: scale(1.03);
}

.image-hover-layer {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-inner-frame:hover .image-hover-layer {
  opacity: 1;
}

.image-hover-layer span {
  color: #fff;
  font-size: 0.9rem;
  font-family: 'Trispace', sans-serif;
  font-weight: 300;
}

.caption {
  display: block;
  margin-top: 14px;
  font-size: 0.85rem;
  color: #666666;
  font-style: italic;
  text-align: center;
}

/* ====== BANDEAU HISTOIRE SYNOPSIS ====== */
.synopsis-section {
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 50px 60px;
  border-radius: 12px;
  max-width: 950px;
  margin: 0 auto 140px auto;
  box-sizing: border-box;
  box-shadow: 0 25px 60px rgba(0,0,0,0.8);
}

.synopsis-card h2 {
  font-size: 1.8rem;
  color: #ff5722;
  margin-top: 0;
  margin-bottom: 24px;
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.2px;
}

.synopsis-card p {
  line-height: 1.8;
  font-weight: 300;
  color: #cccccc;
  font-size: 1.05rem;
  text-align: left;
}

/* ====== JEU DE MOSAÏQUES BENTO DES COMPOSITIONS ASYMÉTRIQUES ====== */
.section-intro {
  text-align: center;
  margin-bottom: 50px;
}
.section-intro h2 { font-size: 1.8rem; font-weight: 400; margin-bottom: 12px; }
.section-intro p { font-weight: 300; color: #777777; font-size: 1rem; }

.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 250px;
  gap: 24px;
}

.bento-item {
  position: relative;
  background: #0d0d0d;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  box-shadow: 0 15px 35px rgba(0,0,0,0.6);
  transition: border-color 0.3s ease;
}

.bento-item:hover {
  border-color: #ff5722;
}

/* Architecture asymétrique de l'interface des jaquettes */
.item-1 { grid-column: span 2; }
.item-3 { grid-row: span 2; }
.item-5 { grid-column: span 2; }

.bento-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
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
  color: white;
  font-size: 0.85rem;
  font-weight: 300;
  font-family: 'Trispace', sans-serif;
  letter-spacing: 0.5px;
}

/* ====== CONFIGURATION MODALE LIGHTBOX EN PLEIN ÉCRAN ====== */
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
  border-radius: 4px;
  box-shadow: 0 30px 70px rgba(0,0,0,0.95);
  border: 1px solid rgba(255,255,255,0.06);
}

.lightbox-caption {
  margin-top: 16px;
  color: #777;
  font-size: 0.85rem;
  font-family: 'Trispace', sans-serif;
  font-weight: 300;
}

.lightbox-close {
  position: absolute;
  top: 35px;
  right: 45px;
  font-size: 2.2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  transition: color 0.2s, transform 0.2s;
}
.lightbox-close:hover { color: #ff5722; transform: scale(1.1); }

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 4.5rem;
  background: none;
  border: none;
  color: white;
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
  animation: zoomAnimation 0.35s cubic-bezier(0.25, 1, 0.5, 1);
}
@keyframes zoomAnimation {
  from { transform: scale(0.96); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* ====== PLAN RESPONSIVE LOGIQUE COMPLET ====== */
@media (max-width: 1024px) {
  .intro-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 210px;
    gap: 20px;
  }
  .item-1, .item-5 { grid-column: span 2; }
  .item-3 { grid-row: span 1; }
  .reveal-section { margin-bottom: 100px; }
  .synopsis-section { margin-bottom: 100px; }
}

@media (max-width: 768px) {
  .project-header { height: 40vh; }
  .title { font-size: 2.2rem; }
  
  .synopsis-section { padding: 35px 24px; }
  
  .bento-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 220px;
    gap: 16px;
  }
  .item-1, .item-3, .item-5 { grid-column: span 1; grid-row: span 1; }
  
  /* Ajustement de la navigation de la Lightbox sur Mobile (Barre tactile basse) */
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
  .project-header { height: 35vh; }
  .title { font-size: 1.9rem; }
  .text-block h2, .synopsis-card h2, .section-intro h2 { font-size: 1.5rem; }
  .bento-grid { grid-auto-rows: 190px; }
}
</style>