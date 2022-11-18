<template>
  <div class="movie-list">
    <h3>Movie List</h3>
    <HorrorMovieListItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script>
import HorrorMovieListItem from "@/components/HorrorMovieListItem";

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
</style>
