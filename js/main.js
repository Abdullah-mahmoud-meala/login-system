var nameAcc = document.querySelector("#name");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var signUp = document.querySelector("#SignUp");
var success = document.querySelector("#success")
var logInEmail = document.querySelector("#emailA")
var logInEmailPAsswrd = document.querySelector("#passwordA")
var loginBtn = document.querySelector("#loginBtn")


var acountContainer=[];
var reg = {
    name : {
        value : /^[a-z0-9_-]{3,15}$/ ,
        isValid: false
    },
    email : {
        value : /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ ,
        isValid: false
    },
    password : {
        value : /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/  ,
        isValid: false 
    }
}

if(localStorage.getItem("con") !== null){

    acountContainer =  JSON.parse(localStorage.getItem("con"))
    console.log(acountContainer);
    
};



// signUp.addEventListener("click" , addAcount);


// try use include method

function addAcount(){
if(forRepeat()==false && acountContainer !== "" ){
  
    var accounts = {
        acc : nameAcc.value,
        myMail : email.value,
        pass : password.value
    }

  
        acountContainer.push(accounts);
        localStorage.setItem("con",JSON.stringify(acountContainer))
        clearSignUp()     
       

        
       
        

}else{
    Swal.fire({
        icon: "error",
        title: "your name or email is already exist",
        text: "Or you did not even enter any value!",
      });
}

    
}






function clearSignUp (){
    nameAcc.value = ""
    email.value = ""
    password.value=""
}

// nameAcc.addEventListener("keyup",function(){

//     signUpValidation(this);
// })
// email.addEventListener("keyup",function(){

//     signUpValidation(this);
// })
// password.addEventListener("keyup",function(){

//     signUpValidation(this);
// })




function signUpValidation(element){

    if(reg[element.id].value.test(element.value)){
        element.nextElementSibling.classList.add("d-none")
        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
        reg[element.id].isValid= true
      
    }else{

        element.classList.remove("is-valid")
        element.classList.add("is-invalid")
        reg[element.id].isValid= false
        element.nextElementSibling.classList.remove("d-none")
}
toggle()

}


function toggle(){
    if(reg.name.isValid&& reg.email.isValid &&  reg.password.isValid){

        signUp.disabled = false
      
    }else{
        signUp.disabled = true
      
    }
}

function forRepeat(){
    for(var i =0 ;i<acountContainer.length; i++){
        if (nameAcc.value == acountContainer[i].acc&&email.value==acountContainer[i].myMail) {
            return true

        }
    }
return false
}
 
 let currentUserName = 'user name'

function userLogin(){

    for (var i = 0; i < acountContainer.length; i++) {
       const {acc,myMail,pass} = acountContainer[i];
    //    console.log(myMail, pass)
    //    console.log(logInEmail.value , logInEmailPAsswrd.value)
        if(myMail == logInEmail.value && pass == logInEmailPAsswrd.value ){
        window.location.href = "../wlc/welcom.html";
        console.log(window.location.href);
        localStorage.setItem("currentUserName", JSON.stringify(acc))
        
         break
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Your email or password is incorrect. Please ensure you enter the correct values.",
              });
    }

        }
    }

    if(window.location.href.includes('http://127.0.0.1:5500/wlc/welcom.html')){
        // console.log(window.location.href)
        // console.log( document.getElementById("userName"));
        // console.log(JSON.parse(localStorage.getItem(currentUserName)));

    document.getElementById("userName").innerHTML = JSON.parse(localStorage.getItem("currentUserName"))

    }



if(window.location.href == "http://127.0.0.1:5500/index.html"){
    loginBtn.addEventListener("click",userLogin)
}
