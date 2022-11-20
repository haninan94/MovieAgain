<template>
  <b-col>
    <router-link :to="{ name: 'MovieDetailView', params: { id: movie.id } }">
      <b-img thumbnail fluid :src="imgUrl"></b-img>
    </router-link>
  </b-col>
</template>

<script>
export default {
  name: "RomanceMovieListItem",
  props: {
    movie: Object,
  },
  computed: {
    imgUrl() {
      return "https://image.tmdb.org/t/p/w200" + this.movie.poster_path;
    },
  },
};
</script>

<style>
</style>
