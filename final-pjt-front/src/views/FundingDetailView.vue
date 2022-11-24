<!-- Funding Detail View -->
<template>
  <div id="funding-detail">
    <div id="container">
      <div id="test" class="nes-container is-rounded is-dark">
        <!-- Funding Image -->
        <div>
          <img class="funding-img" :src="funding?.poster_path" alt="" />
        </div>
        <div>
          <div>
            <!-- Funding D-Day -->
            <div id="d-day">
              <span id="d-day-span">D-{{ remainDate }}</span>  
            </div>
            <!-- Funding Movie title -->
            <p>영화 제목 : {{ funding.movie_title }}</p>
            <!-- Funding Movie Content -->
            <p>{{ funding.content }}</p>
            <br />
          </div>
          <div>
            <!-- Funding Progress -->
            <template>
              <div>
                <p>{{ Math.ceil((funding.now_money / funding.goal_money) * 100) }}%</p>
                <b-progress
                  :value="(funding.now_money / funding.goal_money) * 100"
                  variant="info"
                  striped
                  :animated="animate"
                  class="mt-2"
                ></b-progress>
              </div>
            </template>
            <!-- Funding Goal Money, Now Money -->
            <div id="money">
              <div>
                <span>{{ funding.goal_money }}원 목표</span>
              </div>
              <div>
                <span style="font-size:30px">{{ funding.now_money }}원</span>
              </div>
            </div>
            <!-- Funding Donate -->
            <FundingDonateForm 
              :fundingMinimumMoney="this.funding.minimum_money"
              :fundingId="funding.id"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Funding Comment -->
    <FundingCommentForm :fundingId="this.funding.id" ref="FundingCommentForm" />
    <router-link :to="{ name: 'FundingView' }">
      <button class="nes-btn is-error">뒤로 가기</button>
    </router-link>
  </div>
</template>
<script>
import axios from "axios";
import FundingCommentForm from "@/components/Fundings/FundingCommentForm";
import FundingDonateForm from "@/components/Fundings/FundingDonateForm";
import dayjs from "dayjs";

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
      animate: true,
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
        this.remainDate = remainDate / 1000 / 60 / 60 / 24
      });
    },
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
}

.nes-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.funding-img {
  width: 300px;

}

#d-day {
  text-align: start;
}

#d-day-span {
  background-color: rgb(235, 68, 68);
  border-radius: 40%;
  padding: 10px;
}

#money {
  display: flex;
  justify-content: space-between;
}

#container {
  display: flex;
  justify-content: center;
}

#test {
  width: 60%;
}
</style>