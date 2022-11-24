<!-- Movie Comment Item -->
<template>
  <div>
    <div class='temp'>
      <div class="movie-comment-item">
        <span>{{ getUsername }}</span>
        <span>{{ movieComment.content }}</span>
        <span>{{ getCreatedAt }}
        <button @click.prevent="deleteMovieComment(movieComment.id, movieComment.movie)"
      >
      X
        </button></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCommentItem",
  props: {
    movieComment: Object,
  },
  data() {
    return {};
  },
  computed: {
    getUsername(){
      const username = this.movieComment.username
      return username
    },
    getCreatedAt() {
      const createdAt = new Date(this.movieComment.created_at).toLocaleString();
      return createdAt;
    },
  },
  methods: {
    deleteMovieComment(commentId, movieId) {
      const payload = {
        commentId: commentId,
        movieId: movieId,
      };
      this.$store.dispatch("deleteMovieComment", payload);
    },
  },
};
</script>

<style>
.temp {
  display: flex;
  justify-content: center;
}
.movie-comment-item{
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid white;
  justify-content: space-between;
  width: 75%;
}

.movie-comment-item span {
  margin-left: 1rem;
  margin-right: 15px;
}

.movie-comment-item button {
  margin-left: 10px;
}

</style>