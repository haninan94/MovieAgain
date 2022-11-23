<template>
  <b-col class="container">
    <div class="funding-item">
      <router-link :to="{ name: 'FundingDetailView', params: { id: funding.id } }">
        <b-card class="funding-card" :title="funding.movie_title" :img-src="funding.poster_path">
          <b-progress :value="funding.now_money / funding.goal_money * 100" variant="info" striped :animated="animate"></b-progress>
          <p>{{ ((funding.now_money / funding.goal_money) * 100).toFixed(1) }}%</p>
          <p>{{ remainDate }} 일 남음 {{ funding.now_money }}원</p>
        </b-card>
      </router-link>
    </div>
  </b-col>
</template>

<script>
import axios from 'axios'
import dayjs from 'dayjs'

const API_URL = "http://127.0.0.1:8000";

export default {
  name:'FundingListItem',
  data() {
    return {
      animate: true,
      remainDate: "",
    }
  },
  computed: {
  },
  props: {
    funding: Object,
  },
  methods: {
    getDday() {
      axios({
        method: "get",
        url: `${API_URL}/api/v2/fundings/${this.funding.id}`,
      }).then((res) => {
        const expiredDate = res.data.expired_date
          .split("-")
          .map((str) => Number(str));
        const todayDate = dayjs()
          .format("YYYY-MM-DD")
          .split("-")
          .map((str) => Number(str));
        const remainDate = new Date(expiredDate) - new Date(todayDate);
        this.remainDate = remainDate / 1000 / 60 / 60 / 24;
      });
    },
  },
  created() {
    this.getDday()
  }
}
</script>

<style>
.funding-card {
  width: 300px;
  font-size: 16px;
  text-align: center;
}

.container {
  display: 200px;
  margin-bottom: 1rem;
}

router-link {
  text-decoration: none;
}
</style>