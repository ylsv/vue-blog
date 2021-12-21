<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div class="single-blog" v-for="blog in filteredBlogs" :key="blog.id">
      <h2 v-rainbow>{{blog.title | touppercase}}</h2>
      <article>{{blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      blogs: [],
      search: '',
    }
  },
  async created(){
    const res = await this.$http.get('http://jsonplaceholder.typicode.com/posts')
    this.blogs = res.body.slice(0, 10)
  },
  computed: {
    filteredBlogs(){
      return this.blogs.filter(blog => blog.title.includes(this.search))
    }
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
  }
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
