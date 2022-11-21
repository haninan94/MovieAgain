<template>
  <div>
    <form @submit.prevent="createMovieComment">
      <input type="text" v-model="movieComment" />
      <button>등록하기</button>
    </form>
    <p id="idTag">{{ movieId }}</p>
    <MovieCommentItem
      v-for="movieComment in MovieComments"
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
    MovieComments() {
      return this.$store.state.movieComments;
    },
  },
  data() {
    return {
      movieComment: "",
    };
  },
  // created() {
  //   this.getMovieComments();
  // },
  methods: {
    createMovieComment() {
      const newMovieComment = {
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