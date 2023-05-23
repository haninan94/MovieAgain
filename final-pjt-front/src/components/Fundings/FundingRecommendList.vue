<!-- Funding Recommend List  -->
<template>
  <b-container fluid class="p-4 bg-dark border-top border-danger">
    <b-row class="mx-5 justify-content-between">
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
import FundingRecommendListItem from "@/components/Fundings/FundingRecommendListItem";

export default {
  name: "FundingRecommendList",
  components: {
    FundingRecommendListItem,
  },
  created() {
    console.log(this.fundings);
  },
  computed: {
    fundings() {
      return this.$store.state.recommend_fundings;
    },
  },
};
</script>

<style>
/* .movie-list {
  text-align: start;
} */

h1 {
  color: whitesmoke;
}
</style>
