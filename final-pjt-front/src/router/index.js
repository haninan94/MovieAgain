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
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
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

    component: FundingCreateView
  },
  {
    path: '*',
    redirect: '/404'
  }

]
// const scrollBehavior = (to, from, savedPosition) => {
//   return savedPosition || { top: 0, left: 0 }
// }

const router = new VueRouter({
  mode: 'history',
  // scrollBehavior() {
  //   return { x: 0, y: 0 }
  // },
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior,
})



router.beforeEach((to, from, next) => {
  const isLoggedIn = store.state.token
  const authPages = ['FundingCreateView']
  const isAuthRequired = authPages.includes(to.name)

  if (isAuthRequired && !isLoggedIn) {
    swal("펀딩을 작성할 수 없습니다.", "로그인이 필요합니다.", "error")
    next({ name: 'LogInView' })
  } else {
    next()
  }
})

export default router
