import Vue from 'nativescript-vue'
import App from './components/App'
import HomePage from './components/user/views/HomePage'
import store from './store'
//import routes from "./routes";
import VueDevtools from 'nativescript-vue-devtools'
import VueApollo from "vue-apollo";
import {apolloProvider} from '../src/apollo/index'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.use(VueApollo);

new Vue({
  store,
  apolloProvider,
  //h("frame", [h(tokenInAppSet ? routes.entered : routes.login)]),
    render: (h) =>
    h("frame", [h(tokenInAppSet ? App : HomePage)]),
}).$start()
