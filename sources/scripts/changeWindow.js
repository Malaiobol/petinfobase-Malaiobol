function logOut(){
    const logOutButton = document.getElementById("logOutButton");
    
    logOutButton.addEventListener("click", (e)=>{
        e.preventDefault();
        window.location.replace("http://127.0.0.1:5500/index.html");
    })
}   

function windowRegisterToLogin(){
    const changeToLogin = [...document.querySelectorAll(".redirectToLogin")];

    changeToLogin.forEach(button => {
        console.log(button);
        button.addEventListener("click", (e)=>{
            e.preventDefault();
            console.log(button);
            window.location.replace("http://127.0.0.1:5500/index.html");
        })
    })
}

function windowLogintoRegister(){
    const changeToRegister = document.getElementById("redirectRegisterButton");
    
    changeToRegister.addEventListener("click", (e)=>{
        e.preventDefault();

        window.location.replace("http://127.0.0.1:5500/sources/pages/register/index.html")
    })

}

export { logOut, windowRegisterToLogin, windowLogintoRegister};