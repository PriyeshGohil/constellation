<template>
    <section class='container'>
        <h1>Create A New Blog Post</h1>
        <form>
           <div> <input v-model='blog.title' placeholder="Blog Title" type='text' /></div>
            
            <div><p>Enter A comma seprated list of hashtags. e.g web, cats, dogs</p>
            <input v-model.trim.lazy='blog.hashtags' placeholder="Blog HashTags" type='text' >
            <ul v-if="blog.hashtags.length > 0" class='blogPreview__hashtags'>
                <!--{{blog.hashtags.length}}-->
                <li v-for="hashtag in previewHashTags">{{hashtag}}</li>
            </ul>
            </div>

            <div><textarea v-model="blog.content" placeholder="enter blog content" rows="4"></textarea></div>

            <button v-on:click.prevent='createBlog'>Create Blog</button>
            <a v-on:click.prevent='previewBlog'>preview</a>
        </form>
    </section>
</template>

<script>
import {db, currentUser} from '../firebase.js'

export default {
    props: ['userId'],
    data() {
        return {
            blog: {userId: this.userId, title: '', content: '', hashtags: '', postedDate: '' + new Date()}
        }
    },

    methods: {
        createBlog() {
            console.log('blog user: ', this.userId);
            const blogId = db.ref().push().key;
            const blogRefsId = db.ref().push().key;

            db.ref('blogs/' + blogId).set(this.blog); 
            db.ref('blogrefs/' + blogId).set(true);
        }
    },
    computed: {
        previewHashTags() {
            const hashtags = this.blog.hashtags.split(',');
            // filter removes all empty array items.
            this.blog.hashtags =  hashtags.filter(hashtag => hashtag.trim());
            return this.blog.hashtags;
        }
    },
}
</script>

<style scoped>
    div {
        margin: 20px;
        border: 1px solid lightpink;
        padding: 10px;
    }

    input, textarea {
            width: 90%;
        }

</style>
