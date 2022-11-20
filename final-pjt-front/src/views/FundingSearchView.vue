<template>
  <div>
    <FundingSearchForm
      @get-funding-search="getFundingSearch"
    />
    <FundingSearchList/>
  </div>
</template>

<script>
import FundingSearchForm from '@/components/FundingSearchForm'
import FundingSearchList from '@/components/FundingSearchList'

export default {
  name: "FundingSearchView",
  components: {
    FundingSearchForm,
    FundingSearchList
  },
  methods: {
    getFundings() {
      this.$store.dispatch("getFundings")
    },
    getFundingSearch(payload) {
      this.$store.dispatch("getFundingSearch", payload)
    }
  },
  created() {
    this.getFundings()
  },
}
</script>

<style>

</style>