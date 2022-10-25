function toast(title, message){
    const body = document.querySelector("body");

    const container = document.createElement("div");
    container.classList.add("toast-container");
    container.classList.add("flex");
    container.classList.add("a-center");
    container.classList.add("j-flex-start");

    const icon = document.createElement("img");
    icon.classList.add("img_toast");
    icon.alt = `Mensagem de ${title}`

    const titleToast = document.createElement("h3");
    titleToast.innerText = `${title}`;

    if(title === "Sucesso!"){
        container.classList.add("sucess_message");
        icon.src = "/sources/img/checkboxImage.jpg";

        container.classList.add("sucefull_toast")
        titleToast.classList.add("sucefull_phrase");
    } else {
        container.classList.add("error_message");
        icon.src = "/sources/img/errorImage.jpg";
        
        container.classList.add("error_toast");
        titleToast.classList.add("error_phrase");
    }

    const textToast = document.createElement("div");
    
    const span = document.createElement("span");
    span.innerText = message;
    span.classList.add("phrase_toast")

    textToast.append(titleToast, span);
    container.append(icon, textToast);
    body.append(container);
}

export default toast;