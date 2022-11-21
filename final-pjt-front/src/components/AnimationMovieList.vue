<template>
  <b-container fluid class="p-4 bg-dark border-top border-danger">
    <b-row>
      <h1>Animation</h1>
      <AnimationMovieListItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
    </b-row>
  </b-container>
  <!-- <b-container fluid class="p-4 bg-dark">
    <b-row>
    </b-row>
  </b-container> -->
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

h1 {
  color: whitesmoke;
}
</style>
