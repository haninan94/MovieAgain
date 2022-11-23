<template>
  <div id="app" class="appclass">
    <nav>
      <router-link :to="{ name: 'MovieView' }">
        <button class="nes-btn is-success">HOME</button>
      </router-link>
      <template v-if="check">
        <button class="nes-btn is-primary" @click="logOut">LOGOUT</button>
        <router-link :to="{ name: 'ProfileView', params: { id: userid } }">
          <button class="nes-btn">MYPAGE</button>
        </router-link>
      </template>
      <template v-else>
        <router-link :to="{ name: 'SignUpView' }">
          <button class="nes-btn">SIGNUP</button>
        </router-link>
        <router-link :to="{ name: 'LogInView' }">
          <button class="nes-btn is-primary">LOGIN</button>
        </router-link>
      </template>
      <router-link :to="{ name: 'FundingView' }">
        <button class="nes-btn is-warning">FUNDING</button>
      </router-link>
      <!-- <router-link :to="{ name: 'FundingSearchView'}">Search</router-link> -->
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    check() {
      return this.$store.getters.isLogin;
    },
    userid() {
      return this.$store.state.userId;
    },
  },
  methods: {
    logOut() {
      // console.log("go")
      this.$store.commit("LOGOUT");
      // this.$router.push({ name: "MovieView" })
    },
  },
};
</script>

<style>
@font-face {
  font-family: "dunggeunmo";
  src: url("../src/fonts/DungGeunMo.ttf") format("truetype");
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  /* background-color: white; */
  /* font-family: "font-family you want to use"; */
}

.appclass {
  background-color: #212529;
}

* {
  font-family: "dunggeunmo";
  font-size: 20px;
}

nav {
  padding: 30px;
  /* background-color: white; */
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

/* nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
