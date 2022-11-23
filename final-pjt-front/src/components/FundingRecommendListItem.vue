<template>
  <b-col>
    <router-link
      :to="{ name: 'FundingDetailView', params: { id: funding.id } }"
    >
      <b-img style="height:300px;" class="test img" thumbnail fluid :src="imgUrl"></b-img>
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
img {
  transition: transform 0.25s;
}

.img {
  width: 200px;
  height: 300px;
}

.test:hover{
  transform: scale(1.2);
}
</style>
