<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {
    Header,
  }
}
</script>

<style>
body {
  margin: 0;
  box-sizing: border-box;
}
body, input, button, select {
  font-family: 'Noto Sans', sans-serif;
}
</style>
