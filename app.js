const github = new Github
const ui = new UI

const searchUserUI = document.querySelector('#search-user')

searchUserUI.addEventListener('keyup', fetchData)

function fetchData(e) {
    e.preventDefault()

    let user = searchUserUI.value

    if (user !== '') {
        github.getUser(user)
            .then(data => {
                if (data.profile.message !== 'Not Found') {
                    // Show Profile
                    ui.showProfile(data.profile)
                }
                else {
                    // Show Alert

                    ui.showAlert();
                }
            })
    } else {
        // Clear UI
        ui.removeUI()
    }
}