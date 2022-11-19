<template>
  <div>
    {{ funding.movie_title }} <br>
    {{ funding.content }}<br>
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
  created() {
    this.getFundingDetail()
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
    }
  }
}
</script>

<style>

</style>