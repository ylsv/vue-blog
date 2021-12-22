<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    }
  },
  async created() {
    const res = await this.$http.get(`http://jsonplaceholder.typicode.com/posts/${this.id}`)
    this.blog = res.body
  }
}
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>