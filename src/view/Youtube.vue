<template>
  <div class="youtube-page">
    <h1 class="title">Création Vidéo YouTube</h1>
    <p class="description">Explorez mes vidéos créées pour YouTube.</p>

    <!-- Section des miniatures -->
    <div class="gallery-section">
      <div class="gallery-images">
        <img
          src="@/assets/IMG_0503.jpeg"
          alt="Miniature 1"
        />
        <img
          src="@/assets/IMG_0504.jpeg"
          alt="Miniature 2"
        />
        <img
          src="@/assets/IMG_0505.jpeg"
          alt="Miniature 3"
        />
        <img
          src="@/assets/IMG_1029.jpeg"
          alt="Miniature 4"
        />
        <img
          src="@/assets/IMG_0507.jpeg"
          alt="Miniature 5"
        />
        <img
          src="@/assets/IMG_0508.jpeg"
          alt="Miniature 6"
        />
        <img
          src="@/assets/IMG_0510.jpeg"
          alt="Miniature 7"
        />
        <img
          src="@/assets/IMG_0509.jpeg"
          alt="Miniature 8"
        />
      </div>
    </div>

    <!-- Section des vidéos -->
    <h2 class="video-title">Vidéos YouTube</h2>
    <div class="video-section">
      <div class="video-wrapper">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XF2spi8zokA?si=4S4PPWpNPdcMGYMQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          class="video"
        ></iframe>
      </div>
      <div class="video-wrapper">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hNw22Hh9lXY?si=SgoIOT8uK8Qc_iqc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          class="video"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YoutubePage",
};
</script>

<style scoped>
.youtube-page {
  padding: 20px;
  font-family: "Futura PT", sans-serif;
  color: #ffffff;
  margin-top: 100px;
}

/* Titre et description */
.title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
}

.description {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 40px;
}

/* Section des miniatures */
.gallery-section {
  margin-bottom: 40px;
}

.gallery-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.gallery-images img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  width: 640px;
  vertical-align: top;
  border: 0;
}

/* Titre avant les vidéos */
.video-title {
  font-size: 2rem;
  text-align: center;
  margin: 40px 0 20px;
}

/* Section des vidéos */
.video-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.video-wrapper {
  width: 100%;
  max-width: 640px;
}

.video {
  width: 100%;
  height: 360px;
  border: none;
  border-radius: 8px;
}

/* Responsivité */
@media (max-width: 932px) {
  .gallery-images img,
  .video {
    max-width: 100%;
    width: auto;
  }

  .video-wrapper {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .description {
    font-size: 1rem;
  }

  .video-title {
    font-size: 1.5rem;
  }

  /* Ajustement du margin-top pour les petites tailles d'écran */
  .youtube-page {
    margin-top: 160px;
  }
}
</style>
