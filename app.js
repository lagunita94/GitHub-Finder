//init github variable
const github = new Github;
// init ui variable
const ui = new UI;
//search input
const searchUser = document.getElementById('searchUser');
// event listener
searchUser.addEventListener('keyup', (e)=>{
    const user = e.target.value;
    if(user!==""){
        // make github http call  
        github.getUser(user)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                //show alert
                ui.showAlert('user not found', 'alert alert-danger');
            }else{
                //show profile
                ui.showProfile(data.profile);
                //show repos
                ui.showRepos(data.repos);
            }
        })
    }else {
        //clear profile
        ui.clearProfile();
    }
})