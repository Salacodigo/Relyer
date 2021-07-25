
const loginButton = document.getElementsByClassName('login')[0]
let logged = false

if (localStorage.getItem('token')) {

    let language = localStorage.getItem('language')

    if (language == "en") {
        loginButton.innerHTML = 'Logout'
    } else {
        loginButton.innerHTML = 'Cerrar sesión'
    }

    logged = true
}

loginButton.addEventListener('click', () => {

    let language = localStorage.getItem('language')

    if (logged === true) {

        event.preventDefault()
        localStorage.setItem('token', '')

        if (language === "en") {
            loginButton.innerHTML = "Login/Register"
        } else {
            loginButton.innerHTML = "Iniciar sesión"
        }

        logged = false

    }
})
