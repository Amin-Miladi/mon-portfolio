<template>
  <div class="projects-screen">
    
    <header class="projects-header fade-in-down" role="banner">
      <h1 class="main-title">Mes Réalisations</h1>
      <div class="header-divider"></div>
      <p class="subtitle">Découvrez l'ensemble de mes réalisations et travaux multimédias d'autorité.</p>
    </header>

    <nav class="console-tabs fade-in-tabs" role="navigation" aria-label="Filtrer les projets">
      <div 
        v-for="cat in categoriesList" 
        :key="cat.id"
        @click="filterCategory(cat.id)" 
        :class="{ active: selectedCategory === cat.id }"
        class="tab-item"
        role="button"
        :aria-pressed="selectedCategory === cat.id ? 'true' : 'false'"
      >
        {{ cat.label }}
      </div>
    </nav>

    <div class="carousel-section fade-in-track">
      <button class="nav-arrow-btn prev-btn" @click="scrollTrack(-1)" aria-label="Projets précédents">‹</button>

      <div class="slider-container" ref="sliderContainer">
        <div class="projects-horizontal-track">
          <router-link
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            :to="`/projets/${project.category}`"
            class="project-card reveal-card"
            :style="{ animationDelay: `${index * 0.12}s` }"
          >
            <div class="project-box">
              <div class="project-cover" :style="{ backgroundImage: `url(${project.image})` }">
                <div class="date-badge">{{ project.date }}</div>
                <div class="hover-overlay">
                  <span class="view-text">VOIR LE PROJET</span>
                </div>
              </div>
            </div>
            
            <div class="project-meta">
              <h3>{{ project.title }}</h3>
              <p class="project-cat">// {{ getCategoryLabel(project.category) }}</p>
              <p class="project-desc">{{ project.description }}</p>
            </div>
          </router-link>
        </div>
      </div>

      <button class="nav-arrow-btn next-btn" @click="scrollTrack(1)" aria-label="Projets suivants">›</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "MesProjets",
  data() {
    return {
      selectedCategory: "all",
      // Ajout de descriptions fluides et spécifiques pour chaque projet (Parfait pour le SEO)
      projects: [
        {
          id: 1,
          title: "Travaux Étudiants",
          date: "2024",
          image: require("../assets/logo_mayel_blanc.png"),
          category: "etudiants",
          description: "Étude de cas complète sur l'identité de marque Mayel, combinant graphisme d'inspiration Maya et packaging premium."
        },
        {
          id: 2,
          title: "Projet création manga",
          date: "2024",
          image: require("../assets/capture_2024_11_09.png"),
          category: "manga",
          description: "Développement scénaristique et character design autour de l'univers de science-fiction Genesis Zero."
        },
        {
          id: 3,
          title: "Création Vidéo YouTube",
          date: "2022",
          image: require("../assets/IMG_0509.jpeg"),
          category: "youtube",
          description: "Production audiovisuelle digitale, gestion du rythme et création de miniatures optimisées pour le taux de clic."
        },
        {
          id: 4,
          title: "Design Graphique & Illustrations",
          date: "2023",
          image: require("../assets/capture_2024_06_20.png"),
          category: "design",
          description: "Sélection d'affiches alternatives de films, posters de sports et compositions typographiques vectorielles."
        },
        {
          id: 5,
          title: "Montage Vidéo",
          date: "2024",
          image: require("../assets/28500834.webp"),
          category: "montage",
          description: "Exercices de post-production avancée basés sur le dérushage structurel, les raccords fluides et l'étalonnage."
        },
        {
          id: 6,
          title: "Animation & Motion Design",
          date: "2024",
          image: require("../assets/afake_bureau.png"),
          category: "motion",
          description: "Compositions animées 2D sous After Effects explorant le keyframing et les courbes de vitesse cinétiques."
        },
      ],
      categoriesList: [
        { id: 'all', label: 'Tous les travaux' },
        { id: 'manga', label: 'GENESIS ZERO (Manga)' },
        { id: 'youtube', label: 'Vidéos YouTube' },
        { id: 'design', label: 'Design & Illustrations' },
        { id: 'montage', label: 'Montage Vidéo' },
        { id: 'motion', label: 'Animation & Motion' }
      ]
    };
  },
  computed: {
    filteredProjects() {
      if (this.selectedCategory === "all") {
        return this.projects;
      }
      return this.projects.filter(
        (project) => project.category === this.selectedCategory
      );
    }
  },
  mounted() {
    this.injectSliderSEO();
  },
  methods: {
    filterCategory(category) {
      this.selectedCategory = category;
      this.injectSliderSEO(); // Met à jour les données structurées selon le filtre actif
    },
    getCategoryLabel(catId) {
      const found = this.categoriesList.find(c => c.id === catId);
      return found ? found.label : catId;
    },
    scrollTrack(direction) {
      const container = this.$refs.sliderContainer;
      if (container) {
        const scrollAmount = 370; 
        container.scrollBy({
          left: direction * scrollAmount,
          behavior: 'smooth'
        });
      }
    },
    injectSliderSEO() {
      document.title = "Showroom Projets Multimédias | Amin Miladi Portfolio";
      const currentUrl = window.location.href;
      const pageDescription = "Explorez la galerie de projets d'Amin Miladi : de la création du manga Genesis Zero au montage vidéo, design vectoriel et motion design.";

      const setMeta = (attr, name, content) => {
        let meta = document.querySelector(`meta[${attr}="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute(attr, name);
          document.head.appendChild(meta);
        }
        meta.content = content;
      };

      setMeta('name', 'description', pageDescription);
      setMeta('name', 'keywords', "Amin Miladi projets, portfolio MMI, galerie design, montage showcase, motion design, Genesis Zero manga");
      setMeta('name', 'robots', "index, follow");

      // Injection dynamique de données structurées d'indexation en liste (ItemList)
      const oldScript = document.getElementById("jsonld-projects-list-seo");
      if (oldScript) oldScript.remove();

      const itemListElements = this.filteredProjects.map((project, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": project.title,
        "description": project.description,
        "url": window.location.origin + `/projets/${project.category}`
      }));

      const jsonLdData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ItemList",
            "@id": currentUrl + "#itemlist",
            "url": currentUrl,
            "name": "Liste des Réalisations Multimédias d'Amin Miladi",
            "description": pageDescription,
            "itemListElement": []
          }
        ]
      };
      
      jsonLdData["@graph"][0].itemListElement = itemListElements;

      const script = document.createElement('script');
      script.id = "jsonld-projects-list-seo";
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLdData);
      document.head.appendChild(script);
    }
  }
};
</script>

<style scoped>
/* ====== STRUCTURE GÉNÉRALE ====== */
.projects-screen {
  position: relative;
  min-height: 100vh;
  width: 100%;
  color: white;
  font-family: "Futura PT", "Segoe UI", sans-serif;
  padding: 130px 0 60px 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

/* ====== EN-TÊTE ÉPURÉ (PAS EN GRAS) ====== */
.projects-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px auto;
  padding: 0 20px;
}

.main-title {
  font-size: clamp(2.2rem, 6vw, 3.8rem);
  font-weight: 300; /* Linéaire et premium */
  text-transform: uppercase;
  margin: 0 0 15px 0;
  letter-spacing: -0.5px;
}

.header-divider {
  width: 50px;
  height: 1px;
  background-color: #ff5722;
  margin: 0 auto 25px auto;
}

.subtitle {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.65);
  font-family: 'Trispace', sans-serif;
  font-weight: 300;
}

/* ====== ONGLETS DE NAVIGATION ====== */
.console-tabs {
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 0 20px;
  margin-bottom: 45px;
  overflow-x: auto;
  scrollbar-width: none;
}
.console-tabs::-webkit-scrollbar { display: none; }

.tab-item {
  padding: 10px 22px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 400;
  white-space: nowrap;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.tab-item:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.tab-item.active {
  background: #ff5722;
  border-color: #ff5722;
  color: white;
  box-shadow: 0 6px 20px rgba(255, 87, 34, 0.3);
}

/* ====== SLIDER HORIZONTAL CONSOLE STYLE ====== */
.carousel-section {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}

.slider-container {
  width: 100%;
  overflow-x: auto;
  padding: 20px 60px;
  scrollbar-width: none;
  scroll-behavior: smooth;
}
.slider-container::-webkit-scrollbar { display: none; }

.projects-horizontal-track {
  display: flex;
  gap: 35px;
  width: max-content;
}

/* BLUR SÉLECTIF ET TRANSLATION SUR LE SURVOL */
.projects-horizontal-track:hover .project-card {
  filter: blur(3px) opacity(0.4);
  transform: scale(0.96);
}

.projects-horizontal-track .project-card:hover {
  filter: blur(0) opacity(1);
  transform: scale(1.05) translateY(-6px);
  z-index: 5;
}

/* Structure de la carte */
.project-card {
  display: flex;
  flex-direction: column;
  width: 330px;
  text-decoration: none;
  color: white;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

/* Conteneur de la jaquette */
.project-box {
  width: 100%;
  height: 200px;
  background: #0d0d0d;
  border-radius: 12px;
}

.project-cover {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover .project-cover {
  border-color: #ff5722;
  box-shadow: 0 15px 30px rgba(255, 87, 34, 0.25);
}

/* Badge Date */
.date-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.75);
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: bold;
  font-family: monospace;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Overlay au survol */
.hover-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .hover-overlay {
  opacity: 1;
}

.view-text {
  font-size: 0.8rem;
  letter-spacing: 2px;
  background: white;
  color: black;
  padding: 8px 16px;
  font-weight: 600;
  border-radius: 4px;
}

/* Infos sous la jaquette (Épurées, non grasses) */
.project-meta {
  margin-top: 16px;
  text-align: left;
  padding: 0 4px;
}

.project-meta h3 {
  font-size: 1.25rem;
  margin: 0 0 4px 0;
  font-weight: 400; /* Épuré */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.3s;
}

.project-card:hover .project-meta h3 {
  color: #ff5722;
}

.project-cat {
  font-size: 0.8rem;
  color: #ff5722;
  margin: 0 0 8px 0;
  font-family: 'Trispace', sans-serif;
  font-weight: 300;
}

.project-desc {
  font-size: 0.9rem;
  color: #888888;
  line-height: 1.5;
  font-weight: 300;
  margin: 0;
}

/* Flèches de navigation physiques */
.nav-arrow-btn {
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: white;
  width: 44px;
  height: 44px;
  font-size: 1.8rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.2s ease;
}

.prev-btn { left: 15px; }
.next-btn { right: 15px; }

.nav-arrow-btn:hover {
  background: #ff5722;
  color: white;
  border-color: #ff5722;
  transform: scale(1.1);
}

/* ====== PACK ANIMATIONS DE CASCADE STAGGER ====== */
.fade-in-down {
  opacity: 0;
  animation: fadeInDown 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.fade-in-tabs {
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.15s forwards;
}

.fade-in-track {
  opacity: 0;
  animation: fadeInUp 1s cubic-bezier(0.25, 1, 0.5, 1) 0.3s forwards;
}

.reveal-card {
  opacity: 0;
  transform: translateY(30px) scale(0.97);
  animation: cardReveal 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes cardReveal {
  from { opacity: 0; transform: translateY(30px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

/* ====== RESPONSIVE DESIGN COMPLET ====== */
@media (max-width: 1024px) {
  .slider-container { padding: 15px 40px; }
  .project-card { width: 280px; }
  .project-box { height: 170px; }
}

@media (max-width: 768px) {
  .projects-screen { padding-top: 110px; }
  .main-title { font-size: 2.1rem; }
  .subtitle { font-size: 0.95rem; }
  
  .console-tabs { 
    justify-content: flex-start;
    padding: 0 20px; 
    margin-bottom: 30px;
  }

  .nav-arrow-btn { display: none; }
  
  .slider-container { padding: 10px 20px; }
  .projects-horizontal-track { gap: 20px; }
  
  .project-card { width: 230px; }
  .project-box { height: 145px; }
  .project-meta h3 { font-size: 1.1rem; }
  .project-desc { font-size: 0.85rem; line-height: 1.4; }

  /* Désactivation des flous au survol mobile pour la performance tactile */
  .projects-horizontal-track:hover .project-card {
    filter: none;
    opacity: 1;
    transform: none;
  }
  .project-card:hover {
    transform: translateY(-4px);
  }
}

@media (max-width: 480px) {
  .main-title { font-size: 1.8rem; }
  .project-card { width: 200px; }
  .project-box { height: 130px; }
}
</style>