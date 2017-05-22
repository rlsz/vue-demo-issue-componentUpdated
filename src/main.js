import Vue from 'vue'
import App from './App'
var vueResource = require('vue-resource');
Vue.use(vueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
