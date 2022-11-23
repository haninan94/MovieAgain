import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'
import createPersistedState from 'vuex-persistedstate'
import 'v-slim-dialog/dist/v-slim-dialog.css'
import SlimDialog from 'v-slim-dialog'
import swal from 'sweetalert';


Vue.use(Vuex)
Vue.use(SlimDialog)

const API_URL = 'http://127.0.0.1:8000'


export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: {
    token: null,
    movieComments: [],
    fundingComments: [],
    userId: '',
    funding: [],
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
    },
    getMovieComments(state) {
      return state.movieComments
    },
    getFundingComments(state) {
      return state.fundingComments
    },
    getFundingDetail(state) {
      return state.funding
    },
    getIsCompleted(state) {
      console.log('**********************')
      const remainMoney = state.funding.goal_money - state.funding.now_money
      if (remainMoney <= 0) {
        return true
      } else {
        return false
      }
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
    GET_RECOMMEND_FUNDINGS(state, recommend_fundings) {
      state.recommend_fundings = recommend_fundings
    },
    // 회원가입 && 로그인
    SAVE_TOKEN(state, token) {
      state.token = token
      router.push({ name: 'MovieView' })
    },
    // 댓글 작성
    CREATE_MOVIE_COMMENT(state, newMovieComment) {
      state.movieComments.push(newMovieComment)
    },
    LOGOUT(state) {
      state.token = null
      state.userId = null
      state.username = null
    },
    SAVE_USERID(state, userId) {
      state.userId = userId.userId
    },
    SAVE_USERNAME(state, username) {
      state.username = username
    },
    GET_MOVIE_COMMENTS(state, comments) {
      state.movieComments = comments
    },
    GET_USER_FUNDINGS(state, res) {
      state.userFundings = res.data
    }
    ,
    // 펀딩 댓글
    GET_FUNDING_COMMENTS(state, comments) {
      state.fundingComments = comments
    },
    CREATE_FUNDING_COMMENT(state, newFundingComment) {
      state.fundingComments.push(newFundingComment)
    },
    CREATE_FUNDING(state, payload) {
      state.fundings.push(payload)
      router.push({ name: 'FundingView' })
    },
    GET_FUNDING_DETAIL(state, funding) {
      state.funding = funding
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
    getRecommendFundings(context) {
      axios({
        method: 'get',
        url: `${API_URL}/api/v2/fundings/recommendlist/`,
      })
        .then((res) => {
          context.commit('GET_RECOMMEND_FUNDINGS', res.data)
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
        url: `${API_URL}/api/v2/fundings/`,
      })
        .then((res) => {
          context.commit("GET_FUNDINGS", res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 마이페이지 내 펀딩 목록 받기
    getUserFundings(context, userId) {
      axios({
        method: "get",
        url: `${API_URL}/accounts/profile/${userId}`
      })
        .then((res) => {
          context.commit("GET_USER_FUNDINGS", res.data)
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
        .then(() => {
          swal("회원가입에 성공했습니다!", "로그인 페이지로 이동합니다", "success")
          router.push({ name: "LogInView" })
        })
        .catch((err) => {
          router.push({ name: "NotFound404" })
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
              context.commit('SAVE_USERID', res.data)
              context.commit('SAVE_USERNAME', payload.username)
            })
        })
        .catch(() => {
          swal('로그인 실패!', "아이디와 비밀번호를 확인해 주세요", 'error');
          // alert("ID와 Password가 정보와 일치하지 않습니다!")
        })
    },

    // 영화 댓글 작성
    createMovieComment(context, newMovieComment) {
      if (!context.state.token) {
        swal('plz login', 'warning')
        return
      }
      axios({
        method: 'post',
        url: `${API_URL}/api/v1/movies/${newMovieComment.movie}/commentcreate/`,
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
          console.log(res.data)
          context.commit('CREATE_MOVIE_COMMENT', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 댓글 목록 받기
    getMovieComments(context, movieId) {
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/movies/${movieId}/comments/`,
      })
        .then((res) => {
          context.commit('GET_MOVIE_COMMENTS', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteMovieComment(context, payload) {
      axios({
        method: 'delete',
        url: `${API_URL}/api/v1/movies/comments/${payload.commentId}/`,
        headers: {
          Authorization: `Token ${context.state.token}`
        }
      })
        .then(() => {
          axios({
            method: 'get',
            url: `${API_URL}/api/v1/movies/${payload.movieId}/comments/`,
          })
            .then((res) => {
              context.commit('GET_MOVIE_COMMENTS', res.data)
            })
            .catch((err) => {
              console.log(err)
            })
        })
    },
    // 펀딩댓글 
    getFundingComments(context, fundingId) {
      axios({
        method: 'get',
        url: `${API_URL}/api/v2/fundings/${fundingId}/comments/`,
      })
        .then((res) => {
          context.commit('GET_FUNDING_COMMENTS', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 펀딩 댓글 생성
    createFundingComment(context, newFundingComment) {
      axios({
        method: 'post',
        url: `${API_URL}/api/v2/fundings/${newFundingComment.funding}/commentcreate/`,
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
          context.commit('CREATE_FUNDING_COMMENT', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteFundingComment(context, payload) {
      axios({
        method: 'delete',
        url: `${API_URL}/api/v2/fundings/comments/${payload.commentId}/`,
        headers: {
          Authorization: `Token ${context.state.token}`
        }
      })
        .then(() => {
          axios({
            method: 'get',
            url: `${API_URL}/api/v2/fundings/${payload.fundingId}/comments/`,
          })
            .then((res) => {
              context.commit('GET_FUNDING_COMMENTS', res.data)
            })
            .catch((err) => {
              console.log(err)
            })
        })
    },
    // 펀딩 디테일 받아오기
    getFundingDetail(context, fundingId) {
      axios({
        method: "get",
        url: `${API_URL}/api/v2/fundings/${fundingId}`,
      })
        .then((res) => {
          context.commit('GET_FUNDING_DETAIL', res.data)
        })
        .catch((err) => {
          router.push({ name: "NotFound404" })
          console.log(err);
        });
    },
    // 펀딩 삭제
    createFunding(context, payload) {
      if (!context.state.token) {
        alert('plz login')
        return
      }
      axios({
        method: "post",
        url: `${API_URL}/api/v2/fundings/`,
        headers: {
          Authorization: `Token ${context.state.token}`
        },
        data: {
          user: payload.user,
          goal_money: payload.goal_money,
          minimum_money: payload.minimum_money,
          poster_path: payload.poster_path,
          expired_date: payload.expired_date,
          movie_title: payload.movie_title,
          content: payload.content
        },
      })
        .then((res) => {
          context.commit("CREATE_FUNDING", res.data)
        })
    },
    // 펀딩 하기
    donateFunding(context, payload) {
      swal({
        title: "펀딩을 하시겠습니까?",
        text: "OK를 하시면 결제가 진행됩니다.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDonate) => {
          if (willDonate) {
            axios({
              method: "post",
              url: `${API_URL}/api/v2/fundings/${payload.fundingId}/donation/`,
              headers: {
                Authorization: `Token ${context.state.token}`,
              },
              data: {
                funding_id: payload.fundingId,
                user: payload.user,
                donation: payload.donation
              },
            })
              .then(() => {
                axios({
                  method: "get",
                  url: `${API_URL}/api/v2/fundings/${payload.fundingId}`,
                })
                  .then((res) => {
                    context.commit('GET_FUNDING_DETAIL', res.data)
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              });
            swal("펀딩이 완료되었습니다.", {
              icon: "success",
            });
          } else {
            swal("펀딩이 취소되었습니다. 다시 시도해주세요!")
          }
        })
      // axios({
      //   method: "post",
      //   url: `${API_URL}/api/v2/fundings/${payload.fundingId}/donation/`,
      //   headers: {
      //     Authorization: `Token ${context.state.token}`,
      //   },
      //   data: {
      //     funding_id: payload.fundingId,
      //     user: payload.user,
      //     donation: payload.donation
      //   },
      // })
      //   .then(() => {
      //     axios({
      //       method: "get",
      //       url: `${API_URL}/api/v2/fundings/${payload.fundingId}`,
      //     })
      //       .then((res) => {
      //         context.commit('GET_FUNDING_DETAIL', res.data)
      //       })
      //       .catch((err) => {
      //         console.log(err);
      //       });
      //   });
    },
  },
  modules: {
  }
})
