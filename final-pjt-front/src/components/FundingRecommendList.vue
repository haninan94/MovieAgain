<template>
  <!-- <div class="movie-list">
    <h3>Movie List</h3>
    <DocumentaryMovieListItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
  </div> -->
  <b-container fluid class="p-4 bg-dark border-top border-danger">
    <b-row>
      <h1 class="nes-text is-warning">현재 진행중인 펀딩</h1>
      <FundingRecommendListItem
        v-for="funding in fundings"
        :key="funding.id"
        :funding="funding"
      />
    </b-row>
  </b-container>
</template>

<script>
import FundingRecommendListItem from "@/components/FundingRecommendListItem";

export default {
  name: "FundingRecommendList",
  components: {
    FundingRecommendListItem,
  },
  computed: {
    fundings() {
      return this.$store.state.recommend_fundings;
    },
  },
};
</script>

<style>
.movie-list {
  text-align: start;
}

h1 {
  color: whitesmoke;
}
</style>
