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

    <!-- Grille des projets -->
    <div class="projects-grid">
      <div
        class="project-card"
        v-for="project in filteredProjects"
        :key="project.id"
        :class="project.category"
      >
        <img :src="project.image" :alt="project.title" class="project-image" />
        <div class="project-details">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TousLesProjets",
  data() {
    return {
      selectedCategory: "all",
      projects: [
        {
          id: 1,
          title: "Travaux Étudiants",
          description: "Description du projet étudiant.",
          image: "https://via.placeholder.com/150",
          category: "all",
        },
        {
          id: 2,
          title: "Genesis Zero - Chapitre 1",
          description: "Début de la création du manga Genesis Zero.",
          image: "https://via.placeholder.com/150",
          category: "manga",
        },
        {
          id: 3,
          title: "Première vidéo YouTube",
          description: "Montage de ma première vidéo sur ma chaîne.",
          image: "https://via.placeholder.com/150",
          category: "youtube",
        },
        {
          id: 4,
          title: "Design d'affiche",
          description: "Création graphique pour une affiche événementielle.",
          image: "https://via.placeholder.com/150",
          category: "design",
        },
        {
          id: 5,
          title: "Montage Vidéo Publicitaire",
          description: "Vidéo promotionnelle pour une marque.",
          image: "https://via.placeholder.com/150",
          category: "montage",
        },
        {
          id: 6,
          title: "Animation Motion Design",
          description: "Création d'une animation en motion design.",
          image: "https://via.placeholder.com/150",
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

/* Titre principal */
h1 {
  font-size: 2.2rem; /* Réduit la taille du titre de 5px */
  margin-bottom: 20px;
}

/* Description */
p {
  font-size: 1.1rem; /* Réduit la taille de la description de 5px */
  margin-bottom: 30px;
}

/* Menu des catégories */
.categories {
  margin-bottom: 30px;
  font-size: 1rem;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

/* Carte des projets */
.project-card {
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}

/* Image des projets */
.project-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

/* Détails des projets */
.project-details h3 {
  font-size: 1.3rem; /* Réduction de la taille du titre des projets */
  margin: 10px 0;
}

.project-details p {
  font-size: 0.9rem; /* Réduction de la taille de la description des projets */
  color: #ccc;
}

/* Responsive Design */
@media (max-width: 768px) {
  .projects-container {
    padding: 30px;
  }
  h1 {
    font-size: 1.9rem; /* Réduire la taille du titre pour les petits écrans */
  }
  .project-details h3 {
    font-size: 1.1rem; /* Réduire la taille du titre des projets */
  }
}

@media (max-width: 480px) {
  .projects-container {
    padding: 20px;
  }
  h1 {
    font-size: 1.4rem; /* Réduction de la taille du titre pour les plus petits écrans */
  }
  .project-details h3 {
    font-size: 1rem; /* Réduire encore la taille du titre des projets */
  }
}
</style>
