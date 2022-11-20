<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'MovieView' }">
        <button class="nes-btn is-success">Home</button>
      </router-link>
      <template v-if="check">
        <button class="nes-btn is-success" @click="logOut">LogOut</button>
      </template>
      <template v-else>
        <router-link :to="{ name: 'SignUpView' }">
          <button class="nes-btn is-success">SignUp</button>
        </router-link>
        <router-link :to="{ name: 'LogInView' }">
          <button class="nes-btn is-success">Login</button>
        </router-link>
      </template>
      <router-link :to="{ name: 'FundingView'}">
        <i class="nes-icon coin is-medium mb-2"></i>
      </router-link>
      <!-- <router-link :to="{ name: 'UserProfileView'}">
        <button class="nes-btn is-success">Profile</button>
      </router-link> -->
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
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: Kongtext;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: white;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
