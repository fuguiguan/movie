import { loadSearch, loadComment, loadWatchedMovie, loadWantedMovie, loadCelebrity } from '../common/js/cache';
const state = {
  movie: {}, // 当前电影信息
  currentCelebrityId: 0,
  currentReviewId: 0,
  currentDiscussionType: ''
};

export default state;
