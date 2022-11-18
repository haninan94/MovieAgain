<template>
  <div id="signup">
    <!-- <form @submit.prevent="signUp">
      <label for="username">username : </label>
      <input type="text" id="username" v-model="username"><br>

      <label for="password1"> password : </label>
      <input type="password" id="password1" v-model="password1"><br>

      <label for="password2"> password confirmation : </label>
      <input type="password" id="password2" v-model="password2">
      
      <input type="submit" value="SignUp">
    </form> -->
    <b-form  @submit.prevent="signUp">
      <h1>회원가입</h1>
      <b-form-group id="input-group-1" label="ID" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="username"
          placeholder="ID"
          required
        ></b-form-input>
      </b-form-group>
      <br>
      <b-form-group id="input-group-2" label="Password" label-for="input-2">
        <b-form-input
          type="password"
          id="input-2"
          v-model="password1"
          placeholder="Password"
          required
        ></b-form-input>
      </b-form-group>
      <br>
      <b-form-group id="input-group-3" label="Password Confirmation" label-for="input-3">
        <b-form-input
          type="password"
          id="input-3"
          v-model="password2"
          placeholder="Password Confirmation"
        >
        </b-form-input>
      </b-form-group>
      <br>
      <b-button type="submit" variant="outline-primary">회원가입</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'SignUpView',
  data() {
    return {
      username: null,
      password1: null,
      password2: null,
    }
  },
  methods: {
    signUp() {
      const username = this.username
      const password1 = this.password1
      const password2 = this.password2

      const payload = {
        // username,
        // password1,
        // password2,
        username: username,
        password1: password1,
        password2: password2,
      }

      this.$store.dispatch('signUp', payload)

    }
  }
}
</script>

<style>
#signup {
  display: flex;
  justify-content: center;
  
}
</style>