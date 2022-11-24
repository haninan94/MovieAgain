<!-- Horror Movie List -->
<template>
  <b-container fluid class="p-4 bg-dark border-top border-danger">
    <b-row>
      <h1 class="nes-text is-warning">Horror</h1>
      <HorrorMovieListItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      />
    </b-row>
  </b-container>
</template>

<script>
import HorrorMovieListItem from "@/components/Movies/HorrorMovieListItem";

export default {
  name: "HorrorMovieList",
  components: {
    HorrorMovieListItem,
  },
  computed: {
    movies() {
      return this.$store.state.horror_movies;
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
