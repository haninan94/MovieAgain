<template>
  <div>
    <form @submit.prevent="searchFunding">
      <input type="text" v-model.trim="searchTitle">
      <button>Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FundingSearchForm",
  data() {
    return {
      searchTitle: null,
    }
  },
}
</script>

<style>

</style>