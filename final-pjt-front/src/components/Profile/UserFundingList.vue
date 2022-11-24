<!-- User Funding List -->
<template>
  <b-container id="user-funding-list">
    <b-row>
    <UserFundingListItem
    v-for="userfunding in userfundings"
    :key="userfunding.id"
    :userfunding="userfunding" />
    </b-row>
  </b-container>
</template>

<script>
import UserFundingListItem from '@/components/Profile/UserFundingListItem'

export default {
  name:'UserFundingList',
  components:{
    UserFundingListItem
  },
  computed:{
    userfundings(){
      return this.$store.state.userFundings;
    }
  }
}
</script>

<style>
</style>