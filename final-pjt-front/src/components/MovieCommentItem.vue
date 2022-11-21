<template>
  <div>
    <p>{{ comment.content }}</p>
    <p>내용</p>
    <button @click="deleteMovieComment(comment, $event)">삭제하기</button>
    <hr />
  </div>
</template>

<script>
export default {
  name: "MovieCommentItem",
  props: {
    comment: Object,
  },
  methods: {
    deleteMovieComment(movieComment, event) {
      event.preventDefault();
      const payload = {
        movieCommentId: movieComment.id,
        userId: movieComment.user,
      };
      // this.$store.dispatch("deleteComment", payload);
      // this.$router.push({ name: "MovieDetailView", params: { id: movieId } });
      this.$emit("deleteMovieComment", payload);
    },
  },
};
</script>

<style>
</style>