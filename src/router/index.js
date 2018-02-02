import Vue from 'vue';
import Router from 'vue-router';
import { WelcomePage, ShowPage } from '@/components/registry';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: WelcomePage,
    },
    {
      path: '/show/:showId',
      component: ShowPage,
      name: 'show.details',
    },
  ],
});
