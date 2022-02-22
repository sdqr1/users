function login(){
    console.log("Executing login function ... ");

    let username = $("#txtUsername");
    let password = $("#txtPassword").val();

    console.log(username,password);

    console.log(users);
    for(let i=0;i<users.length;i++){
        if(username===users[i].email && password===users[i].password){
            console.log("I found it!");
            
            Window.location="home.html";
        }
    }
    if(!flag){
        console.log("Invalid credentials");
        $("#alertError").removeClass(hide);
        setTimeout(function(){
            $("#alertError").addClass(hide);
        },3000);
    }
}

function init(){
    console.log("Login script");
    //hook events
    $("#btnLogin").click(login);
}

window.onload=init;