<template>
  <div id="profile">
    <h2>내 프로필</h2>
    <p>---------------------</p>
    <p>Welcome, {{ getUserName }}!</p>
    <p>---------------------</p>
    <div v-if="userFundings.length>0">
      <p>👇{{getUserName}} 님이 펀딩 참여한 영화 목록👇</p>
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
    userFundings(){
      return this.$store.state.userFundings
    },
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
#profile {
  width: 100vw;
}
</style>