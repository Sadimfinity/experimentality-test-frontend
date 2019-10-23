import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import deleteQuote from './components/deleteQuote.vue'
import getQuote from './components/getQuote.vue'
import getImage from './components/getImage.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    component: getImage
  },
  {
    path: '/getQuote',
    component: getQuote
  },
  {
    path: '/deleteQuote',
    component: deleteQuote
  }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
