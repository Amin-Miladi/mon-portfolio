<template>
  <div class="project-detail">
    <h1 class="title">Projet Manga - Genesis Zero</h1>
    <p class="description">
      Plongez dans l'univers de Genesis Zero, mon projet de création manga.
    </p>

    <!-- Section de présentation -->
    <div class="project-section">
      <h2 class="section-title">Synopsis</h2>
      <p class="section-text">
        Dans un monde futuriste, une expérience scientifique tourne mal et provoque l'apparition d'un trou noir mystérieux, appelé Athanéon, qui dévore toute forme d'énergie, y compris les êtres vivants. Seuls quatre lycéens, Satoru, Hana, Toru et Kenta, survivent miraculeusement. Ils découvrent ensuite que leur survie est due à leurs doubles venus du futur, qui ont voyagé dans le passé pour les sauver et leur transmettre un sérum spécial.
      </p>
      <p class="section-text">
        Face à la catastrophe qui s'étend, les quatre amis doivent unir leurs forces pour renverser le scientifique à l'origine de l'expérience et tenter de réparer le monde. Ensemble, ils exploitent des énergies renouvelables, fabriquent des armes rudimentaires et élaborent un plan audacieux pour attaquer le laboratoire. Cependant, le scientifique, qui les observe de loin, voit en Satoru une version plus jeune de lui-même et envisage de l'utiliser pour parfaire ses propres projets.
        Dans une course contre la montre, mêlant stratégie, révélations et voyages temporels, nos héros devront réussir là où leurs doubles ont échoué.
      </p>
    </div>

    <!-- Section des images des personnages -->
    <div class="project-section">
      <h2 class="section-title">Personnages</h2>
      <div class="images-container">
        <img
          class="project-image"
          src="https://cdn.myportfolio.com/905c9151-2f7d-4626-b84f-d8b2df0a099b/61359748-92b2-4446-a9e6-4d7fbe9fbf15_rw_600.png?h=d54c4d7a32cdedfe37094333a5d07c94"
          alt="Personnage 1"
        />
        <img
          class="project-image"
          src="https://cdn.myportfolio.com/905c9151-2f7d-4626-b84f-d8b2df0a099b/ea4a8b15-ab92-4c91-87d2-de04827f028f_rw_600.png?h=463c529fe1889c71e6a2df16f3501f6b"
          alt="Personnage 2"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MangaPage",
};
</script>

<style scoped>
.project-detail {
  padding: 20px;
  color: #ffffff;
  font-family: "Futura PT", sans-serif;
  margin-top: 100px;
}

.title {
  font-size: 30px;
  font-weight: 400;
  line-height: 34px;
  text-align: center;
  margin-bottom: 20px;
}

.description {
  font-size: 20px;
  line-height: 26px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 40px;
}

.project-section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
  text-align: center;
  margin-bottom: 20px;
}

.section-text {
  font-size: 20px;
  line-height: 26px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 20px;
}

.images-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.project-image {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
}

/* Media queries pour la responsivité */

@media (max-width: 932px) {
  .description,
  .section-text {
    font-size: 17px;
    line-height: 22px;
  }

  .images-container {
    flex-direction: column;
    align-items: center;
  }

  .project-image {
    max-width: 90%; /* Réduit la largeur des images sur petits écrans */
  }

  /* Changer margin-top pour la version mobile */
  .project-detail {
    margin-top: 160px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.8rem;
  }

  .description,
  .section-text {
    font-size: 1rem;
  }

  .project-image {
    max-width: 100%;
  }

  .section-title {
    font-size: 20px;
  }
}
</style>
