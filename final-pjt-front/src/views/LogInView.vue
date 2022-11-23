<template>
  <div id="login">
    <!-- <h1>로그인 페이지</h1>
    <form @submit.prevent="logIn">
      <label for="username"></label>
      <input type="text" id="username" v-model.trim="username" placeholder="ID"><br>

      <label for="password"></label>
      <input type="password" id="password" v-model.trim="password" placeholder="Password"><br>

      <button class="nes-btn">LOGIN</button>
    </form> -->
    <b-form @submit.prevent="logIn">
      <h1>로그인</h1>
      <b-form-group id="input-group-1" label="아이디" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model.trim="username"
          placeholder="ID"
          required
        ></b-form-input>
      </b-form-group>
      <br>
      <b-form-group id="input-group-2" label="비밀번호" label-for="input-2">
        <b-form-input
          type="password"
          id="input-2"
          v-model.trim="password"
          placeholder="Password"
          required
        ></b-form-input>
      </b-form-group>
      <br>
      <b-button type="submit" variant="outline-primary">로그인</b-button>
    </b-form>
  </div>
</template>

<script>
// import swal from 'sweetalert';

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

<style>
#login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
}
</style>
