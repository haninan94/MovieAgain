<template>
  <div>
    <!-- <router-link :to="{ name: 'FundingSearchView'}">Search</router-link> -->
    <h1>진행중인 Funding List</h1>
    <router-link :to="{ name: 'FundingCreateView'}">
      <button class="nes-btn">
        Create New Funding
      </button>
    </router-link>
    <FundingList/>
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
</style>
