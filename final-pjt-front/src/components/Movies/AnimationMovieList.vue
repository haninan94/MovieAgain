<!-- Animation Movie List -->
<template>
  <b-container fluid class="p-4 bg-dark border-top border-danger">
    <b-row>
      <h1 class="nes-text is-warning">10덕도 사람입니다. 존중해주세요. 그게 뭔데 10덕아</h1>
      <AnimationMovieListItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
    </b-row>
  </b-container>
</template>

<script>
import AnimationMovieListItem from "@/components/Movies/AnimationMovieListItem";

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
