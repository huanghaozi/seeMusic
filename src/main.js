import './css/main.scss'
import 'csshake/dist/csshake.min.css'
import 'css/textinput/input-text-effect.css';
import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './components/App.vue'
import filters from './filters.js'
import VueRouter from 'vue-router'
import SongList from 'components/SongList'
import Login from 'components/Login'
import Comments from 'components/Comments'
import Loading from 'components/Loading'
import Popup from 'components/Popup'

Vue.use(VueRouter);
Vue.filter('msecondToMinutes', filters.msecondToMinutes);
Vue.filter('getTime', filters.getTime);

// 全局注册Loading组件
Vue.component('Loading', {...Loading});

const routes = [
    {
        path: '/',
        components: {
            default: SongList
        }
    },
    {
        path: '/songlist',
        components: {
            default: SongList
        }
    },
    {
        path: '/login',
        components: {
            default: SongList,
            modal: Login
        }
    },
    {
        path: '/comments',
        component: Comments
    }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router,
    ...App
}).$mount('#app');

