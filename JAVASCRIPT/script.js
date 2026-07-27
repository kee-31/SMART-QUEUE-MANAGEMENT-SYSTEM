// =============================
// REGISTER
// =============================

function registerUser() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(name==="" || email==="" || password===""){
        alert("Please fill all fields.");
        return;
    }

    let user = {
        name:name,
        email:email,
        password:password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!");

    window.location.href="login.html";
}

// =============================
// LOGIN
// =============================

function loginUser(){

    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    let user=JSON.parse(localStorage.getItem("user"));

    if(user==null){
        alert("Register first.");
        return;
    }

    if(email===user.email && password===user.password){

        alert("Login Successful!");

        window.location.href="queue.html";

    }else{

        alert("Wrong Email or Password");

    }

}

// =============================
// TOKEN
// =============================

function generateToken(){

    let name=document.getElementById("name").value;
    let service=document.getElementById("service").value;

    if(name==="" || service===""){
        alert("Fill all fields");
        return;
    }

    let tokens = JSON.parse(localStorage.getItem("tokens")) || [];

    let tokenNumber = tokens.length + 101;

    let token = {
        token:"Q-" + tokenNumber,
        name:name,
        service:service,
        status:"Waiting"
    };

    tokens.push(token);

    localStorage.setItem("tokens", JSON.stringify(tokens));

    document.getElementById("result").innerHTML = `
        <h2 style="color:green;">Token Generated Successfully</h2>

        <p><strong>Token:</strong> ${token.token}</p>
        <p><strong>Name:</strong> ${token.name}</p>
        <p><strong>Service:</strong> ${token.service}</p>
        <p><strong>Status:</strong> ${token.status}</p>
    `;
}