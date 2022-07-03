import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RestoraniView from '../views/RestoraniView.vue'
 import RestoranView from '../views/RestoranView.vue'
 import LoginView from '../views/LoginView.vue'
 import RegistrationView from '../views/RegistrationView.vue'
 import OrderHistoryView from '../views/OrderHistoryView.vue'
 import MenadzerPrPorudzbinaView from '../views/MenadzerPrPorudzbinaView.vue'
 import AdminKorisniciView from '../views/AdminKorisniciView.vue'
 import KreirajMenDosView from '../views/AdminKorisniciView.vue'
 
 // import AddEmployeeView from '../views/AddEmployeeView.vue'
// import EditEmployeeView from '../views/EditEmployeeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/restorani',
    name: 'restorani',
    component: RestoraniView
  },
  {
    path: '/restoran',
    name: 'restoran',
    component: RestoranView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/registracija',
    name: 'registracija',
    component: RegistrationView
  },
  {
    path: '/istorija-porudzbina',
    name: 'istorija-porudzbina',
    component: OrderHistoryView
  },
  {
    path: '/pregled-porudzbina',
    name: 'pregled-porudzbina',
    component: MenadzerPrPorudzbinaView
  },
  {
    path: '/korisnici',
    name: 'korisnici',
    component: AdminKorisniciView
  },
  {
    path: '/kreiraj-korisnika',
    name: 'kreiraj-korisnika',
    component: KreirajMenDosView
  },

  // {
  //   path: '/add-employee',
  //   name: 'add-employee',
  //   component: AddEmployeeView
  // },
  // {
  //   path: '/edit-employee',
  //   name: 'edit-employee',
  //   component: EditEmployeeView
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
