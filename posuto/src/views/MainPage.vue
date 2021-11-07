<template>
  <div class="main">
    <PostListView />
  </div>
</template>

<script>
import PostListView from '@/components/PostListView.vue';
import { getPostData } from '@/api/posts';
export default {
  name: 'MainPage',
  components: {
    PostListView,
  },
  methods: {
    async fetchPostData() {
      const { data } = await getPostData();
      console.log(data.posts);
    },
  },
  created() {
    this.fetchPostData();
  },
};
</script>

<style scoped></style>
