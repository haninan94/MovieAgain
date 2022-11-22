<template>
  <div>
    <h1>LogIn Page</h1>
    <form @submit.prevent="logIn">
      <label for="username"></label>
      <input type="text" id="username" v-model="username" placeholder="ID"><br>

      <label for="password"></label>
      <input type="password" id="password" v-model="password" placeholder="Password"><br>

      <button class="nes-btn">LOGIN</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LogInView',
  data() {
    return {
      username: null,
      password: null,
    }
  },
  methods: {
    logIn() {
      const username = this.username
      const password = this.password

      const payload = {
        username: username,
        password: password,
      }
      this.$store.dispatch('logIn', payload)
    }
  }
}
</script>
