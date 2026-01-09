<template>
  <div class="project-detail">
    <h1>Montage Vidéo</h1>
    <p>Découvrez mes créations en montage vidéo.</p>
    <div class="video-container">
      <iframe
        class="montage-video"
        src="https://drive.google.com/file/d/1YdgHNFB7DHMNmKVzaQLrHbfQKl7-nfXH/preview"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <iframe
        class="montage-video"
        src="https://drive.google.com/file/d/1D2tObTG3QZKQqjUfJrQIqI6C4OS-lPq9/preview"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <iframe
        class="montage-video"
        src="https://drive.google.com/file/d/1qcYjWLo18mgoQGoTUMdl3gRIM7KUOZcn/preview"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <iframe
        class="montage-video"
        src="https://drive.google.com/file/d/1hRNuKlj7ilmOFFlMZOJ8TIAsECu3s68R/preview"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <iframe
        class="montage-video"
        src="https://drive.google.com/file/d/1OePGDenOMYrtQCQ1DyfL4wEFp0ojFjAH/preview"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <iframe
        class="montage-video"
        src="https://drive.google.com/file/d/1bimlmCGqn42xI5aC8tAt8M5ak_7vLMt6/preview"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <iframe
        class="montage-video"
        src="https://drive.google.com/file/d/1CszpKPEFedO_m-va9jXggdpj14z7-hKg/preview"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      
    </div>
    <div class="extra-video-container">
      <iframe
        class="montage-video"
        src="https://drive.google.com/file/d/1uDFTq8zbqMaNzbBT6eCLnaFhBBQ3xhV-/preview"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <iframe
        class="montage-video"
        src="https://drive.google.com/file/d/1We8Aarru0PZfTXWbNc-D6ZMU1SKwi6Yb/preview"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "MontagePage",
};
</script>

<style scoped>
.project-detail {
  padding: 20px;
  color: white;
  font-family: "Futura PT", sans-serif;
  text-align: center;
  margin-top: 100px;
}

.video-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.montage-video {
  width: 100%;
  max-width: 600px; /* Taille ajustée pour un rendu optimal */
  height: 338px; /* Ratio 16:9 respecté */
  border: none;
  border-radius: 8px;
}

.extra-video-container {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap; /* ✅ AJOUTÉ : Permet l'empilement sur mobile */
}

/* Responsive Design */
@media (max-width: 768px) {
  .project-detail {
    margin-top: 80px; /* ✅ AJUSTÉ : Évite le vide sous le menu burger */
    padding: 15px;
  }

  .video-container {
    gap: 15px;
  }

  .montage-video {
    max-width: 100%;
    height: 250px; /* Taille adaptée pour mobile */
  }

  .extra-video-container {
    gap: 15px;
    margin-top: 20px; /* Réduit un peu l'écart */
  }
}

@media (max-width: 480px) {
  .montage-video {
    height: 200px; /* Ratio optimisé pour petits smartphones */
  }
  
  h1 {
    font-size: 1.8rem;
  }
}
</style>