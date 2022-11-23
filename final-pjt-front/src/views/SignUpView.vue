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
    <b-form @submit.prevent="signUp">
      <h1>회원가입</h1>
      <b-form-group id="input-group-1" label="아이디" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model.trim="username"
          placeholder="ID"
          required
          v-model="username"
        ></b-form-input>
      </b-form-group>
      <br />
      <b-form-group id="input-group-2" label="비밀번호" label-for="input-2">
        <b-form-input
          type="password"
          id="input-2"
          v-model.trim="password1"
          placeholder="Password"
          required
        ></b-form-input>
      </b-form-group>
      <br />
      <b-form-group
        id="input-group-3"
        label="비밀번호를 한번 더 입력해주세요"
        label-for="input-3"
      >
        <b-form-input
          type="password"
          id="input-3"
          v-model.trim="password2"
          placeholder="Password Confirmation"
        >
        </b-form-input>
      </b-form-group>
      <br />
      <b-button type="submit" variant="outline-primary">회원가입</b-button>
    </b-form>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  name: "SignUpView",
  data() {
    return {
      username: null,
      password1: null,
      password2: null,
    };
  },
  methods: {
    signUp() {
<<<<<<< HEAD
      const username = this.username;
      const password1 = this.password1;
      const password2 = this.password2;
      console.log(username);
=======
      const username = this.username
      const password1 = this.password1
      const password2 = this.password2
>>>>>>> fee08fe7d5258cf7b3e7f8bd8fc2cc6d82cccb5e
      if (!username) {
        swal("회원가입 실패!", "ID를 입력해주세요.", "warning");
        // this.$dialogs.alert("ID를 입력해주세요")
      } else if (!password1) {
        swal("회원가입 실패!", "비밀번호를 입력해주세요.", "warning");
        // this.$dialogs.alert("비밀번호를 입력해주세요")
      } else if (!password2) {
        swal(
          "회원가입 실패!",
          "비밀번호 확인을 위해 한번 더 입력해주세요.",
          "warning"
        );
        // this.$dialogs.alert("비밀번호 확인을 위해 한번 더 입력해주세요")
      } else if (password1.length < 8) {
        swal(
          "회원가입 실패!",
          "비밀번호를 8글자 이상 입력해주세요.",
          "warning"
        );
        // this.$dialogs.alert("비밀번호를 8글자 이상 입력해주세요")
      } else if (password1 !== password2) {
        swal(
          "회원가입 실패!",
          "두 개의 비밀번호가 서로 같지 않습니다.",
          "warning"
        );
        // this.$dialogs.alert("두 개의 비밀번호가 서로 같지 않습니다.")
      } else {
        const payload = {
          // username,
          // password1,
          // password2,
          username: username,
          password1: password1,
          password2: password2,
        };

        this.$store.dispatch("signUp", payload);
      }
    },
  },
};
</script>

<style>
#signup {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
</style>