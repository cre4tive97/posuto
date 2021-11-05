<template>
  <div class="header">
    <router-link to="/main"><AppLogo /></router-link>
    <div>
      <router-link to="/login">
        <button class="link">login</button>
      </router-link>
      <router-link to="/signup">
        <button class="link">signup</button>
      </router-link>
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
.link {
  border: none;
  background: #88d9ea;
  padding: 4px 8px;
  margin-left: 8px;
  border-radius: 6px;
}
</style>
