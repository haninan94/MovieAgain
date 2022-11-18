<template>
  <div>
    <h5>{{ movie.id }}</h5>
    <p>{{ movie.title }}</p>
    <img :src="imgUrl" alt="" />
    <br />
    <router-link :to="{ name: 'DetailView', params: { id: movie.id } }">
      [DETAIL]
    </router-link>
    <hr />
  </div>
</template>

<script>
export default {
  name: "AdventureMovieListItem",
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
