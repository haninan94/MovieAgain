<!-- Funding List Item -->
<template>
  <b-col class="container">
    <div class="funding-item">
      <router-link
      class="box"
        style="text-decoration: none; color: black"
        :to="{ name: 'FundingDetailView', params: { id: funding.id } }"
      >
        <!-- 1. 기간이 남았을 때 -->
        <b-card
          v-if="remainDate > 0"
          style="width: 300px; height: 100%;"
          class="funding-card"
          :title="funding.movie_title"
          :img-src="funding.poster_path"
        >
          <b-progress
            :value="(funding.now_money / funding.goal_money) * 100"
            variant="info"
            striped
            :animated="animate"
          ></b-progress>
          <p>
            {{ Math.ceil((funding.now_money / funding.goal_money) * 100) }}%
          </p>
          <div class="detail">
            <p>{{ remainDate }} 일 남음</p>
            <p style="font-size: 24px">{{ funding.now_money }}원</p>
          </div>
        </b-card>
        <!-- 2. 기간이 지났고, 펀딩에 필요한 돈이 충족되지 않았을 때 -->
        <b-card
          id="item3"
          v-else-if="remainDate <= 0 && funding.now_money < funding.goal_money"
          style="width: 300px; height: 100%; filter: grayscale(100%);"
          class="funding-card fail"
          :title="funding.movie_title"
          :img-src="funding.poster_path"
        >
          <b-progress
            :value="(funding.now_money / funding.goal_money) * 100"
            variant="info"
            striped
            :animated="animate"
          ></b-progress>
          <p>
            {{ Math.ceil((funding.now_money / funding.goal_money) * 100) }}%
          </p>
          <div class="detail">
            <p>기간 만료</p>
            <p style="font-size: 24px">{{ funding.now_money }}원</p>
          </div>
        </b-card>
        <!-- 3. 기간이 지났고, 펀딩에 필요한 돈이 충족되었을 때 -->
        <b-card v-else-if="remainDate <= 0 && funding.now_money >= funding.goal_money"
          style="width: 300px; height: 100%;"
          class="funding-card success"
          :title="funding.movie_title"
          :img-src="funding.poster_path"
        >
          <b-progress
            :value="(funding.now_money / funding.goal_money) * 100"
            variant="info"
            striped
            :animated="animate"
          ></b-progress>
          <p>
            {{ Math.ceil((funding.now_money / funding.goal_money) * 100) }}%
          </p>
          <div class="detail">
            <p>펀딩 완료</p>
            <p style="font-size: 24px">{{ funding.now_money }}원</p>
          </div>
        </b-card>
      </router-link>
    </div>
  </b-col>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";

const API_URL = "http://127.0.0.1:8000";

export default {
  name: "FundingListItem",
  data() {
    return {
      animate: true,
      remainDate: null,
    };
  },
  computed: {},
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
        this.remainDate = remainDate / 1000 / 60 / 60 / 24
      });
    },
  },
  created() {
    this.getDday();
  },
};
</script>

<style>
.funding-card {
  width: 300px;
  font-size: 16px;
  text-align: center;
  position: absolute;
}

.container {
  display: 200px;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 24px;
}

.detail {
  display:flex; 
  justify-content:space-between;
}

.box {
  position: relative;
}


/* .card-img {
  background: url(../../assets/completed.png);
} */
</style>