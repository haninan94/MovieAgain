<!-- Funding Donate Form -->
<template>
  <div id="funding-donate-form" style="background-color:#212529; padding: 1rem 1.2rem 1rem 1rem;width:calc(100% + 8px)">
    <div class="nes-select is-dark">
      <label for="dark_select" style="color: #fff">펀딩하기</label>
      <form class="donate-form" @submit.prevent="donateFunding">
        <select style="margin-bottom:10px;" required id="dark_select" v-model="donateMoney">
          <option value="" disabled selected>가격을 선택해주세요.</option>
          <option :value="fundingMinimumMoney">{{ fundingMinimumMoney }}원</option>
          <option :value="fundingMinimumMoney + 10000">{{ fundingMinimumMoney + 10000 }}원</option>
          <option :value="fundingMinimumMoney + 20000">{{ fundingMinimumMoney + 20000 }}원</option>
        </select>
        <span>
          <button id="donate-button" class="nes-btn is-primary">펀딩하기</button>
        </span>
      </form>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert';

export default {
  name: "FundingDonateForm",
  data() {
    return {
      donateMoney: 0,
    };
  },
  props: {
    fundingMinimumMoney: Number,
    fundingId: Number,
  },
  methods: {
    donateFunding() {
      if (!this.$store.state.token) {
        swal("펀딩할 수 없습니다.", "로그인을 해주시기 바랍니다.", "warning");
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
  margin: auto;
}

.donate-form {
  align-content: center;
}

</style>