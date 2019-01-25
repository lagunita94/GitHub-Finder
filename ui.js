class UI {
    constructor (){
        this.profile = document.querySelector('.profile');
    }
    // show user profile
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" class="img-fluid mb-2">
                    <a class="btn btn-primary btn-block mb-2" href="${user.html_url}" target="_blank">View Profile</a>
                </div>
                <div class = "col-md-9">
                    <span class="badge badge-primary">Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Profile Name: ${user.name}</li>
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3 mt-2">Latest Repos</h3>
        <div id="repos"></div>
        `
    }
    //show user repos
    showRepos(repos){
        let output = "";
        repos.forEach(repo => {
            output+= `
                <div class='card card-body'>
                    <div class='row'>
                        <div class='col-md-6'>
                            <a href='${repo.html_url}' target='_blank'>${repo.name}</a>
                        </div>
                        <div class='col-md-6'>
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `
        });
        console.log(output);
        document.getElementById('repos').innerHTML=output;
    }
    // show alert message
    showAlert(msg, clas){
        //clear remaining alert
        this.clearAlert();
        //create div
        const alert = document.createElement('div');
        // add class name
        alert.className = clas;
        //add text
        alert.appendChild(document.createTextNode(msg));
        //get parent
        const container = document.querySelector('.searchContainer');
        //get search
        const search = document.querySelector('.search');
        //insert element
        container.insertBefore(alert, search);
        //time out
        setTimeout(this.clearAlert,3000);
    }
    // clear profile html
    clearProfile(){
        this.profile.innerHTML = ""
    }
    //clear alert
    clearAlert(){
        const div = document.querySelector('.alert');

        if(div){
            div.remove();
        }
    }
}