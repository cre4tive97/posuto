<template>
  <div class="main">
    <PostListView :postItems="postItems" />
    <transition name="settingAnimation">
      <AppSetting v-if="settingState" />
    </transition>
    <button class="add__btn" @click="createNewPost">
      <i class="far fa-sticky-note"></i>
    </button>
    <button class="setting__btn" @click="settingState = !settingState">
      <i class="fas fa-cog"></i>
    </button>
  </div>
</template>

<script>
import AppSetting from '@/components/common/AppSetting.vue';
import PostListView from '@/components/PostListView.vue';
import { getPostData, addPostData } from '@/api/posts';
export default {
  name: 'MainPage',
  components: {
    PostListView,
    AppSetting,
  },
  data() {
    return {
      postItems: [],
      settingState: false,
    };
  },
  created() {
    this.fetchPostData();
  },
  methods: {
    async fetchPostData() {
      const { data } = await getPostData();
      this.postItems = data.posts;
    },
    async createNewPost() {
      const response = await addPostData({
        title: '',
        contents: '',
        position: [{ width: '3', height: '3', x: '0', y: '0' }],
        isEditing: true,
      });
      return response;
    },
  },
};
</script>

<style>
.settingAnimation-enter,
.settingAnimation-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
.settingAnimation-enter-active,
.settingAnimation-leave-active {
  transition: all 0.5s;
}
</style>
