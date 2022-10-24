async function renderPosts(URLposts){
    await fetch(URLposts)
    .then(resp)
    const arrayPosts = resp.json()
    .then(arrayPosts.forEach((post) => {
        createPost(post);
    }))
}

function createPost(post){
    const postList = document.querySelector(".posts-list");

    const li   = document.createElement("li");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    const imgProfile = document.createElement("img");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const h4 = document.createElement("h4");
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    
    img.src = post.avatar;
    p1.innerText = post.username;
    p2.innerText = post.username;
    button1.innerText = "Editar";
    button2.innerText = "Excluir";
    h4.innerText = post.title;
    p3.innerText = post.content;
    p4.innerText = "Acessar publicação";
    div3.innerText = "|";

    li.classList.add("post");
    li.classList.add("f-wrap");

    div1.classList.add("post_header");
    div1.classList.add("flex");
    div1.classList.add("a-center");

    div2.classList.add("poster_stack");
    div2.classList.add("flex");
    div2.classList.add("a-center");
    div2.classList.add("j-between");
    div3.classList.add("separator_content");
    div4.classList.add("change-post-container");

    imgProfile.classList.add("poster_img_profile");

    p1.classList.add("poster_name");
    p2.classList.add("post_data");
    p3.classList.add("post_summary");
    p4.classList.add("see_post");

    button1.classList.add("white_button");
    button2.classList.add("gray_button");

    div4.append(button1, button2);
    div2.append(imgProfile, p1);
    div1.append(div2, div3, p2, div4);
    li.append(div1, h4, p3, p4);
    postList.append(li);
}

function renderProfile(profile){
    const imgProfile = document.querySelector("img_profile");

    imgProfile.src = profile.avatar;
}