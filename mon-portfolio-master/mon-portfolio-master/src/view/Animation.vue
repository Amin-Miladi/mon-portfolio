<template>
  <div class="project-detail">
    <header class="project-header fade-in" role="banner">
      <span class="project-tag">CREATIVE STUDIO // DIGITAL ART</span>
      <h1 class="project-title" itemprop="name">Animation & Motion Design</h1>
      <div class="header-divider"></div>
    </header>

    <main class="project-content" role="main">
      <section class="reveal-section gallery-vertical-layout" aria-label="Showroom Motion Design Portfolio">
        
        <article 
          v-for="(video, index) in videos" 
          :key="index" 
          class="work-item"
          @click="openLightbox(index)"
          itemscope 
          itemtype="https://schema.org/VideoObject"
        >
          <meta itemprop="thumbnailUrl" content="https://miladi-amin-portfolio.netlify.app/photoCV.jpg" />
          <meta itemprop="uploadDate" content="2026-01-01" />
          <meta itemprop="embedUrl" :content="video.link" />

          <div class="work-number-bg" aria-hidden="true">
            {{ formatNumber(index + 1) }}
          </div>

          <div class="work-container">
            <div class="video-preview-frame">
              <div class="video-play-overlay">
                <span class="play-icon" aria-label="Visionner l'animation">▶</span>
              </div>
              
              <iframe
                class="embedded-iframe"
                :src="video.link"
                frameborder="0"
                allow="autoplay; encrypted-media"
                loading="lazy"
                title="Aperçu vidéo - Amin Miladi"
              ></iframe>
            </div>

            <div class="work-meta">
              <h3 itemprop="name">{{ video.title }}</h3>
              <p class="work-sub">// Post-production, Keyframing & Animation Graphique</p>
              <p class="work-description" itemprop="description">{{ video.description }}</p>
            </div>
          </div>
        </article>

      </section>
    </main>

    <transition name="lightbox-fade">
      <div v-if="isLightboxOpen" class="lightbox-modal" @click.self="closeLightbox" role="dialog" aria-modal="true">
        <button class="lightbox-btn-close" @click="closeLightbox" aria-label="Fermer la visionneuse">✕</button>
        <button class="lightbox-arrow arrow-left" @click.stop="prevVideo" aria-label="Animation précédente">‹</button>

        <div class="lightbox-player-box scale-up">
          <div class="responsive-player-container">
            <iframe
              v-if="isLightboxOpen"
              class="lightbox-iframe"
              :src="videos[currentIndex].link"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="Lecteur principal - Amin Miladi"
            ></iframe>
          </div>
          <p class="lightbox-meta-info">Animation {{ currentIndex + 1 }} / {{ videos.length }} — {{ videos[currentIndex].title }}</p>
        </div>

        <button class="lightbox-arrow arrow-right" @click.stop="nextVideo" aria-label="Animation suivante">›</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AnimationPage",
  data() {
    return {
      isLightboxOpen: false,
      currentIndex: 0,
      videos: [
        // 🎯 VIDÉO DRIVE 1 : Ajoutée en première position avec conversion automatique /preview
        {
          link: "https://drive.google.com/file/d/1ai-yLNvBMCRHLP-mTfDxI67duNaZ_Y_J/preview",
          title: "Direction Artistique & Production 2D",
          description: "Création d'univers graphiques sur mesure combinant fluidité, sound design immersif et gestion des courbes de bézier. Un focus axé sur l'identité de marque et l'attractivité visuelle."
        },
        // 🎯 VIDÉO DRIVE 2 : Ajoutée en seconde position
        {
          link: "https://drive.google.com/file/d/1cX5XQTi3vK_3dE6kv5dDjhdZEk-uGAdu/preview",
          title: "Showcase Audiovisuel & Effets Avancés",
          description: "Démonstration technique de post-production, d'effets visuels dynamiques et de transitions cinématiques fluides calibrées pour capter l'attention du spectateur dès les premières secondes."
        },
        // Vidéos d'origine conservées intactes
        {
          link: "https://drive.google.com/file/d/1K5HnDI04SkBwHin0cdIyz2E8eOT9kc1h/preview",
          title: "Composition Cinétique Expérimentale",
          description: "Recherche approfondie sur le rythme et la synchronisation structurelle. Ce projet explore la fluidité des courbes de vitesse et l'impact visuel des formes vectorielles minimalistes en mouvement constant."
        },
        {
          link: "https://drive.google.com/file/d/1EGUgep7AEQJu5hFwiVEIxqd_CCH4bKE-/preview",
          title: "Identité de Marque Animée",
          description: "Développement d'une charte graphique dynamique axée sur l'élégance décorative. Le travail se concentre sur les micro-animations fluides, l'inertie des mouvements et la transition organique entre les différents éléments visuels du logo."
        },
        {
          link: "https://drive.google.com/file/d/10vBneT9P7e5M14FHG_5AETlMBAeABy8U/preview",
          title: "Séquence Narrative Abstraite",
          description: "Mise en scène d'un univers conceptuel utilisant des techniques d'interpolation complexes sous After Effects. L'agencement spatial met en valeur la physique de collision et l'amortissement pour un rendu réaliste et captivant."
        },
        {
          link: "https://drive.google.com/file/d/1RRoxIWDUSBUNGqMYVnOdKUERjyJ4-IHF/preview",
          title: "Infographie Dynamique",
          description: "Vulgarisation visuelle structurée combinant des typographies cinétiques nettes et un sound design percutant. L'espace de l'écran est optimisé pour guider naturellement le regard à travers une hiérarchie d'animations fluides."
        },
        {
          link: "https://drive.google.com/file/d/10KynPYkbTSWVmJ6G0x6IhkzH6eOcoMhy/preview",
          title: "Motion Graphics Corporate",
          description: "Création d'une boucle d'animation haut de gamme destinée aux supports de communication institutionnels. Équilibre parfait entre esthétique minimaliste, rigueur des minutages et transitions géométriques fluides."
        },
        {
          link: "https://drive.google.com/file/d/1bt0r3LxYostb3N-DKClaRJ4z91f4loiO/preview",
          title: "Simulation Particulaire Numérique",
          description: "Exploration des forces de friction, de gravité et de turbulence à travers un système complexe de particules. Les variations de lumières et d'opacités créent une atmosphère immersive et une profondeur visuelle remarquable."
        },
        {
          link: "https://drive.google.com/file/d/1cz1XBLTXWVw9e1tiYnwMxy2p6t0J2KOp/preview",
          title: "Typographie Cinétique Rythmée",
          description: "Exercice complet basé sur le rythme d'une piste audio spider-man spécifique. Les lettres se déforment, s'assemblent et se déploient en parfaite symbiose avec les fréquences sonores, créant un impact visuel fort et immédiat."
        },
        {
          link: "https://drive.google.com/file/d/1zUbSD3mgf-c8cQh93rLNbjVaBYlDRJtS/preview",
          title: "Interface Utilisateur Animée (UI Motion)",
          description: "Prototypage dynamique d'interactions pour une application mobile haut de gamme. Ce projet démontre l'importance du mouvement dans l'expérience utilisateur à travers des retours visuels précis et des transitions élégantes."
        },
        {
          link: "https://drive.google.com/file/d/1tff68UmAQeZ4VolXmldeh_NB1yYgTzOq/preview",
          title: "Générique Introductif Conceptuel",
          description: "Création d'une ouverture immersive utilisant des jeux d'ombres portées et des superpositions texturées. Le montage privilégie une tension visuelle progressive soutenue par des mouvements de caméra fluides et précis."
        },
        {
          link: "https://drive.google.com/file/d/1Y5znjCcAtSiSUYepgAefmIbxu-I0k7zQ/preview",
          title: "Synthèse Visuelle & Outro Dynamique",
          description: "Clôture de la sélection artistique combinant l'ensemble des compétences de keyframing acquises. Une transition globale qui résume l'esthétique épurée et l'exigence technique apportée à chaque image."
        }
      ]
    };
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeyboardNavigation);
    this.initScrollReveal();
    this.injectSEOData();
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeyboardNavigation);
    document.body.style.overflow = "";
  },
  methods: {
    formatNumber(num) {
      return num < 10 ? `0${num}` : num;
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
    nextVideo() {
      this.currentIndex = (this.currentIndex + 1) % this.videos.length;
    },
    prevVideo() {
      this.currentIndex = (this.currentIndex - 1 + this.videos.length) % this.videos.length;
    },
    handleKeyboardNavigation(event) {
      if (!this.isLightboxOpen) return;
      if (event.key === "Escape") this.closeLightbox();
      if (event.key === "ArrowRight") this.nextVideo();
      if (event.key === "ArrowLeft") this.prevVideo();
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
    injectSEOData() {
      // 🚀 INJECTION SEO TRÈS AGRESSIVE - INDEXATION CIBLÉE SUR LES MOTS-CLÉS À FORTE INTENTION
      document.title = "Studio Motion Design Paris & Vidéaste Freelance | Amin Miladi";
      
      const pageDescription = "Portfolio expert d'Amin Miladi, concepteur et réalisateur en animation vidéo, Motion Design 2D/3D et montage rythmé. Découvrez mes créations de génériques, graphismes animés et projets audiovisuels.";
      const canonicalUrl = window.location.href;

      const setMetaTag = (attribute, name, content) => {
        let meta = document.querySelector(`meta[${attribute}="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute(attribute, name);
          document.head.appendChild(meta);
        }
        meta.content = content;
      };

      // Balises Meta sémantiques enrichies
      setMetaTag('name', 'description', pageDescription);
      setMetaTag('name', 'keywords', "Amin Miladi, motion design freelance, monteur video alternance, after effects expert, animation 2D, portfolio etudiant MMI, design graphique luxe, creation manga, genesis zero, am lab1, montage video court metrage, typographie cinetique");
      setMetaTag('name', 'robots', "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");

      // Open Graph (Facebook / LinkedIn / Discord)
      setMetaTag('property', 'og:site_name', "Amin Miladi - Portfolio Professionnel");
      setMetaTag('property', 'og:title', "Motion Design & Realisation Audiovisuelle — Portfolio Amin Miladi");
      setMetaTag('property', 'og:description', pageDescription);
      setMetaTag('property', 'og:type', "video.portfolio");
      setMetaTag('property', 'og:url', canonicalUrl);
      setMetaTag('property', 'og:image', "https://miladi-amin-portfolio.netlify.app/photoCV.jpg");

      // Twitter Cards optimisées pour la visibilité des créateurs
      setMetaTag('name', 'twitter:card', "summary_large_image");
      setMetaTag('name', 'twitter:site', "@am_lab1");
      setMetaTag('name', 'twitter:title', "Showroom Motion Design Haut de Gamme — Amin Miladi");
      setMetaTag('name', 'twitter:description', pageDescription);
      setMetaTag('name', 'twitter:image', "https://miladi-amin-portfolio.netlify.app/photoCV.jpg");

      // Injection de l'arbre complet de données structurées JSON-LD (Schema.org)
      const legacyScript = document.getElementById("jsonld-animation-seo");
      if (legacyScript) legacyScript.remove();

      // Génération automatique des données structurées pour chacune des vidéos de ta page
      const videoStructures = this.videos.map((vid, idx) => ({
        "@type": "VideoObject",
        "name": vid.title,
        "description": vid.description,
        "thumbnailUrl": "https://miladi-amin-portfolio.netlify.app/photoCV.jpg",
        "uploadDate": "2026-01-01",
        "embedUrl": vid.link,
        "position": idx + 1
      }));

      const jsonLdStructure = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ItemPage",
            "@id": canonicalUrl,
            "url": canonicalUrl,
            "name": "Showroom de Réalisations en Motion Design et Post-Production",
            "description": pageDescription,
            "breadcrumb": { "@id": canonicalUrl + "#breadcrumb" },
            "mainEntity": {
              "@type": "ItemList",
              "name": "Collection d'animations graphiques de haut niveau",
              "numberOfItems": this.videos.length,
              "itemListElement": videoStructures
            }
          },
          {
            "@type": "BreadcrumbList",
            "@id": canonicalUrl + "#breadcrumb",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": window.location.origin },
              { "@type": "ListItem", "position": 2, "name": "Projets", "item": window.location.origin + "/projets" },
              { "@type": "ListItem", "position": 3, "name": "Motion Design & Animation", "item": canonicalUrl }
            ]
          }
        ]
      };

      const scriptTag = document.createElement('script');
      scriptTag.id = "jsonld-animation-seo";
      scriptTag.type = "application/ld+json";
      scriptTag.text = JSON.stringify(jsonLdStructure);
      document.head.appendChild(scriptTag);
    }
  }
};
</script>

<style scoped>
/* ====== ARCHITECTURE DE LA PAGE ====== */
.project-detail {
  padding: 0 0 120px 0;
  color: #ffffff;
  background-color: #000000;
  font-family: "Futura PT", "Segoe UI", sans-serif;
  overflow-x: hidden;
  min-height: 100vh;
}

/* ====== EN-TÊTE ÉPURÉ ====== */
.project-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 150px 24px 60px 24px;
  margin: 0 auto;
}

.project-tag {
  color: #ff5722;
  font-size: 0.8rem;
  letter-spacing: 5px;
  margin-bottom: 15px;
  font-family: monospace;
}

.project-title {
  font-size: clamp(2.2rem, 6vw, 4rem);
  font-weight: 300;
  text-transform: uppercase;
  margin: 0 0 20px 0;
  letter-spacing: -0.5px;
  color: #ffffff;
}

.header-divider {
  width: 60px;
  height: 1px;
  background-color: #ff5722;
}

/* ====== SCROLL REVEAL ====== */
.reveal-section {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1), transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal-section.active {
  opacity: 1;
  transform: translateY(0);
}

/* ====== EXPOSITION GRAPHIQUE VIGNETTES ====== */
.project-content {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
}

.gallery-vertical-layout {
  display: flex;
  flex-direction: column;
  gap: 160px;
  align-items: center;
}

.work-item {
  position: relative;
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

/* Numérotations géantes */
.work-number-bg {
  position: absolute;
  top: -80px;
  left: -60px;
  font-size: 16rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.025);
  z-index: 0;
  font-family: 'Futura PT', sans-serif;
  pointer-events: none;
  user-select: none;
}

.work-item:nth-child(even) .work-number-bg {
  left: auto;
  right: -60px;
}

.work-container {
  position: relative;
  width: 100%;
  z-index: 1;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

.work-item:hover .work-container {
  transform: scale(1.015) translateY(-4px);
}

/* 🎯 CORRECTION RESPONSIVE : Remplacement de la hauteur fixe (506px) par un ratio fluide 16:9 */
.video-preview-frame {
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* Ratio 16:9 parfait sur tous les supports (écrans 4K, tablettes et smartphones) */
  background-color: #050505;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
}

.embedded-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  pointer-events: none;
}

.video-play-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  z-index: 2;
  transition: opacity 0.3s ease, background 0.3s ease;
}

.work-item:hover .video-play-overlay {
  opacity: 1;
  background: rgba(0, 0, 0, 0.55);
}

.play-icon {
  font-size: 2.4rem;
  color: #ff5722;
  transform: scale(0.8);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.work-item:hover .play-icon {
  transform: scale(1);
}

/* Typographies */
.work-meta {
  margin-top: 24px;
  text-align: left;
  padding: 0 8px;
}

.work-meta h3 {
  font-size: 1.35rem;
  margin: 0 0 6px 0;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: -0.2px;
}

.work-sub {
  font-size: 0.85rem;
  color: #ff5722;
  margin: 0 0 12px 0;
  font-family: monospace;
  letter-spacing: 1px;
}

.work-description {
  font-size: 1rem;
  color: #a5a5a5;
  line-height: 1.65;
  font-weight: 300;
  margin: 0;
  max-width: 850px;
}

/* ====== MODALE VISIONNEUSE LIGHTBOX ====== */
.lightbox-modal {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.98);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  padding: 30px;
}

.lightbox-player-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1050px;
}

.responsive-player-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  background-color: #000000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.lightbox-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.lightbox-meta-info {
  margin-top: 20px;
  color: #666666;
  font-size: 0.85rem;
  font-family: monospace;
}

.lightbox-btn-close {
  position: absolute;
  top: 35px;
  right: 45px;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 2.2rem;
  cursor: pointer;
  transition: color 0.2s, transform 0.2s;
}
.lightbox-btn-close:hover { color: #ff5722; transform: scale(1.1); }

.lightbox-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 4.5rem;
  cursor: pointer;
  padding: 20px;
  user-select: none;
  transition: color 0.2s, transform 0.2s;
}
.lightbox-arrow:hover { color: #ff5722; }
.arrow-left { left: 20px; }
.arrow-right { right: 20px; }
.arrow-left:hover { transform: translateY(-50%) scale(1.08); }
.arrow-right:hover { transform: translateY(-50%) scale(1.08); }

/* Animations */
.lightbox-fade-enter-active, .lightbox-fade-leave-active { transition: opacity 0.35s ease; }
.lightbox-fade-enter-from, .lightbox-fade-leave-to { opacity: 0; }

.scale-up { animation: modalScale 0.4s cubic-bezier(0.215, 0.610, 0.355, 1); }
@keyframes modalScale {
  from { transform: scale(0.96); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* ====== RESPONSIVE DESIGN AVANCÉ ====== */
@media (max-width: 1100px) {
  .work-item { max-width: 800px; }
  .work-number-bg { font-size: 13rem; top: -50px; left: -30px; }
  .work-item:nth-child(even) .work-number-bg { right: -30px; }
}

@media (max-width: 850px) {
  .project-header { padding-top: 120px; padding-bottom: 40px; }
  .project-title { font-size: 2.4rem; }
  
  .gallery-vertical-layout { gap: 110px; }
  .work-item { max-width: 100%; padding: 0 8px; }
  
  .work-number-bg { font-size: 9rem; top: -45px; left: 15px; }
  .work-item:nth-child(even) .work-number-bg { right: 15px; left: auto; }
  
  /* Amélioration ergonomique sur écrans tactiles */
  .lightbox-arrow {
    top: auto;
    bottom: 25px;
    transform: none;
    font-size: 2.8rem;
    padding: 10px;
  }
  .lightbox-arrow:hover { transform: none; }
  .arrow-left { left: 25%; }
  .arrow-right { right: 25%; }
  
  .lightbox-btn-close { top: 25px; right: 25px; font-size: 2rem; }
  .lightbox-modal { padding: 16px; }
}

@media (max-width: 600px) {
  .work-number-bg { font-size: 7rem; top: -30px; }
  .work-meta h3 { font-size: 1.2rem; }
  .work-description { font-size: 0.95rem; line-height: 1.55; }
}

@media (max-width: 480px) {
  .project-header { padding-top: 100px; }
  .project-title { font-size: 1.8rem; }
  .gallery-vertical-layout { gap: 85px; }
}
</style>