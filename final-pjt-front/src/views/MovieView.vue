<template>
  <div>
    <!-- <h1>Movie page</h1>
    <hr /> -->
    <MovieList />
  </div>
</template>
<script>
import MovieList from "@/components/MovieList";

export default {
  name: "MovieView",
  components: {
    MovieList,
  },
  computed: {
    // isLogin() {
    //   return this.$store.getters.isLogin;
    // },
  },
  created() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      this.$store.dispatch("getMovies")
      // if (this.isLogin === true) {
      //   this.$store.dispatch("getMovies");
      // } else {
      //   alert("로그인이 필요한 서비스 입니다.");
      //   this.$router.push({ name: "LogInView" });
      // }
    },
  },
};
</script>

<style>
</style>
