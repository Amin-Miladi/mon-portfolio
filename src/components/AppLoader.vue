<template>
  <div class="loader-overlay">
    <div class="progress-container">
      <div class="progress-bar" :style="{ width: progress + '%' }"></div>
    </div>
    <div class="progress-text">{{ progress }}%</div>
  </div>
</template>

<script>
export default {
name: "AppLoader", // Modification du nom pour suivre la règle multi-word
data() {
  return {
    progress: 0, // Initialisation de la progression à 0%
  };
},
mounted() {
  this.simulateProgress(); // Lancement de la simulation au chargement du composant
},
methods: {
  simulateProgress() {
    // Simulation de la progression de 0% à 100% sur 5 secondes
    let progressInterval = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 2; // Augmentation de 2% toutes les 100ms
      } else {
        clearInterval(progressInterval); // Arrêter l'intervalle lorsque la progression atteint 100%
        this.$emit("finished"); // Émet un événement pour signaler que le chargement est terminé
      }
    }, 100); // Intervalle de 100ms
  },
},
};
</script>

<style scoped>
/* Importation de la typographie FUTURA */
@import url('https://fonts.googleapis.com/css2?family=Futura:wght@400;600&display=swap');

/* Style général de l'overlay */
.loader-overlay {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.9); /* Fond noir légèrement transparent */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column; /* Barre et texte alignés verticalement */
z-index: 9999; /* Toujours au-dessus des autres éléments */
}

/* Conteneur de la barre de progression */
.progress-container {
width: 80%; /* Largeur de la barre */
height: 20px;
background-color: #444; /* Couleur de fond gris foncé */
border-radius: 10px; /* Coins arrondis */
overflow: hidden; /* Évite que la barre dépasse */
}

/* Barre de progression */
.progress-bar {
height: 100%;
background-color: #ff4500; /* Couleur orange vif pour la barre */
transition: width 0.1s ease-in-out; /* Animation fluide pour la progression */
}

/* Texte du pourcentage */
.progress-text {
margin-top: 10px; /* Espace entre la barre et le texte */
font-size: 1.5rem; /* Taille du texte */
font-family: 'Futura', sans-serif; /* Typographie FUTURA */
font-weight: bold;
color: #fff; /* Texte blanc */
text-align: center;
}

/* Media query pour les petits écrans */
@media (max-width: 768px) {
.progress-container {
  width: 90%; /* Réduire la largeur de la barre sur les petits écrans */
}

.progress-text {
  font-size: 1.2rem; /* Réduire la taille du texte pour les petits écrans */
}
}

/* Media query pour les très petits écrans (mobile portrait) */
@media (max-width: 480px) {
.progress-container {
  width: 95%; /* Réduire encore plus la largeur de la barre */
  height: 15px; /* ✅ AJOUT : On affine un peu la barre pour les petits mobiles */
}

.progress-text {
  font-size: 1rem; /* Réduire encore la taille du texte */
}
}

/* ✅ NOUVEL AJOUT : Pour les écrans très petits ou en paysage court */
@media (max-height: 400px) {
  .progress-container {
    height: 10px;
  }
  .progress-text {
    margin-top: 5px;
    font-size: 0.9rem;
  }
}
</style>