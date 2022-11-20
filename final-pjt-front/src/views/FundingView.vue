<template>
  <div>
    <router-link :to="{ name: 'FundingSearchView'}">Search</router-link>
    <h1>Funding Page</h1>
    <hr />
    <FundingList/>
  </div>
</template>

<script>
import FundingList from '@/components/FundingList'

export default {
  name: "FundingView",
  components: {
    FundingList,
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
