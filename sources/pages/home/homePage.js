import { logOut } from "../../scripts/changeWindow.js";
import {setLocalStorage} from "../../scripts/localStorage.js"
import { renderName, renderImage, renderMenu, renderPost } from "../../scripts/render.js";

const verifyLogin = () =>{
    const user = setLocalStorage();

    if(user == ""){
        window.location.replace("/index.html")
    }
}


verifyLogin();
renderImage();

renderPost();
renderName();
renderMenu();
logOut();


