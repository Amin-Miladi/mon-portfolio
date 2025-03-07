import { createRouter, createWebHistory } from 'vue-router';
import PageAccueil from './view/PageAccueil.vue'; // Page d'accueil
import MonCV from './view/MonCV.vue'; // Page CV
import MesProjets from './view/MesProjets.vue'; // Page principale des projets
import MeContacter from './view/MeContacter.vue'; // Page de contact
import TousLesProjets from './view/TousLesProjets.vue'; // Page pour tous les projets

// Importation des pages spécifiques pour chaque catégorie
import EtudiantsPage from './view/Etudiants.vue'; // Page Travaux Étudiants
import MangaPage from './view/Manga.vue'; // Page Projet Manga
import YoutubePage from './view/Youtube.vue'; // Page Création YouTube
import DesignPage from './view/Design.vue'; // Page Design Graphique
import MontagePage from './view/Montage.vue'; // Page Montage Vidéo
import AnimationPage from './view/Animation.vue'; // Page Animation & Motion Design

const routes = [
  { path: '/accueil', component: PageAccueil, name: 'Accueil' },
  { path: '/cv', component: MonCV, name: 'CV' },
  { path: '/projets', component: MesProjets, name: 'MesProjets' },
  { path: '/contact', component: MeContacter, name: 'Contact' },
  { path: '/tous-projets', component: TousLesProjets, name: 'TousLesProjets' },

  // Routes spécifiques pour chaque catégorie
  { path: '/projets/etudiants', component: EtudiantsPage, name: 'EtudiantsPage' },
  { path: '/projets/manga', component: MangaPage, name: 'MangaPage' },
  { path: '/projets/youtube', component: YoutubePage, name: 'YoutubePage' },
  { path: '/projets/design', component: DesignPage, name: 'DesignPage' },
  { path: '/projets/montage', component: MontagePage, name: 'MontagePage' },
  { path: '/projets/motion', component: AnimationPage, name: 'AnimationPage' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
