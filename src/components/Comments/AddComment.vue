<template>
  <form>
        <h2>Add Comment</h2>
         <label>Comment:</label>
        <textarea v-model='comment.message'></textarea>
        <label>Your Name</label>
        <input v-model="comment.commenter" type='text'>
        <button v-on:click.prevent='addComment()'>add Comment</button>
  </form>
</template>

<script>
import {db} from '../../firebase.js'
export default {
    props: ['currentBlogId'],
    data() {
        return {
            comment: {blogId: this.currentBlogId, message: '', commenter: ''}
        }
    },
    methods: {
        addComment() {
            const commentId = db.ref().push().key;
            db.ref('comments/' +  commentId).set(this.comment);
        }
    }
}
</script>

<style>

</style>
