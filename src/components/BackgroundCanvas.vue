<template>
  <div>
    <canvas ref="backgroundCanvas" class="background-canvas"></canvas>
    <!-- Nom en haut à gauche -->
    <div class="top-left">
      Amin Miladi
    </div>
    <!-- Texte "Portfolio" au centre uniquement sur la page d'accueil -->
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
  },
  methods: {
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
}

/* Media query pour les petits écrans */
@media (max-width: 768px) {
  .top-left {
    font-size: 1.2rem; /* Réduire la taille de la police pour les petits écrans */
    top: 10px; /* Réduire l'espace par rapport au haut */
    left: 10px; /* Réduire l'espace par rapport à la gauche */
  }

  .centered-text {
    font-size: 2rem; /* Réduire la taille de la police du texte "Portfolio" */
  }
}

/* Media query pour les très petits écrans (mobiles) */
@media (max-width: 480px) {
  .top-left {
    font-size: 1rem; /* Réduire encore la taille de la police pour les petits écrans */
    top: 5px;
    left: 5px;
  }

  .centered-text {
    font-size: 1.5rem; /* Réduire la taille de la police du texte "Portfolio" */
  }
}
</style>
