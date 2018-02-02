import Vue from 'vue';
import Router from 'vue-router';
import { MainContent, ShowPage } from '@/components/registry';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainContent,
    },
    {
      path: '/show/:showId',
      component: ShowPage,
      name: 'show.details',
    },
  ],
});
