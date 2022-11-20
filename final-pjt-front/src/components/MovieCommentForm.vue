<template>
  <div>
    <form @submit="createMovieComment">
      <input type="text" v-model="movieComment" />
      <button>등록하기</button>
    </form>
    <p id="idTag">{{ movieId }}</p>
    <MovieCommentItem
      v-for="movieComment in movieComments"
      :key="movieComment.id"
      :movieComment="movieComment"
    />
  </div>
</template>

<script>
import MovieCommentItem from "@/components/MovieCommentItem/";

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
      return this.$store.getters.getMovieComments;
    },
  },
  data() {
    return {
      movieComment: "",
    };
  },
  created() {
    this.getMovieComments();
    this.$store.dispatch("getMovieComments", this.$route.params.id);
  },
  methods: {
    createMovieComment(event) {
      event.preventDefault();
      const newMovieComment = {
        // 새로운 무비커멘트
        // userid 를 가져와야함
        // username 가져오는중 근데 undefined 임
        user: this.$store.state.userId,
        content: this.movieComment,
        movie: this.$route.params.id,
      };
      this.$store.dispatch("createMovieComment", newMovieComment);
      this.movieComment = "";
    },
    getMovieComments() {
      const movieId = this.$route.params.id;
      this.$store.dispatch("getMovieComments", movieId);
    },
  },
};
</script>

<style>
</style>