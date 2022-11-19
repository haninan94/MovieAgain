<template>
  <div>
    <FundingListItem
      v-for="funding in fundings"
      :key="funding.id"
      :funding="funding"
    />
  </div>
</template>

<script>
import FundingListItem from '@/components/FundingListItem'
export default {
  name:'FundingList',
  components:{
    FundingListItem,
  },
  computed: {
    fundings() {
      return this.$store.state.fundings
    },
  }
}
</script>

<style>

</style>