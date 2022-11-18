<template>
  <div>
    <h1>Movie page</h1>
    <hr />
    <MovieList />
    <h2>AdventureMovie</h2>
    <AdventureMovieList />
  </div>
</template>
<script>
import MovieList from "@/components/MovieList";
import AdventureMovieList from "@/components/AdventureMovieList";

export default {
  name: "MovieView",
  components: {
    MovieList,
    AdventureMovieList,
  },
  computed: {
    // isLogin() {
    //   return this.$store.getters.isLogin;
    // },
  },
  created() {
    this.getMovies();
    this.getAdventureMovies();
  },
  methods: {
    getMovies() {
      this.$store.dispatch("getMovies");
      // if (this.isLogin === true) {
      //   this.$store.dispatch("getMovies");
      // } else {
      //   alert("로그인이 필요한 서비스 입니다.");
      //   this.$router.push({ name: "LogInView" });
      // }
    },
    getAdventureMovies() {
      this.$store.dispatch("getAdventureMovies");
    },
  },
};
</script>

<style>
</style>
