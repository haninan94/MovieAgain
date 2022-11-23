<template>
  <div id="funding-detail">
    <div class="container">
      <div>
        <img class="funding-img" :src="funding?.poster_path" alt="" />
      </div>
      <div>
        <div>
          <p>영화 제목 : {{ funding.movie_title }}</p>
          <p>{{ funding.content }}</p>
          <br />
        </div>
        <div>
          <template>
            <progress
              progress
              class="nes-progress is-primary"
              :value="funding.now_money"
              :max="funding.goal_money"
            ></progress>
          </template>
          <h1>{{ funding.now_money }}원 / {{ funding.goal_money }}원</h1>
          <h1>{{ (funding.now_money / funding.goal_money) * 100 }}% 달성!!</h1>
          {{ remainDate }}일 남았다!!
        </div>
      </div>
    </div>
    <router-link :to="{ name: 'FundingView' }">뒤로가기</router-link>
    <FundingDonateForm />
    <FundingCommentForm :fundingId="this.funding.id" ref="FundingCommentForm" />
  </div>
  <!-- <template v-if="check">
          <progress class="nes-progress is-error" :value="fundingRate" max="1"></progress>
        </template>
        <template v-else>
          <progress class="nes-progress" :value="fundingRate" max="1"></progress>
        </template> -->
</template>

<script>
import axios from 'axios'
import FundingCommentForm from "@/components/FundingCommentForm";
import FundingDonateForm from "@/components/FundingDonateForm";
import dayjs from "dayjs";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export default {
  name: "FundingDetailView",
  components: {
    FundingCommentForm,
    FundingDonateForm,
  },
  data() {
    return {
      fundingMoney: 0,
      remainDate: "",
    };
  },
  computed: {
    funding() {
      return this.$store.getters.getFundingDetail;
    },
  },
  methods: {
    getFundingDetail() {
      const fundingId = this.$route.params.id;
      this.$store.dispatch("getFundingDetail", fundingId);
    },
    getDday() {
      axios({
        method: "get",
        url: `${API_URL}/api/v2/fundings/${this.$route.params.id}`,
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
    // getFundingMoney(payload) {
    //   console.log("Yes")
    //   this.fundingMoney += payload
    // }
  },
  created() {
    this.getFundingDetail();
    this.getDday();
  },
  updated() {
    this.$refs.FundingCommentForm.getFundingComments();
    this.$refs.FundingCommentForm.$on("reset", this.reset);
  },
};
</script>

<style>
#funding-detail {
  width: 100vw;
  height: 300vh;
}

.container {
  display: flex;
  justify-content: space-evenly;
}

.funding-img {
  width: 300px;
}
</style>