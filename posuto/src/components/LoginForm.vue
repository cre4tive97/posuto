<template>
  <form class="form">
    <div class="form-box">
      <label for="username">Username</label>
      <input class="input" id="username" type="text" />
    </div>
    <div class="form-box">
      <label for="username">Password</label>
      <input class="input" id="username" type="text" />
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
label {
  font-size: 1rem;
}
.input {
  background-color: #e0e2e1;
  border-radius: 8px;
  height: 3rem;
  font-size: 1.5rem;
  padding: 0 12px;
}
.input:focus {
  outline: none;
}
.form-box {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 50%;
  min-width: 300px;
  max-width: 700px;
}
</style>
