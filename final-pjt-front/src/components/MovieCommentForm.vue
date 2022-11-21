<template>
  <div>
    <form @submit.prevent="createMovieComment">
      <input type="text" v-model="movieComment" />
      <button>등록하기</button>
    </form>
    <p id="idTag">{{ movieId }}</p>
    <MovieCommentItem
      v-for="comment in commentLists"
      :key="comment.id"
      :comment="comment"
      @deleteMovieComment="deleteMovieComment;"
    />
  </div>
</template>

<script>
import MovieCommentItem from "@/components/MovieCommentItem/";
import axios from "axios";
const API_URL = "http://127.0.0.1:8000";

export default {
  name: "MovieCommentForm",
  components: {
    MovieCommentItem,
  },
  props: {
    movieId: Number,
  },
  computed: {
    movieComments() {
      return this.$store.state.temp;
    },
  },
  data() {
    return {
      movieComment: "",
      commentLists: [],
    };
  },
  created() {
    this.getMovieComments();
  },
  methods: {
    createMovieComment() {
      const newMovieComment = {
        // 새로운 무비커멘트
        // userid 를 가져와야함
        // username 가져오는중 근데 undefined 임
        user: this.$store.state.userId,
        content: this.movieComment,
        movie: this.$route.params.id,
      };
      axios({
        method: "post",
        url: `${API_URL}/api/v1/movies/${newMovieComment.movie}/commentcreate/`,
        headers: {
          Authorization: `Token ${this.$store.state.token}`,
        },
        data: {
          user: newMovieComment.user,
          content: newMovieComment.content,
          movie: newMovieComment.movie,
        },
      }).then((res) => {
        this.commentLists.push(res.data);
      });
      this.movieComment = "";
    },
    // getMovieComments() {
    //   axios
    //   const movieId = this.$route.params.id;
    //   this.$store.dispatch("getMovieComments", movieId);
    // },
    getMovieComments() {
      const movieId = this.$route.params.id;
      axios({
        method: "get",
        url: `${API_URL}/api/v1/movies/${movieId}/comments/`,
      }).then((res) => {
        console.log(res.data);
        this.commentLists = res.data;
      });
    },
    deleteMovieComment(payload) {
      axios({
        method: "delete",
        url: `${API_URL}/api/v1/movies/comments/${payload.movieCommentId}/`,
        headers: {
          Authorization: `Token ${this.$store.state.token}`,
        },
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>