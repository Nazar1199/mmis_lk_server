import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import common from '@/helpers/common'
import api from '@/helpers/api'
import VueSocketIO from 'vue-socket.io'
import config from "@/helpers/config";
import PerfectScrollbar from 'vue2-perfect-scrollbar'

import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

Vue.use(PerfectScrollbar)

Vue.config.productionTip = false
Vue.prototype.$service = common
Vue.prototype.$api = api

config.getAPIAddress().then(r=> {
  Vue.prototype.$api.address = r
  console.log('api:', Vue.prototype.$api.address)
  Vue.use(new VueSocketIO({
    debug: true,
    connection: r.replace('/api/', ''),
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    },
    options: {
      path: "/socket",
      withCredentials: true,
    }
  }))
  start ()
})



function start () {
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
}


