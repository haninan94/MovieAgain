<!-- Movie Comment Form -->
<template>
  <div class="moviecommentform">
    <p id="idTag">{{ movieId }}</p>
      <MovieCommentItem
        v-for="movieComment in MovieComments"
        :key="movieComment.id"
        :movieComment="movieComment"
      />
      <div>
        <form @submit.prevent="createMovieComment">
          <label for="movie-comment"></label>
          <input type="text" id="movie-comment" class="nes-input is-dark" v-model="movieComment" />
          <br>
          <button>댓글 달기</button>
        </form>
      </div>
  </div>
</template>

<script>
import MovieCommentItem from "@/components/Movies/MovieCommentItem/";

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
#movie-comment {
  width: 75%;
  margin-bottom: 2rem;
}

.moviecommentform {
  justify-content: center;
}


</style>