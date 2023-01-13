class Github {
    constructor() {
        this.client_id = '0689e375e6b036eea21e'
        this.client_secret = '61f612d0d2465a2f5c72cc5a4f6ae6d00aade1a1'
    }

    async getUser(user) {

        const response = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profile = await response.json()

        return {
            profile: profile
        }
    }
}