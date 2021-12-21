import Vue from 'vue'
import App from './App.vue'
import VueResoure from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResoure)

new Vue({
  render: h => h(App),
}).$mount('#app')
