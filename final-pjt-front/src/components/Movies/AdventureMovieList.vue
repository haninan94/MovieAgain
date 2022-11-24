<!-- Adventure Movie List -->
<template>
  <b-container fluid class="p-4 bg-dark border-top border-danger">
    <b-row>
      <h1 class="nes-text is-warning">현실을 도피하고 싶은 당신, 모험을 떠나보세요!</h1>
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
