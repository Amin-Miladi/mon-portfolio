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
        <div class="cv-button-container">
          <a
            href="/CV_Amin_Miladi_stage.pdf"
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
.cv-image img {
  width: 200px;
  height: auto;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 4px;
  border: 4px solid white;
  margin-left: -30px; /* Déplace l'image plus vers la gauche sur PC */
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
  display: inline-block; /* Garantit que le bouton respecte le padding */
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
  .cv-section {
    margin-top: 80px; /* ✅ Ajusté pour le menu burger */
    padding: 20px;
  }

  .cv-title {
    font-size: 1.9rem;
  }

  .cv-container {
    flex-direction: column; /* Empile l'image et le texte (Box verticale) */
    gap: 30px; 
  }

  .cv-image img {
    width: 180px; 
    margin-left: 0; /* ✅ RÉPARÉ : On remet l'image au centre sur mobile */
  }

  .cv-content {
    max-width: 100%; 
    text-align: center; /* ✅ Centré pour une meilleure lecture sur mobile */
  }

  .cv-button {
    font-size: 1rem; 
    padding: 12px 24px; /* ✅ Plus large pour le doigt */
    margin-top: 30px;
  }
}

@media (max-width: 480px) {
  .cv-title {
    font-size: 1.6rem;
  }

  .cv-image img {
    width: 150px;
  }

  .cv-content {
    font-size: 0.9rem;
  }
}
</style>