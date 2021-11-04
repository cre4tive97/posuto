<template>
  <div class="header">
    <AppLogo />
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
  height: 4rem;
  background-color: var(--main-color);
}
</style>
