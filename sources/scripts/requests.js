import  toast  from "./toast.js";
import { setLocalStorage } from "./localStorage.js";
const baseURL = "http://localhost:3333/";

async function login(body){
    try {
        const request = await fetch(baseURL + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)   
        }) 
        if(request.ok){
            const response = await request.json()

            toast("Sucesso!", "Login realizado com sucesso!")
            localStorage.setItem("user", response.token)

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
        
            setTimeout(()=>{
                window.location.replace("/index.html")
            }, 4000)

            toast("Sucesso!", "Usuário criado com sucesso");
        } else {
            toast("Erro!", "Algo deu errado!");
        }
    } catch(err){
        toast("Erro!", "Algo deu errado!")
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
                Authorization: `Bearer ${localStorage}`
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
                Authorization: `Bearer ${localStorage}`
            }
        })
        const  userInfo = await request.json(); 
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
                Authorization: `Bearer ${localStorage}`
            },
            body: JSON.stringify(body)
        })
        const response = await request.json();
        return response
    } catch(err){
        toast("Erro!", "Não foi possível criar seu Post")
        console.log(err);
    }
}

async function updatePost(body, idPost){
    const localStorage = setLocalStorage();
    try{
        const request = await fetch(baseURL + "posts/" + idPost, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage}`
            },
            body: JSON.stringify(body)
        })
        toast("Sucesso!", "Seu post foi alterado com sucesso!")
        const  response = await request.json();
        return response

    } catch(err){
        toast("Erro!", "Não foi possível alterar seu Post")
        console.log(err);
    }
}

async function deletePost(idPost){
    const localStorage = setLocalStorage();
    try{
        const request = await fetch(baseURL + "posts/" + idPost, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage}`
            }
        })
        toast("Sucesso!", "Seu post foi alterado com sucesso!")
    } catch(err){
        toast("Erro!", "Não foi possível alterar seu Post")
        console.log(err);
    }
}

export { login, register, getPosts, getUserInfo, createPost, updatePost, deletePost}