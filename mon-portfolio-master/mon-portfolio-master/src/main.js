import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// ===================================================
// 🚀 INJECTION DU SYSTÈME SEO MAÎTRE MULTI-PAGES
// ===================================================
router.afterEach((to) => {
  const baseSiteUrl = window.location.origin;
  const currentFullUrl = baseSiteUrl + to.path;

  // 1. Gestion stricte de l'URL Canonique (Capital pour éviter les pénalités Google)
  let canonicalLink = document.querySelector("link[rel='canonical']");
  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute("href", currentFullUrl);

  // 2. Injection des directives de crawl prioritaires pour positionner "Amin Miladi"
  const setGlobalMeta = (nameAttr, nameValue, contentValue) => {
    let meta = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(nameAttr, nameValue);
      document.head.appendChild(meta);
    }
    meta.content = contentValue;
  };

  // Verrouillage des mots-clés globaux sur chaque segment du site
  setGlobalMeta('name', 'robots', "index, follow, max-image-preview:large, max-snippet:-1");
  setGlobalMeta('name', 'author', "Amin Miladi");
  setGlobalMeta('property', 'og:url', currentFullUrl);
  setGlobalMeta('property', 'og:site_name', "Amin Miladi Portfolio");

  // 3. Script d'autorité JSON-LD à chaud pour forcer la liaison sémantique
  const oldMainLd = document.getElementById("jsonld-main-routing-seo");
  if (oldMainLd) oldMainLd.remove();

  const routingLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": currentFullUrl + "#page",
    "url": currentFullUrl,
    "name": `Amin Miladi Portfolio — ${to.name || 'Graphisme & Vidéo'}`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Amin Miladi Portfolio Officiel",
      "url": baseSiteUrl
    }
  };

  const scriptTag = document.createElement('script');
  scriptTag.id = "jsonld-main-routing-seo";
  scriptTag.type = "application/ld+json";
  scriptTag.text = JSON.stringify(routingLdData);
  document.head.appendChild(scriptTag);
});

// ===================================================
// 📱 SECURITÉ RESPONSIVE : FIX DU 100VH SUR MOBILE
// ===================================================
const updateVhVariable = () => {
  // Calcule la hauteur réelle visible sans les barres d'outils mobiles de Chrome/Safari
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('resize', updateVhVariable);
window.addEventListener('orientationchange', updateVhVariable);
updateVhVariable(); // Initialisation immédiate

// Branchement des plugins et montage de l'application
app.use(router);
app.mount('#app');