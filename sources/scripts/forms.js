import { openModal } from "./modal.js";
import { renderPost } from "./render.js";
import { createPost, updatePost, deletePost } from "./requests.js";

const generatePost = () => {
    const form = document.createElement("form");
    form.classList.add("modal-form")
    form.insertAdjacentHTML("afterbegin",  ` 
        <h3 class="modal_title">Criando novo post</h3>
        <div class="title-input-container f-wrap">
            <label for="title" class="title_label">Título do post</label>
            <input type="text" name="title" required class="post_modal_title" placeholder="Digite o título aqui..."> 
        </div>
        <div class="content-input-container f-wrap">
            <label for="content" class="content_post_label">Conteúdo do post</label>
            <input type="text" name="content" required class="content_modal_post" placeholder="Digite o conteúdo do seu post ">
        </div>
        <div class="modal-buttons-container">
            <button class="white_button cancelModal">Cancelar</button>
            <button class="blue_button publishPost" type="submit">Publicar</button>
        </div>
    `)

    form.addEventListener("submit", async ()=>{
        const form = document.querySelector(".modal-form");
        const backgroundModal = document.querySelector(".background-modal");
        const elements = [...form.elements];
        const body = {};

        elements.forEach(({name, value})=>{
            if(name){
                body[name] = value;
            }
        })

        backgroundModal.remove();
        await  createPost(body);
        await renderPost();   
    })
    return form
}

// const viewFullPost = ({title, content, id}) => {
//     const form = document.createElement("form");
//     form.classList.add("modal-form");

//     form.insertAdjacentHTML("afterbegin",  ` 
//         <h3 class="modal_title">Modo post</h3>

//         <div class="title-input-container f-wrap">
//             <label for="title" class="title_label">Título do post</label>
//             <input type="text" name="title" required class="post_modal_title" value="${title}"> 
//         </div>

//         <div class="content-input-container f-wrap">
//             <label for="content" class="content_post_label">Conteúdo do post</label>
//             <input type="text" name="content" required class="content_modal_post" value="${content}">
//         </div>

//         <div class="modal-buttons-container">
//             <button class="white_button cancelModal">Cancelar</button>
//             <button class="blue_button publishPost" type="submit">Salvar Alterações</button>
//         </div>
//     `)

//     return form
// }

const updateOldPost = ({title, content, id}) => {
    const form = document.createElement("form");
    form.classList.add("modal-form");

    form.insertAdjacentHTML("afterbegin",  ` 
        <h3 class="modal_title">Modo post</h3>

        <div class="title-input-container f-wrap">
            <label for="title" class="title_label">Título do post</label>
            <input type="text" name="title" required class="post_modal_title" value="${title}"> 
        </div>

        <div class="content-input-container f-wrap">
            <label for="content" class="content_post_label">Conteúdo do post</label>
            <input type="text" name="content" required class="content_modal_post" value="${content}">
        </div>

        <div class="modal-buttons-container">
            <button class="white_button cancelModal">Cancelar</button>
            <button class="blue_button publishPost" type="submit">Salvar Alterações</button>
        </div>
    `)

    form.addEventListener("submit", async ()=> {
        const form = document.querySelector(".modal-form");
        const backgroundModal = document.querySelector(".background-modal");
        const elements = [...form.elements];
        const body = {};

        elements.forEach(({name, value})=>{
            if(name){
                body[name] = value;
            }
        })

        backgroundModal.remove();
        await updatePost(body, id);
        await renderPost();   
    })
    return form
}

const excludePost = ({id})=>{
    const form = document.createElement("form");
    form.classList.add("modal-form");

    form.insertAdjacentHTML("afterbegin", `
    <h3 class="modal_title">Confirmação de Exclusão</h3>

    <div class="modal-phrase-container">
        <h2 class="confirmation-question">Tem certeza que deseja excluir esse Post?</h2>
        <p class="confirmation-phrase"> Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir</p>
    </div>

    <div class="modal-exclude-buttons-container">
        <button class="white_button cancelModal">Cancelar</button>
        <button class="red_button excludePost" type="submit">Excluir Post</button>
    </div>
    `)

    form.addEventListener("submit", async ()=>{
        await deletePost(id);
        await renderPost();
    })

    return form
}

export { generatePost, updateOldPost, excludePost}