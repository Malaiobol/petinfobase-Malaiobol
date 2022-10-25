import  toast  from "./toast.js";
import { setLocalStorage } from "./localStorage.js";

const baseURL = "http://localhost:3333/";

async function login(body){
    try {

        const request = await fetch(baseURL + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)   
        }) 

        if(request.ok){
            const response = await request.json()
            toast("Sucesso!", "Login realizado com sucesso!")
            localStorage.setItem("userInfo", JSON.stringify(body))
            localStorage.setItem("user", JSON.stringify(response))

            setTimeout(() =>{
            window.location.replace("/sources/pages/home/home.html")
            }, 4000)

        } else{

            toast("Erro!", "Usuário ou senha inválidos")

        }

    } catch(err) {
        toast("Erro!", "Algo deu errado")
        console.log(err)
    }
}

async function register(body){

    try{
      const request = await fetch(baseURL + "users/create", {
        
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)   
        })

        if(request.ok){
            toast("Sucesso", "Cadastro feito com sucesso!")
        
            setTimeout(()=>{

                window.location.replace("/index.html")
            }, 4000)
        } else {
            toast("Erro!", "Algo deu errado!");
        }
    } catch(err){
        console.log(err);
    }
}

async function getPosts(){

    const localStorage = setLocalStorage();

    try{
        const request = await fetch(baseURL + "posts",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            }
        })

        const response = await request.json();
        return response

    } catch(err){
        toast("Erro!", "Algo deu errado!")

        console.log(err)
    }
}

async function getUserInfo(){

    const localStorage = setLocalStorage();

    try{
        const request = await fetch(baseURL + "users/profile", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`
            }
        })
        const userInfo = await request.json(); 
        return userInfo

    } catch(err){
        console.log("Sua requisição de informações deu errada!", err)
    }
}

async function createPost(body){

    const localStorage = setLocalStorage();

    try{
        const request = await fetch(baseURL + "posts/create",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(body)
        })
        const response = await request.json();

        return response
    } catch(err){
        toast("Erro!", "Não foi possível criar seu Post")
    }

}
export { login, register, getPosts, getUserInfo, createPost}