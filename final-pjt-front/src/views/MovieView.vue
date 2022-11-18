<template>
  <div class="movieview">
    <MovieList />
    <h2>AdventureMovie</h2>
    <AdventureMovieList />
    <h2>HorrorMovie</h2>
    <HorrorMovieList />
    <h2>Documentary</h2>
    <DocumentaryMovieList />
    <h2>Animation</h2>
    <AnimationMovieList />
    <h2>Romance</h2>
    <RomanceMovieList />
  </div>
</template>


<script>
import MovieList from "@/components/MovieList";
import AdventureMovieList from "@/components/AdventureMovieList";
import HorrorMovieList from "@/components/HorrorMovieList";
import DocumentaryMovieList from "@/components/DocumentaryMovieList";
import AnimationMovieList from "@/components/AnimationMovieList";
import RomanceMovieList from "@/components/RomanceMovieList";

export default {
  name: "MovieView",
  components: {
    MovieList,
    AdventureMovieList,
    HorrorMovieList,
    DocumentaryMovieList,
    AnimationMovieList,
    RomanceMovieList,
  },
  computed: {
    // isLogin() {
    //   return this.$store.getters.isLogin;
    // },
  },
  created() {
    this.getMovies();
    this.getAdventureMovies();
    this.getHorrorMovies();
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
    getHorrorMovies() {
      this.$store.dispatch("getHorrorMovies");
    },
  },
};
</script>

<style>
.movieview {
  display: flex;
  justify-content: center;
}
</style>
