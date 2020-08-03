import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Register from '../views/Register'
import NavMenu from '../components/Navigator'
import Progess from '../components/Progess'

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
        path: '/login',
        name: 'login',
        component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/nav',
            name: 'navmenu',
            component: NavMenu
        },
        {
            path: '/progess',
            name: 'progess',
            component: Progess
        },
    ]
});
