<template>
  <div>
    <ShowBlogs />
    <ListBlogs />
  </div>
</template>

<script>
// import AddBlog from './components/AddBlog.vue'
import ShowBlogs from './components/ShowBlogs.vue'
import ListBlogs from './components/ListBlogs.vue'
export default {
  components: {
    // AddBlog,
    ShowBlogs,
    ListBlogs,
  },
  data() {
    return {

    }
  }

}
</script>

<style>
body {
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>
