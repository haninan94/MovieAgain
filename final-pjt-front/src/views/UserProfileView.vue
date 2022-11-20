<template>
  <div>
    {{ user }}
  </div>
</template>

<script>
import axios from 'axios'

const API_URL = "http://127.0.0.1:8000"

export default {
  name : "UserProfileView",
  data() {
    return {
      user: []
    }
  },
  methods: {
    getUserProfile() {
      axios({
        method: "get",
        url: `${API_URL}/accounts/profile/${this.$route.params.id}`,
      })
        .then((res) => {
          console.log(res)
          this.user = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created() {
    this.getUserProfile()
  }
}
</script>

<style>

</style>