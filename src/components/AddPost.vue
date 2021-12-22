<template>
  <div id="add-post">
    <h2>Add a New Post</h2>
    <form v-if="!submitted">
      <label for="title">Title:</label>
      <input type="text" id="title" v-model.lazy="post.title" required>
      <label for="post-content">Content:</label>
      <textarea type="text" id="post-content" v-model.lazy="post.content" required></textarea>
      <div id="checkboxes">
        <p id="categories">Сategories:</p>
        <label for="love">Love</label>
        <input type="checkbox" id="love" value="love" v-model="post.categories">
        <label for="death">Death</label>
        <input type="checkbox" id="death" value="death" v-model="post.categories">
        <label for="nature">Nature</label>
        <input type="checkbox" id="nature" value="nature" v-model="post.categories">
        <label for="religion">Religion</label>
        <input type="checkbox" id="religion" value="religion" v-model="post.categories">
      </div>
      <label for="author">Author:</label>
      <select id="author" v-model="post.author">
        <option disabled value="">Choose post author</option>
        <option v-for="author in authors" :key="author">{{author}}</option>
      </select>
      <button @click.prevent="addPost">Add Post</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>Preview Your Post</h3>
      <p>Post title: {{post.title}}</p>
      <p>Post content:</p>
      <p>{{post.content}}</p>
      <p>Post Categories:</p>
      <ul>
        <li v-for="category in post.categories" :key="category">{{category}}</li>
      </ul>
      <p>Author: {{post.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPost',
  data() {
    return {
      post: {
        title: '',
        content: '',
        categories: [],
        author: '',
      },
      authors: ['William Blake', 'Percy Shelley', 'Lord Byron', 'John Keats'],
      submitted: false,
    }
  },
  methods: {
    addPost(){
      this.$http.post('https://vue-blog-39ce6-default-rtdb.firebaseio.com/posts.json', this.post).then(() => this.submitted = true)
    },
  }
}
</script>

<style scoped>
#add-post * {
    box-sizing: border-box;
}
#add-post {
    margin: 20px auto;
    max-width: 500px;
}
#categories {
  margin: 20px 0 10px;
}
label {
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3 {
    margin-top: 10px;
}
input[type="checkbox"] {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
#checkboxes label {
  display: inline-block;
  cursor: pointer;
  margin: 0;
}
button {
  margin-left: 10px;
}
select {
  height: 24px;
}
</style>