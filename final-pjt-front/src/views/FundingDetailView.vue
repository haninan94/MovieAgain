<template>
  <div id="fundingdetail">
    <div class="container">
      <div>
        <img :src="funding?.poster_path" alt="" />
      </div>
      <div>
        <div>
          <p>영화 제목 : {{ funding.movie_title }}</p>
          <p>목표 금액 : {{ funding.goal_money }}</p>
          <p>현재 금액 : {{ funding.now_money }}</p>
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
import FundingCommentForm from "@/components/FundingCommentForm";
import FundingDonateForm from "@/components/FundingDonateForm";

export default {
  name: "FundingDetailView",
  components: {
    FundingCommentForm,
    FundingDonateForm,
  },
  data() {
    return {
      fundingMoney: 0,
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