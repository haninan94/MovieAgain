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
    remainMoney: null,
  },
  getters: {
    // 로그인 확인 
    isLogin(state) {
      return state.token ? true : false
    },
    // 영화 댓글 가져오기
    getMovieComments(state) {
      return state.movieComments
    },
    // 펀딩 댓글 가져오기
    getFundingComments(state) {
      return state.fundingComments
    },
    // 펀딩 디테일 가져오기
    getFundingDetail(state) {
      return state.funding
    },
    // getIsCompleted(state) {
      // console.log('**********************')
      // const remainMoney = state.funding.goal_money - state.funding.now_money
      // const remainDate = state.funding.remainDate
      // console.log(remainDate)
      // if (remainDate <= 0) {
      //   if (remainMoney <= 0) {
      //     return true
      //   } else {
      //     return false
      //   }
      // } else {
      //   if (remainMoney > 0) {
      //     return 'ing'
      //   } else {
      //     return true
      //   }
      // }
      // if (remainMoney <= 0) {
      //   return true
      // } else {
      //   return false
      // }
    // }
    // 펀딩 완료 여부 확인
    getIsCompleted(state) {
      const remainMoney = state.funding.goal_money - state.funding.now_money
      if (remainMoney <= 0) {
        return true
      } else {
        return false
      }
    }
  },
  mutations: {
    // 평점 높은 영화 가져오기
    GET_MOVIES(state, movies) {
      state.movies = movies
    },
    // Adventure 영화 가져오기
    GET_ADVENTURE_MOVIES(state, adventure_movies) {
      state.adventure_movies = adventure_movies
    },
    // Horror 영화 가져오기
    GET_HORROR_MOVIES(state, horror_movies) {
      state.horror_movies = horror_movies
    },
    // Documentary 영화 가져오기
    GET_DOCUMENTARY_MOVIES(state, documentary_movies) {
      state.documentary_movies = documentary_movies
    },
    // Animation 영하 가져오기
    GET_ANIMATION_MOVIES(state, animation_movies) {
      state.animation_movies = animation_movies
    },
    // Romance 영화 가져오기
    GET_ROMANCE_MOVIES(state, romance_movies) {
      state.romance_movies = romance_movies
    },
    // Fundings 가져오기
    GET_FUNDINGS(state, fundings) {
      state.fundings = fundings
    },
    // 추천 Fundings 가져오기
    GET_RECOMMEND_FUNDINGS(state, recommend_fundings) {
      state.recommend_fundings = recommend_fundings
    },
    // 회원가입 && 로그인
    SAVE_TOKEN(state, token) {
      state.token = token
      swal("로그인 완료", "로그인이 완료되었습니다", "success")
      router.push({ name: 'MovieView' })
    },
    // 댓글 작성
    CREATE_MOVIE_COMMENT(state, newMovieComment) {
      state.movieComments.push(newMovieComment)
    },
    // 로그아웃
    LOGOUT(state) {
      state.token = null
      state.userId = null
      state.username = null
    },
    // user id 저장
    SAVE_USERID(state, userId) {
      state.userId = userId.userId
    },
    // user name 저장
    SAVE_USERNAME(state, username) {
      state.username = username
    },
    // movie comment 가져오기
    GET_MOVIE_COMMENTS(state, comments) {
      state.movieComments = comments
    },
    // user가 한 funding 가져오기
    GET_USER_FUNDINGS(state, res) {
      state.userFundings = res.data
    }
    ,
    // 펀딩 댓글 가져오기
    GET_FUNDING_COMMENTS(state, comments) {
      state.fundingComments = comments
    },
    // 펀딩 댓글 저장
    CREATE_FUNDING_COMMENT(state, newFundingComment) {
      state.fundingComments.push(newFundingComment)
    },
    // 새로운 펀딩 글 생성
    CREATE_FUNDING(state, payload) {
      state.fundings.push(payload)
      swal("펀딩 생성 완료", "재개봉을 기원합니다.🙏🏻🙏", "success")
      router.push({ name: 'FundingView' })
    },
    // funding detail 가져오기
    GET_FUNDING_DETAIL(state, funding) {
      state.funding = funding
      state.remainMoney = funding.goal_money - funding.now_money
    },
    SEARCH_FUNDING (state, fundings) {
      state.fundings = fundings
    }

  },
  actions: {
    // 메인 영화 데이터 가져오기
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
    // 추천 funding 댓글 가져오기
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
    // adventure 영화 가져오기
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
    // horror 영화 가져오기
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
    // documentary 영화 가져오기
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
    // animation 영화 가져오기
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
    // romance 영화 가져오기
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
    // fundings 가져오기
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
    // 회원가입
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
        .catch(() => {
          router.push({ name: "NotFound404" })
        })
    },
    // 로그인
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

    // 영화 댓글 작성하기
    createMovieComment(context, newMovieComment) {
      if (!context.state.token) {
        swal('댓글을 달 수 없습니다.', '로그인이 필요합니다.', "warning")
        return;
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
          context.commit('CREATE_MOVIE_COMMENT', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 영화 댓글 목록 받기
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
    // 영화 댓글 삭제하기
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
    // 펀딩 댓글 가져오기
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
    // 펀딩 댓글 생성하기
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
    // 펀딩 댓글 삭제하기
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
    // 펀딩 만들기
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
    // 펀딩 결제하기
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
    },
    searchFunding(context, searchword) {
      axios({
        method: "get",
        url: `${API_URL}/api/v2/fundings/search/`,
        params: {
          searchword: searchword
        },
      })
        .then((res) => {
          context.commit('SEARCH_FUNDING', res.data)
        })
    }
  },
  modules: {
  }
})
