<template>
  <div>
    <div class="movieview bg-dark">
      <MovieList />
    </div>
    <div>
      <FundingRecommendList />
    </div>
    <div>
      <AdventureMovieList />
    </div>
    <div>
      <HorrorMovieList />
    </div>
    <div>
      <DocumentaryMovieList />
    </div>
    <div>
      <AnimationMovieList />
    </div>
    <div>
      <RomanceMovieList />
    </div>
  </div>
</template>


<script>
import MovieList from "@/components/MovieList";
import AdventureMovieList from "@/components/AdventureMovieList";
import HorrorMovieList from "@/components/HorrorMovieList";
import DocumentaryMovieList from "@/components/DocumentaryMovieList";
import AnimationMovieList from "@/components/AnimationMovieList";
import RomanceMovieList from "@/components/RomanceMovieList";
import FundingRecommendList from "@/components/FundingRecommendList";

export default {
  name: "MovieView",
  components: {
    MovieList,
    FundingRecommendList,
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
    this.getRecommendFundings();
    this.getAdventureMovies();
    this.getHorrorMovies();
    this.getAnimationMovies();
    this.getDocumentaryMovies();
    this.getRomanceMovies();
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
    getRecommendFundings() {
      this.$store.dispatch("getRecommendFundings");
    },
    getAdventureMovies() {
      this.$store.dispatch("getAdventureMovies");
    },
    getHorrorMovies() {
      this.$store.dispatch("getHorrorMovies");
    },
    getAnimationMovies() {
      this.$store.dispatch("getAnimationMovies");
    },
    getDocumentaryMovies() {
      this.$store.dispatch("getDocumentaryMovies");
    },
    getRomanceMovies() {
      this.$store.dispatch("getRomanceMovies");
    },
  },
};
</script>

<style>
.movieview {
  display: flex;
  justify-content: center;
}

h2 {
  background-color: black;
  margin-bottom: 0%;
}
</style>
