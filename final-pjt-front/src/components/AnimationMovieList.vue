<template>
  <div class="movie-list">
    <h3>Movie List</h3>
    <AnimationMovieListItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script>
import AnimationMovieListItem from "@/components/AnimationMovieListItem";

export default {
  name: "AnimationMovieList",
  components: {
    AnimationMovieListItem,
  },
  computed: {
    movies() {
      return this.$store.state.animation_movies;
    },
  },
};
</script>

<style>
.movie-list {
  text-align: start;
}
</style>
