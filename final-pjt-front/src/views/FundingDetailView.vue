<template>
<<<<<<< HEAD
  <div id="fundingdetail">
    <div class="container"> 
      <div>
        <img :src="`https://image.tmdb.org/t/p/w200${funding?.poster_path}`" alt="">
      </div>
      <div>
        <div>
          <p>영화 제목 : {{ funding.movie_title }}</p> <br>
        </div>
        <div>
          <template>
            <progress progress class="nes-progress is-warning" :value="funding.now_money" :max="funding.goal_money"></progress>
          </template>
        </div>
      </div>
    </div>
    <router-link :to="{ name: 'FundingView' }">뒤로가기</router-link>
    <FundingCommentForm :fundingId = "this.funding.id"/>
  </div>        


  <!-- <template v-if="check">
          <progress class="nes-progress is-error" :value="fundingRate" max="1"></progress>
        </template>
        <template v-else>
          <progress class="nes-progress" :value="fundingRate" max="1"></progress>
        </template> -->
=======
  <div>
    <img
      :src="`https://image.tmdb.org/t/p/w200${funding?.poster_path}`"
      alt=""
    />
    <p>영화 제목 : {{ funding.movie_title }}</p>
    <br />
    <!-- <template v-if="check">
      <progress class="nes-progress is-error" :value="fundingRate" max="1"></progress>
    </template>
    <template v-else>
      <progress class="nes-progress" :value="fundingRate" max="1"></progress>
    </template> -->
    <!-- <template>
      <progress class="nes-progress" :value="fundingMoney" :max="funding.goal_money"></progress>
    </template>
    <FundingDonateForm
      @donate-funding="getFundingMoney"
    /> -->
    <router-link :to="{ name: 'FundingView' }">뒤로가기</router-link>
    <FundingCommentForm :fundingId="this.funding.id" />
  </div>
>>>>>>> f784375bf0624cf8bcaaa4db82fe2ce67a8ba895
</template>

<script>
import axios from "axios";
import FundingCommentForm from "@/components/FundingCommentForm";

const API_URL = "http://127.0.0.1:8000";

export default {
  name: "FundingDetailView",
  components: {
    FundingCommentForm,
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
<<<<<<< HEAD
        url: `${API_URL}/api/v2/fundings/${this.$route.params.id}`
      })
        .then((res) => {
          this.funding = res.data
=======
        url: `${API_URL}/api/v2/fundings/${this.$route.params.id}`,
      })
        .then((res) => {
          this.funding = res.data;
          // this.fundingMoney = res.data.now_money
>>>>>>> f784375bf0624cf8bcaaa4db82fe2ce67a8ba895
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
};
</script>

<style>
<<<<<<< HEAD
.container {
  display: flex;
  justify-content: space-evenly;
}
=======
>>>>>>> f784375bf0624cf8bcaaa4db82fe2ce67a8ba895
</style>