import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Login'
import Register from '../components/Register'

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
        path: '/home',
        name: 'home',
        component: Home
    },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
    ]
});
