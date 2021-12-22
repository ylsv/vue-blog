import ShowPosts from './components/ShowPosts.vue'
import AddPost from './components/AddPost.vue'
import SinglePost from './components/SinglePost.vue'

export default [
  {
    path: '/',
    component: ShowPosts,
  },
  {
    path: '/add',
    component: AddPost,
  },
  {
    path: '/post/:id',
    component: SinglePost,
  }
]