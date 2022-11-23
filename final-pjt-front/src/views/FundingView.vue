<template>
  <div id="fundingview">
    <!-- <router-link :to="{ name: 'FundingSearchView'}">Search</router-link> -->
    <h1>진행중인 Funding List</h1>
    <router-link :to="{ name: 'FundingCreateView'}">
      <button class="nes-btn">
        Create New Funding
      </button>
    </router-link>
    <div class="container">
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

.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
