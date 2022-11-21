<template>
  <!-- <div class="movie-list">
    <h3>Movie List</h3>
    <DocumentaryMovieListItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
  </div> -->
  <b-container fluid class="p-4 bg-dark border-top border-danger">
    <b-row>
      <h1>Documentary</h1>
      <DocumentaryMovieListItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
    </b-row>
  </b-container>
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
      return this.$store.state.documentary_movies;
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
