<!-- Profile View -->
<template>
  <div id="profile">
    <h2>λ΄ νλ‘ν</h2>
    <p>---------------------</p>
    <p>Welcome, {{ getUserName }}!</p>
    <p>---------------------</p>
    <div v-if="userFundings.length>0">
      <p>π{{getUserName}} λμ΄ νλ© μ°Έμ¬ν μν λͺ©λ‘π</p>
      <UserFundingList/>
    </div>
  </div>
</template>

<script>
import UserFundingList from '@/components/Profile/UserFundingList'
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