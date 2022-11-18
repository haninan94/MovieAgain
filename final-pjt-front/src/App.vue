<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'MovieView' }">Home</router-link> |
      <template v-if="check">
        <button @click="logOut">LogOut</button>
      </template>
      <template v-else>
        <router-link :to="{ name: 'SignUpView' }">SignUpPage</router-link> |
        <router-link :to="{ name: 'LogInView' }">LogInPage</router-link>
      </template>
      >>>>>>> 4dea9b100a2813278d8b30b8d4e7105ca37715f9
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
