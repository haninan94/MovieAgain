<template>
  <b-col>
    <router-link :to="{ name: 'MovieDetailView', params: { id: movie.id } }">
      <b-img class="adventureimage" thumbnail fluid :src="imgUrl"></b-img>
    </router-link>
  </b-col>
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
.adventureimage {
  -webkit-filter: grayscale(0) blur(0);
	filter: grayscale(0) blur(0);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}

.adventureimage:hover {
  -webkit-filter: grayscale(100%) blur(1px);
	filter: grayscale(100%) blur(1px)
}
</style>
