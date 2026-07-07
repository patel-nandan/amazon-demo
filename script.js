// Form References

const signupBox = document.getElementById("signupBox");
const loginBox = document.getElementById("loginBox");

const showLogin = document.getElementById("showLogin");
const showSignup = document.getElementById("showSignup");


// Switch Forms

showLogin.addEventListener("click", function(){

    signupBox.style.display="none";
    loginBox.style.display="block";

});

showSignup.addEventListener("click", function(){

    loginBox.style.display="none";
    signupBox.style.display="block";

});


// Signup

document.getElementById("signupBtn").addEventListener("click", function(){

    let name=document.getElementById("signupName").value.trim();
    let email=document.getElementById("signupEmail").value.trim();
    let password=document.getElementById("signupPassword").value.trim();

    if(name=="" || email=="" || password=="")
    {
        alert("Please fill all fields");
        return;
    }

    let users=JSON.parse(localStorage.getItem("users")) || [];

    let existingUser=users.find(function(user){

        return user.email===email;

    });

    if(existingUser){

        alert("Email already registered");
        return;

    }

    users.push({

        name:name,
        email:email,
        password:password

    });

    localStorage.setItem("users",JSON.stringify(users));

    alert("Signup Successful");

    document.getElementById("signupName").value="";
    document.getElementById("signupEmail").value="";
    document.getElementById("signupPassword").value="";

});


// Login

document.getElementById("loginBtn").addEventListener("click",function(){

    let email=document.getElementById("loginEmail").value.trim();
    let password=document.getElementById("loginPassword").value.trim();

    if(email=="" || password=="")
    {
        alert("Please fill all fields");
        return;
    }

    let users=JSON.parse(localStorage.getItem("users")) || [];

    let validUser=users.find(function(user){

        return user.email===email && user.password===password;

    });

    if(validUser){

        alert("Login Successful");

        document.getElementById("loginEmail").value="";
        document.getElementById("loginPassword").value="";

    }
    else{

        alert("Login Failed");

    }

});