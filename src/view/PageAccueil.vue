<template>
  <div class="page-accueil">
    <!-- Texte "Portfolio" centré -->
    <div class="centered-text">
      Portfolio
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageAccueil', // Utilisez un nom multi-mots
};
</script>

<style scoped>
/* Centrer le texte et l'agrandir */
.centered-text {
  position: absolute; /* Positionnement absolu pour le centrer */
  top: 50%; /* Place au milieu de l'écran verticalement */
  left: 50%; /* Place au milieu horizontalement */
  transform: translate(-50%, -50%); /* Ajuste le centrage exact */
  font-family: 'Futura PT', sans-serif; /* Typographie FUTURA PT */
  font-size: 3.5rem; /* Taille réduite de 5px par rapport à l'original */
  font-weight: bold; /* Texte en gras */
  color: white; /* Couleur blanche */
  text-align: center; /* Centre le texte */
  z-index: 1; /* Assure que le texte reste au-dessus des autres éléments */
}

/* Responsive Design */
@media (max-width: 768px) {
  .centered-text {
    font-size: 2.8rem; /* Réduction de la taille du texte pour les tablettes */
  }
}

@media (max-width: 480px) {
  .centered-text {
    font-size: 2rem; /* Réduction de la taille du texte pour les petits écrans */
  }
}

/* Ajout pour s'assurer que le footer ne soit pas bloqué */
.page-accueil {
  min-height: 100vh; /* Hauteur minimale de la page pour le scroll */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
