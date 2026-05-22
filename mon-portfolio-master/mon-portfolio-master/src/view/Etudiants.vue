<template>
  <div class="project-detail">
    <header class="project-header fade-in">
      <div class="category-tag">SAE // CONCEPTION MULTI-SUPPORTS</div>
      <h1 class="title">Projets Universitaires MMI</h1>
      <div class="header-line"></div>
    </header>

    <main class="content-wrapper">
      
      <section class="split-intro-section">
        <div class="media-carousel-wrapper">
          <div class="carousel-container">
            
            <div class="carousel-active-item">
              <img 
                v-if="mediaItems[currentMediaIndex].type === 'image'"
                :src="mediaItems[currentMediaIndex].src" 
                :alt="mediaItems[currentMediaIndex].alt"
                class="clickable-img carousel-media-content"
                @click="openLightbox(mediaItems[currentMediaIndex].src)"
              />
              
              <div v-else-if="mediaItems[currentMediaIndex].type === 'video'" class="carousel-video-container">
                <iframe
                  :src="mediaItems[currentMediaIndex].src"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div class="carousel-controls">
              <button class="control-btn prev" @click="prevMedia" aria-label="Média précédent">‹</button>
              <div class="carousel-dots">
                <span 
                  v-for="(item, index) in mediaItems" 
                  :key="index"
                  :class="['dot', { active: index === currentMediaIndex }]"
                  @click="setMedia(index)"
                ></span>
              </div>
              <button class="control-btn next" @click="nextMedia" aria-label="Média suivant">›</button>
            </div>
            
            <p class="media-caption">{{ mediaItems[currentMediaIndex].alt }}</p>
          </div>
        </div>

        <div class="text-explanation-wrapper">
          <h2 class="project-main-title">Next.Us</h2>
          
          <div class="tags-row">
            <span class="badge">Graphique</span>
            <span class="badge">Vidéo</span>
            <span class="badge">Web</span>
          </div>

          <div class="project-actions-container">
            <a 
              href="https://drive.google.com/file/d/1u3SgC2ItFLgNcYObaL-rwRBXGztFm2qc/view?usp=sharing" 
              target="_blank" 
              class="action-btn btn-primary"
            >
              <span class="btn-icon">🎬</span> Regarder le court-métrage
            </a>
            <a 
              href="http://nextus.mmi-iutsf.org/" 
              target="_blank" 
              class="action-btn btn-secondary"
            >
              <span class="btn-icon">🌐</span> Visiter le site Internet
            </a>
          </div>
          
          <p>
            <strong>Next.us</strong> est un projet que nous avons développé dans une logique de production multi-supports, visant à créer un écosystème autour de la transmission intergénérationnelle via le numérique.
          </p>
          <p>
            Le projet comprend plusieurs livrables (identité visuelle, print, audiovisuel, VR), conçus à partir d’un travail de recherche utilisateur (entretiens et micro-trottoirs) afin d’orienter les choix fonctionnels et les contenus. Vous pouvez notamment découvrir le court-métrage directement à gauche, illustrant notre réflexion sur l’évolution des technologies et leurs impacts.
          </p>
          
          <p>
            J’ai été principalement en charge du développement du site web. J’ai conçu une plateforme sous WordPress avec une architecture de contenu structurée (pages, blog, contenus éditoriaux) et une attention particulière portée à la navigation et à la maintenabilité. Le site a été pensé comme une expérience immersive, avec une fonctionnalité centrale permettant de naviguer entre trois temporalités (passé, présent, futur) afin de visualiser l’évolution des usages et des technologies à travers le web.
          </p>
          <p>
            J’ai également développé une page de frise chronologique interactive, intégrant des objets 3D classés par temporalité, manipulables directement par l’utilisateur. Ces objets peuvent également être visualisés en réalité augmentée via smartphone, renforçant l’aspect pédagogique et immersif du projet.
          </p>
          <p>
            Enfin, j’ai développé et intégré une intelligence artificielle nommée <strong>Leo</strong> via une extension WordPress custom. Cette IA dispose du contexte complet du projet Next.us (association, contenus, blog) et a été spécifiquement configurée pour répondre aux questions des seniors, afin de les accompagner dans leur compréhension du numérique et faciliter leur navigation sur le site.
          </p>
          <p class="conclusion-highlight">
            Ce projet m’a permis de travailler sur des problématiques concrètes de développement web : structuration de contenu, développement WordPress avancé, intégration d’IA, 3D et réalité augmentée, ainsi que conception d’une expérience utilisateur interactive.
          </p>
        </div>
      </section>

      <section class="reveal-section intro-grid section-separator">
        <div class="text-block">
          <h2>Genèse du projet</h2>
          <p>
            Dans le cadre de nos études en BUT MMI, nous avons reçu pour mission de créer une identité de marque complète pour un produit de niche. Mon équipe et moi avons choisi de bousculer les codes de la brasserie artisanale en lançant <strong>Mayel</strong>, une bière de luxe inspirée de l'héritage précolombien.
          </p>
          <p>
            Le nom <em>Mayel</em> signifie "parfumer" en langue maya. Notre objectif était de créer une alchimie entre le mystère des traditions ancestrales et l'élégance du luxe moderne. Ce projet a nécessité une réflexion profonde sur le positionnement haut de gamme, où chaque détail visuel doit raconter une histoire de saveurs exotiques et de prestige.
          </p>
        </div>
        <div class="image-block highlight" @click="openLightbox('https://cdn.myportfolio.com/905c9151-2f7d-4626-b84f-d8b2df0a099b/b94ee0f2-8d3b-470d-b274-7d7ae227d3fe_rw_1200.png?h=162423f70e95e463de56096261bd15e0')">
          <img
            src="https://cdn.myportfolio.com/905c9151-2f7d-4626-b84f-d8b2df0a099b/b94ee0f2-8d3b-470d-b274-7d7ae227d3fe_rw_1200.png?h=162423f70e95e463de56096261bd15e0"
            alt="Recherches logo Mayel - Design Maya"
            class="clickable-img"
          />
          <span class="caption">Exploration des symboles Maya pour l'identité visuelle (Cliquez pour agrandir).</span>
        </div>
      </section>

      <section class="reveal-section alt-layout">
        <div class="image-block" @click="openLightbox(images.logoFinal)">
          <img :src="images.logoFinal" alt="Logo final Mayel Blanc" class="logo-final clickable-img" />
        </div>
        <div class="text-block">
          <h2>Identité Visuelle</h2>
          <p>
            Le processus créatif a été rigoureux. J'ai exploré six pistes graphiques différentes sur Adobe Illustrator, cherchant l'équilibre parfait entre lisibilité et symbolisme. Bien que les premières versions aient été écartées, elles ont servi de fondation pour le logo final.
          </p>
          <p>
            Le logotype retenu s'inspire directement des bas-reliefs et des stèles de l'architecture maya. Sa structure géométrique évoque la solidité et le mystère, tandis que les lignes épurées garantissent une application premium sur tous les supports (étiquettes, digital, goodies).
          </p>
        </div>
      </section>

      <section class="reveal-section gallery-section">
        <div class="gallery-title">
          <h2>La Gamme Sensorielle</h2>
          <p>Deux saveurs emblématiques : L'onctuosité du Cacao et la délicatesse de la Vanille Bourbon.</p>
        </div>
        <div class="bento-grid">
          <div class="bento-item item-1" @click="openLightbox(images.bierreChoco)">
            <img :src="images.bierreChoco" alt="Mayel Edition Chocolat" class="clickable-img" />
          </div>
          <div class="bento-item item-2" @click="openLightbox(images.bierreVanille)">
            <img :src="images.bierreVanille" alt="Mayel Edition Vanille" class="clickable-img" />
          </div>
          <div class="bento-item text-card">
            <h3>Packaging</h3>
            <p>Utilisation de bouteilles opaques noir mat pour préserver les arômes et renforcer l'aspect prestigieux du produit.</p>
          </div>
        </div>
      </section>

      <section class="reveal-section web-experience">
        <div class="web-content">
          <div class="text-block">
            <h2>Expérience Digitale</h2>
            <p>
              Le site internet a été conçu comme un écrin. En utilisant un contraste fort de noir et blanc et une typographie minimaliste, nous avons créé une interface où l'image est reine. L'expérience utilisateur (UX) privilégie la contemplation du produit et l'immersion dans l'histoire de la marque.
            </p>
          </div>
          <div class="browser-mockup" @click="openLightbox('https://cdn.myportfolio.com/905c9151-2f7d-4626-b84f-d8b2df0a099b/20439269-85e1-4b76-b265-4f7c524e9169_rw_1920.png?h=6582f35b83d2da9919fc244ee0900d2d')">
            <img
              src="https://cdn.myportfolio.com/905c9151-2f7d-4626-b84f-d8b2df0a099b/20439269-85e1-4b76-b265-4f7c524e9169_rw_1920.png?h=6582f35b83d2da9919fc244ee0900d2d"
              alt="UI Design du site Mayel"
              class="clickable-img"
            />
          </div>
        </div>
      </section>

      <section class="reveal-section video-section">
        <h2>Campagne Audiovisuelle</h2>
        <p class="video-desc">
          Pour le lancement, nous avons produit un spot publicitaire en noir et blanc. Le choix du monochrome, associé à une voix off profonde, permet de focaliser l'attention sur la texture du produit et l'imaginaire du luxe.
        </p>
        <div class="video-container">
          <iframe
            src="https://drive.google.com/file/d/1qIyebNPBCebeXbFMiJgU8y5NlOPXphWw/preview"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </main>

    <div v-if="lightbox.active" class="lightbox-overlay" @click.self="closeLightbox">
      <button class="close-lightbox-btn" @click="closeLightbox">✕</button>
      <img :src="lightbox.imgSrc" class="lightbox-image animate-zoom" alt="Agrandissement projet" />
    </div>
  </div>
</template>

<script>
import BierreChoco from "@/assets/bierrechoco.jpg";
import BierreVanille from "@/assets/bierrevanille.jpg";
import LogoFinalBlanc from "@/assets/logo_mayel_blanc.png";

// Imports des assets du projet Next.Us
import LogoNextus from "@/assets/logo_nextus.png";
import AffichePortraitNeon from "@/assets/affiche-portrait-neon-533x800.jpg";
import NextusSitesWeb from "@/assets/nextus-sites-web.jpg";
import ImagePrint from "@/assets/image_print.png";

export default {
  name: "EtudiantsPage",
  data() {
    return {
      currentMediaIndex: 0,
      images: {
        bierreChoco: BierreChoco,
        bierreVanille: BierreVanille,
        logoFinal: LogoFinalBlanc,
      },
      // Tableau ordonné des médias de Next.Us
      mediaItems: [
        { type: "image", src: LogoNextus, alt: "Logo Officiel Next.us" },
        { type: "image", src: AffichePortraitNeon, alt: "Affiche Portrait Néon" },
        { type: "image", src: NextusSitesWeb, alt: "Maquette d'Interface du site Next.us" },
        { type: "image", src: ImagePrint, alt: "Livrable Impression et Identité Graphique" },
        { type: "video", src: "https://drive.google.com/file/d/1XD8U-ApKC9oXoC8Hdcu6mDoWpF8zJA-n/preview", alt: "Court-métrage Next.us - Partie 1" },
        { type: "video", src: "https://drive.google.com/file/d/1tlYM8mp6SEfkWNIzLr2fWu8PI6x89K4Q/preview", alt: "Court-métrage Next.us - Partie 2" }
      ],
      lightbox: {
        active: false,
        imgSrc: ""
      }
    };
  },
  mounted() {
    this.initScrollReveal();
    this.setSEO();
  },
  methods: {
    nextMedia() {
      this.currentMediaIndex = (this.currentMediaIndex + 1) % this.mediaItems.length;
    },
    prevMedia() {
      this.currentMediaIndex = (this.currentMediaIndex - 1 + this.mediaItems.length) % this.mediaItems.length;
    },
    setMedia(index) {
      this.currentMediaIndex = index;
    },
    initScrollReveal() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll(".reveal-section").forEach((section) => {
        observer.observe(section);
      });
    },
    openLightbox(src) {
      this.lightbox.imgSrc = src;
      this.lightbox.active = true;
      document.body.style.overflow = "hidden"; 
    },
    closeLightbox() {
      this.lightbox.active = false;
      this.lightbox.imgSrc = "";
      document.body.style.overflow = "auto"; 
    },
    setSEO() {
      document.title = "Next.Us & Mayel | Portfolio Travaux Étudiants - Amin Miladi";
      
      const currentUrl = window.location.href;
      const descriptionText = "Découvrez l'écosystème numérique multi-supports Next.us et l'identité visuelle de luxe Mayel, des projets réalisés en BUT MMI par Amin Miladi.";

      const updateMeta = (attr, value, content) => {
        let element = document.querySelector(`meta[${attr}="${value}"]`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute(attr, value);
          document.head.appendChild(element);
        }
        element.content = content;
      };

      updateMeta('name', 'description', descriptionText);
      updateMeta('name', 'keywords', "Amin Miladi, Next.us, Mayel, WordPress, IA Leo, UX Design, Réalité Augmentée, MMI, Branding");
      updateMeta('name', 'robots', "index, follow, max-image-preview:large");

      updateMeta('property', 'og:site_name', "Amin Miladi - Portfolio");
      updateMeta('property', 'og:title', "Projets Universitaires MMI - Amin Miladi");
      updateMeta('property', 'og:description', descriptionText);
      updateMeta('property', 'og:type', "article");
      updateMeta('property', 'og:url', currentUrl);

      const existingScript = document.getElementById('seo-json-ld');
      if (existingScript) existingScript.remove();

      const jsonLdData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CreativeWork",
            "@id": currentUrl + "#creativework",
            "url": currentUrl,
            "name": "Portfolio de Projets Étudiants MMI",
            "description": descriptionText,
            "inLanguage": "fr-FR",
            "author": {
              "@type": "Person",
              "name": "Amin Miladi",
              "jobTitle": "Graphiste, Vidéaste & Développeur"
            }
          }
        ]
      };

      const script = document.createElement('script');
      script.id = "seo-json-ld";
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLdData);
      document.head.appendChild(script);
    }
  }
};
</script>

<style scoped>
/* CONFIGURATION GÉNÉRALE */
.project-detail {
  padding: 0 0 100px 0;
  color: #f0f0f0;
  font-family: "Futura PT", "Segoe UI", sans-serif;
  background-color: #050505;
  overflow-x: hidden;
}

.clickable-img {
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease !important;
}

.clickable-img:hover {
  transform: scale(1.025) !important;
  box-shadow: 0 10px 30px rgba(0, 150, 136, 0.25);
}

/* HEADER */
.project-header {
  height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5), #050505);
}

.category-tag {
  color: #009688;
  letter-spacing: 4px;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 300;
  text-transform: uppercase;
}

.header-line {
  width: 60px;
  height: 2px;
  background-color: #009688;
  margin-top: 30px;
}

/* STRUCTURE DEUX COLONNES FLUIDES */
.content-wrapper {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

.split-intro-section {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 50px;
  align-items: start;
  margin-bottom: 120px;
  background: rgba(255, 255, 255, 0.02);
  padding: 35px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.media-carousel-wrapper {
  position: sticky;
  top: 40px;
}

.carousel-container {
  background: #111;
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #222;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
}

.carousel-active-item {
  width: 100%;
  height: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
  background: #000;
}

.carousel-media-content {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.carousel-video-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.carousel-video-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
}

.control-btn {
  background: #222;
  border: none;
  color: #fff;
  font-size: 1.8rem;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.control-btn:hover {
  background: #009688;
}

.carousel-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 10px;
  height: 10px;
  background: #444;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}

.dot.active {
  background: #009688;
  transform: scale(1.2);
}

.media-caption {
  text-align: center;
  font-size: 0.85rem;
  color: #777;
  margin-top: 12px;
  font-style: italic;
}

/* SECTION CONTENU TEXTE DROITE */
.project-main-title {
  font-size: 2.5rem;
  color: #fff;
  margin-top: 0;
  margin-bottom: 10px;
}

.tags-row {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.badge {
  background: rgba(0, 150, 136, 0.15);
  color: #009688;
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.5px;
}

/* 🆕 BOUTONS INTERACTIFS D'ACTION */
.project-actions-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 30px;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  padding: 12px 24px;
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.btn-icon {
  margin-right: 8px;
  font-size: 1.1rem;
}

.btn-primary {
  background-color: #009688;
  color: #ffffff;
}

.btn-primary:hover {
  background-color: #00bfa5;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 150, 136, 0.4);
}

.btn-secondary {
  background-color: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.08);
  border-color: #009688;
  color: #009688;
  transform: translateY(-2px);
}

.text-explanation-wrapper p {
  line-height: 1.8;
  color: #ccc;
  margin-bottom: 20px;
  font-weight: 300;
}

.conclusion-highlight {
  border-left: 3px solid #009688;
  padding-left: 15px;
  font-style: italic;
  background: rgba(255, 255, 255, 0.01);
}

/* SÉPARATEUR POUR LE SCROLL */
.section-separator {
  position: relative;
  padding-top: 80px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.reveal-section {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
  margin-bottom: 120px;
}

.reveal-section.active {
  opacity: 1;
  transform: translateY(0);
}

/* SECTION DE BASE S'AFFICHANT AU SCROLL (MAYEL) */
.intro-grid, .alt-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.text-block h2 {
  font-size: 2rem;
  margin-bottom: 25px;
  color: #fff;
  font-weight: 400;
}

.text-block p {
  line-height: 1.8;
  margin-bottom: 20px;
  font-weight: 300;
  color: #ccc;
}

.image-block img {
  width: 100%;
  border-radius: 4px;
}

.caption {
  display: block;
  margin-top: 15px;
  font-size: 0.85rem;
  color: #666;
  font-style: italic;
}

.logo-final {
  max-width: 300px;
  display: block;
  margin: 0 auto;
  filter: drop-shadow(0 0 20px rgba(255,255,255,0.1));
}

.gallery-section {
  text-align: center;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 250px);
  gap: 20px;
  margin-top: 50px;
}

.bento-item {
  background: #111;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #222;
}

.bento-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-1 { grid-column: span 2; }
.item-2 { grid-row: span 2; }
.text-card {
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.browser-mockup {
  margin-top: 40px;
  background: #222;
  border-radius: 10px 10px 0 0;
  padding: 10px 10px 0 10px;
  border: 1px solid #333;
}

.browser-mockup img {
  width: 100%;
  display: block;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  margin-top: 40px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* POPUP LIGHTBOX */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  cursor: zoom-out;
}

.lightbox-image {
  max-width: 90%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.8);
}

.close-lightbox-btn {
  position: absolute;
  top: 30px;
  right: 40px;
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease;
}

.close-lightbox-btn:hover {
  color: #009688;
  transform: scale(1.1);
}

.animate-zoom {
  animation: zoomAnimation 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

@keyframes zoomAnimation {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* RESPONSIVE DESIGN */
@media (max-width: 1024px) {
  .split-intro-section {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 20px;
  }
  
  .media-carousel-wrapper {
    position: relative;
    top: 0;
  }
  
  .carousel-active-item {
    height: 380px;
  }

  .project-actions-container {
    justify-content: flex-start;
  }

  .intro-grid, .alt-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .alt-layout .image-block {
    order: 2;
  }

  .bento-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
  
  .item-1 { grid-column: span 2; }
  .item-2 { grid-column: span 1; }
}

@media (max-width: 768px) {
  .project-header { height: 35vh; }
  .title { font-size: 2.2rem; }
  .carousel-active-item { height: 280px; }
  
  .reveal-section { margin-bottom: 70px; }
  
  .bento-grid {
    grid-template-columns: 1fr;
  }
  .item-1, .item-2 { grid-column: span 1; }
  
  .video-container { padding-bottom: 75%; }
  
  .action-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>