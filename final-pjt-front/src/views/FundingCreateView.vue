<!-- Funding Create Component -->
<template>
  <div>
    <div class="funding-create-view">
      <form @submit.prevent="createFunding">
        <!-- Funding title -->
        <label for="movie_title"></label>
        <input
          type="text"
          id="movie_title"
          class="nes-input"
          v-model="funding.movie_title"
          placeholder="title"
        />
        <!-- Funding Content -->
        <label for="content"></label>
        <textarea
          id="content"
          class="nes-textarea"
          v-model="funding.content"
          placeholder="content"
        ></textarea>
        <!-- Funding Poster -->
        <label for="poster_path"></label>
        <input
          type="text"
          id="poster_path"
          class="nes-input"
          v-model="funding.poster_path"
          placeholder="Poster URL"
        />
        <!-- Minimum Funding Money -->
        <label for="minimum_money">최소 펀딩 금액을 설정해주세요</label>
        <div class="nes-select">
          <select required id="minumum_money" v-model="funding.minimum_money">
            <option value="" disabled selected>select...</option>
            <option value="10000">10000</option>
            <option value="30000">30000</option>
            <option value="50000">50000</option>
            <option value="100000">100000</option>
          </select>
        </div>
        <!-- Goal Money  -->
        <label for="goal_money"></label>
        <input
          type="text"
          id="goal_money"
          class="nes-input"
          v-model="funding.goal_money"
          placeholder="Goal Money"
        />
        <!-- Expired Date  -->
        <label for="expired_date"></label>
        <b-form-datepicker
          v-model="funding.expired_date"
          placeholder="펀딩 만료일을 설정해 주세요."
          :min="funding.min"
          id="expired_date"
          class="mx-2"
        >
        </b-form-datepicker>
        <button class="nes-btn is-error">생성하기</button>
      </form>
    </div>
    
  </div>
</template> 

<script>
import swal from 'sweetalert';

export default {
  name: "FundingCreateView",
  data() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const minDate = new Date(today);
    minDate.setMonth(minDate.getMonth() + 1);
    return {
      funding: {
        movie_title: "",
        content: "",
        poster_path: "",
        minimum_money: null,
        goal_money: null,
        expired_date: "",
        min: minDate,
      },
    };
  },
  methods: {
    createFunding() {
      if (this.funding.goal_money <= this.funding.minimum_money) {
        swal("펀딩 만들기에 실패하였습니다.", "목표 금액이 최소 금액보다 적습니다.", "warning")
      } else {
        const payload = {
        user: this.$store.state.userId,
        movie_title: this.funding.movie_title,
        content: this.funding.content,
        poster_path: this.funding.poster_path,
        minimum_money: this.funding.minimum_money,
        goal_money: this.funding.goal_money,
        expired_date: this.funding.expired_date,
        }
      this.$store.dispatch("createFunding", payload)
      }
    },
  },
}
</script>

<style>
.funding-create-view {
  width: 50%;
  display: flex;
  margin: auto;
}

.minimum_money::placeholder {
  color: gray;
}

</style>