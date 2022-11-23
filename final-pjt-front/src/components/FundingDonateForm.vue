<template>
  <div id="funding-donate-form" style="background-color:#212529; padding: 1rem 1.2rem 1rem 1rem;width:calc(100% + 8px)">
    <div class="nes-select is-dark">
      <label for="dark_select" style="color: #fff">후원하기</label>
      <form class="donate-form" @submit.prevent="donateFunding">
        <select required id="dark_select" v-model="donateMoney">
          <option :value="fundingMinimumMoney">{{ fundingMinimumMoney }}원</option>
          <option :value="fundingMinimumMoney + 10000">{{ fundingMinimumMoney + 10000 }}원</option>
          <option :value="fundingMinimumMoney + 20000">{{ fundingMinimumMoney + 20000 }}원</option>
        </select>
        <br>
        <button class="nes-btn">후원하기</button>
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
  props: {
    fundingMinimumMoney: Number,
  },
  methods: {
    donateFunding() {
      if (!this.$store.state.token) {
        this.$dialogs.alert("plz login");
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
#funding-donate-form {
  width: 75% !important;
  margin: auto;
}

.donate-form {
  align-content: center;
}
</style>