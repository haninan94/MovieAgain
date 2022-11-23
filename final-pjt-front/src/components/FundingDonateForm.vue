<template>
  <div>
    <label for="dark_select" style="color: #fff">후원하기</label>
    <div class="nes-select is-dark">
      <form @submit.prevent="donateFunding">
        <select required id="dark_select" v-model="donateMoney">
          <option value="" disabled selected hidden>Select...</option>
          <option value="10000">10,000 원</option>
          <option value="30000">30,000 원</option>
          <option value="50000">50,000 원</option>
          <option value="100000">100,000 원</option>
        </select>
        <br /><br />
        <button class="nes-btn is-warning">결제하기</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "FundingDonateForm",
  data() {
    return {
      donateMoney: 0,
    };
  },
  methods: {
    donateFunding() {
      if (!this.$store.state.token) {
        alert("plz login");
        return;
      }
      const payload = {
        fundingId: this.$route.params.id,
        user: this.$store.state.userId,
        donation: this.donateMoney,
      };
      this.$store.dispatch("donateFunding", payload);
    },
  },
};
</script>

<style>
</style>