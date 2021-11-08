import { posts } from '@/api/index';

// 게시물 조회
function getPostData() {
  return posts.get('/');
}

function addPostData(postData) {
  return posts.post('/', postData);
}

function updatePostData(postId, postData) {
  return posts.post(postId, postData);
}

function deletePostData(postId) {
  return posts.delete(`/${postId}`);
}

export { getPostData, addPostData, updatePostData, deletePostData };
