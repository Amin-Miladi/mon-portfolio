<template> 
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

  <footer class="footer">
    <p>&copy; 2025 Amin Miladi. Tous droits réservés.</p>
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
  position: relative; /* ✅ Le footer suit le contenu */
  bottom: auto;
  left: auto;
  right: auto;
  margin: 0;
  font-size: 12px;
  color: white;
  font-family: 'Futura', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  width: 100%;
  box-sizing: border-box;
}

/* Style pour les icônes des réseaux sociaux */
.social-icons {
  display: flex;
  gap: 20px;
}

.social-icons a {
  color: white;
  font-size: 20px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #ddd;
}

/* Media query pour les petits écrans */
@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 15px 15px;
    position: static; 
  }

  .social-icons {
    gap: 15px;
    margin-top: 10px;
  }

  .social-icons a {
    font-size: 18px;
  }

  .footer p {
    font-size: 14px;
  }
}

/* Media query pour les très petits écrans (mobile portrait) */
@media (max-width: 480px) {
  .social-icons {
    gap: 10px;
  }

  .footer p {
    font-size: 12px;
  }

  .social-icons a {
    font-size: 16px;
  }
}

/* SÉCURITÉ POUR LES ÉCRANS COURTS */
@media screen and (max-height: 600px) {
  .footer {
    position: relative;
    margin-top: 20px;
  }
}

/* AJUSTEMENT TEXTE ÉCRANS TRÈS ÉTROITS */
@media (max-width: 350px) {
  .footer p {
    font-size: 10px;
  }
}
</style>