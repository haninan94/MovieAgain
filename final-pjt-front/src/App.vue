<template>
  <div id="app">
    <nav>
      <router-link class="nes-text" :to="{ name: 'MovieView' }">Home</router-link> |
      <template v-if="check">
        <button class="nes-btn is-success small" @click="logOut">LOGOUT</button> |
      </template>
      <template v-else>
        <router-link :to="{ name: 'SignUpView' }">SignUpPage</router-link> |
        <router-link :to="{ name: 'LogInView' }">LogInPage</router-link> |
      </template>
      <router-link :to="{ name: 'FundingView'}">FundingPage</router-link> |
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
html, body, pre, code, kbd, samp {
  font-family: "font-family you want to use";
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: white;
}

nav {
  padding: 30px;
  background-color: white;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
