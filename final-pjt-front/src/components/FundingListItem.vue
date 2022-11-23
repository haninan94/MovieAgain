<template>
  <b-col class="container">
    <div>
      <router-link :to="{ name: 'FundingDetailView', params: { id: funding.id } }">
        <b-card class="funding-card" :title="funding.movie_title" :img-src="funding.poster_path">
        </b-card>
      </router-link>
    </div>
  </b-col>
</template>

<script>


export default {
  name:'FundingListItem',
  props: {
    funding: Object,
  },
}
</script>

<style>
.funding-card {
  width: 250px;
  font-size: 16px;
  text-align: center;
}

.container {
  display: 200px;
  margin-bottom: 1rem;
}
</style>