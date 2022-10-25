export function setLocalStorage(){
    const user = JSON.parse(localStorage.getItem("user")) 
    || ""

    return user;
}