import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Carousel3d from 'vue-carousel-3d'
import "nes.css/css/nes.min.css";
import VueNesCss from 'vuenes.css'
import 'v-slim-dialog/dist/v-slim-dialog.css'
import SlimDialog from 'v-slim-dialog'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Carousel3d)
Vue.use(VueNesCss)
Vue.use(SlimDialog)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
