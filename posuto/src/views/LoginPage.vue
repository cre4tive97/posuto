<template>
  <div class="loginPage">
    <p class="form__title">Login</p>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
};
</script>

<style scoped></style>
