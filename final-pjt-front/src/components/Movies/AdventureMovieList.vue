<!-- Adventure Movie List -->
<template>
  <b-container fluid class="p-4 bg-dark border-top border-danger">
    <b-row>
      <h1 class="nes-text is-warning">Adventure</h1>
      <AdventureMovieListItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
    </b-row>
  </b-container>
</template>

<script>
import AdventureMovieListItem from "@/components/Movies/AdventureMovieListItem";

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
</style>
