<template>
  <div id="add-post">
    <h2>Add a New Post</h2>
    <form v-if="!submitted">
      <label for="title">Post Title:</label>
      <input type="text" id="title" v-model.lazy="post.title" required>
      <label for="post-content">Post Content:</label>
      <textarea type="text" id="post-content" v-model.lazy="post.content"></textarea>
      <div id="checkboxes">
        <label for="ninjas">Ninjas</label>
        <input type="checkbox" id="ninjas" value="ninjas" v-model="post.categories">
        <label for="wizards">Wizards</label>
        <input type="checkbox" id="wizards" value="wizards" v-model="post.categories">
        <label for="mario">Mario</label>
        <input type="checkbox" id="mario" value="mario" v-model="post.categories">
        <label for="cheese">Cheese</label>
        <input type="checkbox" id="cheese" value="cheese" v-model="post.categories">
      </div>
      <label for="author">Author:</label>
      <select id="author" v-model="post.author">
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
      authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
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
#add-post *{
    box-sizing: border-box;
}
#add-post{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
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
}
</style>