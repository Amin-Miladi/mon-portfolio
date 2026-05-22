<template>
  <div>
    <canvas ref="backgroundCanvas" class="background-canvas"></canvas>
    
    <div v-show="isHomePage" class="centered-text">
      <h1 class="seo-main-title">Amin Miladi | Portfolio Graphiste &amp; Vidéaste</h1>
      <span class="display-text">Graphiste · Vidéaste</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackgroundCanvas",
  data() {
    return {
      isHomePage: false,
    };
  },
  watch: {
    $route(to) {
      this.isHomePage = to.path === "/";
    },
  },
  mounted() {
    this.initBackground();
    this.isHomePage = this.$route.path === "/";
    window.addEventListener('resize', this.handleResize);
    this.injectPowerfulCanvasSEO();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      const canvas = this.$refs.backgroundCanvas;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    },
    initBackground() {
      const canvas = this.$refs.backgroundCanvas;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = [];

      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 4 + 1;
          this.speedX = Math.random() * 1 - 0.5;
          this.speedY = Math.random() * 2 + 1;
        }

        update() {
          this.y += this.speedY;
          this.x += this.speedX;

          if (this.y > canvas.height) {
            this.y = 0 - this.size;
            this.x = Math.random() * canvas.width;
          }
        }

        draw() {
          ctx.beginPath();
          ctx.fillStyle = "#FFB6C1";
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      function init() {
        for (let i = 0; i < 100; i++) {
          particles.push(new Particle());
        }
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle) => {
          particle.update();
          particle.draw();
        });
        requestAnimationFrame(animate);
      }

      init();
      animate();
    },
    injectPowerfulCanvasSEO() {
      const currentUrl = window.location.origin;
      
      const setMetaTag = (attr, value, content) => {
        let meta = document.querySelector(`meta[${attr}="${value}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute(attr, value);
          document.head.appendChild(meta);
        }
        meta.content = content;
      };

      setMetaTag('name', 'author', "Amin Miladi");
      setMetaTag('property', 'og:site_name', "Amin Miladi Portfolio");

      const existingScript = document.getElementById("jsonld-canvas-brand-seo");
      if (existingScript) existingScript.remove();

      const graphData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": currentUrl + "/#website",
        "url": currentUrl,
        "name": "Amin Miladi - Site Officiel",
        "image": currentUrl + "/assets/photoCV.jpg",
        "author": {
          "@type": "Person",
          "name": "Amin Miladi",
          "jobTitle": "Graphiste & Vidéaste",
          "description": "Portfolio professionnel d'Amin Miladi. Création graphique, montage de vidéos et motion design."
        }
      };

      const script = document.createElement('script');
      script.id = "jsonld-canvas-brand-seo";
      script.type = "application/ld+json";
      script.text = JSON.stringify(graphData);
      document.head.appendChild(script);
    }
  },
};
</script>

<style scoped>
/* Typographie Futura PT */
@import url('https://fonts.googleapis.com/css2?family=Futura+PT:wght@400;600&display=swap');

.background-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2; /* Placé en dessous de App.vue pour ne pas bloquer l'image */
  background: transparent; /* Totalement transparent pour afficher ton fond manga de index.html */
}

/* Texte centré épuré et fin (Pas en gras) */
.centered-text {
  position: absolute;
  top: 35%; 
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: max-content;
  max-width: 90%;
  z-index: 1;
}

.display-text {
  font-family: 'Futura PT', sans-serif;
  color: white;
  font-size: 3.5rem;
  font-weight: 300; 
  letter-spacing: 1px;
}

/* Cache textuellement la balise h1 pour les humains tout en restant scannée en priorité absolue par Google */
.seo-main-title {
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

/* ====== COMPORTEMENT RESPONSIVE GLOBAL BINDÉ ====== */

@media (max-width: 1024px) {
  .display-text {
    font-size: 2.8rem;
  }
}

@media (max-width: 768px) {
  .centered-text {
    top: 30%;
    width: 95%;
  }

  .display-text {
    font-size: 2.2rem;
  }
}

@media (max-width: 480px) {
  .centered-text {
    top: 25%;
  }

  .display-text {
    font-size: 1.7rem;
    letter-spacing: 0.5px;
  }
}

/* Sécurité d'affichage pour les smartphones à l'horizontale (Mode paysage court) */
@media (max-height: 440px) {
  .centered-text {
    top: 35%;
  }
  .display-text {
    font-size: 1.5rem;
  }
}
</style>