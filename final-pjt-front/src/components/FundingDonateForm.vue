<template>
  <div>
    <h3>기부할 돈</h3>
    <form @submit.prevent="donateFunding">
      <input 
        type="text"
        v-model.trim="fundingMoney"
      >
      <input type="submit" value="후원하기">
    </form>
  </div>
</template>

<script>
export default {
  name: "FundingDonateForm",
  data() {
    return {
      fundingMoney: null,
    }
  },
  methods: {
    donateFunding() {
      this.$emit("donate-funding", this.fundingMoney)
      this.fundingMoney = null
    },
  }
}
</script>

<style>

</style>