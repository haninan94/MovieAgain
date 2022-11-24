<!-- Movie List -->
<template>
  <div class="movielist">
    <carousel-3d
      :controls-visible="true"
      :clickable="true"
      width="300"
      height="450"
    >
      <slide
        class="slide"
        v-for="(movie, index) in movies"
        :key="movie.id"
        :index="index"
      >
        <figure>
          <router-link
            :to="{ name: 'MovieDetailView', params: { id: movie.id } }"
          >
            <img
              class=""
              :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`"
              alt=""
            />
          </router-link>
        </figure>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>

export default {
  name: "MovieList",
  components: {
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
</style>
