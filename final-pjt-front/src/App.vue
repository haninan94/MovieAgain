<!-- App.vue -->
<template>
  <div id="app" class="appclass">
    <nav>
      <!-- 메인 페이지 -->
      <router-link :to="{ name: 'MovieView' }">
        <button class="nes-btn is-success">HOME</button>
      </router-link>
      <!-- 로그인 상태일 시 : LOGOUT, MYPAGE -->
      <template v-if="check">
        <button class="nes-btn is-primary" @click="logOut">LOGOUT</button>
        <router-link :to="{ name: 'ProfileView', params: { id: userid } }">
          <button class="nes-btn">MYPAGE</button>
        </router-link>
      </template>
      <!-- 로그아웃 상태일 시 : SIGNUP, LOGIN -->
      <template v-else>
        <router-link :to="{ name: 'SignUpView' }">
          <button class="nes-btn">SIGNUP</button>
        </router-link>
        <router-link :to="{ name: 'LogInView' }">
          <button class="nes-btn is-primary">LOGIN</button>
        </router-link>
      </template>
      <!-- 펀딩 페이지 -->
      <router-link :to="{ name: 'FundingView' }">
        <button class="nes-btn is-warning">FUNDING</button>
      </router-link>
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
      this.$store.commit("LOGOUT");
    },
  },
  created() {
    this.$store.dispatch("getMovies");
    this.$store.dispatch("getRecommendFundings");
    this.$store.dispatch("getAdventureMovies");
    this.$store.dispatch("getHorrorMovies");
    this.$store.dispatch("getDocumentaryMovies");
    this.$store.dispatch("getAnimationMovies");
    this.$store.dispatch("getRomanceMovies");
  },
};
</script>

<style>
@font-face {
  font-family: "dunggeunmo";
  src: url("../src/fonts/DungGeunMo.ttf") format("truetype");
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
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
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
