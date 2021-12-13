import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NoteDetail from '../views/note/Detail.vue'
import NoteCreate from '../views/note/Create.vue'
import PageError from '../views/PageError.vue'
import Login from '../views/Login.vue'
import axios from 'axios'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            isLogin: true
        }
    },
    {
        path: '/note/create',
        name: 'NoteCreate',
        component: NoteCreate,
        meta: {
            auth: true
        }
    },
    {
        path: '/note/:slug',
        name: 'NoteDetail',
        component: NoteDetail
    },
    {
        path: '/note-not-found',
        name: 'NoteNotFound',
        component: PageError
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageError',
        component: PageError
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { top: 0, left:0 }
        }
    },
})
router.beforeEach(async(to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        try {
            const a = await axios.get('/api/authenticated')
        } catch (error) {
            return next({ name: 'Login' })
        }
    }
    if (to.matched.some(record => record.meta.isLogin)) {
        try {
            await axios.get('/api/authenticated')
            return next({ name: 'Home' })
        } catch (error) {
            // return next({ name: 'Login' })
        }
    }
    next()
})
export default router