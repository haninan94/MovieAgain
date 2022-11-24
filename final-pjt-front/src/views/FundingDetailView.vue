<template>
  <div id="funding-detail">
    <div id="container">
      <div id="test" class="nes-container is-rounded is-dark">
        <div v-if="isCompleted===false">
          <img class="funding-img status-gray" :src="funding?.poster_path" alt="" />
        </div>
        <div v-else-if="isCompleted==='complete'" class="parent">
          <img class="funding-img child" :src="funding?.poster_path" alt=""/>
          <img src="../assets/completed.png" alt="" style="width: 300px" class="child completed">
        </div>
        <div v-else-if="isCompleted==='ing'">
          <img class="funding-img" :src="funding?.poster_path" alt="" />
        </div>
        <div>
          <div>
            <div v-if="isCompleted==='ing'" id="d-day">
              <span id="d-day-span">D-{{ remainDate }}</span>  
            </div>
            <div v-else-if="isCompleted" id="d-day">
              <!-- <span id="d-day-span">D-{{ remainDate }}</span>   -->
            </div>
            <p>영화 제목 : {{ funding.movie_title }}</p>
            <p>{{ funding.content }}</p>
            <br />
          </div>
          <div>
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
              <p>{{ isCompleted }}</p>
            </template>

            <div id="money">
              <div>
                <span>{{ funding.goal_money }}원 목표</span>
              </div>
              <div>
                <span>{{ funding.now_money }}원</span>
              </div>
            </div>
            <FundingDonateForm 
              v-if="isCompleted"
              :fundingMinimumMoney="this.funding.minimum_money"
              :fundingId="funding.id"
              :remainDate="remainDate"
            />
          </div>
        </div>
      </div>
    </div>
    <router-link :to="{ name: 'FundingView' }">
      <button class="nes-btn is-error">뒤로 가기</button>
    </router-link>
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
    isCompleted() {
      if (this.remainDate <= 0) {
        if (this.$store.state.remainMoney <= 0) {
          return 'complete'
          // '성공했는데 날짜지남'
          // 펀딩 완료 (중지)
        } else {
          return false
          // 날짜 지나고 돈이 남아있음
          // 펀딩 중지
        }
      } else {
        if (this.$store.state.remainMoney > 0) {
          return 'ing'
          // 날짜 남았는데 돈이 남음
          // 펀딩 계속
        } else {
          return 'ing'
          // '날짜 남았는데 성공함'
          // 펀딩 계속
        }
      }


      // return this.$store.getters.getIsCompleted;
    }
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
        this.$store.state.remainDate = this.remainDate

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
  width: 75%;
}

.status-gray{
  filter: grayscale(100%);
}

.parent{
  position: relative;
}

.child{
  /* position: absolute;
  top: -200px;
  left: -150px; */
}

.completed {
  position: absolute;
  left: 0px;
  top: 50px;
}


</style>