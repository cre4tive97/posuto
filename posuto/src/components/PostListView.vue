<template>
  <ul class="post__ul">
    <li class="post__li" v-for="(list, i) in lists" :key="i">{{ list }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      lists: [1, 2, 3, 4, 5],
    };
  },
};
</script>

<style>
.post__ul {
  display: flex;
  flex-wrap: wrap;
}

.post__li {
  width: 300px;
  height: 300px;
  background-color: red;
  margin: 8px;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.4);
}
</style>
