 /**
 * @author: Amey Parundekar
 * signup handler
 */

//Preloading animation.
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },1000);
  }
}

//Script running when document ready.
$(document).ready(function(){
//Handling username-entry 
 $('#username').on("keyup",function(){
          //code for empty username entry
          if($("#username").val().trim()==""){
              $("#username-label").html("Username");
          }else{
            //XHR for getting username - returns boolean value 
            userCheck = true;
            var userReq = new XMLHttpRequest();
            userReq.onload = function(){
              if(userReq.readystate = XMLHttpRequest.DONE){
                  if(userReq.status === 200||userReq.status === 304){
                    if(userReq.responseText=='true'){
                      $("#username-label").html("No such user available! :(");
                    }else{
                      $("#username-label").html("Hello :)");
                    }
                  }else if(userReq.status === 403){
                    console.log(userReq.responseText);
                  }
              }
          }
         username = $("#username").val();
<<<<<<< HEAD
         userReq.open('GET','https://dysprosium60.hasura-app.io/check-username?val='+username,true);
=======
         userReq.open('GET','https://dysprosium60.hasura-app.io//check-username?val='+username,true);
>>>>>>> remdev/master
         userReq.send(null);
          }
});

//XHR for login - Log in the user 
    $("#signin-button").on("click",function(){
        console.log("clicked");
        var login = new XMLHttpRequest();
        login.onload = function(){
            if(login.readystate = XMLHttpRequest.DONE){
                if(login.status === 200){
                    //console.log(login.responseText);
<<<<<<< HEAD
                    window.location.href = "https://dysprosium60.hasura-app.io/user-console.html";
=======
                    window.location.href = "https://dysprosium60.hasura-app.io//user-console.html";
>>>>>>> remdev/master
                }else{
                    $("#signin-form").prepend("<span style='color:crimson'>Invalid credentials<span>");
                }
            }
        }
        var username = $("#username").val();
        var password = $("#password").val();
<<<<<<< HEAD
        login.open('POST', 'https://dysprosium60.hasura-app.io/login', true);
=======
        login.open('POST', 'https://dysprosium60.hasura-app.io//login', true);
>>>>>>> remdev/master
        login.setRequestHeader('Content-Type', 'application/json');
        login.send(JSON.stringify({username:username,password:password}));
    });

});