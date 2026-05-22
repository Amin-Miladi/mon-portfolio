import { createRouter, createWebHistory } from 'vue-router';
import PageAccueil from './view/PageAccueil.vue';
import MonCV from './view/MonCV.vue';
import MesProjets from './view/MesProjets.vue';
import MeContacter from './view/MeContacter.vue';
import TousLesProjets from './view/TousLesProjets.vue';

// Importation des pages spécifiques
import EtudiantsPage from './view/Etudiants.vue';
import MangaPage from './view/Manga.vue';
import YoutubePage from './view/Youtube.vue';
import DesignPage from './view/Design.vue';
import MontagePage from './view/Montage.vue';
import AnimationPage from './view/Animation.vue';

const routes = [
  { path: '/', redirect: '/accueil' },

  { 
    path: '/accueil', 
    component: PageAccueil, 
    name: 'Accueil',
    meta: {
      title: "Amin Miladi | Portfolio Officiel - Graphiste & Vidéaste",
      description: "Bienvenue sur le site officiel d'Amin Miladi. Découvrez mes compétences et réalisations en design graphique, montage vidéo et motion design.",
      keywords: "Amin Miladi, portfolio Amin Miladi, graphiste, vidéaste, alternance MMI"
    }
  },
  { 
    path: '/cv', 
    component: MonCV, 
    name: 'CV',
    meta: {
      title: "À Propos de Amin Miladi | Parcours & Compétences MMI",
      description: "Découvrez le profil d'Amin Miladi, étudiant en BUT MMI passionné par l'audiovisuel, l'animation 2D et le design graphique.",
      keywords: "Amin Miladi CV, parcours Amin Miladi, compétences MMI, étudiant multimédia"
    }
  },
  { 
    path: '/projets', 
    component: MesProjets, 
    name: 'MesProjets',
    meta: {
      title: "Projets de Création Visuelle & Multimédia | Amin Miladi",
      description: "Explorez la galerie des travaux d'Amin Miladi : création manga, vidéos YouTube, designs graphiques et animations.",
      keywords: "projets Amin Miladi, portfolio multimédia, showroom graphique, réalisations vidéo"
    }
  },
  { 
    path: '/contact', 
    component: MeContacter, 
    name: 'Contact',
    meta: {
      title: "Contacter Amin Miladi | Graphiste & Vidéaste Freelance",
      description: "Un projet de montage vidéo, de motion design ou d'illustration ? Contactez Amin Miladi pour toute collaboration ou opportunité.",
      keywords: "contact Amin Miladi, embaucher graphiste, recrutement vidéaste, mail Amin Miladi"
    }
  },
  { 
    path: '/tous-projets', 
    component: TousLesProjets, 
    name: 'TousLesProjets',
    meta: {
      title: "Toutes les Réalisations de Amin Miladi | Showroom Global",
      description: "Index complet de tous les travaux étudiants, projets personnels et créations audiovisuelles d'Amin Miladi.",
      keywords: "galerie complète, banque de projets, archives créatives"
    }
  },

  // Routes spécifiques (Optimisation sémantique des URLs pour Google)
  { 
    path: '/projets/etudiants', 
    component: EtudiantsPage, 
    name: 'EtudiantsPage',
    meta: {
      title: "Mayel : Identité de Marque de Luxe | Amin Miladi",
      description: "Étude de cas du projet Mayel par Amin Miladi. Création de logotype Maya sur Illustrator, packaging haut de gamme et spot publicitaire.",
      keywords: "Mayel, logo luxe, branding Maya, projet SAE MMI"
    }
  },
  { 
    path: '/projets/manga', 
    component: MangaPage, 
    name: 'MangaPage',
    meta: {
      title: "Genesis Zero : Création Manga Originaux | Amin Miladi",
      description: "Plongez dans l'univers de Genesis Zero, projet de manga de science-fiction par Amin Miladi. Character design, synopsis de l'Athanéon et planches.",
      keywords: "Genesis Zero, manga Amin Miladi, Satoru Hana, character design manga"
    }
  },
  { 
    path: '/projets/youtube', 
    component: YoutubePage, 
    name: 'YoutubePage',
    meta: {
      title: "Création Vidéo YouTube & Miniatures | Amin Miladi",
      description: "Showroom de production audiovisuelle pour YouTube par Amin Miladi. Montage vidéo dynamique, étalonnage et design de miniatures à fort CTR.",
      keywords: "vidéo youtube, montage Premiere Pro, miniatures YouTube, CTR"
    }
  },
  { 
    path: '/projets/design', 
    component: DesignPage, 
    name: 'DesignPage',
    meta: {
      title: "Design Graphique, Affiches & Illustrations | Amin Miladi",
      description: "Galerie d'affiches de films alternatives (Prison Break, The Broken), posters de sport (PSG) et illustrations vectorielles réalisées par Amin Miladi.",
      keywords: "affiches de film, poster PSG, illustration vectorielle, Adobe Photoshop"
    }
  },
  { 
    path: '/projets/montage', 
    component: MontagePage, 
    name: 'MontagePage',
    meta: {
      title: "Montage Vidéo & Post-Production Rythmée | Amin Miladi",
      description: "Découvrez les compétences de monteur vidéo d'Amin Miladi à travers une exposition de réalisations rythmées et de sound design immersif.",
      keywords: "montage video pro, post-production, dérushage, habillage audio"
    }
  },
  { 
    path: '/projets/motion', 
    component: AnimationPage, 
    name: 'AnimationPage',
    meta: {
      title: "Animation 2D & Motion Design Studio | Amin Miladi",
      description: "Showcase de projets de motion design et d'animations graphiques vectorielles par Amin Miladi. Maîtrise des courbes de vitesse sous After Effects.",
      keywords: "motion design, animation 2D, typographie cinétique, After Effects keyframes"
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // ✅ ENRICHISSEMENT RESPONSIVE : Remonte proprement et de façon fluide
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  },
});

// ===================================================
// 🚀 INTERCEPTEUR MAÎTRE SEO POUR LE CLASSEMENT GOOGLE
// ===================================================
router.beforeEach((to, from, next) => {
  // 1. Mise à jour dynamique du titre de l'onglet du navigateur
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = "Amin Miladi | Portfolio Graphiste & Vidéaste";
  }

  // 2. Mise à jour ou création dynamique de la Meta Description (Capital pour Google)
  if (to.meta && to.meta.description) {
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', to.meta.description);
  }

  // 3. Mise à jour ou création dynamique des Mots-Clés
  if (to.meta && to.meta.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', to.meta.keywords);
  }

  // 4. Forcer les directives prioritaires d'indexation
  let metaRobots = document.querySelector('meta[name="robots"]');
  if (!metaRobots) {
    metaRobots = document.createElement('meta');
    metaRobots.setAttribute('name', 'robots');
    document.head.appendChild(metaRobots);
  }
  metaRobots.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

  next();
});

export default router;