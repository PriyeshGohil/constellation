<template>
    <div>
        <h1>Sign Up!</h1>
        <form>
            <input v-model="user.email" type='email' placeholder="email"/>
            <input v-model="user.name" type='text' placeholder="Username" />
            <input v-model='user.password' type='password' placeholder="Password"/>
            <!-- todo upload user Image-->
            <textarea v-model='user.bio'placeholder="bio"></textarea>
            <button v-on:click.prevent='signUpUser'>Sign Up</button>
            <button v-on:click.prevent='signOutUser'>Sign Out</button>
            <button v-on:click.prevent='signInUser'>Sign In</button>
        </form>
    </div>
</template>

<script>
import {auth} from '../firebase.js'
export default {
    data() {
        return {
            user: {name:'', password: '', bio: ''}
        }
    },

    methods: {
        signUpUser() {
            
            if(this.user.name === '' || this.user.password === '' || this.user.bio === '') return;

            const promise = auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
            
            // promise.then(fuser => {
            //     console.log(fuser.uid);
            // });

            window.w = promise;
            promise.catch(e => console.log('sign in error : ', e));
        },

        signOutUser() {
            // get current user id
            auth.signOut();
        },

        signInUser() {
            const promise = auth.signInWithEmailAndPassword(this.user.email, this.user.password);
            promise.catch(e => console.log('error: ', e));
        }
    }
}
</script>

<style>

</style>
