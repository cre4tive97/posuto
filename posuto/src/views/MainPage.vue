<template>
  <div class="main">
    <PostListView :postItems="postItems" />
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
  data() {
    return {
      postItems: [],
    };
  },
  methods: {
    async fetchPostData() {
      const { data } = await getPostData();
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchPostData();
  },
};
</script>

<style scoped></style>
