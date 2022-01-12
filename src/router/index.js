import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import Event from '../views/Event.vue'
import Poland from '../views/Poland.vue'
import Usa from '../views/Usa.vue'
import OtherUniversities from '../views/OtherUniversities.vue'
import Cananda from '../views/Cananda.vue'
import Gallery from '../views/Gallery.vue'
import Test from '../views/Test.vue'
import Modal from '../views/Modal.vue'
import Product from '../components/Product.vue'
import  PageNotFound from '../views/PageNotFound.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Product',
    name: 'Product',
    component: Product
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: PageNotFound
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/Usa',
    name: 'Usa',
    component: Usa
  },
  {
    path: '/Event',
    name: 'Event',
    component: Event
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/Cananda',
    name: 'Cananda',
    component: Cananda
  },
  {
    path: '/Test',
    name: 'Test',
    component: Test
  },
  {
    path: '/OtherUniversities',
    name: 'OtherUniversities',
    component: OtherUniversities
  },
  {
    path: '/Poland',
    name: 'Poland',
    component: Poland
  },
  {
    path: '/Modal',
    name: 'Modal',
    component: Modal
  },
  
 
  

  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
