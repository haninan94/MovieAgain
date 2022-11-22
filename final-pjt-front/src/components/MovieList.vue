<template>
  <div class="movielist">
    <carousel-3d :controls-visible="true" :clickable="true" width="300" height="450">
      <slide class="slide" v-for="(movie, index) in movies" :key="movie.id" :index="index">
        <figure>
          <router-link :to="{ name: 'MovieDetailView', params: { id: movie.id } }">
            <img class="mainimage" :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`" alt="">
          </router-link>
        </figure>

      </slide>
    </carousel-3d>
  </div>
</template>

<script>
// import MovieListItem from "@/components/MovieListItem";

export default {
  name: "MovieList",
  components: {
    // MovieListItem,
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },

};
</script>

<style>
.movielist {
  width: 150%;
}

.carousel {
  width: 2rem;
  height: 2rem;
}

figure {
  margin: 0;
}

.mainimage {
  -webkit-filter: grayscale(0) blur(0);
	filter: grayscale(0) blur(0);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}

.mainimage:hover {
  -webkit-filter: grayscale(100%) blur(1px);
	filter: grayscale(100%) blur(1px)
}


</style>
