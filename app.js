const inputForm = document.getElementById("inputForm");
const img = document.getElementById("img");
const userName = document.getElementById("userName");
const repo = document.getElementById("repo");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const bio = document.getElementById("bio");



inputForm.addEventListener("submit", async (event) => {
    event.preventDefault()
    const inputValue = event.target.children[0].value;
    const image = img.children[0];
    const user = userName.children[0];
    const nameOfUser = userName.children[1];
    const linkOfUser = userName.children[2];
    const repoOfUser = repo.children[1];
    const followersOfUser = followers.children[1];
    const followingOfUser = following.children[1];
    const bioOfUser = bio.children[1];

    const API_URL = `https://api.github.com/users/${inputValue}`

    try {
        const response = await axios(API_URL);
        console.log(response);
        image.src = response.data.avatar_url
        user.innerHTML = response.data.name
        nameOfUser.innerHTML = `${response.data.login}`
        linkOfUser.href = response.data.html_url
        repoOfUser.innerHTML = response.data.public_repos
        followersOfUser.innerHTML = response.data.followers;
        followingOfUser.innerHTML = response.data.following
        bioOfUser.innerHTML = response.data.bio


    } catch (erro) {
        // console.error(erro.message);
        alert(`${erro.response.data.message } Please Try Again`)
    }
});