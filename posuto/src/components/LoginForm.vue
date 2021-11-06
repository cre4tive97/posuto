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
    <button class="btn">Login</button>
  </form>
</template>

<script>
import { loginUser } from '@/api/auth';
export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async submitForm() {
      const { data } = await loginUser({
        username: this.username,
        password: this.password,
      });
      console.log(data);
    },
  },
};
</script>

<style scoped></style>
