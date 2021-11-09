<template>
  <div class="main">
    <PostListView
      :postItems="postItems"
      @deletePost="deletePost"
      @startEditing="startEditing"
      @finishEditing="finishEditing"
    />
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
import {
  getPostData,
  addPostData,
  deletePostData,
  updatePostData,
} from '@/api/posts';
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
      try {
        const { data } = await getPostData();
        this.postItems = data.posts;
      } catch (error) {
        console.log(error.response.data);
      }
    },
    async createNewPost() {
      try {
        await addPostData({
          title: '',
          contents: '',
          position: [{ width: '3', height: '3', x: '0', y: '0' }],
          isEditing: true,
        });
        this.fetchPostData();
      } catch (error) {
        console.log(error.response);
        if (error.response.status === 400) {
          alert('새로운 포스트가 이미 존재합니다.');
        } else if (error.response.status === 500) {
          alert(
            '서버에 문제가 있어 포스트를 생성하지 못했습니다. 잠시 후 다시 시도해주세요.',
          );
        }
      }
    },
    async deletePost(postId) {
      try {
        await deletePostData(postId);
        this.fetchPostData();
      } catch (error) {
        if (error.response.status === 400) {
          alert('포스트를 삭제할 수 없습니다.');
        } else if (error.response.status === 404) {
          alert('포스트를 찾을 수 없습니다.');
        } else if (error.response.status === 500) {
          alert(
            '서버에 문제가 있어 포스트를 삭제하지 못했습니다. 잠시 후 다시 시도해주세요.',
          );
        }
      }
    },
    startEditing(i) {
      this.postItems[i].isEditing = true;
    },
    async finishEditing(postItem, postData) {
      const id = postItem._id;
      try {
        if (postData.title === '') {
          postData.title = postItem.title;
          await updatePostData(id, postData);
          this.fetchPostData();
        } else if (postData.contents === '') {
          postData.contents = postItem.contents;
          await updatePostData(id, postData);
          this.fetchPostData();
        } else {
          await updatePostData(id, postData);
          this.fetchPostData();
        }
      } catch (error) {
        if (error.response.status === 400) {
          alert('이미 같은 포스트가 존재합니다.');
        } else if (error.response.status === 404) {
          alert('포스트를 찾을 수 없습니다.');
        } else if (error.response.status === 500) {
          alert(
            '서버에 문제가 있어 포스트를 수정하지 못했습니다. 잠시 후 다시 시도해주세요.',
          );
        }
      }
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
