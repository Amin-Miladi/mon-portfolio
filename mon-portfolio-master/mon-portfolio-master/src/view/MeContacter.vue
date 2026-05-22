<template>
  <div class="contact-container reveal-section">
    <header class="contact-header">
      <span class="contact-tag">COLLABORATION // OPPORTUNITÉS</span>
      <h1>Contactez-moi</h1>
      <div class="header-divider"></div>
      <p class="contact-lead">
        Qu'il s'agisse d'une proposition d'alternance dans le cadre de mon BUT MMI, d'un projet de montage vidéo, d'une création de motion design ou d'une direction artistique sur mesure, mon espace de messagerie reste ouvert. Remplissez le formulaire ci-dessous pour m'exposer vos besoins techniques ou créatifs, et je m'efforcerai de vous répondre dans les plus brefs délais afin d'amorcer notre future collaboration visuelle.
      </p>
    </header>

    <form class="contact-form" @submit="sendEmail" aria-label="Formulaire de contact professionnel d'Amin Miladi">
      <div class="input-row">
        <div class="field-wrapper">
          <input
            class="input-field"
            placeholder="Nom"
            type="text"
            name="from_name"
            autocomplete="family-name"
            required
            aria-required="true"
          />
        </div>
        <div class="field-wrapper">
          <input
            class="input-field"
            placeholder="Prénom"
            type="text"
            name="from_surname"
            autocomplete="given-name"
            required
            aria-required="true"
          />
        </div>
      </div>
      
      <div class="field-wrapper">
        <input
          class="input-field"
          placeholder="Email"
          type="email"
          name="reply_to"
          autocomplete="email"
          required
          aria-required="true"
        />
      </div>
      
      <div class="field-wrapper">
        <input
          class="input-field"
          placeholder="Objet de votre message"
          type="text"
          name="subject"
          required
          aria-required="true"
        />
      </div>
      
      <div class="field-wrapper">
        <textarea
          class="textarea-field"
          placeholder="Exprimez ici les détails de votre projet multimédia ou votre proposition de collaboration..."
          name="message"
          required
          aria-required="true"
        ></textarea>
      </div>
      
      <button class="submit-button" type="submit" :disabled="isLoading">
        <span class="btn-text">{{ isLoading ? "Envoi en cours..." : "Transmettre le message" }}</span>
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
      isLoading: false,
    };
  },
  mounted() {
    this.initScrollReveal();
    this.injectContactSEO();
  },
  methods: {
    validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
    },
    sendEmail(event) {
      event.preventDefault();

      const email = event.target.reply_to.value;
      if (!this.validateEmail(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return;
      }

      this.isLoading = true;

      emailjs
        .sendForm(
          "service_4xw13d8",
          "template_ko5dv87",
          event.target,
          "CgrIefJ5Du9YZ6-4g"
        )
        .then(
          (result) => {
            console.log("Email envoyé avec succès :", result.text);
            this.isLoading = false;
            alert("Votre message a été envoyé avec succès !");
            event.target.reset();
          },
          (error) => {
            console.log("Échec de l'envoi :", error.text);
            this.isLoading = false;
            alert("Une erreur est survenue. Veuillez réessayer.");
          }
        );
    },
    initScrollReveal() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      }, { threshold: 0.05 });

      document.querySelectorAll(".reveal-section").forEach((section) => {
        observer.observe(section);
      });
    },
    injectContactSEO() {
      document.title = "Contact | Amin Miladi — Formulaire de Contact Portfolio Officiel";
      const pageDescription = "Prenez contact avec Amin Miladi, graphiste, monteur vidéo et créateur de contenu. Formulaire sécurisé pour propositions d'alternance BUT MMI et projets audiovisuels.";
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
      setMetaTag('name', 'keywords', "Amin Miladi, contact Amin Miladi, embaucher graphiste, recrutement videaste, alternance MMI, am.lab1, email Amin Miladi, freelance motion design");
      setMetaTag('name', 'robots', "index, follow, max-snippet:-1, max-image-preview:large");

      setMetaTag('property', 'og:title', "Contacter Amin Miladi | Formulaire de Messagerie Officiel");
      setMetaTag('property', 'og:description', pageDescription);
      setMetaTag('property', 'og:type', "website");
      setMetaTag('property', 'og:url', canonicalUrl);

      const legacyScript = document.getElementById("jsonld-contact-page-seo");
      if (legacyScript) legacyScript.remove();

      const jsonLdStructure = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ContactPage",
            "@id": canonicalUrl,
            "url": canonicalUrl,
            "name": "Formulaire Officiel de Contact et Collaboration — Amin Miladi",
            "description": pageDescription,
            "mainEntity": {
              "@type": "Person",
              "name": "Amin Miladi",
              "jobTitle": "Graphiste & Vidéaste"
            }
          }
        ]
      };

      const scriptTag = document.createElement('script');
      scriptTag.id = "jsonld-contact-page-seo";
      scriptTag.type = "application/ld+json";
      scriptTag.text = JSON.stringify(jsonLdStructure);
      document.head.appendChild(scriptTag);
    }
  },
};
</script>

<style scoped>
/* ====== STRUCTURE DE LA PAGE ====== */
.contact-container {
  padding: 0 24px 120px 24px;
  margin-top: 140px;
  color: #ffffff;
  font-family: "Futura PT", "Segoe UI", sans-serif;
  min-height: 85vh;
  box-sizing: border-box;
}

/* ====== EN-TÊTE ÉPURÉ SANS TEXTE GRAS ====== */
.contact-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 750px;
  margin: 0 auto 50px auto;
}

.contact-tag {
  color: #ff5722;
  font-size: 0.85rem;
  letter-spacing: 4px;
  margin-bottom: 15px;
  font-family: 'Trispace', sans-serif;
}

h1 {
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: -1px;
  margin: 0 0 20px 0;
}

.header-divider {
  width: 50px;
  height: 1px;
  background-color: #ff5722;
  margin-bottom: 25px;
}

.contact-lead {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #b3b3b3;
  font-weight: 300;
  margin: 0;
}

/* ====== COMPORTEMENT SCROLL REVEAL (JS TRANSITION) ====== */
.reveal-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

.reveal-section.active {
  opacity: 1;
  transform: translateY(0);
}

/* ====== INTERFACE DU FORMULAIRE COMPLÈTE ====== */
.contact-form {
  max-width: 650px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.input-row {
  display: flex;
  gap: 22px;
}

.field-wrapper {
  width: 100%;
  position: relative;
}

.input-row .field-wrapper {
  flex: 1;
}

.input-field,
.textarea-field {
  width: 100%;
  padding: 16px 18px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  font-size: 1rem;
  font-family: "Futura PT", sans-serif;
  font-weight: 300;
  background: rgba(10, 10, 10, 0.8);
  color: #ffffff;
  box-sizing: border-box;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.input-field:focus,
.textarea-field:focus {
  outline: none;
  border-color: #ff5722;
  box-shadow: 0 0 14px rgba(255, 87, 34, 0.25);
  background: rgba(15, 15, 15, 0.95);
}

.input-field::placeholder,
.textarea-field::placeholder {
  color: #555555;
  font-weight: 300;
}

.textarea-field {
  resize: vertical;
  min-height: 180px;
  line-height: 1.5;
}

/* BOUTON TRANSMISSION PREMIUM */
.submit-button {
  width: 100%;
  background-color: #ffffff;
  color: #000000;
  font-size: 1.05rem;
  font-family: "Futura PT", sans-serif;
  font-weight: 600;
  padding: 16px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-button:disabled {
  background-color: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.3);
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.submit-button:hover:enabled {
  background-color: #ff5722;
  color: #ffffff;
  box-shadow: 0 8px 24px rgba(255, 87, 34, 0.35);
}

.submit-button:active:enabled {
  transform: scale(0.98);
}

.btn-text {
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

/* ====== RESPONSIVE DESIGN INTÉGRAL BINDÉ ====== */
@media (max-width: 768px) {
  .contact-container {
    padding: 0 20px 90px 20px;
    margin-top: 110px;
  }

  .contact-form {
    width: 100%;
    max-width: 100%;
  }

  .input-row {
    flex-direction: column;
    gap: 22px;
  }

  .input-field,
  .textarea-field {
    padding: 14px 16px;
  }
}

@media (max-width: 480px) {
  .contact-container {
    margin-top: 95px;
    padding-bottom: 70px;
  }

  h1 {
    font-size: 1.8rem;
  }

  .input-field,
  .textarea-field {
    font-size: 0.95rem;
  }
}

@media (max-height: 480px) and (orientation: landscape) {
  .contact-container {
    margin-top: 90px;
  }
}
</style>