<template>
  <div class="projects-container">
    <header class="projects-main-header">
      <span class="project-tag">ARCHIVES // SHOWROOM GLOBAL</span>
      <h1 class="main-title">Tous les Projets</h1>
      <div class="header-divider"></div>
      <p class="lead-text">
        Explorez l'ensemble des travaux théoriques, techniques et artistiques développés au cours de mes modules d'études et de mes explorations graphiques personnelles.
      </p>
    </header>

    <nav class="categories-nav" role="navigation" aria-label="Menu de filtrage des archives">
      <button @click="filterCategory('all')" :class="{ active: selectedCategory === 'all' }" class="nav-span">Tous les travaux</button> 
      <button @click="filterCategory('manga')" :class="{ active: selectedCategory === 'manga' }" class="nav-span">Manga Genesis Zero</button> 
      <button @click="filterCategory('youtube')" :class="{ active: selectedCategory === 'youtube' }" class="nav-span">Vidéos YouTube</button> 
      <button @click="filterCategory('design')" :class="{ active: selectedCategory === 'design' }" class="nav-span">Design &amp; Illustrations</button> 
      <button @click="filterCategory('montage')" :class="{ active: selectedCategory === 'montage' }" class="nav-span">Montage vidéo</button> 
      <button @click="filterCategory('motion')" :class="{ active: selectedCategory === 'motion' }" class="nav-span">Animation &amp; Motion</button>
    </nav>

    <main class="projects-grid">
      <div
        class="project-card reveal-card"
        v-for="(project, index) in filteredProjects"
        :key="project.id"
        :class="project.category"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="project-image-frame">
          <img :src="project.image" :alt="`Projet multimédia ${project.title} par Amin Miladi`" class="project-image" loading="lazy" />
          <div class="card-overlay">
            <span class="explore-indicator">Consulter le dossier</span>
          </div>
        </div>
        <div class="project-details">
          <h3>{{ project.title }}</h3>
          <p class="card-description">{{ project.description }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "TousLesProjets",
  data() {
    return {
      selectedCategory: "all",
      // Tes 6 projets mis en conformité avec des textes riches et développés, sans aucun texte en gras
      projects: [
        {
          id: 1,
          title: "Travaux Étudiants",
          description: "Analyse, stratégie de positionnement et déploiement d'une identité visuelle luxueuse pour la marque épurée Mayel.",
          image: "https://via.placeholder.com/600x400/0d0d0d/ffffff?text=Travaux+Etudiants",
          category: "all",
        },
        {
          id: 2,
          title: "Genesis Zero - Chapitre 1",
          description: "Recherche préparatoire, création du synopsis de l'Athanéon et ébauche des planches narratives du projet de manga de science-fiction.",
          image: "https://via.placeholder.com/600x400/0d0d0d/ffffff?text=Genesis+Zero",
          category: "manga",
        },
        {
          id: 3,
          title: "Première vidéo YouTube",
          description: "Planification de la structure de dérushage, gestion de la dynamique sonore et étalonnage des éléments vidéo pour plateforme digitale.",
          image: "https://via.placeholder.com/600x400/0d0d0d/ffffff?text=Production+YouTube",
          category: "youtube",
        },
        {
          id: 4,
          title: "Design d'affiche",
          description: "Conception graphique vectorielle et composition sous Photoshop pour des affiches de cinéma alternatives et posters athlétiques.",
          image: "https://via.placeholder.com/600x400/0d0d0d/ffffff?text=Design+Graphique",
          category: "design",
        },
        {
          id: 5,
          title: "Montage Vidéo Publicitaire",
          description: "Développement d'un spot promotionnel rythmé axé sur des coupures millimétrées et l'insertion d'effets visuels cinétiques.",
          image: "https://via.placeholder.com/600x400/0d0d0d/ffffff?text=Montage+Video",
          category: "montage",
        },
        {
          id: 6,
          title: "Animation Motion Design",
          description: "Interpolation d'images clés et maniement des graphiques de vitesse sous After Effects pour la création d'animations textuelles complexes.",
          image: "https://via.placeholder.com/600x400/0d0d0d/ffffff?text=Motion+Design",
          category: "motion",
        },
      ],
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
    },
  },
  mounted() {
    this.initScrollReveal();
    this.injectAllProjectsSEO();
  },
  methods: {
    filterCategory(category) {
      this.selectedCategory = category;
      this.injectAllProjectsSEO(); // Met à jour l'indexation structurée selon le filtre sélectionné
    },
    initScrollReveal() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      }, { threshold: 0.05 });

      document.querySelectorAll(".reveal-card").forEach((card) => {
        observer.observe(card);
      });
    },
    injectAllProjectsSEO() {
      document.title = "Archives Complètes des Projets | Amin Miladi Portfolio";
      const canonicalUrl = window.location.href;
      const pageDescription = "Explorez le catalogue exhaustif des créations d'Amin Miladi. Index global regroupant le design graphique, le montage de clips, les animations After Effects et le manga Genesis Zero.";

      const setMeta = (attribute, name, content) => {
        let meta = document.querySelector(`meta[${attribute}="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute(attribute, name);
          document.head.appendChild(meta);
        }
        meta.content = content;
      };

      setMeta('name', 'description', pageDescription);
      setMeta('name', 'keywords', "Amin Miladi index, catalogue projets MMI, am.lab1 archive, portfolio complet, réalisations design video");
      setMeta('name', 'robots', "index, follow, max-image-preview:large");

      // Injection de la structure de données massives JSON-LD (Forçage N°1 Google)
      const legacyScript = document.getElementById("jsonld-all-projects-seo");
      if (legacyScript) legacyScript.remove();

      const items = this.filteredProjects.map((proj, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": proj.title,
        "description": proj.description,
        "url": canonicalUrl
      }));

      const ldStructure = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CollectionPage",
            "@id": canonicalUrl,
            "url": canonicalUrl,
            "name": "Index Complet des Créations Audiovisuelles d'Amin Miladi",
            "description": pageDescription,
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": this.filteredProjects.length,
              "itemListElement": items
            }
          }
        ]
      };

      const scriptTag = document.createElement('script');
      scriptTag.id = "jsonld-all-projects-seo";
      scriptTag.type = "application/ld+json";
      scriptTag.text = JSON.stringify(ldStructure);
      document.head.appendChild(scriptTag);
    }
  },
};
</script>

<style scoped>
/* ====== CONFIGURATION STRUCTURELLE ====== */
.projects-container {
  padding: 0 24px 120px 24px;
  margin-top: 140px;
  color: #ffffff;
  font-family: "Futura PT", "Segoe UI", sans-serif;
  box-sizing: border-box;
  min-height: 100vh;
}

/* ====== EN-TÊTE ÉPURÉ (SANS TEXTE GRAS) ====== */
.projects-main-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 50px auto;
}

.project-tag {
  color: #ff5722;
  font-size: 0.85rem;
  letter-spacing: 4px;
  margin-bottom: 15px;
  font-family: 'Trispace', sans-serif;
  display: block;
}

.main-title {
  font-size: clamp(2.2rem, 6vw, 3.5rem); 
  font-weight: 300; /* Linéaire et premium */
  text-transform: uppercase;
  letter-spacing: -0.5px;
  margin: 0 0 20px 0;
}

.header-divider {
  width: 50px;
  height: 1px;
  background-color: #ff5722;
  margin: 0 auto 25px auto;
}

.lead-text {
  font-size: 1.1rem; 
  line-height: 1.7;
  color: #b3b3b3;
  font-weight: 300;
  margin: 0;
}

/* ====== BARRE DES CATÉGORIES CONSOLE-STYLE ====== */
.categories-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 50px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.nav-span {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #ffffff;
  padding: 10px 22px;
  font-size: 0.9rem;
  font-family: "Futura PT", sans-serif;
  font-weight: 300;
  border-radius: 30px;
  cursor: pointer;
  letter-spacing: 0.5px;
  white-space: nowrap;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.nav-span:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.nav-span.active {
  background: #ff5722;
  border-color: #ff5722;
  color: #ffffff;
  font-weight: 400;
  box-shadow: 0 6px 20px rgba(255, 87, 34, 0.3);
}

/* ====== GRILLE ET CARTES D'EXPOSITION (RESPONSIVE) ====== */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 35px;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background: rgba(10, 10, 10, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 16px;
  text-align: left;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
  box-sizing: border-box;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.4s ease, box-shadow 0.4s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: #ff5722;
  box-shadow: 0 20px 45px rgba(255, 87, 34, 0.15);
}

/* Cadre restrictif de l'image */
.project-image-frame {
  position: relative;
  width: 100%;
  padding-bottom: 66.66%; /* Ratio 3:2 élégant pour les jaquettes */
  height: 0;
  border-radius: 8px;
  overflow: hidden;
  background-color: #050505;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.project-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.project-card:hover .project-image {
  transform: scale(1.04);
}

/* Masque interactif au survol */
.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .card-overlay {
  opacity: 1;
}

.explore-indicator {
  font-size: 0.85rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #ffffff;
  border-bottom: 1px solid #ff5722;
  padding-bottom: 4px;
}

/* Section textuelle des cartes (Pas de gras) */
.project-details {
  padding: 16px 4px 4px 4px;
}

.project-details h3 {
  font-size: 1.25rem; 
  font-weight: 400; /* Fin et premium */
  color: #ffffff;
  margin: 0 0 8px 0;
  letter-spacing: -0.2px;
  transition: color 0.3s ease;
}

.project-card:hover .project-details h3 {
  color: #ff5722;
}

.card-description {
  font-size: 0.9rem; 
  color: #a6a6a6;
  line-height: 1.6;
  font-weight: 300; /* Rendu très aéré */
  margin: 0;
}

/* ====== PACK ANIMATION SCROLL REVEAL VIA JS ====== */
.reveal-card {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

.reveal-card.active {
  opacity: 1;
  transform: translateY(0);
}

/* ====== RESPONSIVE DESIGN INTÉGRAL SÉCURISÉ ====== */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .projects-container {
    padding: 0 20px 90px 20px;
    margin-top: 110px; /* S'aligne sous la barre de navigation mobile */
  }

  .main-title {
    font-size: 2.1rem; 
  }

  .categories-nav {
    gap: 8px;
    margin-bottom: 35px;
  }

  .nav-span {
    padding: 8px 18px;
    font-size: 0.85rem;
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }
  
  .project-card {
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .projects-container {
    margin-top: 100px;
  }

  .main-title {
    font-size: 1.8rem; 
  }

  .projects-grid {
    grid-template-columns: 1fr; /* Passage sur une seule colonne nette */
    gap: 25px;
  }

  .project-details h3 {
    font-size: 1.15rem; 
  }
}

/* Ajustement pour le confort en mode paysage sur les téléphones */
@media (max-height: 480px) and (orientation: landscape) {
  .projects-container {
    margin-top: 90px;
  }
}
</style>