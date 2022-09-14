import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '@/router'
// import mock from '@/mock'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

// require('@/mock')
// mock(true);
// console.log(mock);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
