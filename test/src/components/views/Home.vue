<template>
      <div>
        <div :style="headerCss"></div>
        <div>
          바디 {{testVal1}}<BR/> 
        </div>
        <div>
          테스트값:{{testList[0]}}<BR/>
          테스트값2:{{testMap['a1']}}
        </div>
        <div>
        <!--   <img src="./assets/images/test.jpg"/> -->
          <button id="testBt" type="button"  @:click="testFn(1)">테스트버튼</button>
          <button id="testBt" type="button"  @:click="openMadal = true">팝업2</button>
        </div>
        <div id="popup" class="black-bg" v-if="isLogin">
          로그인됨 : {{getToken}}
          <br/>
          <button type="button"  @:click="loginTestApi()"> 로그인 후 api</button>
        </div>
      </div>
  </template> 
<script>

//js import
import comm from'./../../assets/js/comm'
export default {
  name : "App"
 ,data(){
    return{
      openMadal : false
      ,testVal1 : '자료1'
      ,headerCss : ' background-color: red;'
      ,testList : ['AAA','BBB','CCC',]
      ,testMap : {'a1':'1111','a2':'2222'}
      ,t1 : comm.tt1            
      ,t2 : comm.tt2
    }
  },
  methods : {
    chekToekn(){
      alert(this.getToken());
    }
   ,loginTestApi(){
     let data = {};
     console.log(this);
      comm.ajaxPost('/api/testApi1',data,this)
      .then(//promise
        result => console.log(result)
      );
      
   }
  },
  components: {
   
  }
  ,computed: {
    //이건 함수가 아니라 data처럼 사용됨
    isLogin(){ 
        return this.$store.getters.isLogin;
    }
    ,getToken() {
        return this.$store.state.token;
    } 
    ,getRefreshToken() {
        return this.$store.state.refreshToken;
    } 
    
},
}
</script>

<style>

</style>