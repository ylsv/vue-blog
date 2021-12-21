import Vue from 'vue'
import App from './App.vue'
import VueResoure from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResoure)

Vue.filter('touppercase', val => val.toUpperCase())
Vue.filter('snippet', val => `${val.slice(0, 100)}...`)

new Vue({
  render: h => h(App),
}).$mount('#app')
