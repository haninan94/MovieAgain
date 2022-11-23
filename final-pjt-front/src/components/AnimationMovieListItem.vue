<template>
  <b-col>
    <router-link :to="{ name: 'MovieDetailView', params: { id: movie.id } }">
      <b-img style="height:300px;" class="test" thumbnail fluid :src="imgUrl"></b-img>
    </router-link>
  </b-col>
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
</template>

<script>
export default {
  name: "AnimationMovieListItem",
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
/* .animationimage {
  -webkit-filter: grayscale(0) blur(0);
	filter: grayscale(0) blur(0);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}

.animationimage:hover {
  -webkit-filter: grayscale(100%) blur(1px);
	filter: grayscale(100%) blur(1px);
  transform: scale(1.5);
} */
img {
  transition: transform 0.25s;
}

.test:hover{
  transform: scale(1.2);
}
</style>
