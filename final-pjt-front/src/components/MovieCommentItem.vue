<template>
  <div>
    <p>작성자 : {{ movieComment.username }}</p>
    <p>내용 : {{ movieComment.content }}</p>
    <p>작성 시각 : {{ getCreatedAt }}</p>
    <button
      @click.prevent="deleteMovieComment(movieComment.id, movieComment.movie)"
    >
      삭제하기
    </button>
    <hr />
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
    getCreatedAt() {
      const createdAt = new Date(this.movieComment.created_at).toLocaleString();
      return createdAt;
    },
  },
  methods: {
    // deleteMovieComment(movieComment, event) {
    //   event.preventDefault();
    //   const payload = {
    //     movieCommentId: movieComment.id,
    //     userId: movieComment.user,
    //   };
    //   // this.$store.dispatch("deleteComment", payload);
    //   // this.$router.push({ name: "MovieDetailView", params: { id: movieId } });
    //   this.$emit("deleteMovieComment", payload);
    // },
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
</style>