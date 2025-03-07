<template>
  <section class="cv-section">
    <h1 class="cv-title">A Propos de moi</h1>
    <div class="cv-container">
      <div class="cv-image">
        <img src="@/assets/photoCV.jpg" alt="Photo de Amin Miladi" />
      </div>
      <div class="cv-content">
        <p>Bienvenue sur mon Portfolio !</p>
        <p>
          Je suis Amin Miladi, passionné par l'audiovisuel, les mangas et les animés. C'est grâce à cette passion que je me suis intéressé à l'animation 2D.
        </p>
        <br />
        <p>
          Actuellement étudiant en BUT MMI (Métiers du Multimédia et de l’Internet), je développe mes compétences dans des domaines variés tels que le design, l'audiovisuel et la communication visuelle.
        </p>
        <br />
        <p>
          Dans ce portfolio, vous pourrez découvrir tous les projets que j’ai réalisés, que ce soit dans le cadre de mes études ou à titre personnel.
        </p>
        <!-- Bouton vers le CV -->
        <div class="cv-button-container">
          <a
            href="/AMIN (11).pdf"
            target="_blank"
            class="cv-button"
            rel="noopener noreferrer"
          >
            Voir mon CV
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MonCV",
};
</script>

<style scoped>
.cv-section {
  color: rgb(246, 246, 246); /* Texte clair */
  padding: 50px; /* Espacement interne */
  font-family: 'Trispace', sans-serif;
  text-align: center;
  margin-top: 100px; /* Distance par rapport au haut */
  min-height: 100vh; /* Assure une hauteur minimale pour le défilement */
}

/* Titre */
.cv-title {
  font-size: 2.2rem; /* Réduction de la taille du titre */
  font-weight: bold;
  margin-bottom: 20px;
}

/* Conteneur principal */
.cv-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

/* Image de profil */
.cv-image img[data-v-54f8c68e] {
  width: 200px;
  height: auto;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 4px;
  border: 4px solid white;
  margin-left: -30px; /* Déplace l'image plus vers la gauche */
}

/* Contenu du texte */
.cv-content {
  max-width: 500px; /* Réduction de la largeur du texte */
  text-align: left;
  font-size: 0.95rem; /* Réduction de la taille du texte */
  line-height: 1.5;
}

/* Conteneur du bouton */
.cv-button-container {
  margin-top: 20px;
}

/* Style du bouton */
.cv-button {
  background-color: white;
  color: black;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 60px; /* Espacement par rapport au texte */
  text-decoration: none; /* Supprime le soulignement */
}

.cv-button:hover {
  background-color: #ccc; /* Couleur de fond au survol */
  color: #000; /* Couleur du texte au survol */
}

.cv-button:active {
  transform: scale(0.95); /* Réduction de taille au clic */
}

/* Responsive Design */
@media (max-width: 768px) {
  .cv-title {
    font-size: 1.9rem; /* Réduction de la taille du titre */
  }

  .cv-container {
    flex-direction: column; /* Empile les éléments sur les petits écrans */
    gap: 30px; /* Augmenter l'écart entre l'image et le texte */
  }

  .cv-image img[data-v-54f8c68e] {
    width: 150px; /* Réduire la taille de l'image */
  }

  .cv-content {
    max-width: 80%; /* Augmenter la largeur du texte */
  }

  .cv-button {
    font-size: 0.9rem; /* Réduire la taille du bouton */
    padding: 8px 16px; /* Réduire la taille du bouton */
  }
}

@media (max-width: 480px) {
  /* Ajustements pour les smartphones */
  .cv-title {
    font-size: 1.5rem; /* Réduire encore la taille du titre */
  }

  .cv-container {
    gap: 20px; /* Réduire l'écart entre les éléments */
  }

  .cv-image img[data-v-54f8c68e] {
    width: 120px; /* Réduire la taille de l'image */
  }

  .cv-content {
    max-width: 90%; /* Augmenter la largeur du texte pour s'adapter à l'écran */
  }

  .cv-button {
    font-size: 0.8rem; /* Réduire la taille du bouton */
    padding: 6px 12px; /* Réduire la taille du bouton */
  }
}
</style>
