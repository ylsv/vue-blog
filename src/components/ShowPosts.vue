<template>
  <div id="show-posts">
    <h1>All Blog Posts</h1>
    <input type="text" v-model="search" placeholder="search posts">
    <div class="single-post" v-for="post in filteredPosts" :key="post.id">
      <router-link :to="`/post/${post.id}`"><h2 v-rainbow>{{post.title | touppercase}}</h2></router-link>
      <article>{{post.content | snippet}}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchmixin'
export default {
  name: 'ShowPosts',
  data() {
    return {
      posts: [],
      search: '',
    }
  },
  async created(){
    const res = await this.$http.get('https://vue-blog-39ce6-default-rtdb.firebaseio.com/posts.json')
    const postsArray = []
    for(let key in res.body) {
      let obj = res.body[key]
      obj.id = key
      postsArray.push(obj)
    }
    this.posts = postsArray
},
  filters: {
    touppercase: val => val.toUpperCase(),
    snippet: val => `${val.slice(0, 100)}...`
  },
  directives: {
    rainbow: {
      bind(el) {
        el.style.color = `#${Math.random().toString().slice(2,8)}`
      }
    }
  },
  mixins: [searchMixin]
}
</script>

<style scoped>
#show-posts {
  max-width: 800px;
  margin: 0 auto;
}
.single-post {
  box-sizing: border-box;
  padding: 20px;
  margin: 20px 0;
  background: #eee;
}
input[type="text"] {
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding: 8px;
}
</style>
