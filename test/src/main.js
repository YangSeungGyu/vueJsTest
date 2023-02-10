import { createApp } from 'vue'
import App from './App.vue'

// 생성한 뷰 라우터 받아오기
import { router } from './router.js'
import store  from './store'

import axios from 'axios'//ajax 

//const storage = createStore(store)

const app = createApp(App)
app.use(router)  // 라우터 사용
app.use(store)  // store 사용
app.config.globalProperties.$axios = axios; // ajax 통신 전역셋팅


app.mount('#app')


