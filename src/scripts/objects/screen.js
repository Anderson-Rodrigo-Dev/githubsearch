const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="foto do perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? "Não possui nome cadastrado"}</h1>
                                            <p>${user.bio ?? "não possui bio cadastrada"}</p>
                                        </div>
                                    </div>
                                    <div class="follow">
                                        <div>
                                            <p>👥Followers</p>
                                            <p class="numbers">${user.followers}</p>
                                        </div>
                                        <div>
                                            <p>👥Following</p>
                                            <p class="numbers colored">${user.following}</p>
                                        </div>
                                        
                                    </div>`;

    let repositoriesItens = ''
        user.repositories.forEach((repo) => {
            
            if (repo.language === null) repo.language = "no language";

            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name} <br><br><p>🍴${repo.forks}</p> <p>⭐${repo.stargazers_count}</p> <p>👀${repo.watchers}</p> <p>👨‍💻${repo.language}</p> </a></li>`})

        if (user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                <h2> Repositories</h2>
                <ul>${repositoriesItens}</ul>
            </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado!</h3>"
    }
}

export { screen }