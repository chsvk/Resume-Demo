import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import One from './views/Portfolio1.vue'
import Two from './views/Portfolio2.vue'
import Three from './views/Portfolio3.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/portfolio/one',
      name: 'One',
      component: One
    },
    {
      path: '/portfolio/two',
      name: 'Two',
      component: Two
    },
    {
      path: '/portfolio/three',
      name: 'Three',
      component: Three
    }
  ]
})
