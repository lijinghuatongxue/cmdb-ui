import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home'
import Register from '../components/Register'
import Login from "../components/Home";

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
        path: '/',
        name: 'home',
        component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/nav',
            name: 'navigator',
            component: () => import('../components/Navigator.vue')
        },
    ]
});
