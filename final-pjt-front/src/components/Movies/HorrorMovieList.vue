<!-- Horror Movie List -->
<template>
  <b-container fluid class="p-4 bg-dark border-top border-danger">
    <b-row>
      <h1 class="nes-text is-warning">이걸 보면 내일은 눈 뜨고 머리를 감아야 할 것입니다...</h1>
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
