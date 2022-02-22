//create the constructor ES2015 / class

class User{
    constructor(email,password,first,last,address,phone,payment,color){
        this.email=email;
        this.password=password;
        this.fname=first;
        this.lname=last;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }
} 

//this is local var(user)-->
function isValid(user){
    //return false when the user is not valid
    //return true when the user is valid
    let valid=true;
    //we need ot rest the original appearance of the inputs
    //by removing hte class alert-error
    $("input").removeClass("alert-error");
    //validations
    if(user.email.length==0){
        // if we get zero there are no emails registered and not valid
        valid=false;
        $("#txtEmail").addClass("alert-error");
        console.log("Missing the email");
    }
    if(user.password.length==0){
        valid=false;
        console.log("Missing the password");
        $("#txtPassword").addClass("alert-error");
    }
    if(user.fname.length==0){
        valid=false;
        console.log("Missing the First name");
        $("#txtFirst").addClass("alert-error");
    }
    if(user.lname.length==0){
        valid=false;
        console.log("Missing the Last name");
        $("#txtLast").addClass("alert-error");
    }
    //add the validation for first name and last name.
    return valid;
}

function registerUser(){
    let email = $("#txtEmail").val(); //*check your id on the html
    let password = $("#txtPassword").val();
    let first = $("#txtFirst").val();
    let last = $("#txtLast").val();
    let age = $("#txtAge").val();
    let address = $("#txtAddress").val();
    let phone = $("#txtPhone").val();
    let payment = $("#selPayment").val();
    let color = $("#txtColor").val();

    let user = new User(email,password,first,last,age,address,phone,payment,color);
    // validate the user 
    if(isValid(user)){
        saveUser(user);//this fn is in the storeManager.js
        console.log(user);
    } 
    clearForm();
}

function clearForm(){
    $("#txtEmail").val(""); 
    $("#txtPassword").val("");
    $("#txtFirst").val("");
    $("#txtLast").val("");
    $("#txtAge").val("");
    $("#txtAddress").val("");
    $("#txtPhone").val("");
    $("#selPayment").val("");
    $("#txtColor").val("");
}

function init(){
    console.log("Init Register");
    //hook events
    $("#btnRegister").click(registerUser);
}
window.onload=init;