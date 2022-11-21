<template>
  <!-- <div>
    <h5>{{ movie.id }}</h5>
    <p>{{ movie.title }}</p>
    <img :src="imgUrl" alt="" />
    <br />
    <router-link :to="{ name: 'MovieDetailView', params: { id: movie.id } }">
      [DETAIL]
    </router-link>
    <hr />
  </div> -->
  <b-col>
    <router-link :to="{ name: 'MovieDetailView', params: { id: movie.id } }">
      <b-img class="image" thumbnail fluid :src="imgUrl"></b-img>
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
.image{
  -webkit-filter: grayscale(100%);
	filter: grayscale(100%);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}

.image:hover {
  -webkit-filter: grayscale(0);
	filter: grayscale(0);
}
</style>
