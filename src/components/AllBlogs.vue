<template>
  <section class='allBlogs container'>
      <div class='blog' v-for="blog in blogs">
        <figure class='blogPreview'>
          <figcaption class="">
            <ul class="blogPreview__hashtags">
                <li v-for='hashtags in blog.hashtags'>{{hashtags}}</li>
            </ul>
            <h3 class="blogPreview__title">{{blog.title}}</h3>
          </figcaption>
        </figure>

        <div class="blogPreview__info">
          <p><span>{{blog.postedDate}}</span> <a href='#'>/ 1 Comment</a></p>
        </div>
      </div>
  </section>

</template>

<script>
import {db} from '../firebase.js'

export default {
  data() {
    return {
      blogs: {}
    }
  },

  methods: {
    getBlogs() {
      db.ref('blogs').on('value', snap => this.blogs = snap.val());
    },
  },

  created() {
    console.log('yo!');
    this.getBlogs();
  }
}
</script>

<style>

</style>
