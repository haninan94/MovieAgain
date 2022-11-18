<template>
  <div class="movie-list">
    <h3>Movie List</h3>
    <RomanceMovieListItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script>
import RomanceMovieListItem from "@/components/RomanceMovieListItem";

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
</style>
