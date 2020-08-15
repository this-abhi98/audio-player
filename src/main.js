import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store/index';
import AuthHandler from './components/AuthHandler';
import Playing from './components/Playing';
import AudioList from './components/AudioList';


Vue.use(VueRouter);

const router = new VueRouter({

    mode: 'history', //it switches to broser router mote from hash router mode

    routes: [{

            path: '/callback',
            components: {
                b: AudioList,
                a: AuthHandler
            }

        }, //components that should be rendered at particular route

        {
            path: '/Playing',
            component: Playing
        }
    ]
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');