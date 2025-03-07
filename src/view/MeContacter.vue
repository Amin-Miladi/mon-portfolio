<template>
  <div class="contact-container">
    <h1>Contactez-moi</h1>
    <p>Remplissez le formulaire ci-dessous pour me contacter :</p>
    <form class="contact-form" @submit="sendEmail">
      <div class="input-row">
        <input
          class="input-field"
          placeholder="Nom"
          type="text"
          name="from_name"
          required
        />
        <input
          class="input-field"
          placeholder="Prénom"
          type="text"
          name="from_surname"
          required
        />
      </div>
      <input
        class="input-field"
        placeholder="Email"
        type="email"
        name="reply_to"
        required
      />
      <input
        class="input-field"
        placeholder="Objet"
        type="text"
        name="subject"
        required
      />
      <textarea
        class="textarea-field"
        placeholder="Message"
        name="message"
        required
      ></textarea>
      <button class="submit-button" type="submit" :disabled="isLoading">
        {{ isLoading ? "Envoi en cours..." : "Envoyer" }}
      </button>
    </form>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "MeContacter",
  data() {
    return {
      isLoading: false, // État de chargement
    };
  },
  methods: {
    validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
    },
    sendEmail(event) {
      event.preventDefault(); // Empêche le rechargement de la page

      const email = event.target.reply_to.value;
      if (!this.validateEmail(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return;
      }

      this.isLoading = true; // Active l'état de chargement
      console.log("Données envoyées :", event.target);

      emailjs
        .sendForm(
          "service_4xw13d8", // Service ID
          "template_ko5dv87", // Template ID
          event.target,
          "CgrIefJ5Du9YZ6-4g" // Public Key
        )
        .then(
          (result) => {
            console.log("Email envoyé :", result.text);
            this.isLoading = false; // Désactive l'état de chargement
            alert("Votre message a été envoyé avec succès !");
          },
          (error) => {
            console.log("Erreur :", error.text);
            this.isLoading = false; // Désactive l'état de chargement
            alert("Une erreur est survenue. Veuillez réessayer.");
          }
        );
    },
  },
};
</script>

<style scoped>
/* Conteneur principal */
.contact-container {
  text-align: center;
  padding: 50px; /* Descendre le formulaire */
  margin-top: 80px;
}

/* Titre principal */
h1 {
  font-family: 'Futura PT', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

/* Description */
p {
  font-family: 'Futura PT', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 30px;
}

/* Formulaire */
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Ligne des champs nom/prénom */
.input-row {
  display: flex;
  gap: 10px; /* Espacement entre les champs */
}

/* Champs texte */
.input-field,
.textarea-field {
  width: 100%;
  padding: 15px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  font-size: 1rem;
  font-family: 'Futura PT', sans-serif;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  box-sizing: border-box; /* Garantit que tous les champs restent alignés */
}

/* Uniformisation de la hauteur pour les champs nom/prénom */
.input-row .input-field {
  flex: 1; /* Les champs Nom et Prénom prennent la même largeur */
}

/* Champs de texte étendu (message) */
.textarea-field {
  resize: vertical;
  min-height: 150px; /* Augmenter la hauteur du champ Message */
}

/* Bouton d'envoi */
.submit-button {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  font-size: 1.2rem;
  padding: 15px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:disabled {
  background-color: rgba(200, 200, 200, 0.5); /* Griser le bouton */
  cursor: not-allowed;
}

.submit-button:hover:enabled {
  background-color: rgba(255, 255, 255, 1);
}

/* Responsive Design */
@media (max-width: 768px) {
  /* Ajustements pour les tablettes et les écrans plus petits */
  .contact-container {
    padding: 30px; /* Moins d'espace pour les petits écrans */
    margin-top: 160px; /* Marge de 160px en version mobile */
  }

  h1 {
    font-size: 2rem; /* Réduction de la taille du titre */
  }

  .description {
    font-size: 1rem; /* Ajustement de la taille du texte */
  }

  .contact-form {
    width: 100%;
    max-width: 90%; /* Réduit la largeur du formulaire */
  }

  .input-row {
    flex-direction: column; /* Aligne les champs nom et prénom en colonne */
    gap: 15px; /* Espacement entre les champs */
  }

  .submit-button {
    padding: 12px; /* Réduction de la taille du bouton */
  }
}

@media (max-width: 480px) {
  .contact-container {
    padding: 20px; /* Encore moins d'espace pour les très petits écrans */
  }

  .input-field,
  .textarea-field {
    font-size: 0.9rem; /* Réduction de la taille de la police */
  }

  .submit-button {
    font-size: 1rem; /* Taille de texte plus petite pour le bouton */
  }

  h1 {
    font-size: 1.5rem; /* Réduction du titre */
  }

  .description {
    font-size: 0.9rem; /* Réduction du texte */
  }
}
</style>
