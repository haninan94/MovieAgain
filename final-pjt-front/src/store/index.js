import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import router from '@/router'
Vue.use(Vuex)

const API_URL = 'http://127.0.0.1:8000'


export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: {
    token: null,
    comments: [],
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
    },
    getMovieComments: (state) => {
      return state.comments
    }
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
    // 회원가입 && 로그인
    SAVE_TOKEN(state, data) {
      state.token = data.token
      state.username = data.username
      // console.log('로그인 성공~')
      // console.log(this.state.username)
      router.push({ name: 'MovieView' })
    },
    LOGOUT(state) {
      // console.log("ok")
      state.token = null
    },
    CREATE_COMMENTS(state, new_comment) {
      state.comments.push(new_comment)
    }
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
          // console.log(res)
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
        // 3번째 인자인 payload.username 이 data로 전달이 안되는듯
        // 두번째 인자에 token, username 같이 묶어서 data로 넘김
        // 우리가 필요한 건 user id 
        // 하지만 res.data에는 key 만 있고 장고로그인은 settings 에서 해줘서 따로 view 로 response 줄 수 없음
        // 그럼 username 으로 comment 생성? comment 모델 변경??
        .then((res) => {
          console.log(res)
          // console.log('11111111111111111111111111111111111111111111111111')
          const data = {
            // 'id': res.data.id,
            'token': res.data.key,
            'username': payload.username,
          }
          context.commit('SAVE_TOKEN', data)

        })
    },
    createComment(context, payload) {
      axios({
        method: 'post',
        url: `${API_URL}/api/v1/movies/${payload.movie}/comments/`,
        headers: {
          Authorization: `Token ${this.state.token}`
        },
        data: {
          user: payload.token,
          content: payload.content,
          movie: payload.movie
        }
      })
        .then((res) => {
          context.commit('CREATE_COMMENTS', res.data)
        })
        .catch((err) => {
          console.log(`${payload.token}`)
          console.log(err)
        })
    }
  },
  modules: {
  }
})
