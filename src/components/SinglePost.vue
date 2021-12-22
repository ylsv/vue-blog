<template>
  <div id="single-post">
    <h1>{{post.title}}</h1>
    <article>{{post.content}}</article>
    <p>Author: {{post.author}}</p>
    <ul>
      <li v-for="category in post.categories" :key="category">{{category}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      post: {},
    }
  },
  async created() {
    const res = await this.$http.get(`https://vue-blog-39ce6-default-rtdb.firebaseio.com/posts/${this.id}.json`)
    this.post = res.body
  }
}
</script>

<style scoped>
#single-post {
  max-width: 960px;
  margin: 0 auto;
}
</style>