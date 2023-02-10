import { createStore } from 'vuex';

export default createStore({
    state: {
        token: null,
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
    },
    actions: { // dispatch 로 부를 수 있다.
         saveToken:({commit} , _token) => {
            commit('setToken' , _token);
        }
    }
});