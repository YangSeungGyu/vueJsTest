<template>
  <div>
    <div id="popup" class="black-bg" v-if="openMadal">
      <div  class="page">
        <h4>팝업 이름</h4>
        <p>팝업 내용</p>
        <button  type="button"  @:click="openMadal = false">닫기</button>
      </div>
    </div>

    <div class="header">
      <div class="menu">
        <a v-for="(obj,i) in menuList" :key="(obj,i)" :href="obj['url']">
          {{obj['nm']}}:{{i}}
        </a>
      </div>

    </div>
    <div class="contents">
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
        <button id="testBt" type="button"  @:click="openMadal = true">팝업</button>
      </div>
    </div>

   
    
  </div>
</template> 

<script>
import comm from './assets/js/comm.js';

export default {
  data(){
    return{
      openMadal : false
      ,testVal1 : '자료1'
      ,headerCss : ' background-color: red;'
      ,testList : ['AAA','BBB','CCC',]
      ,testMap : {'a1':'1111','a2':'2222'}
      ,menuList : [
                    {'nm':'HOME','url':'/test1'},
                    {'nm':'MENU1','url':'/test2'},
                    {'nm':'MENU2','url':'/test3'},
                  ]
      ,t1 : comm.tt1            
      ,t2 : comm.tt2
    }
  },
  methods : {
    testFn(val1){
     alert(val1);
    }
  },
  components: {
  }
}
</script>

<style>

.menu {
  background : darkblue;
  padding : 15px;
}

.menu a {
  color :blue;
  padding: 10px;
}

body {
  margin : 0
}

div {box-sizing: border-box;}

.black-bg {
  width:100%;
  height: 100%;
  background:rgba(0,0,0,0.5);
  position : fixed; padding:20px;
}

.page {
  width: 100%; background:white;
  padding : 20px;
}
</style>
