import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RestoraniView from '../views/RestoraniView.vue'
// import EmployeeView from '../views/EmployeeView.vue'
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
  // {
  //   path: '/employee',
  //   name: 'employee',
  //   component: EmployeeView
  // },
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
