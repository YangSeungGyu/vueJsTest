
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router   // 전역으로 router 정의(라우터 객체 추가)
}).$mount('#app')

