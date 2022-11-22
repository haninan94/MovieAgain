<template>
  <div>
    <h2>profile</h2>
    <p>your name : {{ getUserName }} </p>
    <p>당신이 가 참여한 펀딩 목록</p>
    <div>
      <UserFundingList/>
    </div>
  </div>
</template>

<script>
import UserFundingList from '@/components/UserFundingList'
export default {
  name: "ProfileView",
  components:{
    UserFundingList
  },
  data() {
    return {};
  },
  computed: {
    getUserId(){
      return this.$store.state.userId
    },
    getUserName(){
      return this.$store.state.username
    }
    // getUsername() {},
  },
  created(){
    this.getUserFundings();
  },
  methods:{
    getUserFundings(){
      this.$store.dispatch("getUserFundings", this.getUserId )
    }
  }
};
</script>

<style>
</style>