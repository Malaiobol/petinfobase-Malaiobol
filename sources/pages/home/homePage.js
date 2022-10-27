import { logOut } from "../../scripts/changeWindow.js";
import { setLocalStorage } from "../../scripts/localStorage.js"
import { renderName, renderImage, renderMenu, renderPost } from "../../scripts/render.js";
import { openModal } from "../../scripts/modal.js";
import { generatePost } from "../../scripts/forms.js"; 

const verifyLogin = () =>{
    const user = setLocalStorage();

    if(user == ""){
        window.location.replace("/index.html")
    }
}

function createModalAppear(){
    const createPublication = document.querySelector("#createPublication");

    createPublication.addEventListener("click", (e)=>{
        e.preventDefault();
        openModal(generatePost());
    })
}

verifyLogin();

renderImage();
renderPost();
renderName();
renderMenu();

createModalAppear();

logOut();