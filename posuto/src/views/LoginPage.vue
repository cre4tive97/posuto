<template>
  <div class="loginPage">
    <p style="font-size: 3rem">Login</p>
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

<style scoped>
.loginPage {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
