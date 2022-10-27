import { updateOldPost, excludePost } from "./forms.js";
import { getUserInfo, getPosts} from "./requests.js";
import { openModal } from "./modal.js"
 
async function renderName(){
    const user = await getUserInfo();
    const usuaryEmail = document.querySelector(".usuary-email");
    usuaryEmail.innerText = user.email;
}

renderName();

async function renderImage(){
    const user = await getUserInfo();
    const imgProfile = document.querySelector(".profile_img");
    imgProfile.src =  user.avatar
}

function renderMenu(){
    const menu = document.querySelector(".menu-container");
    const imgProfile = document.querySelector(".profile_img");

    imgProfile.addEventListener("click", ()=>{
    menu.classList.toggle("appear-fixed");
    })
}

async function renderPost(){
    const  postsList = await getPosts();
    const postContainer = document.querySelector(".posts-list");

    postsList.forEach(post=> {
        let actualUser = post.user

        const li   = document.createElement("li");
        li.classList.add("post");
        li.classList.add("f-wrap");

        const div1 = document.createElement("div");
        div1.classList.add("post_header");
        div1.classList.add("flex");
        div1.classList.add("a-center");

        const div2 = document.createElement("div");
        div2.classList.add("poster_stack");
        div2.classList.add("flex");
        div2.classList.add("a-center");
        div2.classList.add("j-between");

        const div3 = document.createElement("div");
        div3.classList.add("separator_content");
        div3.innerText = "|";

        const div4 = document.createElement("div");
        div4.classList.add("change-post-container");

        const imgProfile = document.createElement("img");
        imgProfile.classList.add("poster_img_profile");
        imgProfile.src = actualUser.avatar;

        const p1 = document.createElement("p");
        p1.classList.add(".poster_name");
        p1.innerText = actualUser.username;

        const p2 = document.createElement("p");
        p2.classList.add("post_data");
        p2.innerText = post.username;
        p2.innerText = post.createdAt;
        
        const p3 = document.createElement("p");
        p3.classList.add("post_summary");
        p3.innerText = post.content;

        const p4 = document.createElement("p");
        p4.classList.add("see_post");
        p4.innerText = "Acessar publicação";

        const h4 = document.createElement("h4");
        h4.innerText = post.title;
        h4.classList.add("post_title");

        const button1 = document.createElement("button");
        button1.classList.add("white_button");
        button1.classList.add("edit_button");
        button1.innerText = "Editar";
        button1.id = post.id;
        button1.addEventListener("click", async ()=>{
            const postEdit = updateOldPost(post)
            openModal(postEdit);
        })

        const button2 = document.createElement("button");
        button2.classList.add("gray_button");
        button2.innerText = "Excluir";
        button2.addEventListener("click", async ()=>{
            const excludePostId = excludePost(post);
            openModal(excludePostId);
        })
        
        div4.append(button1, button2);
        div2.append(imgProfile, p1);
        div1.append(div2, div3, p2, div4);
        li.append(div1, h4, p3, p4);
        postContainer.append(li);
    });
}
export { renderPost, renderName, renderImage, renderMenu}