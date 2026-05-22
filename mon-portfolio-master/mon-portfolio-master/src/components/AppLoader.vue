<template>
  <div 
    class="loader-overlay" 
    role="progressbar" 
    :aria-valuenow="progress" 
    aria-valuemin="0" 
    aria-valuemax="100"
    aria-busy="true"
  >
    <div class="loader-content-box">
      <h1 class="seo-hidden-title">Amin Miladi - Portfolio Portfolio Graphisme &amp; Vidéo</h1>
      
      <div class="progress-container">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
      <div class="progress-text" aria-live="polite">{{ progress }}%</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLoader",
  data() {
    return {
      progress: 0,
    };
  },
  mounted() {
    this.simulateProgress();
    this.injectPowerfulSEO();
  },
  methods: {
    simulateProgress() {
      let progressInterval = setInterval(() => {
        if (this.progress < 100) {
          this.progress += 2;
        } else {
          clearInterval(progressInterval);
          this.$emit("finished");
        }
      }, 100);
    },
    injectPowerfulSEO() {
      document.title = "Amin Miladi | Portfolio Officiel - Graphiste & Vidéaste";
      
      const setMeta = (attr, name, content) => {
        let meta = document.querySelector(`meta[${attr}="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute(attr, name);
          document.head.appendChild(meta);
        }
        meta.content = content;
      };

      setMeta('name', 'description', "Bienvenue sur le portfolio officiel d'Amin Miladi. Découvrez mes créations exclusives en design graphique, montage vidéo, motion design et projets audiovisuels.");
      setMeta('name', 'keywords', "Amin Miladi, Amin Miladi portfolio, am.lab1, graphiste Amin Miladi, vidéaste Amin Miladi, montage vidéo, motion design, design graphique, post-production");
      setMeta('name', 'robots', "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
      setMeta('name', 'author', "Amin Miladi");

      setMeta('property', 'og:title', "Amin Miladi | Portfolio Officiel");
      setMeta('property', 'og:description', "Portfolio créatif d'Amin Miladi. Explorez mes univers en design graphique et réalisations vidéo.");
      setMeta('property', 'og:url', window.location.origin);
      setMeta('property', 'og:type', "profile");

      const existingScript = document.getElementById("jsonld-primary-seo");
      if (existingScript) existingScript.remove();

      const structuralData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": window.location.href,
            "url": window.location.href,
            "name": "Amin Miladi | Portfolio Professionnel",
            "description": "Showroom numérique et projets de création visuelle par Amin Miladi.",
            "inLanguage": "fr-FR"
          },
          {
            "@type": "CreativeWorkPortfolio",
            "url": window.location.origin,
            "headline": "Portfolio de Créations Graphiques et Audiovisuelles d'Amin Miladi",
            "author": {
              "@type": "Person",
              "name": "Amin Miladi",
              "jobTitle": "Graphiste & Vidéaste",
              "sameAs": [
                "https://www.instagram.com/am.lab1?igsh=eXR3ODQ5bzFsbmU3",
                "https://www.linkedin.com/in/amin-miladi-887876309/",
                "https://www.youtube.com/@MrCrocodile."
              ]
            }
          }
        ]
      };

      const script = document.createElement('script');
      script.id = "jsonld-primary-seo";
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuralData);
      document.head.appendChild(script);
    }
  },
};
</script>

<style scoped>
/* Style général de l'overlay - Couverture totale absolue */
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  height: -webkit-fill-available; /* Solution pour la barre de navigation mobile Safari/Chrome */
  background-color: #000000; /* Fond noir pur pour un contraste maximal */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999; /* Priorité absolue au-dessus de tout le site */
  overflow: hidden;
  box-sizing: border-box;
}

/* Boîte de contenu centrée au pixel près */
.loader-content-box {
  width: 100%;
  max-width: 800px;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

/* Titre caché invisible à l'œil nu mais lu en priorité par les robots Google (Règle d'or SEO) */
.seo-hidden-title {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Conteneur de la barre de progression */
.progress-container {
  width: 100%; 
  height: 12px; /* Barre plus fine pour un aspect plus moderne et haut de gamme */
  background-color: #222222; /* Fond sombre discret */
  border-radius: 50px; 
  overflow: hidden; 
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

/* Barre de progression */
.progress-bar {
  height: 100%;
  background-color: #ff5722; /* Ton orange de marque harmonisé */
  border-radius: 50px;
  transition: width 0.1s linear; 
}

/* Texte du pourcentage (Non gras, artistique et épuré) */
.progress-text {
  margin-top: 20px; 
  font-size: 1.6rem; 
  font-family: 'Futura PT', 'Segoe UI', sans-serif; 
  font-weight: 400; /* Style élégant et léger */
  letter-spacing: 2px;
  color: #ffffff; 
  text-align: center;
  user-select: none;
}

/* ====== RESPONSIVE DESIGN TOTAL & SÉCURISÉ ====== */

/* Ordinateurs portables et tablettes horizontales */
@media (max-width: 1024px) {
  .loader-content-box {
    max-width: 600px;
  }
  .progress-text {
    font-size: 1.4rem;
  }
}

/* Tablettes verticales et écrans intermédiaires */
@media (max-width: 768px) {
  .loader-content-box {
    max-width: 100%;
    padding: 0 30px;
  }
  .progress-container {
    height: 10px;
  }
  .progress-text {
    font-size: 1.2rem;
    margin-top: 15px;
  }
}

/* Smartphones standard (Portrait) */
@media (max-width: 480px) {
  .loader-content-box {
    padding: 0 20px;
  }
  .progress-container {
    height: 8px; /* Affinement de l'interface sur petit écran */
  }
  .progress-text {
    font-size: 1.1rem;
    letter-spacing: 1px;
    margin-top: 12px;
  }
}

/* Smartphones ultra-étroits (ex: iPhone SE) */
@media (max-width: 320px) {
  .loader-content-box {
    padding: 0 15px;
  }
  .progress-text {
    font-size: 1rem;
  }
}

/* Sécurité absolue pour les écrans en mode paysage très courts (Smartphones à l'horizontale) */
@media (max-height: 440px) {
  .loader-content-box {
    padding: 0 60px; /* Plus d'espace sur les côtés en paysage */
  }
  .progress-container {
    height: 6px;
  }
  .progress-text {
    margin-top: 8px;
    font-size: 1rem;
  }
}
</style>