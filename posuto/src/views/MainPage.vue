<template>
  <div class="main">
    <PostListView :postItems="postItems" :loadingStatus="loadingStatus" />
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
      loadingStatus: false,
    };
  },
  methods: {
    async fetchPostData() {
      const { data } = await getPostData();
      this.postItems = data.posts;
      this.loadingStatus = true;
    },
  },
  created() {
    this.fetchPostData();
  },
};
</script>

<style scoped></style>
