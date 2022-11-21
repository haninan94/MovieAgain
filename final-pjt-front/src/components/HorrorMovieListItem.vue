<template>
  <b-col>
    <router-link :to="{ name: 'MovieDetailView', params: { id: movie.id } }">
      <b-img class="horrorimage" thumbnail fluid :src="imgUrl"></b-img>
    </router-link>
  </b-col>
</template>

<script>
export default {
  name: "HorrorMovieListItem",
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
.horrorimage {
  -webkit-filter: grayscale(0) blur(0);
	filter: grayscale(0) blur(0);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}

.horrorimage:hover {
  -webkit-filter: grayscale(100%) blur(1px);
	filter: grayscale(100%) blur(1px)
}
</style>
