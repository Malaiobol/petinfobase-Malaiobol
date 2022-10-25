import { logOut } from "../../scripts/changeWindow.js";
import {setLocalStorage} from "../../scripts/localStorage.js"
import { getPosts } from "../../scripts/requests.js";

const verifyLogin = () =>{
    const user = setLocalStorage();

    if(user == ""){
        window.location.replace("/index.html")
    }
}




verifyLogin();
logOut();