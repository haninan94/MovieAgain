import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUpView from '@/views/SignUpView'
import LogInView from '@/views/LogInView'
import MovieView from '@/views/MovieView'
import MovieDetailView from '@/views/MovieDetailView'
import FundingView from '@/views/FundingView'
import FundingDetailView from '@/views/FundingDetailView'
import ProfileView from '@/views/ProfileView'
import FundingCreateView from '@/views/FundingCreateView'
import store from '@/store'
import NotFound404 from '@/views/NotFound404'
import swal from 'sweetalert';

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
    path: '/profile/:id',
    name: 'ProfileView',
    component: ProfileView
  },
  {
    path: '/fundings/create',
    name: 'FundingCreateView',
    
    component: FundingCreateView
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})



router.beforeEach((to, from, next) => {
  const isLoggedIn = store.state.token
  const authPages = ['FundingCreateView']
  const isAuthRequired = authPages.includes(to.name)

  if (isAuthRequired && !isLoggedIn) {
    swal("펀딩을 만들 수 없습니다.", "로그인이 필요합니다.", "error")
    next({ name: 'LogInView' })
  } else {
    next()
  }
})

export default router
