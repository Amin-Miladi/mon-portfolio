<template>
  <ul class="shadow-button-set">
    <li><router-link to="/accueil" exact-active-class="active-link">Accueil</router-link></li>
    <li><router-link to="/cv" exact-active-class="active-link">A Propos</router-link></li>
    <li><router-link to="/projets" exact-active-class="active-link">Projets</router-link></li>
    <li><router-link to="/contact" exact-active-class="active-link">Contact</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'MainMenu', // Modification du nom pour suivre la règle multi-word
};
</script>

<style scoped>
/* Importation de la typographie FUTURA */
@import url('https://fonts.googleapis.com/css2?family=Futura:wght@400;600&display=swap');

/* Styles globaux du menu */
.shadow-button-set {
  margin: 0;
  padding: 0;
  display: flex; /* Aligne les éléments sur une ligne */
  flex-direction: row; /* Place les éléments horizontalement */
  justify-content: flex-end; /* Aligne les boutons à droite */
  gap: 3rem; /* Ajout d'un espace de 3rem entre les boutons */
  position: absolute; /* Permet de positionner le menu où on le souhaite */
  top: 20px; /* Distance par rapport au haut */
  right: 20px; /* Alignement à droite */
}

/* Chaque bouton */
.shadow-button-set > li {
  display: inline-flex;
}

/* Style des liens */
.shadow-button-set > li > a {
  font-family: 'Futura PT', sans-serif; /* Police FUTURA */
  font-size: 1.5rem; /* Taille des liens */
  text-decoration: none; /* Supprime le soulignement */
  color: white; /* Couleur blanche */
  padding: 0.5rem 1rem; /* Espace interne */
  transition: color 0.3s ease-in-out; /* Transition au survol */
}

/* État survol */
.shadow-button-set > li > a:hover {
  color: #ff4500; /* Couleur orange vif au survol */
}

/* Style pour le lien actif */
.shadow-button-set > li > a.router-link-active {
  font-weight: bold; /* Texte en gras */
  transition: font-size 0.2s ease; /* Animation fluide */
}

/* Suppression du focus visuel */
.shadow-button-set > li > a:focus {
  outline: none; /* Enlève les bordures au focus */
}

/* Media query pour les écrans jusqu'à 768px */
@media (max-width: 768px) {
  .shadow-button-set {
    top: 10px; /* Réduire l'espace par rapport au haut */
    right: 10px; /* Réduire l'espace par rapport à la droite */
    flex-direction: column; /* Alignement vertical des éléments */
    gap: 1rem; /* Réduire l'espace entre les éléments */
  }

  .shadow-button-set > li > a {
    font-size: 1.2rem; /* Réduire la taille des liens */
    padding: 0.4rem 0.8rem; /* Réduire l'espace interne */
  }
}

/* Media query pour les écrans très petits (mobiles) */
@media (max-width: 480px) {
  .shadow-button-set {
    top: 5px; /* Réduire l'espace par rapport au haut */
    right: 5px; /* Réduire l'espace par rapport à la droite */
    gap: 0.5rem; /* Réduire l'espace entre les éléments */
  }

  .shadow-button-set > li > a {
    font-size: 1rem; /* Réduire encore la taille des liens */
    padding: 0.3rem 0.6rem; /* Réduire l'espace interne */
  }
}
</style>
