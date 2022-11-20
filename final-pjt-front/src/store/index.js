import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

const API_URL = 'http://127.0.0.1:8000'


export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: {
    token: null,
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
    },
  },
  mutations: {
    GET_MOVIES(state, movies) {
      state.movies = movies
    },
    GET_ADVENTURE_MOVIES(state, adventure_movies) {
      state.adventure_movies = adventure_movies
    },
    GET_HORROR_MOVIES(state, horror_movies) {
      state.horror_movies = horror_movies
    },
    GET_DOCUMENTARY_MOVIES(state, documentary_movies) {
      state.documentary_movies = documentary_movies
    },
    GET_ANIMATION_MOVIES(state, animation_movies) {
      state.animation_movies = animation_movies
    },
    GET_ROMANCE_MOVIES(state, romance_movies) {
      state.romance_movies = romance_movies
    },
    GET_FUNDINGS(state, fundings) {
      state.fundings = fundings
    },
    // 회원가입 && 로그인
    SAVE_TOKEN(state, token) {
      state.token = token
      // console.log('로그인 성공~')
      router.push({ name: 'MovieView' })
    },
    LOGOUT(state) {
      // console.log("ok")
      state.token = null
    },
    GET_FUNDING_SEARCH(state, payload) {
      state.fundingSearched = payload
    },
  },
  actions: {
    getMovies(context) {
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/movies/`,
      })
        .then((res) => {
          context.commit('GET_MOVIES', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getAdventureMovies(context) {
      axios({
        method: 'post',
        url: `${API_URL}/api/v1/movies/`,
        data: {
          genre: 12,
        }
      })
        .then((res) => {
          context.commit('GET_ADVENTURE_MOVIES', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getHorrorMovies(context) {
      axios({
        method: 'post',
        url: `${API_URL}/api/v1/movies/`,
        data: {
          genre: 27,
        }
      })
        .then((res) => {
          context.commit('GET_HORROR_MOVIES', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getDocumentaryMovies(context) {
      axios({
        method: 'post',
        url: `${API_URL}/api/v1/movies/`,
        data: {
          genre: 99,
        }
      })
        .then((res) => {
          context.commit('GET_DOCUMENTARY_MOVIES', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getAnimationMovies(context) {
      axios({
        method: 'post',
        url: `${API_URL}/api/v1/movies/`,
        data: {
          genre: 16,
        }
      })
        .then((res) => {
          context.commit('GET_ANIMATION_MOVIES', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getRomanceMovies(context) {
      axios({
        method: 'post',
        url: `${API_URL}/api/v1/movies/`,
        data: {
          genre: 16,
        }
      })
        .then((res) => {
          context.commit('GET_ROMANCE_MOVIES', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getFundings(context) {
      axios({
        method: "get",
        url: `${API_URL}/api/v1/fundings/`,
      })
        .then((res) => {
          context.commit("GET_FUNDINGS", res.data)
        })
    },
    signUp(context, payload) {
      axios({
        method: 'post',
        url: `${API_URL}/accounts/signup/`,
        data: {
          username: payload.username,
          password1: payload.password1,
          password2: payload.password2,
        }
      })
        .then((res) => {
          context.commit('SAVE_TOKEN', res.data.key)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    logIn(context, payload) {
      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data: {
          username: payload.username,
          password: payload.password,
        }
      })
        .then((res) => {
          // console.log(res)
          context.commit('SAVE_TOKEN', res.data.key)
        })
    },
    getFundingSearch(context, payload) {
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/fundings`,
      })
        .then((res) => {
          const filteredData = res.data.filter((el) => {
            el.movive_title = payload
          })
          context.commit("GET_FUNDING_SEARCH", filteredData)
        })
    }
    // logOut(context) {
    //   context.commit("")
    // }
  },
  modules: {
  }
})
