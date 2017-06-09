<template>
  <div id="app"> 
    <header>
    </header>
    <div class='container'>
      <h1 class='logo'>constellation</h1>
      <p class='introTxt'><i>Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus</i></p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import AllBlogs from './components/AllBlogs.vue'
import AddBlog from './components/AddBlog.vue'
export default {

  components: {'allBlogs': AllBlogs, 'addBlog': AddBlog},
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
</style>
