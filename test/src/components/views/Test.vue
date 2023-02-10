<template>
    <div>
        테스트 페이지
        <input type="text" v-model="token">
        <button  type="button" @click="getToken">토큰가져오기</button>
    </div>
</template>

<script>
    export default {
        name: "Test"
        ,data(){
            return{
                token : null       
            }
        }
        , computed: {
        //token(){
         //   return this.$store.state.token;
        //}
    }
        ,methods: {
        }
    }
</script>
