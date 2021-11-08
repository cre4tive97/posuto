import { posts } from '@/api/index';

// 게시물 조회
function getPostData() {
  return posts.get('/');
}

function addPostData(postData) {
  return posts.post('/', postData);
}

export { getPostData, addPostData };
