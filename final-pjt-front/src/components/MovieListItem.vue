<template slot-scope="{ index, isCurrent, leftIndex, rightIndex}">
  <slide :index="index">
    <figure>
      <img :data-index="index" :class="{ current: Iscurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="imgUrl">
    </figure>
  </slide>
</template>

<script>
import Slide from 'vue-carousel-3d'

export default {
  name: "MovieListItem",
  props: {
    movie: Object,
    index: Number,
  },
  components: {
    Slide
  },
  computed: {
    imgUrl() {
      return "https://image.tmdb.org/t/p/w200" + this.movie.poster_path;
    },
  },
};
</script>

<style>
figure {
  margin: 0;
}

figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
</style>

</style>