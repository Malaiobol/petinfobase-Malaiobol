import {register} from "../../scripts/requests.js"

const registerTry = () =>{
    const form = document.querySelector(".form-container")
    const elements = [...form.elements]
    
    form.addEventListener("submit", async (e) => {
        e.preventDefault()
        
        const body = {}
        
        elements.forEach((elem) => {
            if(elem.tagName === "INPUT" && elem.value !== ""){
                body[elem.id] = elem.value
            }
        })

        await register(body);
    })
}

registerTry();
