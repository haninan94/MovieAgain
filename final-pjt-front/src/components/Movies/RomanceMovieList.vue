<!-- Romance Movie List -->
<template>
  <b-container fluid class="p-4 bg-dark border-top border-danger">
    <b-row>
<<<<<<< HEAD
      <h1 class="nes-text is-warning">Romance</h1>
=======
      <h1 class="nes-text is-warning">크리스마스 솔로들을 위한 연애 시뮬레이션 체험</h1>
>>>>>>> a5a4c7059dafaf78f248d49064c72e0c3df872e0
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
