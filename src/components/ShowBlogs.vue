<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <div class="single-blog" v-for="blog in blogs" :key="blog.id">
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
    }
  },
  async created(){
    const res = await this.$http.get('http://jsonplaceholder.typicode.com/posts')
    this.blogs = res.body.slice(0, 10)
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
</style>
