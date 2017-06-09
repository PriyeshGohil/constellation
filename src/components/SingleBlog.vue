<template>
    <div class="container blogPost">
        <!--{{blog}}-->
        <h2 class='blogPost__title'>{{blog.title}}</h2>
        <img class="blogPost__img" src="https://images.pexels.com/photos/192632/pexels-photo-192632.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
        
        <ul class='blogPreview__hashtags'>
            <li v-for='hashtag in blog.hashtags'>{{hashtag}}</li>
        </ul>
        
        <p class="blogPost__content">{{blog.content}}</p>
        
        <div class='blogPost__nav'>
            <a href='#'>Preview</a>
            <a href='#'>Next</a>
        </div>
        <div>
            <p>{{blog.postedDate}} / comments 2</p>
        </div>
        <div class='blogPost__embed'>
            <pre>add embed code</pre>
        </div>
    </div>
</template>

<script>
import {db} from '../firebase.js'

export default { 
    data() {
        return {
            blog: {},
            blogId :this.$route.params.id
        }
    },

    methods: {
        getBlog() {
            const blogRef = db.ref('blogs/' + this.blogId);
            blogRef.once('value', snapshot => this.blog = snapshot.val());
        }
    },

    created() {
        this.getBlog();
    }

}
</script>

<style>
    .blogPost__title {
       text-align: center;
    }

    .blogPost__img {
        display: block;
        margin: 0 auto;
        width: 100%;
        height: 300px;
    }


</style>
