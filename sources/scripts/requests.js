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

        const response = await request.json()

        console.log(response)

    } catch(err){
        console.log(err)
    }
}

export { login }