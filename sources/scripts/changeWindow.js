function logOut(){
    const logOutButton = document.getElementById("logOutButton");
    
    logOutButton.addEventListener("click", (e)=>{
        e.preventDefault();
        window.location.replace("/index.html");
    })
}   

function windowRegisterToLogin(){
    const changeToLogin = [...document.querySelectorAll(".redirectToLogin")];

    changeToLogin.forEach(button => {
        button.addEventListener("click", (e)=>{
            e.preventDefault();

            window.location.replace("/index.html");
        })
    })
}

function windowLogintoRegister(){
    const changeToRegister = document.getElementById("redirectRegisterButton");
    
    changeToRegister.addEventListener("click", (e)=>{
        e.preventDefault();

        window.location.replace("/sources/pages/register/register.html")
    })

}

export { logOut, windowRegisterToLogin, windowLogintoRegister};