import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Meetups from '../components/meetUp/Meetups'
import Meetup from '../components/meetUp/Meetup'
import CreateMeetup from '../components/meetUp/CreateMeetUp'
import Profile from '../components/users/Profile'
import Signin from '../components/users/Signin'
import Signup from '../components/users/Signup'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meetups',
    name: 'Meetups',
    component: Meetups
  },
  {
    path: '/meetup/new',
    name: 'CreateMeetups',
    component: CreateMeetup
  },
  {
    path: '/meetups/:id',
    nmame: 'Meetup',
    props: true,
    component: Meetup
  },
  {
    path: '/profie',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
