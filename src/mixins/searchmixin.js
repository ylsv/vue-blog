export default {
  computed: {
    filteredPosts(){
      return this.posts.filter(post => post.title.toLowerCase().includes(this.search.toLowerCase()))
    }
  }
}