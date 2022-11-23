import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUpView from '@/views/SignUpView'
import LogInView from '@/views/LogInView'
import MovieView from '@/views/MovieView'
import MovieDetailView from '@/views/MovieDetailView'
import FundingView from '@/views/FundingView'
import FundingDetailView from '@/views/FundingDetailView'
import FundingSearchView from '@/views/FundingSearchView'
import ProfileView from '@/views/ProfileView'
import FundingCreateView from '@/views/FundingCreateView'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signup',
    name: 'SignUpView',
    component: SignUpView
  },

  {
    path: '/login',
    name: 'LogInView',
    component: LogInView
  },
  {
    path: '/',
    name: 'MovieView',
    component: MovieView
  },
  {
    path: '/movie/:id',
    name: 'MovieDetailView',
    component: MovieDetailView,
  },
  {
    path: '/fundings',
    name: 'FundingView',
    component: FundingView
  },
  {
    path: '/fundings/:id',
    name: 'FundingDetailView',
    component: FundingDetailView
  },
  {
    path: '/fundings/search',
    name: 'FundingSearchView',
    component: FundingSearchView
  },
  {
    path: '/profile/:id',
    name: 'ProfileView',
    component: ProfileView
  },
  {
    path: '/fundings/create',
    name: 'FundingCreateView',
    component: FundingCreateView,
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.state.token
  const authPages = ['FundingCreateView']
  const isAuthRequired = authPages.includes(to.name)

  if (isAuthRequired && !isLoggedIn) {
    alert("로그인 해주세요")
    next({ name: 'LogInView' })
  } else {
    next()
  }
})

export default router
