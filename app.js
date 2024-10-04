const form = document.getElementById("inputForm");


form.addEventListener("submit", async (event) => {
    event.preventDefault()
    
    const value1 = event.target.children[0].value;  
    
    const API_URL = `https://api.github.com/users/${value1}`

    try {
        const response = await axios(API_URL);
        console.log(response);
    } catch (erro) {
        console.log(erro.response.data.message);

    }
    console.log("hello",value1);
    
});

// async function getdata() {

// }

// getdata()
