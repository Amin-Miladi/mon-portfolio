<template> 
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

  <footer class="footer">
    <p>&copy; 2026 Amin Miladi. Tous droits réservés.</p>
    <div class="social-icons">
      <a href="https://www.linkedin.com/in/amin-miladi-887876309/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://www.instagram.com/am.lab1?igsh=eXR3ODQ5bzFsbmU3" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.youtube.com/@MrCrocodile." target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <i class="fab fa-youtube"></i>
      </a>
      <a href="mailto:amin.miladi@yahoo.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
        <i class="fas fa-envelope"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  mounted() {
    this.injectGlobalSEO();
  },
  methods: {
    injectGlobalSEO() {
      // Évite les duplications si le composant est rechargé
      const existingScript = document.getElementById("jsonld-global-author-seo");
      if (existingScript) existingScript.remove();

      // Structure de données JSON-LD surpuissante pour lier le nom "Amin Miladi" à ce site précis sur Google
      const seoData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "@id": window.location.origin + "/#person",
            "name": "Amin Miladi",
            "url": window.location.origin,
            "jobTitle": "Graphiste & Vidéaste",
            "knowsAbout": ["Design Graphique", "Montage Vidéo", "Motion Design", "Audiovisuel", "Manga"],
            "sameAs": [
              "https://www.linkedin.com/in/amin-miladi-887876309/",
              "https://www.instagram.com/am.lab1?igsh=eXR3ODQ5bzFsbmU3",
              "https://www.youtube.com/@MrCrocodile."
            ]
          },
          {
            "@type": "WebSite",
            "@id": window.location.origin + "/#website",
            "url": window.location.origin,
            "name": "Amin Miladi | Portfolio Officiel",
            "description": "Portfolio en ligne d'Amin Miladi, Graphiste et Vidéaste. Découvrez mes créations en Design Graphique, Illustrations, Montage Vidéo et Motion Design.",
            "publisher": { "@id": window.location.origin + "/#person" }
          }
        ]
      };

      const script = document.createElement('script');
      script.id = "jsonld-global-author-seo";
      script.type = "application/ld+json";
      script.text = JSON.stringify(seoData);
      document.head.appendChild(script);
    }
  }
};
</script>

<style scoped>
/* Style pour le footer */
.footer {
  position: relative; 
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
  z-index: 10;
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
  transition: color 0.3s cubic-bezier(0.25, 1, 0.5, 1), transform 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Changement de couleur au survol vers ta couleur fétiche */
.social-icons a:hover {
  color: #ff5722;
  transform: scale(1.15);
}

/* ====== RESPONSIVE DESIGN INTÉGRAL SÉCURISÉ ====== */

/* Tablettes et Smartphones horizontaux */
@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px 15px;
    position: static; 
    gap: 12px;
  }

  .social-icons {
    gap: 22px; /* Un peu plus d'espace pour l'usage tactile */
    margin-top: 0;
  }

  .social-icons a {
    font-size: 22px; /* Légèrement agrandi pour le confort des pouces */
  }

  .footer p {
    font-size: 13px;
    margin: 0;
    font-weight: 300;
  }
}

/* Mobile Portrait classique */
@media (max-width: 480px) {
  .footer {
    padding: 15px 10px;
  }

  .social-icons {
    gap: 18px;
  }

  .footer p {
    font-size: 11px;
  }

  .social-icons a {
    font-size: 19px;
  }
}

/* SÉCURITÉ POUR LES ÉCRANS COURTS EN HAUTEUR */
@media screen and (max-height: 600px) {
  .footer {
    position: relative;
    margin-top: 20px;
  }
}

/* AJUSTEMENT TEXTE ÉCRANS MINIATURES SUR LES BORDS */
@media (max-width: 350px) {
  .footer {
    padding: 10px 5px;
  }
  
  .footer p {
    font-size: 10px;
  }
  
  .social-icons {
    gap: 12px;
  }
  
  .social-icons a {
    font-size: 16px;
  }
}
</style>