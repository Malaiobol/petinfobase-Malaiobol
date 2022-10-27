import { windowLogintoRegister } from "../../sources/scripts/changeWindow.js"

windowLogintoRegister();

function checkInputs(){
    const email    = document.getElementById("email");   
    const password = document.getElementById("password");
    const loginButton = document.getElementById("loginButton");
    loginButton.classList.add("disable");

    let filled = false;
    if(email.value !== "" && password.value !== ""){
        filled = true
    }
    return filled;
}

function activateButton(){
    
    const loginButton = document.getElementById("loginButton");
    const formContainer = document.getElementById("loginForm");

    formContainer.addEventListener("keyup", ()=>{
        let response = checkInputs();
        if(response === true){
            loginButton.removeAttribute("disabled");
            loginButton.classList.remove("disable");
        }
    })
}

checkInputs();
activateButton();