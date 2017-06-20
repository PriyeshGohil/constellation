import AddBlog from './components/AddBlog.vue'
import AllBlogs from './components/AllBlogs.vue'
import SingleBlog from './components/SingleBlog.vue'
import SignUp from'./components/SignUp.vue'

export default [
    {path: '/', component: AllBlogs},
    {path: '/addBlog', component: AddBlog, props: true},
    {path: '/blog/:id', component: SingleBlog},
    {path: '/signUp', component: SignUp}

]