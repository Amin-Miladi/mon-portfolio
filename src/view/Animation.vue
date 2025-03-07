<template>
  <div class="project-detail">
    <h1>Animation & Motion Design</h1>
    <p>Explorez mes travaux d'animation et de motion design.</p>
    <div class="video-grid">
      <div v-for="(video, index) in videos" :key="index" class="video-box">
        <iframe
          class="video-embed"
          :src="video.link"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <p class="video-title">{{ video.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimationPage",
  data() {
    return {
      videos: [
        {
          link: "https://drive.google.com/file/d/1K5HnDI04SkBwHin0cdIyz2E8eOT9kc1h/preview",
          title: "Animation Vidéo 1",
        },
        {
          link: "https://drive.google.com/file/d/10KynPYkbTSWVmJ6G0x6IhkzH6eOcoMhy/preview",
          title: "Animation Vidéo 2",
        },
        {
          link: "https://drive.google.com/file/d/1cz1XBLTXWVw9e1tiYnwMxy2p6t0J2KOp/preview",
          title: "Animation Vidéo 3",
        },
        {
          link: "https://drive.google.com/file/d/1zUbSD3mgf-c8cQh93rLNbjVaBYlDRJtS/preview",
          title: "Animation Vidéo 4",
        },
        {
          link: "https://drive.google.com/file/d/1tff68UmAQeZ4VolXmldeh_NB1yYgTzOq/preview",
          title: "Animation Vidéo 5",
        },
        {
          link: "https://drive.google.com/file/d/1Y5znjCcAtSiSUYepgAefmIbxu-I0k7zQ/preview",
          title: "Animation Vidéo 6",
        },
      ],
    };
  },
};
</script>

<style scoped>
.project-detail {
  padding: 20px;
  color: white;
  font-family: "Futura PT", sans-serif;
  margin-top: 100px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

p {
  text-align: center;
  margin-bottom: 40px;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  justify-content: center;
}

.video-box {
  background-color: #1e1e1e;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.video-embed {
  width: 100%;
  height: 300px;
  border: none;
  border-radius: 8px;
}

.video-title {
  margin-top: 10px;
  font-size: 1.1rem;
  color: #ffffff;
  text-align: center;
}

/* Media query pour les écrans jusqu'à 768px */
@media (max-width: 768px) {
  .video-embed {
    height: 250px; /* Réduit la hauteur de l'iframe sur les écrans plus petits */
  }

  .project-detail {
    margin-top: 160px; /* Margin-top ajusté pour version mobile */
  }

  .video-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); /* Réduit la largeur minimale des vidéos */
  }

  .video-title {
    font-size: 1rem; /* Réduit la taille des titres */
  }
}

/* Media query pour les écrans jusqu'à 480px */
@media (max-width: 480px) {
  .project-detail {
    padding: 10px; /* Réduit la marge interne sur les très petits écrans */
  }

  .video-embed {
    height: 200px; /* Réduit encore la hauteur de l'iframe sur les petits écrans */
  }

  .video-grid {
    grid-template-columns: 1fr; /* Passe les vidéos en une seule colonne */
  }

  .video-title {
    font-size: 0.9rem; /* Réduit la taille des titres encore plus */
  }
}
</style>
