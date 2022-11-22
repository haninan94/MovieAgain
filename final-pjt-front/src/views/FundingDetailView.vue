<template>
  <div id="fundingdetail">
    <div class="container">
      <div>
        <img
          :src="funding?.poster_path"
          alt=""
        />
      </div>
      <div>
        <div>
          <p>영화 제목 : {{ funding.movie_title }}</p>
          <br />
        </div>
        <div>
          <template>
            <progress
              progress
              class="nes-progress is-warning"
              :value="funding.now_money"
              :max="funding.goal_money"
            ></progress>
          </template>
        </div>
      </div>
    </div>
    <router-link :to="{ name: 'FundingView' }">뒤로가기</router-link>
    <FundingDonateForm/>
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
import axios from "axios";
import FundingCommentForm from "@/components/FundingCommentForm";
import FundingDonateForm from '@/components/FundingDonateForm'

const API_URL = "http://127.0.0.1:8000";

export default {
  name: "FundingDetailView",
  components: {
    FundingCommentForm,
    FundingDonateForm,
  },
  data() {
    return {
      funding: [],
      fundingMoney: 0,
    };
  },
  methods: {
    getFundingDetail() {
      axios({
        method: "get",
        url: `${API_URL}/api/v2/fundings/${this.$route.params.id}`,
      })
        .then((res) => {
          this.funding = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // getFundingMoney(payload) {
    //   console.log("Yes")
    //   this.fundingMoney += payload
    // }
  },
  created() {
    this.getFundingDetail();
  },
  updated() {
    this.$refs.FundingCommentForm.getFundingComments();
    this.$refs.FundingCommentForm.$on("reset", this.reset);
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-evenly;
}
</style>