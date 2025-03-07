<template>
  <div class="design-gallery">
    <h1 class="gallery-title">Design Graphique & Illustrations</h1>
    
    <!-- Première rangée : Bannière seule -->
    <div class="banner-box">
      <img class="gallery-banner" src="@/assets/banniere.png" alt="Bannière" />
      <div class="overlay">
        <p>BANNIÈRE POUR MA CHAÎNE MANGA</p>
      </div>
    </div>

    <!-- Conteneur principal des images -->
    <div class="gallery-container">
      <div class="image-box">
        <img class="gallery-image" src="@/assets/capture_2024_06_20.png" alt="Capture" />
        <div class="overlay">
          <p>CAPTURE ÉCRAN D'UN DESIGN</p>
        </div>
      </div>
      <div class="image-box">
        <img class="gallery-image" src="@/assets/crocodile.png" alt="Crocodile" />
        <div class="overlay">
          <p>COLORISATION CROCODILE DANS ONE PIECE</p>
        </div>
      </div>
      <div class="image-box">
        <img class="gallery-image" src="@/assets/logo_mayel_blanc.png" alt="Logo Blanc" />
        <div class="overlay">
          <p>LOGO MAYEL BLANC</p>
        </div>
      </div>

      <div class="image-box">
        <img class="gallery-image" src="@/assets/extinction.png" alt="Extinction" />
        <div class="overlay">
          <p>LA COURSE CONTRE L'EXTINCTION</p>
        </div>
      </div>
      <div class="image-box">
        <img class="gallery-image" src="@/assets/neufphone1.png" alt="Neuf Phone 1" />
        <div class="overlay">
          <p>AFFICHE NEUF PHONE V1</p>
        </div>
      </div>
      <div class="image-box">
        <img class="gallery-image" src="@/assets/neufphone2.png" alt="Neuf Phone 2" />
        <div class="overlay">
          <p>AFFICHE NEUF PHONE V2</p>
        </div>
      </div>

      <div class="image-box">
        <img class="gallery-image" src="@/assets/logov1.png" alt="Logo V1" />
        <div class="overlay">
          <p>LOGO MAYEL V1</p>
        </div>
      </div>
      <div class="image-box">
        <img class="gallery-image" src="@/assets/mangafest.png" alt="Manga Fest" />
        <div class="overlay">
          <p>AFFICHE MANGA FEST</p>
        </div>
      </div>
      <div class="image-box">
        <img class="gallery-image" src="@/assets/Affiche_rire_toxique.png" alt="Affiche Rire Toxique" />
        <div class="overlay">
          <p>AFFICHE RIRE TOXIQUE</p>
        </div>
      </div>

      <div class="image-box">
        <img class="gallery-image" src="@/assets/nouveau_logo_rire_toxique.jpg" alt="Nouveau Logo Rire Toxique" />
        <div class="overlay">
          <p>LOGO RIRE TOXIQUE V1</p>
        </div>
      </div>
      <div class="image-box">
        <img class="gallery-image" src="@/assets/Capture_décran_2025-03-06_131900.png" alt="Capture d'écran" />
        <div class="overlay">
          <p>LOGO RIRE TOXIQUE</p>
        </div>
      </div>
      <div class="image-box">
        <img class="gallery-image" src="@/assets/plannche_(1).png" alt="Planche" />
        <div class="overlay">
          <p>AFFICHE RÉCHAUFFEMENT CLIMATIQUE</p>
        </div>
      </div>

      <div class="image-box">
        <img class="gallery-image" src="@/assets/étiquette_Sapik.png" alt="Étiquette Sapik" />
        <div class="overlay">
          <p>ÉTIQUETTE SAPIK</p>
        </div>
      </div>
      <div class="image-box">
        <img class="gallery-image" src="@/assets/SAPIK_BOUTEILLE_JAUNE-mockup.png" alt="Sapik Bouteille Jaune" />
        <div class="overlay">
          <p>SAPIK BOUTEILLE JAUNE</p>
        </div>
      </div>
      <div class="image-box">
        <img class="gallery-image" src="@/assets/SAPIK_BOUTEILLE_ROUGE-mockup.png" alt="Sapik Bouteille Rouge" />
        <div class="overlay">
          <p>SAPIK BOUTEILLE ROUGE</p>
        </div>
      </div>

      <div class="image-box">
        <img class="gallery-image" src="@/assets/SAPIK_BOUTEILLE_VERTE-mockup.png" alt="Sapik Bouteille Verte" />
        <div class="overlay">
          <p>SAPIK BOUTEILLE VERTE</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesignPage",
};
</script>

<style scoped>
.design-gallery {
  padding: 20px;
  color: white;
  font-family: "Futura PT", sans-serif;
  margin-top: 100px;
}

.gallery-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
}

.gallery-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colonnes */
  gap: 15px; /* Espacement ajusté */
}

.banner-box {
  grid-column: span 3;
  position: relative;
  overflow: hidden;
}

.gallery-banner {
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  display: block;
  border-radius: 8px;
}

.image-box {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Ajout de la loupe */
.image-box:hover .gallery-image {
  transform: scale(1.5); /* Zoom x1.5 */
  cursor: zoom-in;
  transition: transform 0.3s ease-in-out;
}

.gallery-image {
  width: 100%;
  max-height: 200px;
  object-fit: contain;
  display: block;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 8px;
}

.image-box:hover .overlay {
  opacity: 1;
}

/* Media query pour les écrans jusqu'à 768px */
@media (max-width: 768px) {
  .gallery-title {
    font-size: 1.5rem; /* Taille de titre réduite */
  }

  .gallery-container {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Réduit les colonnes */
  }

  .gallery-banner {
    max-height: 250px; /* Réduit la hauteur de la bannière */
  }

  .image-box {
    margin-bottom: 10px; /* Marge pour les petits écrans */
  }

  /* Ajustement du margin-top pour les petites tailles d'écran */
  .design-gallery {
    margin-top: 160px;
  }
}

/* Media query pour les écrans jusqu'à 480px */
@media (max-width: 480px) {
  .design-gallery {
    padding: 10px; /* Réduit la marge interne sur les très petits écrans */
  }

  .gallery-title {
    font-size: 1.2rem; /* Taille encore plus petite du titre */
  }

  .gallery-container {
    grid-template-columns: 1fr; /* Passe à une seule colonne */
  }

  .gallery-banner {
    max-height: 200px; /* Réduit la taille de la bannière */
  }

  .gallery-image {
    max-height: 150px; /* Réduit la taille des images */
  }
}
</style>
