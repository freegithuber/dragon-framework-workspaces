import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homepage',
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: () => import(/* webpackChunkName: "Homepage" */ '@/views/Homepage.vue'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
