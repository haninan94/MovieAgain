<template>
  <b-container>
    <b-row>
    <UserFundingListItem
    v-for="userfunding in userfundings"
    :key="userfunding.id"
    :userfunding="userfunding" />
    </b-row>
  </b-container>
</template>

<script>
import UserFundingListItem from '@/components/UserFundingListItem'

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