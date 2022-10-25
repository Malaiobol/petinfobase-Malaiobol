import { register } from "./requests.js"

const  registerAccount = () =>{
    const form = document.querySelector(".form-container")
    const elements = [...form.elements]
    
    form.addEventListener("submit", async (e) => {
        e.preventDefault()
        
        const body = {}

        elements.forEach((elem) => {
            if(elem.tagname == "INPUT" && elem.value !== ""){
                body[elem.id] = elem.value
            }
        })

        await register(body);
    })
}
registerAccount();