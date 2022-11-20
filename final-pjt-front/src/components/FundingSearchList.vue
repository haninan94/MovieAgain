<template>
  <div>
    {{ fundingSearched }}
  </div>
</template>

<script>
export default {
  name: "FundingSearchList",
  computed: {
    fundingSearched() {
      return this.$store.state.fundingSearched
    }
  }
}
</script>

<style>

</style>