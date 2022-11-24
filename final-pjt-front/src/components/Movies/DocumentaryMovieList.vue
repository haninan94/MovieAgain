<!-- Documentary Movie List -->
<template>
  <b-container fluid class="p-4 bg-dark border-top border-danger">
    <b-row>
      <h1 class="nes-text is-warning">수면이 부족한 당신을 위해... zZ</h1>
      <DocumentaryMovieListItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
    </b-row>
  </b-container>
</template>

<script>
import DocumentaryMovieListItem from "@/components/Movies/DocumentaryMovieListItem";

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
