<template>
  <div class="movie-list">
    <h3>Movie List</h3>
    <DocumentaryMovieListItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script>
import DocumentaryMovieListItem from "@/components/DocumentaryMovieListItem";

export default {
  name: "DocumentaryMovieList",
  components: {
    DocumentaryMovieListItem,
  },
  computed: {
    movies() {
      return this.$store.state.Documentary_movies;
    },
  },
};
</script>

<style>
.movie-list {
  text-align: start;
}
</style>
