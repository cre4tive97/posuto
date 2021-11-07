import { posts } from '@/api/index';

// 게시물 조회
function getPostData() {
  return posts.get('/');
}

export { getPostData };
