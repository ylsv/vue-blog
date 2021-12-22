<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div class="single-blog" v-for="blog in filteredBlogs" :key="blog.id">
      <router-link :to="`/blog/${blog.id}`"><h2 v-rainbow>{{blog.title | touppercase}}</h2></router-link>
      <article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchmixin'
export default {
  name: 'ShowBlogs',
  data() {
    return {
      blogs: [],
      search: '',
    }
  },
  async created(){
    const res = await this.$http.get('https://vue-blog-39ce6-default-rtdb.firebaseio.com/posts.json')
    const blogsArray = []
    for(let key in res.body) {
      let obj = res.body[key]
      obj.id = key
      blogsArray.push(obj)
    }
    this.blogs = blogsArray
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
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  box-sizing: border-box;
  padding: 20px;
  margin: 20px 0;
  background: #eee;
}
input[type="text"]{
    display: block;
    width: 100%;
    padding: 8px;
}
</style>
