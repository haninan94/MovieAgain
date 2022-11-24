<!-- Romance Movie List -->
<template>
  <b-container fluid class="p-4 bg-dark border-top border-danger">
    <b-row>
      <h1 class="nes-text is-warning">크리스마스 솔로들을 위한 연애 시뮬레이션 체험</h1>
      <RomanceMovieListItem
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      />
    </b-row>
  </b-container>
</template>

<script>
import RomanceMovieListItem from "@/components/Movies/RomanceMovieListItem";

export default {
  name: "RomanceMovieList",
  components: {
    RomanceMovieListItem,
  },
  computed: {
    movies() {
      return this.$store.state.romance_movies;
    },
  },
};
</script>

<style>
.movie-list {
  text-align: start;
}

h1 {
  color: whitesmoke;
}
</style>
