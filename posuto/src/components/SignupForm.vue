<template>
  <form class="form" @submit.prevent="submitForm">
    <div class="form-box">
      <label for="username">Username</label>
      <input class="input" id="username" type="text" v-model="username" />
    </div>
    <div class="form-box">
      <label for="password">Password</label>
      <input class="input" id="password" type="text" v-model="password" />
    </div>
    <div class="form-box">
      <label for="nickname">Nickname</label>
      <input class="input" id="nickname" type="text" v-model="nickname" />
    </div>
    <button
      class="btn"
      :disabled="!isUsernameValid || !username || !password || !nickname"
    >
      Sign up
    </button>
  </form>
</template>

<script>
import { registerUser } from '@/api/auth';
import { validateUsername } from '@/utils/validation';
export default {
  name: 'SignUpForm',
  data() {
    return {
      //form data
      username: '',
      password: '',
      nickname: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateUsername(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const { data } = await registerUser({
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        });
        console.log(data);
        this.initForm();
      } catch (error) {
        console.log(error.response.data);
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
