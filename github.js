class Github {
    constructor(){
        this.client_id = '0b50d4f533f272a7b486',
        this.client_secret = 'e55f6273f7d18c67f1e9b44c2515bcdb191eadc8',
        this.repos_count = 5,
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileResponse  = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse  = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}