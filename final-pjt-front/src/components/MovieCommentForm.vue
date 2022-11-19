<template>
  <div>
    <form @submit="createComment">
      <input type="text" v-model="comment" />
      <button>등록하기</button>
    </form>
    <p>무비 아이디 :{{ movieId }}</p>
    <MovieCommentItem />
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
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    createComment(event) {
      event.preventDefault();
      const newComment = {
        // userid 를 가져와야함
        // username 가져오는중 근데 undefined 임
        user: this.$store.state.token,
        content: this.comment,
        movie: this.movieId,
      };
      console.log(newComment);
      console.log(`${this.$store.state.token} `);
      // this.$store.dispatch("createComment", newComment);
      this.comment = "";
    },
  },
};
</script>

<style>
</style>