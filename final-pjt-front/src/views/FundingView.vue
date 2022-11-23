<template>
  <div id="fundingview">
    <!-- <router-link :to="{ name: 'FundingSearchView'}">Search</router-link> -->
    <div>
      <div class="container1">
        <p style="font-size: 30px">🙏재개봉을 기다리는 영화들🙏</p>
      </div>
      <div class="container2">
        <p style="margin-right:2rem">
          <router-link :to="{ name: 'FundingCreateView'}">
            <button class="nes-btn is-error">
              펀딩 만들기
            </button>
          </router-link>  
        </p>
      </div>
    </div>
    <div class="container3">
      <FundingList/>
    </div>
  </div>
</template>

<script>
import FundingList from '@/components/FundingList'
// import FundingCreateView from '@/views/FundingCreateView'

export default {
  name: "FundingView",
  components: {
    FundingList,
    // FundingCreateView
  },
  computed: {

  },
  created() {
    this.getFundings()
  },
  methods: {
    getFundings() {
      this.$store.dispatch("getFundings")
    }
  },
};
</script>

<style>
#fundingview {
  width: 100vw;
  height: 100vh;
}

.container1 {
  display: flex;
  justify-content: center;
}

.container2 {
  display: flex;
  justify-content: flex-end;
}

.container3 {
  display: flex;
  flex-wrap: wrap;
}
</style>
