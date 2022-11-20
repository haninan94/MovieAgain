<template>
  <div>
    <form @submit.prevent="searchFunding">
      <input type="text" v-model.trim="searchFundingData">
      <button>Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FundingSearchForm",
  data() {
    return {
      searchFundingData: null,
    }
  },
  methods: {
    searchFunding() {
      this.$emit("get-funding-search", this.searchFundingData)
    }
  }
}
</script>

<style>

</style>