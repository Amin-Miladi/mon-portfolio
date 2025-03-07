<template>
  <div class="project-detail">
    <h1 class="title">Travaux Étudiants</h1>
    <p class="description">
      Récemment, dans le cadre d'un projet de création d'identité de marque en SAE, mon équipe et moi avons développé une marque de bière de luxe baptisée Mayel. Pour le logo, nous nous sommes inspirés des masques mayas, symboles de mystère et de tradition, ce qui confère à notre marque une image forte et authentique. Le nom Mayel, qui signifie "parfumer" en maya, reflète notre volonté d'offrir une expérience sensorielle unique à travers des saveurs raffinées et exotiques. Ce projet a renforcé mon intérêt pour la création visuelle et le développement de concepts innovants.
    </p>

    <!-- Section des logos -->
    <div class="project-section">
      <img
        class="project-image"
        src="https://cdn.myportfolio.com/905c9151-2f7d-4626-b84f-d8b2df0a099b/b94ee0f2-8d3b-470d-b274-7d7ae227d3fe_rw_1200.png?h=162423f70e95e463de56096261bd15e0"
        alt="Logo Mayel"
      />
      <p class="description">
        J'ai créé six types de logos différents pour notre marque de bière sur Adobe Illustrator, mais aucun n'a été retenu au final.
      </p>
      <h2>Logo Mayel</h2>
      <img
        class="project-image"
        src="@/assets/logo_mayel_blanc.png"
        alt="Mayel"
      />
      <p class="section-text">
        Le dernier logo de Mayel s'inspire des statues mayas, pour une touche de mystère et de tradition.
      </p>
    </div>

    <!-- Ajout des autres concepts de logos -->
    <div class="project-section">
      <img
        class="project-image"
        :src="images.bierreChoco"
        alt="Mayel Bierre Choco"
      />
      <img
        class="project-image"
        :src="images.bierreVanille"
        alt="Mayel Bierre Vanille"
      />
    </div>

    <!-- Section du site internet -->
    <div class="project-section">
      <h2>Site Internet</h2>
      <p class="section-text">
        Nous avons conçu un site internet simple et élégant, utilisant nos couleurs emblématiques, le noir et blanc, pour refléter notre positionnement haut de gamme.
      </p>
      <img
        class="project-image"
        src="https://cdn.myportfolio.com/905c9151-2f7d-4626-b84f-d8b2df0a099b/20439269-85e1-4b76-b265-4f7c524e9169_rw_1920.png?h=6582f35b83d2da9919fc244ee0900d2d"
        alt="Capture d'écran du site internet"
      />
    </div>

    <!-- Section publicité vidéo -->
    <div class="project-section">
      <h2>Publicité Vidéo</h2>
      <p class="section-text">
        Nous avons créé une vidéo publicitaire avec une voix off et un effet noir et blanc, ajoutant une touche de luxe et de sophistication.
      </p>
      <iframe
        class="project-video"
        src="https://drive.google.com/file/d/1qIyebNPBCebeXbFMiJgU8y5NlOPXphWw/preview"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import BierreChoco from "@/assets/bierrechoco.jpg";
import BierreVanille from "@/assets/bierrevanille.jpg";

export default {
  name: "EtudiantsPage",
  data() {
    return {
      images: {
        bierreChoco: BierreChoco,
        bierreVanille: BierreVanille,
      },
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

.title {
  color: #ffffff;
  font-size: 30px;
  font-weight: 400;
  line-height: 34px;
  text-align: center;
  margin-bottom: 20px;
}

.description {
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 40px;
}

.project-section {
  margin-bottom: 40px;
}

.section-text {
  font-size: 1em;
  margin-bottom: 20px;
}

.project-image {
  width: 100%;
  max-width: 800px;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
}

.project-video {
  width: 100%;
  max-width: 800px;
  height: 450px;
  display: block;
  margin: 20px auto 0;
  border: none;
  border-radius: 8px;
}

/* Media queries pour la responsivité */

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .description {
    font-size: 1rem;
  }

  .project-section {
    margin-bottom: 30px;
  }

  .project-image {
    max-width: 100%;
  }

  .project-video {
    max-width: 100%;
  }

  .section-text {
    font-size: 0.9rem;
  }

  /* Changer margin-top pour la version mobile */
  .project-detail {
    margin-top: 160px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.5rem;
  }

  .description {
    font-size: 0.9rem;
  }

  .project-section {
    margin-bottom: 20px;
  }

  .project-image {
    max-width: 100%;
    max-height: 400px; /* Réduit la taille des images sur petits écrans */
  }

  .project-video {
    height: 350px; /* Réduit la taille de la vidéo */
  }

  .section-text {
    font-size: 0.8rem;
  }
}
</style>
