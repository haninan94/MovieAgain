<template>
  <div class="movielist">
    <carousel-3d :controls-visible="true" :clickable="false" :width="300" :height="450">
      <slide class="slide" v-for="(movie, index) in movies" :key="movie.id" :index="index">
        <figure>
          <router-link :to="{ name: 'MovieDetailView', params: { id: movie.id } }">
            <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="">
          </router-link>
        </figure>

      </slide>
    </carousel-3d>
  </div>
  <!-- <div class="movie-list">
    <h3>Movie List</h3>
    <MovieListItem 
      v-for="(movie, index) in movies" 
      :key="movie.id"
      :index="index"
      :movie="movie"
    />
  </div> -->
  <!-- <carousel-3d :controls-visible="true" :clickable="false">
    <MovieListItem 
      v-for="(movie, index) in movies" 
      :key="movie.id"
      :index="index"
      :movie="movie"
    />    
  </carousel-3d> -->

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
    imgUrl() {
      return "https://image.tmdb.org/t/p/w200" + this.movie.poster_path;
    },
  },

};
</script>

<style>
.movielist {
  width: 100%;
}

figure {
  margin: 0;
}


</style>
