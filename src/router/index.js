import Vue from 'vue';
import Router from 'vue-router';
import Bookmarks from '@/components/Bookmarks';
import SaveBookmark from '@/components/SaveBookmark';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Bookmarks',
      component: Bookmarks,
    },
    {
      path: '/new',
      name: 'SaveBookmark',
      component: SaveBookmark,
    },
  ],
});
