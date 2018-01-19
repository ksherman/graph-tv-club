import Vue from 'vue';
import Router from 'vue-router';
import { MainContent } from '@/components/registry';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: MainContent,
    },
  ],
});
