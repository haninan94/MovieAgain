<template>
  <div>
    <form @submit.prevent="createFunding">
      <label for="funding-title"></label>
      <input type="text" id="funding-title" v-model.trim="fundingTitle" placeholder="Title"><br>

      <label for="funding-content"></label>
      <input type="context" id="funding-content" v-model.trim="fundingContent" placeholder="Content"><br>

      <label for="funding-poster"></label>
      <input type="text" id="funding-poster" v-model.trim="fundingImgUrl" placeholder="Image URL"><br>

      <label for="funding-goal-money"></label>
      <input type="text" id="funding-goal-money" v-model.trim="fundingGoalMoney" placeholder="Goal Money"><br>

      <label for="funding-expired-date"></label>
      <b-form-datepicker id="funding-expired-date" v-model.trim="fundingExpiredDate"></b-form-datepicker>

      <button>CREATE</button>
    </form>
    <router-link :to="{ name: 'FundingView'}">Back</router-link>
  </div>
</template>

<script>
export default {
  name: "FundingCreateView",
  data() {
    return {
      fundingTitle: null,
      fundingContent: null,
      fundingImgUrl: null,
      fundingGoalMoney: null,
      fundingExpiredDate: null,
      fundingNowMoney: null,
    }
  },
  methods: {
    createFunding() {
      // console.log("ok")
      const title = this.fundingTitle
      const content = this.fundingContent
      const imgUrl = this.fundingImgUrl
      const goalMoney = this.fundingGoalMoney
      const nowMoney = this.fundingNowMoney
      const expiredDate = this.fundingExpiredDate
      const payload = {
        title, content, imgUrl, goalMoney, nowMoney, expiredDate
      }
      this.$store.dispatch("createFunding", payload)
    }
  }
}
</script>

<style>

</style>