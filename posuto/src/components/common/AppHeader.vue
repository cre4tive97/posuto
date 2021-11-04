<template>
  <div class="header">
    <router-link to="/login">login</router-link>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 3rem;
  background-color: var(--main-color);
}
</style>
