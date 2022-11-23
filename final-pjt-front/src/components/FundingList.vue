<template>
  <b-container fluid class="p-4 bg-dark border-top border-danger">
    <b-row>
      <FundingListItem
        v-for="funding in fundings"
        :key="funding.id"
        :funding="funding"
      />
    </b-row>
  </b-container>
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