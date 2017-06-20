<template>
  <div id="app"> 
    <Appheader v-bind:userId="userId"></Appheader>
    <div class='container'>
      <h1 class='logo'>constellation</h1>
      <p class='introTxt'><i>Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus</i></p>
    </div>
    <router-view v-bind:userId='userId'></router-view>
  </div>
</template>

<script>
import AllBlogs from './components/AllBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import AppHeader from './components/AppHeader.vue'
import {auth} from './firebase.js'

export default {
  components: {'allBlogs': AllBlogs, 'addBlog': AddBlog, 'Appheader' : AppHeader},
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userId : null
    }
  },

  created() {
    // check if a user is signed in.
    auth.onAuthStateChanged(user => {
      if(user) {
        console.log('hey user: ', user.uid);
        this.userId = user.uid;
      }else {
        this.userId = null;
        console.log('not user');
      }
    })
  }
}
</script>

<style lang="scss">
</style>
