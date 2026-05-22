<template>
  <div class="project-detail">
    <header class="project-header fade-in" role="banner">
      <span class="project-tag">POST-PRODUCTION // AUDIOVISUEL</span>
      <h1 class="project-title" itemprop="name">Montage Vidéo &amp; Réalisation</h1>
      <div class="header-divider"></div>
    </header>

    <main class="project-content" role="main">
      <section class="reveal-section gallery-vertical-layout" aria-label="Showroom Montage Vidéo et Post-Production">
        
        <article 
          v-for="(video, index) in videos" 
          :key="index" 
          class="work-item"
          @click="openLightbox(index)"
          itemscope 
          itemtype="https://schema.org/VideoObject"
        >
          <meta itemprop="thumbnailUrl" content="https://miladi-amin-portfolio.netlify.app/photoCV.jpg" />
          <meta itemprop="uploadDate" content="2026-02-15" />
          <meta itemprop="embedUrl" :content="video.src" />

          <div class="work-number-bg" aria-hidden="true">
            {{ formatNumber(index + 1) }}
          </div>

          <div class="work-container">
            <div class="video-preview-frame">
              <div class="video-play-overlay">
                <span class="play-icon" aria-label="Lancer la lecture du clip">▶</span>
              </div>
              
              <iframe
                class="embedded-iframe"
                :src="video.src"
                frameborder="0"
                allow="autoplay; encrypted-media"
                loading="lazy"
                title="Aperçu montage vidéo - Amin Miladi"
              ></iframe>
            </div>

            <div class="work-meta">
              <h3 itemprop="name">{{ video.title || 'Réalisation Audiovisuelle #' + formatNumber(index + 1) }}</h3>
              <p class="work-sub">// Post-Production &amp; Sound Design</p>
              <p class="work-description" itemprop="description">{{ video.description }}</p>
            </div>
          </div>
        </article>

      </section>
    </main>

    <transition name="lightbox-fade">
      <div v-if="isLightboxOpen" class="lightbox-modal" @click.self="closeLightbox" role="dialog" aria-modal="true">
        <button class="lightbox-btn-close" @click="closeLightbox" aria-label="Fermer la visionneuse">✕</button>
        <button class="lightbox-arrow arrow-left" @click.stop="prevVideo" aria-label="Montage précédent">‹</button>

        <div class="lightbox-player-box scale-up">
          <div class="responsive-player-container">
            <iframe
              v-if="isLightboxOpen"
              class="lightbox-iframe"
              :src="videos[currentIndex].src"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="Lecteur vidéo principal - Amin Miladi"
            ></iframe>
          </div>
          <p class="lightbox-meta-info">Réalisation {{ currentIndex + 1 }} / {{ videos.length }} — {{ videos[currentIndex].title }}</p>
        </div>

        <button class="lightbox-arrow arrow-right" @click.stop="nextVideo" aria-label="Montage suivant">›</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "MontagePage",
  data() {
    return {
      isLightboxOpen: false,
      currentIndex: 0,
      videos: [
        // 🎯 NOUVELLE VIDÉO YOUTUBE 1
        {
          src: "https://www.youtube.com/embed/_HbySg8TruQ",
          title: "Production Audiovisuelle Pop & Esthétique Moderne",
          description: "Création d'une structure de montage dynamique intégrant des compositions de plans soignées et un traitement rythmé des transitions visuelles. Analyse et synchronisation fine pour maximiser l'engagement."
        },
        // 🎯 NOUVELLE VIDÉO YOUTUBE 2
        {
          src: "https://www.youtube.com/embed/la16JE8z-lU",
          title: "Direction Artistique Cinématique & Flow Visuel",
          description: "Exploration des techniques de raccord sur le mouvement, d'étalonnage contrasté et d'ambiances lumineuses immersives pour appuyer la narration éditoriale."
        },
        // 🎯 NOUVELLE VIDÉO YOUTUBE 3
        {
          src: "https://www.youtube.com/embed/0EPk8-FxV_U",
          title: "Post-Production Expérimentale & Sound Design",
          description: "Mise en œuvre d'effets visuels intégrés et d'un sound design organique complexe pour structurer la continuité et renforcer le rythme global de la production."
        },
        // Nouvelles vidéos Drive précédentes conservées
        {
          src: "https://drive.google.com/file/d/1u3SgC2ItFLgNcYObaL-rwRBXGztFm2qc/preview",
          title: "Édition Rythmique & Storytelling Visuel",
          description: "Montage à forte charge narrative exploitant des techniques de jump-cut, de raccords au mouvement et une spatialisation complexe du paysage sonore."
        },
        {
          src: "https://drive.google.com/file/d/1oVxNE_iJdrvOqoJJiDEIcLyIL4yF1BUP/preview",
          title: "Étalonnage Cinématographique & Raccords Plastiques",
          description: "Correction colorimétrique avancée et application de LUTs personnalisées. Focus sur l'homogénéité des teintes, la dynamique des contrastes et l'ambiance lumineuse."
        },
        {
          src: "https://drive.google.com/file/d/1u_rN2uijQX_4-i90q15kT1gpYC5ER-TQ/preview",
          title: "Sound Design Organique & Soundscapes",
          description: "Conception audio immersive intégrant des bruitages de textures, des transitions sonores par balayage de fréquence et une balance des voix optimisée pour la clarté."
        },
        {
          src: "https://drive.google.com/file/d/1MQktIgI-QHYqRU57MydYoIuw1ClyJJWa/preview",
          title: "Dérushage Stratégique & Dynamic Flow",
          description: "Sélection rigoureuse des meilleures prises de vue et agencement basé sur le tempo musical. Utilisation de speed ramping pour fluidifier les moments d'action intense."
        },
        // Vidéos d'origine
        { 
          src: "https://drive.google.com/file/d/1YdgHNFB7DHMNmKVzaQLrHbfQKl7-nfXH/preview",
          title: "Production Rythmée & Cut Synchro",
          description: "Production rythmée axée sur le dynamisme des coupures, la synchronisation des transitions et un travail méticuleux sur le sound design ambiant."
        },
        { 
          src: "https://drive.google.com/file/d/1D2tObTG3QZKQqjUfJrQIqI6C4OS-lPq9/preview",
          title: "Atmosphère Narrative & Grading Contrasté",
          description: "Création audiovisuelle explorant une colorimétrie contrastée et une post-production fluide pour installer une ambiance narrative singulière."
        },
        { 
          src: "https://drive.google.com/file/d/1qcYjWLo18mgoQGoTUMdl3gRIM7KUOZcn/preview",
          title: "Optimisation Digitale & Incrustations Graphiques",
          description: "Montage vidéo optimisé pour les plateformes digitales, combinant un rythme soutenu et des incrustations graphiques épurées."
        },
        { 
          src: "https://drive.google.com/file/d/1hRNuKlj7ilmOFFlMZOJ8TIAsECu3s68R/preview",
          title: "Raccords Cinématiques Avancés",
          description: "Projet de composition visuelle mettant l'accent sur les raccords cinématiques et l'immersion sonore des dialogues."
        },
        { 
          src: "https://drive.google.com/file/d/1OePGDenOMYrtQCQ1DyfL4wEFp0ojFjAH/preview",
          title: "Post-Production Effets & Speed Ramping",
          description: "Expérimentation autour de la post-production et des effets de vitesse (speed ramping) pour dynamiser l'enchaînement des plans."
        },
        { 
          src: "https://drive.google.com/file/d/1bimlmCGqn42xI5aC8tAt8M5ak_7vLMt6/preview",
          title: "Habillage Audio & Étalonnage de Précision",
          description: "Habillage audio et étalonnage précis visant à harmoniser la structure narrative et à valoriser les intentions du dérushage."
        },
        { 
          src: "https://drive.google.com/file/d/1CszpKPEFedO_m-va9jXggdpj14z7-hKg/preview",
          title: "Découpage Fluide & Compositions Composites",
          description: "Réalisation technique articulée autour d'un découpage fluide et d'une intégration minutieuse des éléments composites."
        },
        { 
          src: "https://drive.google.com/file/d/1uDFTq8zbqMaNzbBT6eCLnaFhBBQ3xhV-/preview",
          title: "Sound Design Percutant & Continuité Visuelle",
          description: "Développement d'un projet de montage court, mêlant sound design percutant et gestion rigoureuse de la continuité visuelle."
        },
        { 
          src: "https://drive.google.com/file/d/1We8Aarru0PZfTXWbNc-D6ZMU1SKwi6Yb/preview",
          title: "Synthèse Structurelle Épurée",
          description: "Finalisation de la série de projets avec une structure audiovisuelle soignée, alliant clarté des plans et esthétique épurée."
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
      // 🚀 INJECTION SEO AGRESSIVE CIBLÉE SUR LA RECHERCHE DE MONTEURS AUDIOVISUELS
      document.title = "Monteur Vidéo Freelance & Post-Production Audiovisuelle | Amin Miladi";
      const pageDescription = "Showroom professionnel d'Amin Miladi, monteur vidéo et technicien de post-production. Découvrez mes travaux d'étalonnage, découpage de plans et sound design pour courts-métrages et réseaux sociaux.";
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
      setMetaTag('name', 'keywords', "Amin Miladi, monteur video freelance, alternance montage video, post-production paris, premiere pro expert, sound design clips, etalonnage cinematographique, portfolio BUT MMI, am lab1, genesis zero, video editor portfolio, court metrage post-prod");
      setMetaTag('name', 'robots', "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");

      // Open Graph (LinkedIn / Discord / Facebook)
      setMetaTag('property', 'og:site_name', "Amin Miladi - Espace Créatif");
      setMetaTag('property', 'og:title', "Montage Vidéo Professionnel & Post-Production — Amin Miladi");
      setMetaTag('property', 'og:description', pageDescription);
      setMetaTag('property', 'og:type', "video.portfolio");
      setMetaTag('property', 'og:url', canonicalUrl);
      setMetaTag('property', 'og:image', "https://miladi-amin-portfolio.netlify.app/photoCV.jpg");

      // Twitter Cards
      setMetaTag('name', 'twitter:card', "summary_large_image");
      setMetaTag('name', 'twitter:site', "@am_lab1");
      setMetaTag('name', 'twitter:title', "Galerie Montage Vidéo & Post-Prod — Amin Miladi");
      setMetaTag('name', 'twitter:description', pageDescription);
      setMetaTag('name', 'twitter:image', "https://miladi-amin-portfolio.netlify.app/photoCV.jpg");

      // Génération dynamique de l'arborescence de données massives JSON-LD (Schema.org)
      const legacyScript = document.getElementById("jsonld-montage-v3-seo");
      if (legacyScript) legacyScript.remove();

      // Mapping automatique de chaque vidéo pour l'indexation de l'algorithme Google Bots
      const schemaVideoItems = this.videos.map((video, idx) => ({
        "@type": "VideoObject",
        "name": video.title,
        "description": video.description,
        "thumbnailUrl": "https://miladi-amin-portfolio.netlify.app/photoCV.jpg",
        "uploadDate": "2026-02-15",
        "embedUrl": video.src,
        "position": idx + 1
      }));

      const jsonLdStructure = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ItemPage",
            "@id": canonicalUrl,
            "url": canonicalUrl,
            "name": "Galerie et Showroom de Montage Vidéo Professionnel",
            "description": pageDescription,
            "breadcrumb": { "@id": canonicalUrl + "#breadcrumb" },
            "mainEntity": {
              "@type": "ItemList",
              "name": "Index de projets de montage et post-production",
              "numberOfItems": this.videos.length,
              "itemListElement": schemaVideoItems
            }
          },
          {
            "@type": "BreadcrumbList",
            "@id": canonicalUrl + "#breadcrumb",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": window.location.origin },
              { "@type": "ListItem", "position": 2, "name": "Projets", "item": window.location.origin + "/projets" },
              { "@type": "ListItem", "position": 3, "name": "Montage Vidéo", "item": canonicalUrl }
            ]
          }
        ]
      };

      const scriptTag = document.createElement('script');
      scriptTag.id = "jsonld-montage-v3-seo";
      scriptTag.type = "application/ld+json";
      scriptTag.text = JSON.stringify(jsonLdStructure);
      document.head.appendChild(scriptTag);
    }
  }
};
</script>

<style scoped>
/* ====== STRUCTURE DE LA PAGE ====== */
.project-detail {
  padding: 0 0 100px 0;
  color: #f7f7f7;
  background-color: #000;
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
  padding: 140px 24px 60px 24px;
  margin: 0 auto;
}

.project-tag {
  color: #ff5722;
  font-size: 0.85rem;
  letter-spacing: 4px;
  margin-bottom: 15px;
  font-family: 'Trispace', sans-serif;
}

.project-title {
  font-size: clamp(2.2rem, 6vw, 4rem);
  font-weight: 300;
  text-transform: uppercase;
  margin: 0 0 20px 0;
  letter-spacing: -1px;
  color: #fff;
}

.header-divider {
  width: 60px;
  height: 1px;
  background-color: #ff5722;
}

/* ====== SCROLL REVEAL (JS TRANSITION) ====== */
.reveal-section {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.85s cubic-bezier(0.25, 1, 0.5, 1), transform 0.85s cubic-bezier(0.25, 1, 0.5, 1);
}

.reveal-section.active {
  opacity: 1;
  transform: translateY(0);
}

/* ====== LAYOUT VERTICAL TYPE GALERIE D'ART ====== */
.project-content {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}

.gallery-vertical-layout {
  display: flex;
  flex-direction: column;
  gap: 150px;
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

/* Numérotation géante */
.work-number-bg {
  position: absolute;
  top: -70px;
  left: -50px;
  font-size: 15rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.025);
  z-index: 0;
  font-family: 'Futura PT', sans-serif;
  pointer-events: none;
  user-select: none;
}

.work-item:nth-child(even) .work-number-bg {
  left: auto;
  right: -50px;
}

.work-container {
  position: relative;
  width: 100%;
  z-index: 1;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

.work-item:hover .work-container {
  transform: scale(1.015) translateY(-5px);
}

/* INTERFACE ULTRA-RESPONSIVE : Calcul automatique de la hauteur via ratio fluide 16:9 */
.video-preview-frame {
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* Prévient les bandes noires et déformations sur smartphone ou grand écran */
  background-color: #050505;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 20px 50px rgba(0,0,0,0.7);
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
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  z-index: 2;
  transition: opacity 0.3s ease, background 0.3s ease;
}

.work-item:hover .video-play-overlay {
  opacity: 1;
  background: rgba(0, 0, 0, 0.6);
}

.play-icon {
  font-size: 2.5rem;
  color: #ff5722;
  transform: scale(0.8);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.work-item:hover .play-icon {
  transform: scale(1);
}

/* Métadonnées */
.work-meta {
  margin-top: 20px;
  text-align: left;
  padding: 0 10px;
}

.work-meta h3 {
  font-size: 1.3rem;
  margin: 0 0 5px 0;
  font-weight: 400;
  color: #fff;
}

.work-sub {
  font-size: 0.85rem;
  color: #ff5722;
  margin: 0 0 10px 0;
  font-family: 'Trispace', sans-serif;
  font-weight: 300;
}

.work-description {
  font-size: 1rem;
  color: #aaa;
  line-height: 1.6;
  font-weight: 300;
  margin: 0;
  max-width: 800px;
}

/* ====== MODALE LIGHTBOX PLEIN ÉCRAN ====== */
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
  max-width: 1000px;
}

.responsive-player-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  background-color: #000;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 30px 70px rgba(0,0,0,0.9);
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
  color: #555;
  font-size: 0.85rem;
  font-family: 'Trispace', sans-serif;
  font-weight: 300;
}

.lightbox-btn-close {
  position: absolute;
  top: 30px;
  right: 40px;
  background: transparent;
  border: none;
  color: white;
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
  color: white;
  font-size: 4rem;
  cursor: pointer;
  padding: 20px;
  user-select: none;
  transition: color 0.2s, transform 0.2s;
}
.lightbox-arrow:hover { color: #ff5722; }
.arrow-left { left: 20px; }
.arrow-right { right: 20px; }
.arrow-left:hover { transform: translateY(-50%) scale(1.1); }
.arrow-right:hover { transform: translateY(-50%) scale(1.1); }

/* Animations de transition */
.lightbox-fade-enter-active, .lightbox-fade-leave-active { transition: opacity 0.3s ease; }
.lightbox-fade-enter-from, .lightbox-fade-leave-to { opacity: 0; }

.scale-up { animation: modalScale 0.4s cubic-bezier(0.25, 1, 0.5, 1); }
@keyframes modalScale {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* ====== RESPONSIVE DESIGN COMPLET ====== */
@media (max-width: 1100px) {
  .work-item { max-width: 800px; }
  .work-number-bg { font-size: 12rem; top: -50px; left: -30px; }
  .work-item:nth-child(even) .work-number-bg { right: -30px; }
}

@media (max-width: 850px) {
  .project-header { padding-top: 110px; padding-bottom: 40px; }
  .project-title { font-size: 2.3rem; }
  
  .gallery-vertical-layout { gap: 100px; }
  .work-item { max-width: 100%; padding: 0 10px; }
  
  .work-number-bg { font-size: 9rem; top: -40px; left: 10px; }
  .work-item:nth-child(even) .work-number-bg { right: 10px; left: auto; }
  
  /* Relocalisation des boutons sur smartphone */
  .lightbox-arrow {
    top: auto;
    bottom: 20px;
    transform: none;
    font-size: 2.5rem;
    padding: 10px;
  }
  .lightbox-arrow:hover { transform: none; }
  .arrow-left { left: 25%; }
  .arrow-right { right: 25%; }
  
  .lightbox-btn-close { top: 20px; right: 25px; font-size: 1.8rem; }
  .lightbox-modal { padding: 15px; }
}

@media (max-width: 600px) {
  .work-number-bg { font-size: 7rem; top: -30px; }
  .work-meta h3 { font-size: 1.15rem; }
  .work-description { font-size: 0.95rem; }
}

@media (max-width: 480px) {
  .project-title { font-size: 1.9rem; }
  .gallery-vertical-layout { gap: 80px; }
}
</style>