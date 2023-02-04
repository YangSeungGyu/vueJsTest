<template>
  <div  id="app">
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
    <div id="contents">
        <router-view></router-view>
    </div>
  </div>
</template> 

<script>

export default {
  name : "App"
 ,data(){
    return{
      openMadal : false
      ,menuList : [
                    {'nm':'HOME','url':'/'},
                    {'nm':'MENU1','url':'/test'},
                  ]
    }
  },
  methods : {
   
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
