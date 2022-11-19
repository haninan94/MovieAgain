<template>
  <div>
    <img :src="`https://image.tmdb.org/t/p/w200${funding.poster_path}`" alt="">
    <p>영화 제목 : {{ funding.movie_title }}</p> <br>
    <!-- <template v-if="check">
      <progress class="nes-progress is-error" :value="fundingRate" max="1"></progress>
    </template>
    <template v-else>
      <progress class="nes-progress" :value="fundingRate" max="1"></progress>
    </template> -->
    <template>
      <progress class="nes-progress" :value="funding.now_money" :max="funding.goal_money"></progress>
    </template>
  </div>
</template>

<script>
import axios from 'axios'

const API_URL = "http://127.0.0.1:8000"

export default {
  name: "FundingDetailView",
  data() {
    return {
      funding: [],
    }
  },
  methods: {
    getFundingDetail() {
      axios({
        method: "get",
        url: `${API_URL}/api/v1/fundings/${this.$route.params.id}`
      })
        .then((res) => {
          this.funding = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  created() {
    this.getFundingDetail()
  },
}
</script>

<style>

</style>