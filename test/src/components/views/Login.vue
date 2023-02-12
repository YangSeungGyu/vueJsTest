<template>
    <div class="loginDiv" >
		<form id="loginFrm" method="post">
			<div style=" padding: 50px 0px 0px 0px;">	
				<span class="span50">ID</span><input type="text"  name="userId" value="admin"><br/>
				<span class="span50">PW</span><input type="password" name="userPwd"  value="1234"><br/>
				<button class="bt100pct" type="button" @click="login">로그인</button>
			</div>
		</form>
	</div>
</template>

<script>
	import crypto from "crypto"

    export default {
        name: "Login"
		,
		methods: {
			login(){					
				//const pwd = crypto.createHmac('sha256','mySecretKey').update('1234').digest('hex');
				const pwd = crypto.createHmac('sha256','mySecretKey').update('1234').digest('base64');
				//필요 결과 : oSIzN+sNkxN7HDeJ6QznoSCXlKjOx7B2FA4bCc6dOnA=
				console.log(pwd);
				this.$axios.post('/api/login' 
				,JSON.stringify({
						userId : "admin",
						userPwd : pwd
				})
				,{
					headers: {
						"Content-Type": 'application/json'
					}
				}
				)
				.then(res => {
					console.log(res); 
					let userData = {
						'token':res.headers.authorization
						,'refreshToken':res.data.data.jwtRefreshToken
						,'userNm':'관리자'
					};
					this.$store.dispatch('saveUser', userData);
					this.$router.push('/'); // url  이동
				})
				.catch(error => {
					console.log(error); 
				});
			}
		},
    }

</script>


<style>
	.loginDiv {
		width : 600px;
  		height : 400px;
  		background-color: gray;
  		margin: auto;
  		margin-top: 150px;
  		
	}
	
	input {
		 width : 200px;
		 height : 25px;
		 margin:10px 5px 0px 10px;
	}
	
	.span50 {
		display:inline-block;
		 width : 50px;
		 padding : 5px 5px 5px 5px;
	}
	
	.bt100pct{
		width : 100%;
		height :30px;
		padding : 5px 5px 5px 5px;
	}
	
	
</style>

