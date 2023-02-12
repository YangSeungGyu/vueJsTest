const comm = {
    tt1:11
    ,tt2:22
    ,ajaxPost : async function (url,data,comp){
        {
         try {
          if(comp.isLogin){ 
            //---------------------------------------토큰 체크
             let tokenState = 'N';
             const res = await  comp.$axios.post('/api/checkToken' 
                   ,null
                   ,{
                     headers: {
                       "Content-Type": 'application/json'
                       ,"Authorization": comp.getToken
                     }
                   });
             console.log('토큰 체크 :'+ res.data.tokenState); 
             console.log('토큰 체크 번호 :'+ comp.getToken); 
             tokenState = res.data.tokenState;
             if(tokenState == 'R'){
               //---------------------------------------토큰 재발행
               const res2 = await  comp.$axios.post('/api/reflashToken' 
                   ,null
                   ,{
                     headers: {
                       "Content-Type": 'application/json'
                       ,"Authorization": comp.getRefreshToken
                     }
                   });
               tokenState = res2.data.tokenState;
               console.log('토큰 재발행 :'+ res2.data.tokenState); 
               if(tokenState == 'S'){
                   //acessToken 재셋팅
                   console.log('재발행 토큰번호 : '+res2.data.token);
                   comp.$store.dispatch('resetToken', res2.data.token); 
               }else{
                 alert('인증기간이 만료되었습니다.');//RefreshToken까지 만료된 상태
                 comp.$router.push('/login'); // 로그인 이동
               }
             }
           }else{
             alert('로그인 되지 않았습니다.');
             comp.$router.push('/login'); // 로그인 이동
           }

           //---------------------------------------원래 해야하는 통신(로그인 비로그인 상관없음.)
           const res3 = await  comp.$axios.post(url,data
           ,{
             headers: {
               "Content-Type": 'application/json'
               ,"Authorization": comp.getToken
             }
           });

           
           return res3;
         } catch(err) {
           console.log("Error >>", err);
         }
       }

       
     }
}

export default comm