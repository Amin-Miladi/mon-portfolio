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
  // ✅ AJOUT : Redirection automatique vers l'accueil quand on arrive sur le site
  { path: '/', redirect: '/accueil' },

  { path: '/accueil', component: PageAccueil, name: 'Accueil' },
  { path: '/cv', component: MonCV, name: 'CV' },
  { path: '/projets', component: MesProjets, name: 'MesProjets' },
  { path: '/contact', component: MeContacter, name: 'Contact' },
  { path: '/tous-projets', component: TousLesProjets, name: 'TousLesProjets' },

  // Routes spécifiques
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
  // ✅ AJOUT : Revenir en haut de la page automatiquement lors d'un changement de route
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;