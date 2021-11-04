<template>
  <div class="header">
    <router-link to="/main"><AppLogo /></router-link>
    <div>
      <router-link to="/login">login</router-link>
      <router-link to="/signup">signup</router-link>
    </div>
  </div>
</template>

<script>
import AppLogo from '@/components/common/AppLogo.vue';
export default {
  name: 'AppHeader',
  components: {
    AppLogo,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  background: linear-gradient(
    90deg,
    rgba(160, 252, 255, 1) 0%,
    rgba(93, 153, 198, 1) 100%
  );
  padding: 0 12px;
}
</style>
