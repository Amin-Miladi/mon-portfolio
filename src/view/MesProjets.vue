<template>
  <div class="projects-container">
    <h1>Tous les Projets</h1>
    <p>Explorez mes travaux réalisés dans divers domaines.</p>

    <!-- Menu des catégories -->
    <nav class="categories">
      <span @click="filterCategory('all')" :class="{ active: selectedCategory === 'all' }">Travaux étudiants</span> |
      <span @click="filterCategory('manga')" :class="{ active: selectedCategory === 'manga' }">Projet création manga GENESIS ZERO</span> |
      <span @click="filterCategory('youtube')" :class="{ active: selectedCategory === 'youtube' }">Création vidéo YouTube</span> |
      <span @click="filterCategory('design')" :class="{ active: selectedCategory === 'design' }">Design graphique & Illustrations</span> |
      <span @click="filterCategory('montage')" :class="{ active: selectedCategory === 'montage' }">Montage vidéo</span> |
      <span @click="filterCategory('motion')" :class="{ active: selectedCategory === 'motion' }">Animation & Motion design</span>
    </nav>

    <!-- Section des projets -->
    <div class="projects-grid">
      <router-link
        v-for="project in filteredProjects"
        :key="project.id"
        :to="`/projets/${project.category}`"
        class="project"
        :style="{ backgroundImage: `url(${project.image})` }"
      >
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.date }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MesProjets",
  data() {
    return {
      selectedCategory: "all",
      projects: [
        {
          id: 1,
          title: "Travaux Étudiants",
          date: "2024",
          image: require("../assets/logo_mayel_blanc.png"),
          category: "etudiants",
        },
        {
          id: 2,
          title: "Projet création manga",
          date: "2024",
          image: require("../assets/capture_2024_11_09.png"),
          category: "manga",
        },
        {
          id: 3,
          title: "Création Vidéo YouTube",
          date: "2022",
          image: require("../assets/IMG_0509.jpeg"),
          category: "youtube",
        },
        {
          id: 4,
          title: "Design Graphique & Illustrations",
          date: "2023",
          image: require("../assets/capture_2024_06_20.png"),
          category: "design",
        },
        {
          id: 5,
          title: "Montage Vidéo",
          date: "2024",
          image: require("../assets/28500834.webp"),
          category: "montage",
        },
        {
          id: 6,
          title: "Animation & Motion Design",
          date: "2024",
          image: require("../assets/afake_bureau.png"),
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
  methods: {
    filterCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

<style scoped>
/* Conteneur principal */
.projects-container {
  text-align: center;
  padding: 50px;
  margin-top: 100px;
  color: white;
  font-family: "Futura PT", sans-serif;
}

/* Menu des catégories */
.categories {
  margin-bottom: 30px;
  font-size: 1.35rem; /* Réduction de la taille de la police */
}

.categories span {
  cursor: pointer;
  transition: color 0.3s;
}

.categories span:hover {
  color: #ff5722;
}

.categories .active {
  font-weight: bold;
  color: #ff5722;
}

/* Grille des projets */
.projects-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 70px;
  margin-top: 120px;
}

/* Carte des projets */
.project {
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  flex: 1 1 calc(33.333% - 20px);
  max-width: calc(33.333% - 20px);
  height: 200px;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
}

.project:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.6);
}

/* Overlay sombre au hover */
.project::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s;
}

.project:hover::before {
  opacity: 1;
}

/* Informations sur le projet */
.project-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 2;
}

.project:hover .project-info {
  opacity: 1;
}

.project-info h3 {
  font-size: 1.45rem;
  color: #fff;
}

.project-info p {
  font-size: 1rem;
  color: #ccc;
}

/* Responsive Design */
@media (max-width: 768px) {
  /* Ajustements pour les tablettes et les écrans plus petits */
  .projects-grid {
    gap: 40px; /* Réduire l'écart entre les cartes */
  }

  .project {
    flex: 1 1 calc(50% - 20px); /* Deux projets par ligne sur petits écrans */
    max-width: calc(50% - 20px);
    height: 250px; /* Augmenter la hauteur des projets */
  }

  .categories {
    font-size: 1.2rem; /* Réduire la taille des catégories pour s'adapter aux petits écrans */
  }
}

@media (max-width: 480px) {
  /* Ajustements pour les smartphones */
  .projects-grid {
    gap: 20px; /* Espacement réduit */
  }

  .project {
    flex: 1 1 calc(100% - 20px); /* Un projet par ligne */
    max-width: 100%;
    height: 200px; /* Ajuster la hauteur */
  }

  .categories {
    font-size: 1rem; /* Réduire encore la taille du texte */
  }

  .project-info h3 {
    font-size: 1.2rem; /* Réduire la taille du titre */
  }

  .project-info p {
    font-size: 0.9rem; /* Réduire la taille de la description */
  }
}
</style>
