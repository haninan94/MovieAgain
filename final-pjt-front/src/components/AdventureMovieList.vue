<template>
  <div class="movie-list">
    <h3>Movie List</h3>
    <AdventureMovieListItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script>
import AdventureMovieListItem from "@/components/AdventureMovieListItem";

export default {
  name: "AdventureMovieList",
  components: {
    AdventureMovieListItem,
  },
  computed: {
    movies() {
      return this.$store.state.adventure_movies;
    },
  },
};
</script>

<style>
.movie-list {
  text-align: start;
}
</style>
