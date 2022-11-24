<!-- Movie View -->
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
import MovieList from "@/components/Movies/MovieList";
import AdventureMovieList from "@/components/Movies/AdventureMovieList";
import HorrorMovieList from "@/components/Movies/HorrorMovieList";
import DocumentaryMovieList from "@/components/Movies/DocumentaryMovieList";
import AnimationMovieList from "@/components/Movies/AnimationMovieList";
import RomanceMovieList from "@/components/Movies/RomanceMovieList";
import FundingRecommendList from "@/components/Fundings/FundingRecommendList";

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
