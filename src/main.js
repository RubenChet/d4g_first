import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'primeicons/primeicons.css' //Icons library

Vue.use(Vuesax)

Vue.config.productionTip = false

// Global Variable
Vue.prototype.$cart = []

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
