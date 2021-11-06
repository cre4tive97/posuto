<template>
  <form class="form" @submit.prevent="submitForm">
    <div class="form-box">
      <label for="username">Username</label>
      <input class="input" id="username" type="text" v-model="username" />
      <p
        style="color: red; position: relative"
        v-if="!isUsernameValid && username !== ''"
      >
        이메일을 입력해주세요.
      </p>
    </div>
    <div class="form-box">
      <label for="password">Password</label>
      <input class="input" id="password" type="text" v-model="password" />
    </div>
    <button class="btn">Login</button>
  </form>
</template>

<script>
import FormMixin from '@/mixins/FormMixin';
export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  mixins: [FormMixin],
  methods: {
    async submitForm() {
      try {
        await this.$store.dispatch('LOGIN_USER', {
          username: this.username,
          password: this.password,
        });
        this.$router.push('/main');
      } catch (error) {
        console.log(error.response.data);
      } finally {
        this.initForm();
      }
    },
  },
};
</script>

<style scoped></style>
