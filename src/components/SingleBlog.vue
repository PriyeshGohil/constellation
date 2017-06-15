<template>
    <div class="container blogPost">
        <h2 class='blogPost__title'>{{blog.title}}</h2>
        <img class="blogPost__img" src="https://images.pexels.com/photos/192632/pexels-photo-192632.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
        
        <section>
            <ul class='blogPreview__hashtags'>
                <li v-for='hashtag in blog.hashtags'>{{hashtag}}</li>
            </ul>
            
            <p class="blogPost__content">{{blog.content}}</p>

            <div>
                <div>
                    <span class='blogPost__date'>{{blog.postedDate}} /</span> 
                    <span class="blogPost__comments">2 Comments /</span>
                    <span class="blogPost__comments">add A Comment</span>
                </div>
            </div>

             <div class='blogPost__nav'>
                <router-link v-if="blogSiblings.prev" v-bind:to="'/blog/' + blogSiblings.prev">previous post</router-link>
                <router-link v-if='blogSiblings.next' v-bind:to="'/blog/' + blogSiblings.next">next post</router-link>
            </div>

            <addComment v-bind:currentBlogId='blogId'></addComment>
            <blogComments v-bind:currentBlogId='blogId'></blogComments>

            <div class='blogPost__embed'>
                <pre>add embed code</pre>
            </div>
        </section>
    </div>
</template>

<script>
import {db} from '../firebase.js'
import AddComment from './Comments/AddComment.vue'
import BlogComments from './Comments/blogComments.vue'

export default { 
    components: {'addComment' : AddComment, 'blogComments' : BlogComments},
    data() {
        return {
            blog: {},
            allBlogIndexes: {},
            blogSiblings: {next: false, prev: false},
        }
    },

    methods: {
        getBlog() {
            const blogRef = db.ref('blogs/' + this.blogId);
            blogRef.on('value', snapshot => {
                this.blog = snapshot.val();
                console.log('snapshot.keys:', snapshot.keys);
                this.getAllBlogIndexes();
            });
        },

       
        getAllBlogIndexes() {
            db.ref('blogrefs').once('value', snapshot => {
                this.allBlogIndexes = snapshot.val();
                this.getSiblingBlogIds();
            });
        },

         // prev and next blog ids.
        getSiblingBlogIds() {
            const allBlogIndexKeys = Object.keys(this.allBlogIndexes);
            const totalBlogs = allBlogIndexKeys.length;
            const currentBlogIndex = allBlogIndexKeys.indexOf(this.blogId);
            
            // reset blogSiblings
            this.blogSiblings.prev = false;
            this.blogSiblings.next = false;

            if(totalBlogs === 0) return;

            if(currentBlogIndex === 0) {
                this.blogSiblings.next = allBlogIndexKeys[1];
                return;
            }

            if((currentBlogIndex + 1) === totalBlogs) {
                this.blogSiblings.prev = allBlogIndexKeys[currentBlogIndex - 1];
                return;
            }

            this.blogSiblings.next = allBlogIndexKeys[currentBlogIndex + 1];
            this.blogSiblings.prev = allBlogIndexKeys[currentBlogIndex - 1];
        },
    },

    created() {
        this.getBlog();
    },

    computed: {
        blogId() {
            return this.$route.params.id
        }
    },
     watch: {
    // call this method again if the route changes
    '$route': 'getBlog'
  }
}
</script>

<style>
    .blogPost__title {
       text-align: center;
    }

    .blogPost__img {
        display: block;
        margin: 25px auto;
        width: 100%;
        max-width: 800px;
        height: 300px;
    }

    section {
        max-width: 650px;
        margin: 0 auto;
    }

    .blogPost__content {
        margin: 0;
        margin-bottom: 20px;
        font: 18px 'Roboto', sans-serif;
        white-space: pre-wrap;
    }

    .blogPost__date, .blogPost__comments {
        font: 14px 'Roboto', sans-serif;
    }

    .blogPost__date {
        color: #8f8f8f;
    }

    .blogPost__comments {
        color: #15d698;
    }

    .blogPost__nav {
        border-top: 1px solid #8f8f8f;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }  
    
    .blogPost__nav a {
        color: #15d698;
        text-decoration: none;
    }

</style>
