import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Unavailable from '../views/Notfound.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobsDetails from '../views/jobs/JobsDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'jobsDetails',
    component: JobsDetails,
    props: true
  },
  //for redirects from old known links
  {
    path: '/All-jobs',
    redirect: '/jobs'
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  // for not page found
  {
    path: '/:catchALL(.*)',
    name: "Unavailable",
    component: Unavailable,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
