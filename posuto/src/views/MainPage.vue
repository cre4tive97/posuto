<template>
  <div class="main">
    <!-- <BackgroundSizeBar /> -->
    <PostListView />
  </div>
</template>

<script>
// import BackgroundSizeBar from '@/components/common/BackgroundSizeBar.vue';
import PostListView from '@/components/PostListView.vue';
export default {
  components: {
    PostListView,
    // BackgroundSizeBar,
  },
};
</script>

<style scoped></style>
