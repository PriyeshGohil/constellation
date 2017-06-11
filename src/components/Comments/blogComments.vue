<template>
   <div>
       <h2>blog Comments</h2>
       <ul>
           <li v-for='comment in comments'>
               <p>{{comment.message}}</p>
               <p>{{comment.commenter}}</p>
           </li>
       </ul>
   </div>
</template>

<script>
import {db} from '../../firebase.js'
export default {
    props: ['currentBlogId'],

    data(){
        return{
            comments: []
        }
    },
    methods: {
        getComments() {
            db.ref('/comments').once('value', snapshot => {
                const allComments = snapshot.val();                
                const allCommentsKeys = Object.keys(allComments);
                
                allCommentsKeys.forEach(CommentId => {
                    if(allComments[CommentId].blogId === this.currentBlogId){
                        this.comments.push(allComments[CommentId]);
                    }
                });
            });
        }
    },

    created() {
        this.getComments();
    }
}
</script>

<style>

</style>
