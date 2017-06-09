import AddBlog from './components/AddBlog.vue'
import AllBlogs from './components/AllBlogs.vue'
import SingleBlog from './components/SingleBlog.vue'

export default [
    {path: '/', component: AllBlogs},
    {path: '/addBlog', component: AddBlog},
    {path: '/blog/:id', component: SingleBlog}

]