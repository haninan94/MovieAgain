<template>
  <b-col class="container">
    <div>
      <router-link :to="{ name: 'FundingDetailView', params: { id: funding.id } }">
        <b-card class="funding-card" :title="funding.movie_title" :img-src="funding.poster_path">
          <b-card-text>
            <span class="funding-card-percent">{{ funding.now_money / funding.goal_money * 100 }} %</span>
          </b-card-text>
        </b-card>
      </router-link>
    </div>

    <!-- <router-link :to="{ name: 'FundingDetailView', params: { id: funding.id } }" >
      <img class="funding-item-img" :src="funding.poster_path" alt="">
      <p>{{ funding.movie_title }}</p>
    </router-link> -->
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

.funding-card-percent {
  position: absolute;
  right: 20px;
  width: 30px;
  height: 30px;
  border: 1px solid #0f92e0;
  border-radius: 50%;
  font-size: 12px;
  text-align: center;
}

.container {
  display: 200px;
  margin-bottom: 1rem;
}
</style>