<!-- User Funding List Item -->
<template>
  <b-col>
    <router-link
      :to="{
        name: 'FundingDetailView',
        params: { id: userfunding.funding.id },
      }"
    >
      <div class="cardWrap">
        <div class="card cardLeft">
          <h1>{{ userfunding.funding.movie_title }}</h1>
          <div class="title">
            <span style="margin: 0.5px">Name</span>
          </div>
          <div class="name">
            <h2>{{ userName }}</h2>
            <span>Donation</span>
            <h2>{{ userfunding.donation }} ₩</h2>
          </div>
        </div>
        <div class="card cardRight">
          <div class="eye">RE:</div>
          <div class="number">
            <h3>{{ remainDate }}</h3>
            <span>DAY</span>
          </div>
          <div class="barcode"></div>
        </div>
      </div>
    </router-link>
  </b-col>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "UserFundingListItem",
  props: {
    userfunding: Object,
  },
  data() {
    return {
      remainDate: "",
    };
  },
  computed: {
    userName() {
      return this.$store.state.username;
    },
  },
  methods: {
    getDDay() {
      const expiredDate = this.userfunding.funding.expired_date
        .split("-")
        .map((str) => Number(str));
      console.log(expiredDate);
      const todayDate = dayjs()
        .format("YYYY-MM-DD")
        .split("-")
        .map((str) => Number(str));
      const remainDate = new Date(expiredDate) - new Date(todayDate);
      this.remainDate = remainDate / 1000 / 60 / 60 / 24;
    },
  },
  created() {
    this.getDDay();
  },
};
</script>

<style scoped>
body {
  background-color: #fcd000;
}

.cardWrap {
  width: 27em;
  margin: 2em auto;
  color: #e84c3d;
  font-family: sans-serif;
}

.card {
  background: linear-gradient(
    to bottom,
    #e84c3d 0%,
    #e84c3d 26%,
    #ecedef 26%,
    #ecedef 100%
  );
  height: 11em;
  float: left;
  position: relative;
  padding: 1px;
  margin-top: 0px;
}

.cardLeft {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 16em;
}

.cardRight {
  width: 6.5em;
  border-left: 0.18em dashed #212529;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
.cardRight:before,
.cardRight:after {
  content: "";
  position: absolute;
  display: block;
  width: 0.9em;
  height: 0.9em;
  background: #212529;
  border-radius: 50%;
  left: -0.5em;
}
.cardRight:before {
  top: -0.4em;
}
.cardRight:after {
  bottom: -0.4em;
}

h1 {
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 1.1em;
  margin-top: 10px;
}
h1 span {
  font-family: "Helvetica", "Arial", sans-serif;
  font-weight: normal;
}

.title,
.name,
.seat,
.time {
  font-family: "Helvetica", "Arial", sans-serif;
  text-transform: uppercase;
  font-weight: normal;
}
.title h2,
.name h2,
.seat h2,
.time h2 {
  font-family: "Helvetica", "Arial", sans-serif;
  background-color: #ecedef;
  font-size: 0.9em;
  color: #525252;
  margin: 0;
}
.title span,
.name span,
.seat span,
.time span {
  font-size: 0.7em;
  color: #a2aeae;
}

.title {
  margin: 1em 0 0 0;
}

.name,
.seat {
  margin: 0.7em 0 0 0;
}

.time {
  margin: 0.7em 0 0 1em;
}

.seat,
.time {
  float: left;
}

.eye {
  text-align: center;
  vertical-align: center;
  font-size: 20px;
}

.number {
  text-align: center;
  text-transform: uppercase;
}
.number h3 {
  color: #e84c3d;
  margin: 0.4em 0 0 0;
  font-size: 2.5em;
}
.number span {
  display: block;
  color: #a2aeae;
}

.barcode {
  height: 2.3em;
  width: 0;
  margin: 1.2em 0 0 1em;
  box-shadow: 1px 0 0 1px #343434, 5px 0 0 1px #343434, 10px 0 0 1px #343434,
    11px 0 0 1px #343434, 15px 0 0 1px #343434, 18px 0 0 1px #343434,
    22px 0 0 1px #343434, 23px 0 0 1px #343434, 26px 0 0 1px #343434,
    30px 0 0 1px #343434, 35px 0 0 1px #343434, 37px 0 0 1px #343434,
    41px 0 0 1px #343434, 44px 0 0 1px #343434, 47px 0 0 1px #343434,
    51px 0 0 1px #343434, 56px 0 0 1px #343434, 59px 0 0 1px #343434,
    64px 0 0 1px #343434, 68px 0 0 1px #343434, 72px 0 0 1px #343434,
    74px 0 0 1px #343434, 77px 0 0 1px #343434, 81px 0 0 1px #343434;
}
</style>