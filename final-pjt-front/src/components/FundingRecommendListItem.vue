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
    <router-link
      :to="{ name: 'FundingDetailView', params: { id: funding.id } }"
    >
      <b-img class="funding-recommend-img" thumbnail fluid :src="imgUrl"></b-img>
    </router-link>
  </b-col>
</template>

<script>
export default {
  name: "FundingRecommendListItem",
  props: {
    funding: Object,
  },
  computed: {
    imgUrl() {
      return this.funding.poster_path;
    },
  },
};
</script>

<style>
.funding-recommend-img {
  -webkit-filter: grayscale(0) blur(0);
  filter: grayscale(0) blur(0);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  width: 200px;
  height: 300px;
}

.funding-recommend-img:hover {
  -webkit-filter: grayscale(100%) blur(1px);
  filter: grayscale(100%) blur(1px);
}
</style>
