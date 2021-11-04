<template>
  <div class="header">
    <router-link to="/main"><AppLogo /></router-link>
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
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: var(--main-dark);
  padding: 0 12px;
}
</style>
