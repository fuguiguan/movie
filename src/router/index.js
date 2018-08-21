import Vue from 'vue';
import Router from 'vue-router';

const MovieShow = resolve => require(['components/movie-show/movie-show'], resolve);
const UserCenter = resolve => require(['components/user-center/user-center'], resolve);
const MovieDetail = resolve => require(['components/movie-detail/movie-detail'], resolve);
const ReviewDetail = resolve => require(['components/review-detail/review-detail'], resolve);
const AllDiscussion = resolve => require(['components/all-discussion/all-discussion'], resolve);
// const Login = resolve => require(['components/login/login'], resolve);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/movie-show'
    },
    {
      path: '/movie-show',
      component: MovieShow
    },
    {
      path: '/user',
      component: UserCenter
    },
    // {
    //   path: '/login',
    //   component: Login
    // },
    {
      path: '/movie/:movieId',
      component: MovieDetail,
      children: [
        {
          path: 'review/:reviewId',
          component: ReviewDetail
        },
        {
          path: ':discussType',
          component: AllDiscussion
        }
      ]
    }
  ],
  mode: 'history'
});
