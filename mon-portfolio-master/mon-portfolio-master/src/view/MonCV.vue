<template>
  <section class="cv-section" role="main" aria-label="À propos de Amin Miladi">
    <h1 class="cv-title">À Propos de moi</h1>
    <div class="cv-container">
      
      <div class="cv-aside">
        <div class="cv-image">
          <img src="@/assets/photoCV.jpg" alt="Amin Miladi - Graphiste, Vidéaste et Étudiant en BUT MMI" />
        </div>

        <div class="cv-button-container below-photo">
          <a
            href="/Amin_Miladi_CV_alternance_2026.pdf"
            target="_blank"
            class="cv-button"
            rel="noopener noreferrer"
            aria-label="Ouvrir le CV de Amin Miladi au format PDF dans un nouvel onglet"
          >
            Voir mon CV
          </a>
        </div>
      </div>

      <div class="cv-content">
        <p class="welcome-text">Bienvenue sur mon espace de création numérique !</p>
        
        <p>
          Je m'appelle Amin Miladi. C'est à travers une profonde fascination pour l'univers de l'audiovisuel, de la culture des mangas et de l'animation japonaise que j'ai développé mon sens artistique. Cette passion m'a tout naturellement orienté vers la conception visuelle et les techniques avancées d'animation 2D, un domaine où j'aime expérimenter le mouvement, le rythme et la narration par l'image.
        </p>
        <br />
        <p>
          Actuellement étudiant au sein du BUT MMI (Métiers du Multimédia et de l'Internet), je perfectionne quotidiennement mes compétences techniques et théoriques. Mon cursus me permet d'évoluer de manière polyvalente dans des secteurs clés tels que la direction artistique, la post-production vidéo, le motion design cinétique devançant les formats classiques et la communication visuelle stratégique.
        </p>
        <br />
        <p>
          Ce portfolio en ligne a été conçu comme une vitrine immersive. Vous y trouverez l'ensemble des projets que j'ai menés, qu'ils soient issus de mes travaux universitaires ou de productions personnelles. C'est un témoignage de mon évolution technique, de ma rigueur graphique et de ma recherche constante de concepts visuels innovants.
        </p>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "MonCV",
  mounted() {
    this.injectAboutPageSEO();
  },
  methods: {
    injectAboutPageSEO() {
      document.title = "À Propos | Amin Miladi — Profil Créatif, Parcours & Objectifs";
      
      const pageDescription = "Découvrez le profil d'Amin Miladi, étudiant en BUT MMI spécialisé en création audiovisuelle, montage et motion design. Téléchargez mon CV officiel pour alternance.";
      const canonicalUrl = window.location.href;

      const setMetaTag = (attribute, name, content) => {
        let meta = document.querySelector(`meta[${attribute}="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute(attribute, name);
          document.head.appendChild(meta);
        }
        meta.content = content;
      };

      setMetaTag('name', 'description', pageDescription);
      setMetaTag('name', 'keywords', "Amin Miladi, qui est Amin Miladi, Amin Miladi CV, etudiant BUT MMI, alternance graphiste, monteur video Paris, am.lab1 biography");
      setMetaTag('name', 'robots', "index, follow, max-snippet:-1, max-image-preview:large");

      setMetaTag('property', 'og:title', "À Propos de Amin Miladi | Concepteur Multimédia");
      setMetaTag('property', 'og:description', pageDescription);
      setMetaTag('property', 'og:type', "profile");
      setMetaTag('property', 'og:url', canonicalUrl);

      const legacyScript = document.getElementById("jsonld-about-page-seo");
      if (legacyScript) legacyScript.remove();

      const jsonLdStructure = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "AboutPage",
            "@id": canonicalUrl,
            "url": canonicalUrl,
            "name": "Présentation de Amin Miladi — Biographie et Compétences",
            "description": pageDescription,
            "mainEntity": {
              "@type": "Person",
              "name": "Amin Miladi",
              "jobTitle": "Graphiste & Vidéaste",
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "BUT Métiers du Multimédia et de l'Internet (MMI)"
              },
              "knowsAbout": ["Audiovisuel", "Animation 2D", "Motion Design", "Design Graphique"],
              "publishingPrinciples": window.location.origin + "/Amin_Miladi_CV_alternance_2026.pdf"
            }
          }
        ]
      };

      const scriptTag = document.createElement('script');
      scriptTag.id = "jsonld-about-page-seo";
      scriptTag.type = "application/ld+json";
      scriptTag.text = JSON.stringify(jsonLdStructure);
      document.head.appendChild(scriptTag);
    }
  }
};
</script>

<style scoped>
/* ====== CONFIGURATION ET ESPACEMENT ====== */
.cv-section {
  color: rgb(246, 246, 246);
  padding: 50px 24px;
  font-family: 'Trispace', sans-serif;
  text-align: center;
  margin-top: 40px;
  min-height: 100vh;
  box-sizing: border-box;
}

.cv-title {
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  margin-bottom: 40px;
}

.cv-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 50px;
  max-width: 1000px;
  margin: 0 auto;
}

/* CONTENEUR ASIDE (IMAGE DE PROFIL + BOUTON CV EN DESSOUS) */
.cv-aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
}

.cv-image {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 24px; /* Espace équilibré au-dessus du bouton */
}

.cv-image img {
  width: 220px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.cv-image img:hover {
  transform: scale(1.02);
  border-color: #ff5722;
}

.cv-button-container.below-photo {
  width: 100%;
}

/* Bloc rédactionnel */
.cv-content {
  flex: 1;
  max-width: 600px;
  text-align: left;
  font-size: 1rem;
  line-height: 1.75;
  color: #cccccc;
  font-weight: 300;
}

.welcome-text {
  font-size: 1.15rem;
  color: #ffffff;
  margin-bottom: 20px;
  font-weight: 400;
}

.cv-button {
  background-color: #ffffff;
  color: #000000;
  padding: 14px 32px;
  font-size: 0.95rem;
  font-family: 'Trispace', sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  text-decoration: none;
  display: inline-block;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.cv-button:hover {
  background-color: #ff5722;
  color: #ffffff;
  box-shadow: 0 8px 25px rgba(255, 87, 34, 0.35);
}

.cv-button:active {
  transform: scale(0.97);
}

/* ====== PLAN RESPONSIVE LOGIQUE ====== */
@media (max-width: 850px) {
  .cv-section {
    padding-top: 20px;
  }

  .cv-container {
    flex-direction: column;
    align-items: center;
    gap: 35px;
  }

  .cv-image {
    margin-bottom: 20px;
  }

  .cv-image img {
    width: 190px;
  }

  .cv-content {
    max-width: 100%;
    text-align: center;
    font-size: 0.95rem;
    line-height: 1.65;
  }
}

@media (max-width: 480px) {
  .cv-section {
    margin-top: 30px;
    padding: 10px 16px;
  }

  .cv-title {
    margin-bottom: 25px;
  }

  .cv-image img {
    width: 160px;
  }

  .cv-button {
    font-size: 0.9rem;
    padding: 12px 28px;
    width: 100%;
    box-sizing: border-box;
  }
}

@media (max-height: 500px) and (orientation: landscape) {
  .cv-section {
    margin-top: 20px;
  }
}
</style>