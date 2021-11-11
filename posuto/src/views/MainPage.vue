<template>
  <div class="main">
    <PostListView
      :postItems="postItems"
      @deletePost="deletePost"
      @startEditing="startEditing"
      @finishEditing="finishEditing"
      @move:position="savePosition"
    />
    <transition name="settingAnimation">
      <AppSetting v-if="settingState" />
    </transition>
    <button class="add__btn" @click="createNewPost">
      <i class="far fa-sticky-note"></i>
    </button>
    <button class="save__btn">
      <i class="far fa-save"></i>
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
      updateStatus: false,
    };
  },
  created() {
    this.fetchPostData();
  },
  methods: {
    async fetchPostData() {
      try {
        // 포스트 데이터 불러오기
        const { data } = await getPostData();
        this.postItems = data.posts;
      } catch (error) {
        // 권한 에러 뜰 경우 login페이지로 이동
        if (error.response.status === 401) {
          this.$router.push('/login');
        }
      }
    },
    async createNewPost() {
      try {
        // 디폴트 포스트를 생성
        await addPostData({
          title: '',
          contents: '',
          position: [{ width: '3', height: '3', x: '0', y: '0' }],
          isEditing: true,
        });
        // Refresh
        await this.fetchPostData();
        this.$router.go();
      } catch (error) {
        if (error.response.status === 400) {
          alert('새로운 포스트가 이미 존재합니다.');
        } else if (error.response.status === 500) {
          alert(
            '서버에 문제가 있어 포스트를 생성하지 못했습니다. 잠시 후 다시 시도해주세요.',
          );
        }
      }
    },
    // 포스트 삭제
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
    // 수정 시작 버튼 클릭
    startEditing(i) {
      this.postItems[i].isEditing = true;
    },
    // 수정 완료, 데이터 저장
    async finishEditing(postItem, postData) {
      const id = postItem._id;
      try {
        // 기존 제목과 컨텐츠 변경이 없을경우
        if (postData.title === '' && postData.contents === '') {
          postData.title = postItem.title;
          postData.contents = postItem.contents;
          await updatePostData(id, postData);
          this.fetchPostData();

          // 기존 컨텐츠만 변경되었을 경우
        } else if (postData.title === '' && postData.contents !== '') {
          postData.title = postItem.title;
          await updatePostData(id, postData);
          this.fetchPostData();

          // 기존 제목만 변경되었을 경우
        } else if (postData.title !== '' && postData.contents === '') {
          postData.contents = postItem.contents;
          await updatePostData(id, postData);
          this.fetchPostData();

          // 기존 제목과 컨텐츠 모두 변경되었을 경우
        } else if (postData.title !== '' && postData.contents !== '') {
          await updatePostData(id, postData);
          this.fetchPostData();
        }
        // switch문 적용 가능?
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
    // 포지션 변경시 전체 포스트 위치 저장
    savePosition() {},
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
