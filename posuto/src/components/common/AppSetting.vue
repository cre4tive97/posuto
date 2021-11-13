<template>
  <div class="setting">
    <div class="greeting">
      <h2>{{ $store.state.nickname }}</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.setting {
  position: fixed;
  bottom: 1rem;
  right: 4rem;
  border-radius: 1rem;
  padding: 8px;
  background-color: rgba(94, 154, 198, 0.3);
  /* border: 1px solid rgba(62, 138, 193, 0.3); */
  backdrop-filter: blur(16px);
  width: 50%;
  max-width: 400px;
  min-width: 250px;
  height: 200px;
}
</style>
