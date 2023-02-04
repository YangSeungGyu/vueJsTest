import Vue from 'vue';
import VueRouter from 'vue-router'
import Home from "./components/views/Home";
import Test from "./components/views/Test";

// 1.Vue 와 VueRouter 를 연결
Vue.use(VueRouter);

// 2. route 정의
const routes = [ 
                    {
                        path: '/',   // url 경로
                        component : Home,// 매핑하고 싶은 컴포넌트(import필요!)
                        //name: (생략)       // name을 사용해서 component명을 정할 수 있지만 path로 부를 것
                    	//props: {'' : ''}, // 라우팅 이동 시 파라미터 정보 전달
                        //query: {'' : ''}  // 라우팅 이동 시 쿼리스트링 정보 전달
                    },
                    {
                        path: '/test',    
                        component : Test,
                    }
                ]

// 3. VueRouter 에 router 등록
const router = new VueRouter({
    mode: 'history',  // URL '#'해시값 지우기 위해 설정
    routes   //  routes : routes 에서 routes : 생략
})


// 4. 설정한 VueRouter 인스턴스 export
export default router;