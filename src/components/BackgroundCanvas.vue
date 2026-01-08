<template>
  <div>
    <canvas ref="backgroundCanvas" class="background-canvas"></canvas>
    <div class="top-left">
      Amin Miladi
    </div>
    <div v-show="isHomePage" class="centered-text">
      Portfolio
    </div>
  </div>
</template>

<script>
export default {
  name: "BackgroundCanvas",
  data() {
    return {
      isHomePage: false, // Indique si on est sur la page d'accueil
    };
  },
  watch: {
    // Observe les changements de route pour mettre à jour la variable
    $route(to) {
      this.isHomePage = to.path === "/";
    },
  },
  mounted() {
    this.initBackground();
    // Détermine si on est sur la page d'accueil au premier rendu
    this.isHomePage = this.$route.path === "/";
    
    // ✅ AJOUT : Redimensionner le canvas si on tourne le téléphone
    window.addEventListener('resize', this.handleResize);
  },
  // ✅ AJOUT : Nettoyer l'événement quand on quitte la page
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    // ✅ AJOUT : Fonction pour recalculer la taille sur mobile
    handleResize() {
      const canvas = this.$refs.backgroundCanvas;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    },
    initBackground() {
      const canvas = this.$refs.backgroundCanvas;
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
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.97)),
    url('@/assets/943064.webp') no-repeat center center;
  background-size: cover;
}

/* Nom en haut à gauche */
.top-left {
  position: absolute;
  top: 20px;
  left: 20px;
  font-family: 'Futura PT', sans-serif;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

/* Texte centré */
.centered-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Futura PT', sans-serif;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  width: 90%; /* ✅ AJOUT : évite que le texte touche les bords sur mobile */
}

/* Media query pour les petits écrans */
@media (max-width: 768px) {
  .top-left {
    font-size: 1.2rem;
    top: 15px; /* ✅ AJUSTEMENT : Un peu plus d'espace pour ne pas coller tout en haut */
    left: 15px;
  }

  .centered-text {
    font-size: 2rem;
  }
}

/* Media query pour les très petits écrans (mobiles) */
@media (max-width: 480px) {
  .top-left {
    font-size: 1rem;
    top: 10px;
    left: 10px;
  }

  .centered-text {
    font-size: 1.8rem; /* ✅ AJUSTEMENT : Un peu plus grand que 1.5 pour rester lisible */
  }
}
</style>