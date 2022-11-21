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
    movieComments: [],
    userId: '',
    temp: [],
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
    },
    getMovieComments(state) {
      return state.temp
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
    GET_FUNDINGS(state, fundings) {
      state.fundings = fundings
    },
    // 회원가입 && 로그인
    SAVE_TOKEN(state, token) {
      state.token = token
      // console.log('로그인 성공~')
      router.push({ name: 'MovieView' })
    },
    // 댓글 작성
    CREATE_MOVIE_COMMENT(state, newMovieComment) {
      state.movieComments.push(newMovieComment)
    },
    LOGOUT(state) {
      // console.log("ok")
      state.token = null
      state.userid = null
    },
    SAVE_USERID(state, userId) {
      state.userId = userId.userId
      console.log('앵 되세요??')
      console.log(state.userId)
    },
    GET_MOVIE_COMMENTS(state, comments) {
      state.temp = comments
    },

    // 펀딩 댓글
    GET_FUNDING_COMMENTS(state, comments){
      state.tempFunding = comments
    },
    CREATE_FUNDING_COMMENT(state, newFundingComment){
      console.log('mutation CREATE_FUNDING_COMMENT 111111111111111111111')
      console.log(state.newFundingComment)
      state.fundingComments.push(newFundingComment)
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
        .then(() => {
          axios({
            method: 'post',
            url: `${API_URL}/accounts/userinfo/`,
            headers: {
              Authorization: `Token ${context.state.token}`
            },
            data: {
              username: payload.username
            },
            // withCredentials: true
          })
            .then((res) => {
              // console.log(res.data)
              context.commit('SAVE_USERID', res.data)
            })
        })
    },

    // 댓글 작성
    createMovieComment(context, newMovieComment) {
      axios({
        method: 'post',
        url: `${API_URL}/api/v1/movies/${newMovieComment.movie}/comments/`,
        headers: {
          Authorization: `Token ${context.state.token}`
        },
        data: {
          user: newMovieComment.user,
          content: newMovieComment.content,
          movie: newMovieComment.movie
        }
      })
        .then((res) => {
          context.commit('CREATE_MOVIE_COMMENT', res.data)
        })
        .catch((err) => {
          console.log('here')
          console.log(err)
        })
    },
    getMovieComments(context, movieId) {
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/movies/${movieId}/comments/`,
        headers: {
          Authorization: `Token ${context.state.token}`
        }
      })
        .then((res) => {
          context.commit('GET_MOVIE_COMMENTS', res.data)
        })
        .catch((err) => {
          console.log(err)
        })

      // logOut(context) {
      //   context.commit("")
      // }
    },
    getFundingComments(context, fundingId) {
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/fundings/${fundingId}/comments/`,
        headers: {
          Authorization: `Token ${context.state.token}`
        }
      })
        .then((res) => {
          context.commit('GET_FUNDING_COMMENTS', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
      },
    createFundingComment(context, newFundingComment){
      axios({
        method: 'post',
        url: `${API_URL}/api/v1/fundings/${newFundingComment.funding}/comments/`,
        headers: {
          Authorization: `Token ${context.state.token}`
        },
        data: {
          user: newFundingComment.user,
          content: newFundingComment.content,
          funding: newFundingComment.funding
        }
      })
        .then((res) => {
          console.log(res.data)
          // context.commit('CREATE_FUNDING_COMMENT', res.data)
        })
        .catch((err) => {
          // console.log('here')
          console.log('post 요청   create오류남요')
          console.log(newFundingComment)
          console.log(err)
        })
    }



  },
  modules: {
  }
})
