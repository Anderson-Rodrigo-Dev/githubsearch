const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="user profile picture" />
                                        <div class="data">
                                            <h1>${user.name ?? "Don't have registered name"}</h1>
                                            <p>${user.bio ?? "Don't have registered bio"}</p>
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

            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name} <br><br><p>🍴${repo.forks}</p> <p>⭐${repo.stargazers_count}</p> <p>👀${repo.watchers}</p> <p>👨‍💻${repo.language}</p> </a></li>`
        })

        if (user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                <h2> Repositories</h2>
                <ul>${repositoriesItens}</ul>
            </div>`
        }

    let eventsItens = ''

        user.events.forEach((event) =>{
            eventsItens += `<li><p class="event-url">${event.repo.name}:</p> <p>${event.payload.commits[0].message}</p></li>`
        })

    if (user.events.length > 0){
        this.userProfile.innerHTML += `<div class="events section">
            <h2> Activities</h2>
            <ul>${eventsItens}</ul>
        </div>`
    }else{
        this.userProfile.innerHTML += "<h3>Activities not found!</h3>"
    }

        /* if(user.events.length === 0) this.userProfile.innerHTML += "<h3>Activities not found!</h3>" */

    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>User not found!</h3>"
    }
}

export { screen }