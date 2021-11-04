<template>
  <div class="main">
    <PostListView />
  </div>
</template>

<script>
import PostListView from '@/components/PostListView.vue';
export default {
  components: {
    PostListView,
  },
};
</script>

<style scoped>
.main {
  padding: 0 12px;
}
</style>
