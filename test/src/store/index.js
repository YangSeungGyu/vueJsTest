import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

export default createStore({
    state: {
        token: null
        ,userNm: null
    },
    getters: {
        isLogin(state){
            return state.token == null ? false : true ;
        }
    },
    mutations: {  // commit 으로 부를 수 있다.
        setToken(state, _token){
            state.token = _token;
        }
        ,setUserNm(state, _userNm){
            state.userNm = _userNm;
        }
    },
    actions: { // dispatch 로 부를 수 있다.
         saveUser:({commit} , _data) => {
            commit('setToken' , _data.token);
            commit('setUserNm' , _data.userNm);
        }
    }
    ,plugins : [ createPersistedState({
        paths: ["token","userNm"] //새로고침 이후 지속저장
    }) ],
});
