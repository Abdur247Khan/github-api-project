class UI {
    constructor() {
        this.showProfileUI = document.querySelector('#show-profile')

    }

    showProfile(user) {
        console.log(user)
        const profile = `<div class="card card-body">
                            <div class="row">
                                <div class="col-md-3">
                                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                                    <a href="${user.html_url}" class="btn btn-primary btn-block">View Profile</a>
                                </div>
                                <div class="col-md-9">
                                    <span class="badge bg-primary"> 
                                    Public Repos: ${user.public_repos}
                                    </span>
                                    <span class="badge bg-secondary">
                                    Public Gists: ${user.public_gists}
                                    </span>
                                    <span class="badge bg-success">
                                    Followers: ${user.followers}
                                    </span>
                                    <span class="badge bg-info">
                                    Following: ${user.following}
                                    </span>
                                    <br><br>
                                    <ul class="list-group">
                                        <li class="list-group-item">Company:  ${user.company} </li>
                                        <a href="${user.blog}" class="list-group-item">Website/Blog</a>                                        <li class="list-group-item">Location:  ${user.location} </li>
                                        <li class="list-group-item">Member Since:  ${user.created_at} </li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>`

        this.showProfileUI.innerHTML = profile

    }

    showAlert() {
        console.log('error')
        const alert = `
                        <div class="card card-body">
                            <div class="row">
                                <div class="col">
                                    <h1>Sorry, There is no such user on GitHub</h1>
                                </div>
                            </div>
                        </div>`
        this.showProfileUI.innerHTML = alert

    }

    removeUI() {
        console.log('remove UI')
        this.showProfileUI.innerHTML = ''

    }
}

