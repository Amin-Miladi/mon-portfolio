<template> 
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

  <footer class="footer">
    <p>&copy; 2025 Amin Miladi. Tous droits réservés.</p>
    <!-- Icônes des réseaux sociaux -->
    <div class="social-icons">
      <a href="https://www.linkedin.com/in/amin-miladi-887876309/" target="_blank" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://www.youtube.com/@MrCrocodile." target="_blank" aria-label="YouTube">
        <i class="fab fa-youtube"></i>
      </a>
      <a href="mailto:amin.miladi@yahoo.com" target="_blank" aria-label="Email">
        <i class="fas fa-envelope"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
name: 'AppFooter',
};
</script>

<style scoped>
/* Style pour le footer */
.footer {
position: fixed; /* Fixé en bas de la fenêtre */
bottom: 10px; /* Distance par rapport au bas */
left: 0; /* Aligné à gauche */
right: 0; /* Aligné à droite */
margin: 0;
padding: 0;
font-size: 12px; /* Taille réduite du texte */
color: white; /* Texte blanc */
font-family: 'Futura', sans-serif; /* Police FUTURA */
display: flex;
justify-content: space-between; /* Espace entre le texte et les icônes */
align-items: center; /* Centrage vertical du contenu */
padding: 0 20px; /* Ajoute un peu d'espace de chaque côté */
}

/* Style pour les icônes des réseaux sociaux */
.social-icons {
display: flex;
gap: 20px; /* Espacement entre les icônes */
}

.social-icons a {
color: white; /* Icônes blanches */
font-size: 20px; /* Taille des icônes */
text-decoration: none; /* Enlever le soulignement */
transition: color 0.3s ease;
}

.social-icons a:hover {
color: #ddd; /* Couleur au survol des icônes */
}

/* Media query pour les petits écrans */
@media (max-width: 768px) {
.footer {
  flex-direction: column; /* Disposition verticale pour les petits écrans */
  align-items: center; /* Centrer le contenu horizontalement */
  text-align: center; /* Centrer le texte */
  padding: 10px 15px; /* Réduire les marges */
}

.social-icons {
  gap: 15px; /* Réduire l'espacement entre les icônes */
  margin-top: 10px; /* Ajouter un peu d'espace au-dessus des icônes */
}

.social-icons a {
  font-size: 18px; /* Réduire la taille des icônes */
}

.footer p {
  font-size: 14px; /* Réduire la taille du texte pour les petits écrans */
}
}

/* Media query pour les très petits écrans (mobile portrait) */
@media (max-width: 480px) {
.social-icons {
  gap: 10px; /* Espacement encore plus réduit entre les icônes */
}

.footer p {
  font-size: 12px; /* Réduire encore plus la taille du texte */
}

.social-icons a {
  font-size: 16px; /* Réduire la taille des icônes */
}
}
</style>
